import React from 'react';

export function NeorthLogo({ size = 42, className = '', animated = true, showBadge = false }) {
  return (
    <div className={`relative inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center">
        <img
          src="/neorth-logo.jpg"
          alt="NEORTH Logo"
          width={size}
          height={size}
          className={`rounded-2xl object-cover shadow-[0_0_15px_rgba(0,255,157,0.35)] border border-[rgba(0,255,157,0.3)] transition-all duration-300 hover:scale-105 ${
            animated ? 'animate-float' : ''
          }`}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
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
