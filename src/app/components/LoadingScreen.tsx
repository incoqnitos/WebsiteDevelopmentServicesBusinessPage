import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ElectricLogo from './ElectricLogo';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#020617',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Electric Logo Animation - More Compact */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          style={{
            width: '380px',
            maxWidth: '80vw',
          }}
        >
          <ElectricLogo />
        </motion.div>

        {/* Brand Text - More Readable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '3px',
              color: 'rgb(148, 163, 184)',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            Mobile Intelligence Technologies
          </div>
          <div
            style={{
              fontSize: '0.85rem',
              color: 'rgb(100, 116, 139)',
              letterSpacing: '2px',
            }}
          >
            EST. 1985
          </div>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            width: '400px',
            maxWidth: '80vw',
            marginTop: '50px',
          }}
        >
          {/* Progress Bar Background */}
          <div
            style={{
              width: '100%',
              height: '8px',
              background: 'rgba(148, 163, 184, 0.2)',
              borderRadius: '999px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Progress Bar Fill */}
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, rgb(6, 182, 212) 0%, rgb(147, 51, 234) 50%, rgb(236, 72, 153) 100%)',
                borderRadius: '999px',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
              }}
            />
            
            {/* Animated Glow */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
              }}
            />
          </div>

          {/* Progress Text */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '20px',
              fontSize: '1.2rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(147, 51, 234) 50%, rgb(236, 72, 153) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Loading... {progress}%
          </div>
        </motion.div>

        {/* Animated particles */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`,
                boxShadow: '0 0 10px currentColor',
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}