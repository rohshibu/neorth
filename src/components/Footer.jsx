import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import NeorthLogo from './NeorthLogo';
import { 
  ShieldCheck, Sparkles, Lock, ArrowUp, CheckCircle2, Mail, 
  Send, Globe, ExternalLink, ShieldAlert, Cpu, Heart, Check
} from 'lucide-react';

export function Footer({ onOpenWaitlist }) {
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
    <footer className="relative border-t border-[rgba(0,255,157,0.2)] bg-[rgba(1,7,4,0.96)] pt-16 pb-12 px-4 md:px-8 text-xs text-[var(--text-secondary)] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(0,255,157,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP VIP NEWSLETTER DISPATCH BOX */}
        <div className="glass-panel p-6 md:p-8 mb-16 border border-[rgba(0,255,157,0.3)] bg-[rgba(5,20,13,0.85)] relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(0,255,157,0.1)] border border-[rgba(0,255,157,0.3)] text-[var(--emerald-glow)] font-mono text-[11px] font-bold">
                <Sparkles size={13} />
                <span>NEORTH INSIDER DISPATCH</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white font-heading">
                Subscribe to Weekly Wealth & Discipline Strategies
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Get high-signal breakdowns on RBI AA wealth automation, behavioral money streaks, and merit circle insights delivered directly to your inbox.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px]">
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-[#031109] border border-[rgba(0,255,157,0.3)] rounded-full pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--emerald-glow)] text-xs"
                    />
                  </div>
                  <button type="submit" className="btn-primary text-xs py-3 px-6 whitespace-nowrap">
                    <Send size={14} />
                    <span>Subscribe VIP</span>
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 bg-[rgba(0,255,157,0.15)] border border-[var(--emerald-glow)] p-3 rounded-full text-[var(--emerald-glow)] text-xs font-bold justify-center">
                  <CheckCircle2 size={18} />
                  <span>You're subscribed to NEORTH Insider Dispatch!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MAIN 5-COLUMN NAVIGATION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 pb-12 border-b border-[rgba(52,211,153,0.15)]">
          
          {/* Column 1: Brand & Core Mission */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <NeorthLogo size={38} animated={true} />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-wider text-white font-heading">
                  NEORTH
                </span>
                <span className="text-[9px] tracking-widest uppercase text-[var(--gold-light)] font-mono font-bold">
                  Where Your Goals Stay in Orbit
                </span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              NEORTH is a world within the digital world. Turn personal and financial goals into daily progress, sync bank accounts via RBI Account Aggregator, earn merits, and join elite wealth circles.
            </p>

            {/* Live Gateway Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#03160c] border border-[rgba(0,255,157,0.3)] text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-ping"></span>
              <span>RBI AA Gateway: 100% Active</span>
            </div>
          </div>

          {/* Column 2: Platform Architecture */}
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4 font-heading text-xs text-[var(--emerald-glow)]">
              Platform Features
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#calculator" className="hover:text-[var(--emerald-glow)] transition-colors flex items-center gap-1.5">
                  <span>Net Worth Calculator</span>
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors flex items-center gap-1.5">
                  <span>RBI AA Live Bank Sync</span>
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors flex items-center gap-1.5">
                  <span>4 Daily Money Rituals</span>
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors flex items-center gap-1.5">
                  <span>Bi-Annual Ratio Flex Stories</span>
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors flex items-center gap-1.5">
                  <span>Deposit Proof Verification</span>
                </a>
              </li>
              <li>
                <a href="#app-simulator" className="hover:text-[var(--emerald-glow)] transition-colors flex items-center gap-1.5">
                  <span>7 Merit Tier Hierarchy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Security & RBI Compliance */}
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4 font-heading text-xs text-[var(--emerald-glow)]">
              RBI AA Security Clean
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-[var(--emerald-glow)] flex-shrink-0 mt-0.5" />
                <span>Consented Data Architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock size={14} className="text-[var(--gold-glow)] flex-shrink-0 mt-0.5" />
                <span>256-Bit AES End-to-End Encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <Cpu size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Setu, Finvu, Anumati, Perfios Approved</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Zero Bank Credentials Stored</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>100% Regulatory Clean (India)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Circles */}
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4 font-heading text-xs text-[var(--emerald-glow)]">
              Circles & Community
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#ai-mentor" className="hover:text-[var(--emerald-glow)] transition-colors">
                  AI Financial Mentor
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[var(--emerald-glow)] transition-colors">
                  Private Goal Circles
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[var(--emerald-glow)] transition-colors">
                  Group Deposit Verification Pools
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[var(--emerald-glow)] transition-colors">
                  Q2 & Q4 Spotify/Strava Style Flex
                </a>
              </li>
              <li>
                <button onClick={onOpenWaitlist} className="text-[var(--gold-light)] hover:text-white font-bold transition-colors text-left">
                  Elite Merit Member Perks →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Launch & Action */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4 font-heading text-xs text-[var(--emerald-glow)]">
              Official Launch
            </h4>
            <div className="p-4 bg-[rgba(16,48,33,0.5)] border border-[rgba(0,255,157,0.3)] rounded-2xl text-left space-y-2">
              <div className="text-[10px] uppercase font-mono text-[var(--gold-light)] font-bold">
                TARGET ONBOARDING
              </div>
              <div className="text-lg font-black text-white font-heading">
                January 1, 2027
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] leading-tight">
                Join 10,000+ early visionaries locking in priority RBI AA onboarding.
              </p>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="btn-primary w-full text-xs py-2.5 px-4"
            >
              <Sparkles size={14} />
              <span>Join Platform Waitlist</span>
            </button>
          </div>

        </div>

        {/* SECURITY ACCREDITATION BADGES BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 px-4 bg-[rgba(4,18,11,0.6)] border border-[rgba(0,255,157,0.15)] rounded-2xl mb-8 font-mono text-[11px]">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck size={16} className="text-[var(--emerald-glow)]" />
            <span>RBI Account Aggregator Framework Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Lock size={16} className="text-[var(--gold-glow)]" />
            <span>256-Bit Financial Grade Encryption</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Cpu size={16} className="text-emerald-400" />
            <span>Consented Read-Only Data Feeds</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--emerald-glow)] font-bold">
            <Check size={16} />
            <span>100% User Data Sovereignty</span>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px]">
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <span>© 2026–2027 NEORTH Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenWaitlist(); }} className="hover:text-[var(--emerald-glow)] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); onOpenWaitlist(); }} className="hover:text-[var(--emerald-glow)] transition-colors">
              Terms of Service
            </a>
            <a href="#security" onClick={(e) => { e.preventDefault(); onOpenWaitlist(); }} className="hover:text-[var(--emerald-glow)] transition-colors">
              Security Protocol
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[var(--emerald-glow)] bg-[rgba(16,48,33,0.8)] border border-[rgba(0,255,157,0.3)] hover:border-[var(--emerald-glow)] px-3 py-1.5 rounded-full transition-all"
            >
              <span>Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
