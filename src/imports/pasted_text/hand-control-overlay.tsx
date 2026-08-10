// src/components/HandControlOverlay.tsx

import { useEffect, useRef, useState } from 'react';
import { Camera, Hand, MousePointer2, Power } from 'lucide-react';
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands';
import { Camera as MediaPipeCamera } from '@mediapipe/camera_utils';

type GestureMode = 'idle' | 'move' | 'click' | 'scroll';

export function HandControlOverlay() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [gesture, setGesture] = useState<GestureMode>('idle');
  const [cameraReady, setCameraReady] = useState(false);

  const lastClickTime = useRef(0);
  const lastY = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let camera: MediaPipeCamera | null = null;
    let hands: Hands | null = null;

    const start = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      hands = new Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        },
      });

      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.72,
        minTrackingConfidence: 0.72,
      });

      hands.onResults((results) => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const cursor = cursorRef.current;

        if (!canvas || !video || !cursor) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = video.videoWidth || 320;
        canvas.height = video.videoHeight || 240;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
          setGesture('idle');
          return;
        }

        const landmarks = results.multiHandLandmarks[0];

        drawHand(ctx, landmarks, canvas.width, canvas.height);

        const indexTip = landmarks[8];
        const thumbTip = landmarks[4];
        const middleTip = landmarks[12];
        const wrist = landmarks[0];

        const screenX = window.innerWidth - indexTip.x * window.innerWidth;
        const screenY = indexTip.y * window.innerHeight;

        cursor.style.transform = `translate(${screenX}px, ${screenY}px)`;

        const pinchDistance = distance(indexTip, thumbTip);
        const middleDistance = distance(indexTip, middleTip);

        const now = Date.now();

        if (pinchDistance < 0.045) {
          setGesture('click');

          if (now - lastClickTime.current > 650) {
            lastClickTime.current = now;
            triggerClick(screenX, screenY);
          }

          return;
        }

        if (middleDistance < 0.055) {
          setGesture('scroll');

          if (lastY.current !== null) {
            const deltaY = (indexTip.y - lastY.current) * 900;

            if (Math.abs(deltaY) > 8) {
              window.scrollBy({
                top: deltaY,
                behavior: 'smooth',
              });
            }
          }

          lastY.current = indexTip.y;
          return;
        }

        setGesture('move');
        lastY.current = indexTip.y;

        if (lastX.current !== null) {
          const deltaX = indexTip.x - lastX.current;

          if (Math.abs(deltaX) > 0.16 && now - lastClickTime.current > 1000) {
            lastClickTime.current = now;

            if (deltaX > 0) {
              goToPreviousSection();
            } else {
              goToNextSection();
            }
          }
        }

        lastX.current = indexTip.x;
      });

      camera = new MediaPipeCamera(videoRef.current, {
        onFrame: async () => {
          if (hands && videoRef.current) {
            await hands.send({ image: videoRef.current });
          }
        },
        width: 640,
        height: 480,
      });

      await camera.start();
      setCameraReady(true);
    };

    start();

    return () => {
      setCameraReady(false);
      camera?.stop();
      hands?.close();
    };
  }, [enabled]);

  return (
    <>
      <button
        className={`hand-toggle ${enabled ? 'active' : ''}`}
        onClick={() => setEnabled((prev) => !prev)}
        aria-label="Hand control"
      >
        {enabled ? <Power size={20} /> : <Hand size={20} />}
        <span>{enabled ? 'Hand Control ON' : 'Hand Control'}</span>
      </button>

      {enabled && (
        <div className="hand-control-layer">
          <video ref={videoRef} className="hand-video" playsInline muted />
          <canvas ref={canvasRef} className="hand-canvas" />

          <div ref={cursorRef} className={`virtual-cursor ${gesture}`}>
            <MousePointer2 size={22} />
          </div>

          <div className="hand-status">
            <Camera size={16} />
            <span>{cameraReady ? 'Camera active' : 'Starting camera...'}</span>
            <strong>{gesture.toUpperCase()}</strong>
          </div>

          <div className="hand-help">
            <p><b>Index finger</b> = cursor</p>
            <p><b>Thumb + index</b> = click</p>
            <p><b>Index + middle</b> = scroll</p>
            <p><b>Swipe left/right</b> = change section</p>
          </div>
        </div>
      )}
    </>
  );
}

function distance(a: any, b: any) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = (a.z || 0) - (b.z || 0);
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function triggerClick(x: number, y: number) {
  const cursorElements = document.elementsFromPoint(x, y);

  const clickable = cursorElements.find((el) => {
    const tag = el.tagName.toLowerCase();
    return (
      tag === 'a' ||
      tag === 'button' ||
      el.getAttribute('role') === 'button' ||
      el.classList.contains('clickable')
    );
  }) as HTMLElement | undefined;

  if (clickable) {
    clickable.click();
  }
}

function goToNextSection() {
  const sections = ['home', 'portfolio', 'services', 'pricing', 'design-advertising', 'investors', 'about'];
  const current = window.location.hash.replace('#', '') || 'home';
  const index = sections.indexOf(current);
  const next = sections[index + 1] || sections[0];
  window.location.hash = next;
}

function goToPreviousSection() {
  const sections = ['home', 'portfolio', 'services', 'pricing', 'design-advertising', 'investors', 'about'];
  const current = window.location.hash.replace('#', '') || 'home';
  const index = sections.indexOf(current);
  const previous = sections[index - 1] || sections[sections.length - 1];
  window.location.hash = previous;
}

function drawHand(ctx: CanvasRenderingContext2D, landmarks: any[], width: number, height: number) {
  ctx.save();

  HAND_CONNECTIONS.forEach(([start, end]) => {
    const a = landmarks[start];
    const b = landmarks[end];

    ctx.beginPath();
    ctx.moveTo((1 - a.x) * width, a.y * height);
    ctx.lineTo((1 - b.x) * width, b.y * height);
    ctx.strokeStyle = 'rgba(34, 211, 238, 0.8)';
    ctx.lineWidth = 3;
    ctx.stroke();
  });

  landmarks.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc((1 - point.x) * width, point.y * height, index === 8 ? 7 : 4, 0, Math.PI * 2);
    ctx.fillStyle = index === 8 ? '#f472b6' : '#22d3ee';
    ctx.fill();
  });

  ctx.restore();
}