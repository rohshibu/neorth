import React from 'react';
import NeorthLogo from './NeorthLogo';
import { Sparkles } from 'lucide-react';

export function Navbar({ onOpenWaitlist, waitlistCount = 57 }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[rgba(2,9,6,0.88)] border-b border-[rgba(0,255,157,0.18)] py-3.5 px-4 md:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 text-white text-decoration-none group">
          <NeorthLogo size={40} animated={true} />
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-wider text-white font-heading group-hover:text-[var(--emerald-glow)] transition-colors">
              NEORTH
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[var(--gold-light)] font-mono font-bold">
              Where Your Goals Stay in Orbit
            </span>
          </div>
        </a>

        {/* Desktop Nav Items (As requested: ONLY Net Worth Calculator & Interactive App Experience) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[var(--text-secondary)] font-heading">
          <a href="#calculator" className="hover:text-[var(--emerald-glow)] transition-colors">
            Net Worth Calculator
          </a>
          <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors">
            Interactive App Experience
          </a>
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="btn-primary text-xs md:text-sm py-2.5 px-4 md:px-5 flex items-center gap-2"
          >
            <Sparkles size={16} />
            <span>Join Waitlist</span>
            <span className="bg-black/35 text-[11px] font-mono px-2 py-0.5 rounded-full text-white font-bold border border-white/20">
              {waitlistCount}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
