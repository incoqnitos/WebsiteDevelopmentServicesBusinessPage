import React from 'react';
import { Hand } from 'lucide-react';

/**
 * Visual indicator showing hand control is active
 * Shows in bottom-left corner when camera is enabled
 */
export function HandControlIndicator({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 9998,
        background: 'rgba(20, 241, 149, 0.1)',
        border: '2px solid var(--brand-2)',
        borderRadius: 12,
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        backdropFilter: 'blur(10px)',
        animation: 'pulse 2s ease-in-out infinite',
        boxShadow: '0 0 20px rgba(20, 241, 149, 0.3)',
      }}
    >
      <Hand style={{ width: 20, height: 20, color: 'var(--brand-2)' }} />
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand-2)' }}>
          Hand Control Active
        </div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>
          Point to move • Pinch to click
        </div>
      </div>
    </div>
  );
}
