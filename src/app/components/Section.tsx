import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, subtitle, children, className = '' }: SectionProps) {
  const isDark = true; // Dark theme only
  
  return (
    <section className={`section container ${className}`}>
      {(title || subtitle) && (
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          {title && <h2 style={{ 
            color: 'var(--brand-2)', 
            marginBottom: 12,
            textShadow: isDark 
              ? '0 0 30px rgba(6, 182, 212, 0.5)' 
              : '0 0 20px rgba(6, 182, 212, 0.4)'
          }}>{title}</h2>}
          {subtitle && <p className="muted" style={{
            color: isDark ? 'rgb(148, 163, 184)' : 'rgb(30, 41, 59)',
            textShadow: isDark ? 'none' : '0 0 10px rgba(255, 255, 255, 0.8)'
          }}>{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}