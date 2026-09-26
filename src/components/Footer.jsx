import React from 'react';
import NeorthLogo from './NeorthLogo';
import { ShieldCheck, Sparkles } from 'lucide-react';

export function Footer({ onOpenWaitlist }) {
  return (
    <footer className="border-t border-[rgba(52,211,153,0.15)] bg-[rgba(2,8,5,0.95)] pt-12 pb-8 px-4 text-xs">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <NeorthLogo size={36} animated={true} />
              <span className="font-extrabold text-2xl tracking-wider text-white font-heading">
                NEORTH
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm max-w-md leading-relaxed">
              NEORTH is a world within the digital world. Turn personal and financial goals into clear daily actions, receive AI guidance, build net worth, and grow with elite communities.
            </p>
            <div className="p-3 bg-[rgba(16,45,32,0.4)] border border-[rgba(52,211,153,0.2)] rounded-xl italic text-[var(--gold-light)] font-mono text-[11px] max-w-md">
              "Consistency is not a personality trait. It is a system."
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Platform Pillars</h4>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li><a href="#dashboard" className="hover:text-[var(--emerald-glow)]">RBI AA Bank Sync</a></li>
              <li><a href="#rituals" className="hover:text-[var(--emerald-glow)]">4 Daily Rituals & Streaks</a></li>
              <li><a href="#ratio" className="hover:text-[var(--emerald-glow)]">Bi-Annual Ratio Flex Stories</a></li>
              <li><a href="#community" className="hover:text-[var(--emerald-glow)]">Group Deposit Verification</a></li>
              <li><a href="#merits" className="hover:text-[var(--emerald-glow)]">7-Tier Merit Architecture</a></li>
            </ul>
          </div>

          {/* Compliance & Launch */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">RBI Aggregator Clean</h4>
            <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
              Consented data orchestration via RBI-approved AAs: Setu, Finvu, Anumati, Perfios. 100% user privacy guaranteed.
            </p>
            <div className="text-[var(--emerald-glow)] font-mono font-semibold flex items-center gap-1.5 mb-4">
              <ShieldCheck size={14} /> 100% Encrypted & Safe
            </div>
            <button onClick={onOpenWaitlist} className="btn-primary text-xs py-2 px-4 w-full">
              <Sparkles size={14} />
              <span>Join Waitlist for Jan 2027</span>
            </button>
          </div>

        </div>

        <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-[var(--text-secondary)] gap-4">
          <div>
            © 2026–2027 NEORTH. All rights reserved. Built for visionaries.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[var(--emerald-glow)] font-mono">Launch Target: Jan 1, 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
