import React, { useId } from 'react';

export function NeorthLogo({ size = 42, className = '', animated = true, showBadge = false }) {
  const uniqueId = useId().replace(/:/g, '_');

  return (
    <div className={`relative inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-300 drop-shadow-[0_0_12px_rgba(0,255,157,0.35)] ${
            animated ? 'animate-float' : ''
          }`}
        >
          <defs>
            <radialGradient id={`planetGrad_${uniqueId}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="85%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>

            <linearGradient id={`ringGrad_${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff9d" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            <filter id={`emeraldGlow_${uniqueId}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Soft Emerald Cosmic Ambient Aura */}
          <circle cx="50" cy="50" r="42" fill="#00ff9d" opacity="0.12" filter={`url(#emeraldGlow_${uniqueId})`} />

          {/* Gold Planet Base */}
          <circle cx="50" cy="50" r="32" fill={`url(#planetGrad_${uniqueId})`} />

          {/* Center Sparkle Emblem */}
          <path
            d="M50 25 Q50 50 75 50 Q50 50 50 75 Q50 50 25 50 Q50 50 50 25 Z"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Glowing Emerald Orbit Ring */}
          <ellipse
            cx="50"
            cy="50"
            rx="46"
            ry="15"
            fill="none"
            stroke={`url(#ringGrad_${uniqueId})`}
            strokeWidth="5.5"
            filter={`url(#emeraldGlow_${uniqueId})`}
            transform="rotate(-25 50 50)"
          />

          {/* Orbiting Satellite Dot */}
          <circle
            cx="85"
            cy="35"
            r="5"
            fill="#00ff9d"
            filter={`url(#emeraldGlow_${uniqueId})`}
          >
            {animated && (
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.8s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </svg>
      </div>

      {showBadge && (
        <div className="flex flex-col text-left">
          <span className="font-black text-xl tracking-wider text-white font-heading">
            NEORTH
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[var(--gold-light)] font-mono font-bold">
            Where Your Goals Stay in Orbit
          </span>
        </div>
      )}
    </div>
  );
}

export default NeorthLogo;
