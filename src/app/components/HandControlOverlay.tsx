import { useEffect, useRef, useState } from 'react';
import { CameraIcon, X, MousePointer2, ScrollText, ArrowLeftRight } from 'lucide-react';

declare global {
  interface Window { Hands: any; Camera: any; }
}

type GestureMode = 'idle' | 'move' | 'click' | 'scroll' | 'swipe';

const SECTIONS = [
  'home','portfolio','services','pricing',
  'design-advertising','investors','about','contact','client-portal'
];

// Tuning constants
const SMOOTH        = 0.18;   // cursor lerp (0=instant, 1=never moves) — lower = more responsive
const DEAD_ZONE     = 0.008;  // min normalised delta before cursor moves
const PINCH_ON      = 0.052;  // pinch threshold (normalised dist index-thumb)
const PINCH_OFF     = 0.075;  // hysteresis — release needs larger gap
const PINCH_HOLD_MS = 90;     // ms to hold pinch before firing click
const SCROLL_ON     = 0.065;  // index-middle dist for scroll mode
const SCROLL_SCALE  = 1800;   // pixels per normalised unit
const SWIPE_VEL     = 0.018;  // min velocity (normalised/frame) to trigger swipe
const SWIPE_COOL    = 1400;   // ms between swipes

const CONNECTIONS: [number,number][] = [
  [0,1],[1,2],[2,3],[3,4],
  [0,5],[5,6],[6,7],[7,8],
  [5,9],[9,10],[10,11],[11,12],
  [9,13],[13,14],[14,15],[15,16],
  [13,17],[17,18],[18,19],[19,20],
  [0,17]
];

