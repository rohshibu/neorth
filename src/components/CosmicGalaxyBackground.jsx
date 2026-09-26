import React from 'react';

export function CosmicGalaxyBackground() {
  // Generate deterministic star positions for high performance & consistency
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    top: `${(i * 17) % 100}%`,
    left: `${(i * 23) % 100}%`,
    size: (i % 3) + 1, // 1px to 3px
    color: i % 5 === 0 ? 'var(--gold-light)' : i % 3 === 0 ? 'var(--emerald-glow)' : '#ffffff',
    duration: `${3 + (i % 5)}s`,
    delay: `${(i % 7) * 0.6}s`,
    opacity: 0.2 + ((i % 8) * 0.1),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#010905]">
      
      {/* Layer 1: Deep Green Cosmic Nebulae Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.14),transparent_65%)] blur-[120px] animate-nebula-pulse"></div>
      <div className="absolute top-[35%] right-[-15%] w-[65vw] h-[65vw] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)] blur-[140px] animate-nebula-pulse-reverse"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08),transparent_65%)] blur-[150px]"></div>
      
      {/* Layer 2: Cosmic Grid Texture */}
      <div className="cosmic-grid"></div>

      {/* Layer 3: Twinkling Galaxy Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.size > 2 ? `0 0 8px ${star.color}` : 'none',
              animationDuration: star.duration,
              animationDelay: star.delay,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Layer 4: Orbital Motion Systems (3D Tilted Rotating Rings with Satellite Orbits) */}
      
      {/* Primary Hero Galaxy Orbit System */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] md:w-[950px] md:h-[950px] rounded-full border border-[rgba(0,255,157,0.12)] border-dashed animate-spin-orbit-slow">
        {/* Orbiting Satellite Planet 1 */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#10b981] shadow-[0_0_20px_#00ff9d]"></div>
        {/* Orbiting Satellite Planet 2 (Opposite side) */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-[#fef08a] to-[#f59e0b] shadow-[0_0_18px_#f59e0b]"></div>
      </div>

      {/* Secondary Counter-Rotating Gold Orbit Ring */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[rgba(245,158,11,0.15)] border-dashed animate-spin-orbit-reverse">
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00ff9d] shadow-[0_0_15px_#00ff9d]"></div>
      </div>

      {/* Deep Mid-Page Galaxy Orbit Ring */}
      <div className="absolute top-[55%] -left-[200px] w-[650px] h-[650px] rounded-full border border-[rgba(0,255,157,0.08)] border-dashed animate-spin-orbit-slow">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#34d399] shadow-[0_0_15px_#34d399]"></div>
      </div>

      {/* Bottom Page Orbit System */}
      <div className="absolute top-[82%] -right-[150px] w-[600px] h-[600px] rounded-full border border-[rgba(0,255,157,0.09)] border-dashed animate-spin-orbit-reverse">
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#fbbf24] shadow-[0_0_16px_#fbbf24]"></div>
      </div>

      {/* Layer 5: Shooting Star Streaks */}
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>
    </div>
  );
}

export default CosmicGalaxyBackground;
