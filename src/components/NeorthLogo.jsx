import React from 'react';

export function NeorthLogo({ size = 42, className = '', animated = false }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? 'animate-float' : ''}
      >
        <defs>
          <radialGradient id="planetGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="90%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </radialGradient>

          <filter id="emeraldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff9d" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Planet Gold Coin Base */}
        <circle cx="50" cy="50" r="34" fill="url(#planetGrad)" />

        {/* Center Sparkle Emblem */}
        <path
          d="M50 28 Q50 50 72 50 Q50 50 50 72 Q50 50 28 50 Q50 50 50 28 Z"
          fill="#fffbeb"
          opacity="0.95"
        />

        {/* Green Orbit Ring */}
        <ellipse
          cx="50"
          cy="50"
          rx="47"
          ry="15"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="5"
          filter="url(#emeraldGlowFilter)"
          transform="rotate(-24 50 50)"
        />

        {/* Satellite Dot on Ring */}
        <circle cx="86" cy="35" r="5" fill="#00ff9d" filter="url(#emeraldGlowFilter)">
          {animated && (
            <animate
              attributeName="opacity"
              values="1;0.4;1"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      </svg>
    </div>
  );
}

export default NeorthLogo;
