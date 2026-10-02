import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import NeorthLogo from './NeorthLogo';
import { 
  ShieldCheck, Sparkles, Lock, ArrowUp, CheckCircle2, Mail, 
  Send, Globe, Cpu, Check, Users, Trophy
} from 'lucide-react';

export function Footer({ onOpenWaitlist, waitlistCount = 827 }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.85 }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[rgba(0,255,157,0.2)] bg-[rgba(1,7,4,0.96)] pt-10 sm:pt-16 pb-8 sm:pb-12 px-3.5 sm:px-6 md:px-8 text-xs text-[var(--text-secondary)] overflow-hidden w-full">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(0,255,157,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP VIP NEWSLETTER DISPATCH BOX */}
        <div className="glass-panel p-4 sm:p-6 md:p-8 mb-10 sm:mb-16 border border-[rgba(0,255,157,0.3)] bg-[rgba(5,20,13,0.85)] relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(0,255,157,0.1)] border border-[rgba(0,255,157,0.3)] text-[var(--emerald-glow)] font-mono text-[10px] sm:text-[11px] font-bold">
                <Sparkles size={12} />
                <span>NEORTH INSIDER DISPATCH</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white font-heading">
                Weekly Wealth &amp; Discipline Insights
              </h3>
              <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] leading-relaxed">
                High-signal breakdowns on RBI AA wealth automation, behavioral money streaks, and peer accountability frameworks delivered directly to your inbox.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-0 sm:min-w-[320px]">
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-[#031109] border border-[rgba(0,255,157,0.3)] rounded-full pl-9 pr-3 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--emerald-glow)] text-xs"
                    />
                  </div>
                  <button type="submit" className="btn-primary text-xs py-2.5 sm:py-3 px-5 whitespace-nowrap">
                    <Send size={13} />
                    <span>Subscribe</span>
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 bg-[rgba(0,255,157,0.15)] border border-[var(--emerald-glow)] p-2.5 sm:p-3 rounded-full text-[var(--emerald-glow)] text-xs font-bold justify-center">
                  <CheckCircle2 size={16} />
                  <span>Subscribed to NEORTH Insider Dispatch!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MAIN 4-COLUMN NAVIGATION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-16 pb-8 sm:pb-12 border-b border-[rgba(52,211,153,0.15)]">
          
          {/* Column 1: Brand & Core Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <NeorthLogo size={32} animated={true} />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-white font-heading">
                  NEORTH
                </span>
                <span className="text-[9px] tracking-wider uppercase text-[var(--gold-light)] font-mono font-bold">
                  Where Your Goals Stay in Orbit
                </span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              NEORTH empowers consistent wealth building daily. Connect bank accounts via RBI Account Aggregator, track real-life goals by target age, and compete in healthy community leaderboards.
            </p>

            {/* Live Gateway Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#03160c] border border-[rgba(0,255,157,0.3)] text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-ping"></span>
              <span>RBI AA Gateway: Active</span>
            </div>
          </div>

          {/* Column 2: Platform Architecture */}
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-3 font-heading text-xs text-[var(--emerald-glow)]">
              Core Systems
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors">
                  Consolidated Net Worth
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors">
                  RBI AA Live Bank Sync
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors">
                  4 Daily Money Rituals
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors">
                  Group Completion Leaderboards
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors">
                  Milestone Photo Proofs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Security & RBI Compliance */}
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-3 font-heading text-xs text-[var(--emerald-glow)]">
              RBI AA Security Clean
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-[var(--emerald-glow)] flex-shrink-0 mt-0.5" />
                <span>100% Consented Data Architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock size={14} className="text-[var(--gold-glow)] flex-shrink-0 mt-0.5" />
                <span>256-Bit AES Financial Encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <Cpu size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Setu, Finvu, Anumati Compliant</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Zero Bank Credentials Stored</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Launch */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-3 font-heading text-xs text-[var(--emerald-glow)]">
              Official Launch
            </h4>
            <div className="p-3.5 bg-[rgba(16,48,33,0.5)] border border-[rgba(0,255,157,0.3)] rounded-2xl text-left space-y-1.5">
              <div className="text-[9px] uppercase font-mono text-[var(--gold-light)] font-bold">
                TARGET ONBOARDING
              </div>
              <div className="text-base font-black text-white font-heading">
                January 1, 2027
              </div>
              <p className="text-[10px] sm:text-[11px] text-[var(--text-secondary)] leading-tight">
                Join early visionaries securing priority RBI AA onboarding.
              </p>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="btn-primary w-full text-xs py-2.5 px-4 flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              <span>Join Waitlist</span>
              <span className="bg-black/35 text-[10px] font-mono px-1.5 py-0.5 rounded-full text-white font-bold border border-white/20">
                {waitlistCount}
              </span>
            </button>
          </div>

        </div>

        {/* SECURITY ACCREDITATION BADGES BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-4 px-3.5 bg-[rgba(4,18,11,0.6)] border border-[rgba(0,255,157,0.15)] rounded-xl mb-6 font-mono text-[10px] sm:text-[11px]">
          <div className="flex items-center gap-1.5 text-white">
            <ShieldCheck size={14} className="text-[var(--emerald-glow)]" />
            <span>RBI AA Compliant</span>
          </div>
          <div className="flex items-center gap-1.5 text-white">
            <Lock size={14} className="text-[var(--gold-glow)]" />
            <span>256-Bit Financial Encryption</span>
          </div>
          <div className="flex items-center gap-1.5 text-white">
            <Cpu size={14} className="text-emerald-400" />
            <span>Consented Read-Only Feeds</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--emerald-glow)] font-bold">
            <Check size={14} />
            <span>100% User Data Sovereignty</span>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[10px] sm:text-[11px]">
          <div className="text-[var(--text-secondary)] text-center sm:text-left">
            <span>© 2026–2027 NEORTH Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenWaitlist(); }} className="hover:text-[var(--emerald-glow)] transition-colors">
              Privacy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); onOpenWaitlist(); }} className="hover:text-[var(--emerald-glow)] transition-colors">
              Terms
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:text-[var(--emerald-glow)] bg-[rgba(16,48,33,0.8)] border border-[rgba(0,255,157,0.3)] hover:border-[var(--emerald-glow)] px-2.5 py-1 rounded-full transition-all text-xs"
            >
              <span>Top</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
