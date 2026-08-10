import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function BackgroundVideoPlayer() {
  const playerRef = useRef<any>(null);
  const currentVideoIndexRef = useRef(0);
  const apiLoadedRef = useRef(false);
  const playerReadyRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingActionRef = useRef<(() => void) | null>(null);

  // Robot video — loops continuously
  const videoIds = ['NquwUI9RYEw'];

  useEffect(() => {
    // Wait for DOM to be ready
    if (!containerRef.current) return;

    // Check if API already loaded
    if (window.YT && window.YT.Player) {
      // Small delay to ensure DOM is ready
      setTimeout(() => initPlayer(), 100);
      return;
    }

    // Load YouTube API only once
    if (!apiLoadedRef.current) {
      apiLoadedRef.current = true;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        // Small delay to ensure DOM is ready
        setTimeout(() => initPlayer(), 100);
      };
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerReadyRef.current = false;
          playerRef.current.destroy();
          playerRef.current = null;
        } catch (error) {
          console.error('Error destroying player:', error);
        }
      }
    };
  }, []);

  const initPlayer = () => {
    if (playerRef.current) return; // Already initialized
    
    // Check if element exists in DOM
    const playerElement = document.getElementById('youtube-player');
    if (!playerElement) {
      console.error('YouTube player element not found in DOM');
      return;
    }

    try {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoIds[0],
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          loop: 1,
          playlist: videoIds[0],
          origin: window.location.origin
        },
        events: {
          onReady: (event: any) => {
            // Wait a bit to ensure player is fully attached to DOM
            setTimeout(() => {
              // Mark player as ready FIRST
              playerReadyRef.current = true;
              
              try {
                // Verify player and methods exist before calling
                if (event.target && typeof event.target.playVideo === 'function') {
                  event.target.playVideo();
                }
                if (event.target && typeof event.target.setVolume === 'function') {
                  event.target.setVolume(0);
                }
              } catch (error) {
                console.error('Error starting video:', error);
              }

              // Execute any pending actions
              if (pendingActionRef.current) {
                const action = pendingActionRef.current;
                pendingActionRef.current = null;
                setTimeout(() => action(), 100);
              }
            }, 200); // Wait 200ms for DOM to be fully ready
          },
          onStateChange: (event: any) => {
            // Only handle state changes if player is ready
            if (!playerReadyRef.current) return;

            // Video ended (state = 0)
            if (event.data === window.YT.PlayerState.ENDED) {
              handleVideoEnd();
            }
          },
          onError: (event: any) => {
            console.error('YouTube player error:', event.data);
            // Only skip if player is ready
            if (playerReadyRef.current) {
              loadNextVideo();
            }
          }
        }
      });
    } catch (error) {
      console.error('Error initializing YouTube player:', error);
    }
  };

  const handleVideoEnd = () => {
    if (!playerReadyRef.current || !playerRef.current) return;
    try {
      playerRef.current.seekTo(0);
      playerRef.current.playVideo();
    } catch (e) {}
  };

  const loadNextVideo = () => {
    // Check if player is ready
    if (!playerReadyRef.current || !playerRef.current) {
      console.warn('Player not ready, queuing action');
      // Queue the action to execute when player becomes ready
      pendingActionRef.current = loadNextVideo;
      return;
    }

    // Check if loadVideoById method exists
    if (typeof playerRef.current.loadVideoById !== 'function') {
      console.warn('loadVideoById method not available');
      return;
    }

    const nextVideoId = videoIds[currentVideoIndexRef.current];
    
    try {
      playerRef.current.loadVideoById({
        videoId: nextVideoId,
        startSeconds: 0
      });
    } catch (error) {
      console.error('Error loading next video:', error);
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-video-container"
      style={{
        position: 'relative',
        width: '100%',
        // height controlled by CSS media queries in hero-responsive.css
        overflow: 'hidden',
        background: '#000000'
      }}
    >
      {/* YouTube Player */}
      <div
        id="youtube-player"
        className="bg-video-player"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '177.77vh',
          height: '56.25vw',
          minWidth: '100%',
          minHeight: '100%',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          transition: 'opacity 1s ease-in-out',
          zIndex: 1
        }}
      />

      {/* Hide Minimax/Hailuo watermark in bottom right corner */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '200px',
          height: '80px',
          background: '#000000',
          zIndex: 2
        }}
      />

      {/* Hide Minimax/Hailuo watermark in bottom left corner */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '200px',
          height: '80px',
          background: '#000000',
          zIndex: 2
        }}
      />

      {/* Premium Bottom Gradient Frame - Multi-layer glow effect */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '400px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        {/* Layer 1: Base dark gradient - smoother transition */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #000000 0%, rgba(2, 6, 23, 0.95) 20%, rgba(2, 6, 23, 0.8) 40%, rgba(2, 6, 23, 0.4) 70%, transparent 100%)',
          }}
        />
        {/* Layer 2: Cyan-blue gradient - extended */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(8, 51, 68, 0.6) 0%, rgba(30, 58, 138, 0.3) 30%, rgba(30, 58, 138, 0.1) 60%, transparent 100%)',
          }}
        />
        {/* Layer 3: Purple accent - softer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(88, 28, 135, 0.5) 0%, rgba(88, 28, 135, 0.2) 40%, transparent 80%)',
          }}
        />
        {/* Glowing edge - blurred */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(to right, transparent, rgba(6, 182, 212, 0.7), transparent)',
            filter: 'blur(4px)'
          }}
        />
        {/* Glowing edge - sharp */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(to right, rgba(6, 182, 212, 0), rgba(34, 211, 238, 0.9), rgba(6, 182, 212, 0))',
          }}
        />
      </div>

      {/* Top Gradient for Logo Visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '150px',
          zIndex: 3,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
        }}
      />

    </div>
  );
}