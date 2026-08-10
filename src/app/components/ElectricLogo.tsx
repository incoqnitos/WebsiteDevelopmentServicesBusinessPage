import React from 'react';
import './ElectricLogo.css';

const ElectricLogo = () => (
  <div className="electric-logo-wrapper">
    <svg
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="electricMIT" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="50%" stopColor="#0088ff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        <linearGradient id="electricAI" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff00ff" />
          <stop offset="50%" stopColor="#ff4444" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        <linearGradient id="electricRing1">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="1" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0088ff" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="electricRing2">
          <stop offset="0%" stopColor="#ff00ff" stopOpacity="1" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff4444" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="electricRing3">
          <stop offset="0%" stopColor="#88ff88" stopOpacity="1" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00ff00" stopOpacity="1" />
        </linearGradient>

        <filter id="electricGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="superGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="whiteGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="electricOutline">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      <g transform="translate(400,300)">
        {/* Ring 1 */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
          <ellipse cx="0" cy="0" rx="140" ry="60" fill="none" stroke="url(#electricRing1)" strokeWidth="10" filter="url(#electricGlow)" />
          <ellipse cx="0" cy="0" rx="140" ry="60" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="3" />
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2s" repeatCount="indefinite" />
            <circle cx="140" cy="0" r="10" fill="#00ffff" filter="url(#superGlow)" />
            <circle cx="140" cy="0" r="6" fill="#ffffff" />
          </g>
        </g>

        {/* Ring 2 */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="8s" repeatCount="indefinite" />
          <ellipse cx="0" cy="0" rx="180" ry="80" fill="none" stroke="url(#electricRing2)" strokeWidth="10" filter="url(#electricGlow)" />
          <ellipse cx="0" cy="0" rx="180" ry="80" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="3s" repeatCount="indefinite" />
            <circle cx="180" cy="0" r="10" fill="#ff00ff" filter="url(#superGlow)" />
            <circle cx="180" cy="0" r="6" fill="#ffffff" />
          </g>
        </g>

        {/* Ring 3 */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite" />
          <ellipse cx="0" cy="0" rx="220" ry="100" fill="none" stroke="url(#electricRing3)" strokeWidth="10" filter="url(#electricGlow)" />
          <ellipse cx="0" cy="0" rx="220" ry="100" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" />
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
            <circle cx="220" cy="0" r="10" fill="#88ff88" filter="url(#superGlow)" />
            <circle cx="220" cy="0" r="6" fill="#ffffff" />
          </g>
        </g>

        {/* Text */}
        <text x="0" y="18" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900" fill="rgba(0,0,0,0.8)" transform="translate(6,6)">MITAI</text>
        <text x="0" y="18" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900" fill="rgba(0,50,100,0.6)" transform="translate(3,3)">MITAI</text>

        <text x="0" y="18" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900" filter="url(#superGlow)">
          <tspan fill="url(#electricMIT)">MIT</tspan><tspan fill="url(#electricAI)">AI</tspan>
        </text>

        <text x="0" y="18" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900"
          fill="none" stroke="url(#electricOutline)" strokeWidth="3" filter="url(#whiteGlow)">MITAI</text>

        <text x="0" y="18" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900"
          fill="rgba(255,255,255,0.4)" transform="translate(-1,-1)">MITAI</text>
      </g>

      {/* Footer */}
      <g>
        <text x="400" y="430" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="bold"
          fill="rgb(148, 163, 184)">
          MOBILE INTELLIGENCE TECHNOLOGIES
        </text>
      </g>

      <text x="400" y="462" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold"
        fill="#ff4444" filter="url(#electricGlow)">1985</text>

      <text x="400" y="495" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#94a3b8">Ltd. All Rights Reserved</text>
    </svg>
  </div>
);

export default ElectricLogo;