export function HandControlOverlay() {
  const videoRef   = useRef<HTMLVideoElement|null>(null);
  const canvasRef  = useRef<HTMLCanvasElement|null>(null);
  const cursorRef  = useRef<HTMLDivElement|null>(null);
  const isMounted  = useRef(true);
  const cameraInst = useRef<any>(null);
  const handsInst  = useRef<any>(null);

  // smooth cursor position (normalised)
  const smX = useRef(0.5);
  const smY = useRef(0.5);

  // gesture tracking
  const pinchStartTime = useRef(0);
  const isPinching     = useRef(false);
  const clickFired     = useRef(false);
  const lastPrevY      = useRef<number|null>(null);
  const prevLmX        = useRef<number|null>(null);
  const swipeCool      = useRef(0);
  const frameCount     = useRef(0);

  const [status, setStatus]     = useState<'idle'|'loading'|'ready'|'error'>('idle');
  const [gesture, setGesture]   = useState<GestureMode>('idle');
  const [errMsg, setErrMsg]     = useState('');
  const [showCanvas, setShowCanvas] = useState(false);

  /* ── utilities ───────────────────────────────────── */
  const dist2d = (a: any, b: any) =>
    Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2);

  const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

  function spawnRipple(x: number, y: number) {
    const r = document.createElement('div');
    r.className = 'hand-click-ripple';
    r.style.left = `${x}px`;
    r.style.top  = `${y}px`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 600);
  }

  function fireClick(sx: number, sy: number) {
    const els = document.elementsFromPoint(sx, sy);
    const el  = els.find(e => {
      const t = e.tagName.toLowerCase();
      return t === 'a' || t === 'button' || e.getAttribute('role') === 'button'
        || (e as HTMLElement).style?.cursor === 'pointer';
    }) as HTMLElement | undefined;
    el?.click();
    spawnRipple(sx, sy);
  }

  function goSection(dir: 'next'|'prev') {
    const cur = window.location.hash.replace('#','') || 'home';
    const i   = SECTIONS.indexOf(cur);
    const n   = dir === 'next'
      ? SECTIONS[(i+1) % SECTIONS.length]
      : SECTIONS[(i-1+SECTIONS.length) % SECTIONS.length];
    window.location.hash = n;
  }

  function drawHand(ctx: CanvasRenderingContext2D, lm: any[], w: number, h: number) {
    ctx.save();
    CONNECTIONS.forEach(([s, e]) => {
      const a = lm[s], b = lm[e];
      ctx.beginPath();
      ctx.moveTo((1-a.x)*w, a.y*h);
      ctx.lineTo((1-b.x)*w, b.y*h);
      ctx.strokeStyle = 'rgba(34,211,238,0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
    lm.forEach((pt, i) => {
      ctx.beginPath();
      ctx.arc((1-pt.x)*w, pt.y*h, i===8 ? 7 : i===4 ? 6 : 3.5, 0, Math.PI*2);
      ctx.fillStyle = i===8 ? '#f472b6' : i===4 ? '#a78bfa' : '#22d3ee';
      ctx.fill();
    });
    ctx.restore();
  }

  /* ── main results handler ────────────────────────── */
  function onResults(results: any) {
    if (!isMounted.current) return;
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    const video = videoRef.current!;
    const ctx   = canvas.getContext('2d')!;
    canvas.width  = video.videoWidth  || 320;
    canvas.height = video.videoHeight || 240;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    frameCount.current++;

    if (!results.multiHandLandmarks?.length) {
      cursor.style.opacity = '0';
      setGesture('idle');
      isPinching.current   = false;
      clickFired.current   = false;
      lastPrevY.current    = null;
      prevLmX.current      = null;
      return;
    }

    const lm        = results.multiHandLandmarks[0];
    drawHand(ctx, lm, canvas.width, canvas.height);

    const indexTip  = lm[8];
    const thumbTip  = lm[4];
    const middleTip = lm[12];
    const now       = Date.now();

    // ── Smooth cursor (lerp toward index tip) ──
    const rawX = indexTip.x;
    const rawY = indexTip.y;

    const dxN = rawX - smX.current;
    const dyN = rawY - smY.current;

    // only move if outside dead zone
    if (Math.abs(dxN) > DEAD_ZONE) smX.current = lerp(smX.current, rawX, SMOOTH);
    if (Math.abs(dyN) > DEAD_ZONE) smY.current = lerp(smY.current, rawY, SMOOTH);

    const sx = (1 - smX.current) * window.innerWidth;
    const sy = smY.current * window.innerHeight;

    cursor.style.opacity = '1';
    cursor.style.left    = `${sx}px`;
    cursor.style.top     = `${sy}px`;

    // ── Gesture detection ──
    const pinchD  = dist2d(indexTip, thumbTip);
    const scrollD = dist2d(indexTip, middleTip);

    // PINCH → CLICK (hold-based)
    if (pinchD < PINCH_ON) {
      if (!isPinching.current) {
        isPinching.current  = true;
        pinchStartTime.current = now;
        clickFired.current  = false;
      }
      cursor.classList.add('hand-cursor--clicking');
      setGesture('click');

      if (!clickFired.current && now - pinchStartTime.current >= PINCH_HOLD_MS) {
        clickFired.current = true;
        fireClick(sx, sy);
      }

      lastPrevY.current = null;
      prevLmX.current   = null;
      return;
    }

    if (pinchD > PINCH_OFF) {
      isPinching.current  = false;
      clickFired.current  = false;
    }
    cursor.classList.remove('hand-cursor--clicking');

    // SCROLL (index + middle together)
    if (scrollD < SCROLL_ON) {
      setGesture('scroll');
      if (lastPrevY.current !== null) {
        const delta = (indexTip.y - lastPrevY.current) * SCROLL_SCALE;
        if (Math.abs(delta) > 2) {
          window.scrollBy({ top: delta, behavior: 'auto' });
        }
      }
      lastPrevY.current = indexTip.y;
      prevLmX.current   = null;
      return;
    }
    lastPrevY.current = null;

    // SWIPE (velocity-based horizontal movement)
    if (prevLmX.current !== null) {
      const velX = indexTip.x - prevLmX.current; // per-frame velocity
      if (Math.abs(velX) > SWIPE_VEL && now > swipeCool.current) {
        swipeCool.current = now + SWIPE_COOL;
        setGesture('swipe');
        goSection(velX > 0 ? 'prev' : 'next');
        prevLmX.current = indexTip.x;
        return;
      }
    }
    prevLmX.current = indexTip.x;

    setGesture('move');
  }

  /* ── start / stop ────────────────────────────────── */
  const start = async () => {
    setStatus('loading');
    setErrMsg('');
    try {
      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: 'user', frameRate: { ideal: 30 } },
          audio: false
        });
      } catch {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }

      if (!isMounted.current) { stream.getTracks().forEach(t => t.stop()); return; }

      const video = videoRef.current!;
      video.srcObject = stream;
      await new Promise<void>((res, rej) => {
        video.onloadedmetadata = () => video.play().then(res).catch(rej);
        setTimeout(() => rej(new Error('timeout')), 8000);
      });

      await loadScripts();
      if (!isMounted.current) return;

      handsInst.current = new window.Hands({
        locateFile: (f: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`,
      });
      handsInst.current.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7,
      });
      handsInst.current.onResults(onResults);

      cameraInst.current = new window.Camera(video, {
        onFrame: async () => {
          if (handsInst.current && isMounted.current) {
            await handsInst.current.send({ image: video });
          }
        },
        width: 640, height: 480,
      });
      await cameraInst.current.start();

      if (!isMounted.current) return;
      setStatus('ready');
      setShowCanvas(true);

    } catch (err: any) {
      if (!isMounted.current) return;
      setStatus('error');
      if (err.name === 'NotAllowedError')    setErrMsg('Camera access denied. Allow camera in browser settings.');
      else if (err.name === 'NotFoundError') setErrMsg('No camera found on this device.');
      else if (err.name === 'NotReadableError') setErrMsg('Camera used by another app. Close Zoom/Teams and retry.');
      else setErrMsg(`Error: ${err.message}`);
    }
  };

  const stop = () => {
    setStatus('idle');
    setGesture('idle');
    setErrMsg('');
    setShowCanvas(false);
    try { cameraInst.current?.stop(); } catch {}
    try { handsInst.current?.close(); } catch {}
    cameraInst.current = null;
    handsInst.current  = null;
    const v = videoRef.current;
    if (v?.srcObject) {
      try { (v.srcObject as MediaStream).getTracks().forEach(t => t.stop()); } catch {}
      v.srcObject = null;
    }
  };

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; stop(); };
  }, []);

  /* ── render ──────────────────────────────────────── */
  const gestureColor = {
    idle:   '#22d3ee',
    move:   '#22d3ee',
    click:  '#f472b6',
    scroll: '#a78bfa',
    swipe:  '#34d399',
  }[gesture];

  return (
    <>
      <video ref={videoRef} autoPlay playsInline muted style={{ display:'none' }} />

      {/* Hand skeleton preview — bottom left */}
      {showCanvas && (
        <canvas ref={canvasRef} style={{
          position:'fixed', bottom:16, left:16, zIndex:9998,
          width:160, height:120, borderRadius:12,
          border:'1px solid rgba(34,211,238,0.3)',
          background:'rgba(2,6,23,0.75)',
          pointerEvents:'none',
          transform:'scaleX(-1)',
          boxShadow:'0 0 20px rgba(34,211,238,0.15)',
        }} />
      )}

      {/* Virtual cursor */}
      <div ref={cursorRef} className="hand-cursor" style={{
        opacity:0, position:'fixed', zIndex:9999, pointerEvents:'none',
        transform:'translate(-50%,-50%)',
        willChange:'left,top',
      }}>
        <div style={{
          width:36, height:36, borderRadius:'50%',
          border:`2.5px solid ${gestureColor}`,
          background:`${gestureColor}18`,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:`0 0 18px ${gestureColor}88`,
          transition:'border-color 0.1s, background 0.1s, box-shadow 0.1s',
        }}>
          {gesture === 'click'  && <span style={{fontSize:16}}>🤏</span>}
          {gesture === 'scroll' && <ScrollText size={16} color={gestureColor} />}
          {gesture === 'swipe'  && <ArrowLeftRight size={16} color={gestureColor} />}
          {(gesture === 'move' || gesture === 'idle') && <MousePointer2 size={16} color={gestureColor} />}
        </div>
      </div>

      {/* Enable button */}
      {status === 'idle' && (
        <div className="hand-control-wrapper">
          <button onClick={start} className="hand-control-enable-btn" title="Enable hand control">
            <CameraIcon className="w-5 h-5" />
            <span>Hand Control</span>
          </button>
        </div>
      )}

      {/* Loading */}
      {status === 'loading' && (
        <div style={{position:'fixed', bottom:28, right:28, zIndex:9997}}>
          <div className="status-badge status-loading">
            <div className="loading-spinner" />
            <span>Starting…</span>
            <button onClick={stop} className="status-close-btn"><X className="w-4 h-4" /></button>
          </div>
        </div>
      )}

      {/* Ready HUD */}
      {status === 'ready' && (
        <div style={{
          position:'fixed', bottom: showCanvas ? 148 : 16, left:16,
          zIndex:9997, display:'flex', flexDirection:'column', gap:8
        }}>
          <div className={`status-badge ${gesture !== 'idle' ? 'status-active' : 'status-waiting'}`}>
            {gesture !== 'idle' && <div className="status-dot" />}
            <span style={{fontSize:12}}>
              {gesture === 'idle'   && '👋 Show hand'}
              {gesture === 'move'   && '👆 Moving'}
              {gesture === 'click'  && '🤏 Click!'}
              {gesture === 'scroll' && '📜 Scroll'}
              {gesture === 'swipe'  && '↔ Navigate'}
            </span>
            <button onClick={stop} className="status-close-btn"><X className="w-3 h-3" /></button>
          </div>

          <div style={{
            background:'rgba(2,6,23,0.85)', border:'1px solid rgba(34,211,238,0.2)',
            borderRadius:10, padding:'7px 10px', fontSize:11,
            color:'rgba(203,213,225,0.8)', display:'flex', flexDirection:'column',
            gap:3, backdropFilter:'blur(12px)',
          }}>
            <div>👆 Показалец → <b>курсор</b></div>
            <div>🤏 Прищипни → <b>клик</b></div>
            <div>✌️ Два пръста → <b>скрол</b></div>
            <div>✋ Swipe ← / → → <b>навигация</b></div>
          </div>
        </div>
      )}

      {/* Error modal */}
      {status === 'error' && (
        <div style={{
          position:'fixed', inset:0, zIndex:10000,
          display:'flex', alignItems:'center', justifyContent:'center',
          background:'rgba(0,0,0,0.65)',
        }}>
          <div style={{
            background:'#0f172a', border:'1px solid rgba(239,68,68,0.4)',
            borderRadius:20, padding:32, maxWidth:380, textAlign:'center',
          }}>
            <div style={{fontSize:42, marginBottom:12}}>🚫</div>
            <h3 style={{color:'#f1f5f9', fontSize:18, fontWeight:700, marginBottom:8}}>Camera Error</h3>
            <p style={{color:'#94a3b8', fontSize:14, marginBottom:20}}>{errMsg}</p>
            <button onClick={stop} style={{
              padding:'10px 28px', borderRadius:999,
              background:'linear-gradient(135deg,#06b6d4,#7c3aed)',
              color:'#fff', fontWeight:700, fontSize:14,
            }}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

/* ── CDN loader ──────────────────────────────────── */
function loadScripts(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Hands && window.Camera) { resolve(); return; }

    if (document.querySelector('script[src*="mediapipe/hands"]')) {
      const iv = setInterval(() => {
        if (window.Hands && window.Camera) { clearInterval(iv); resolve(); }
      }, 100);
      setTimeout(() => { clearInterval(iv); reject(new Error('MediaPipe timeout')); }, 20000);
      return;
    }

    const s1 = document.createElement('script');
    s1.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js';
    s1.crossOrigin = 'anonymous';
    s1.onload = () => {
      const s2 = document.createElement('script');
      s2.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js';
      s2.crossOrigin = 'anonymous';
      s2.onload = () => setTimeout(resolve, 400);
      s2.onerror = () => reject(new Error('Failed to load camera_utils'));
      document.head.appendChild(s2);
    };
    s1.onerror = () => reject(new Error('Failed to load hands.js'));
    document.head.appendChild(s1);
  });
}
