import React from 'react';
import NeorthLogo from './NeorthLogo';
import CountdownTimer from './CountdownTimer';
import { Sparkles, ShieldCheck, Flame, ArrowRight, PlayCircle, Trophy, Target } from 'lucide-react';

export function HeroSection({ onOpenWaitlist, onExploreDemo, waitlistCount = 827 }) {
  return (
    <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 px-3.5 sm:px-6 overflow-hidden text-center max-w-full">
      
      {/* Background Orbital Accent Circles (Scaled for mobile to prevent overflow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] bg-[var(--emerald-primary)]/12 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-[var(--gold-primary)]/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Floating Animated Logo Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[rgba(16,48,33,0.75)] border border-[rgba(0,255,157,0.4)] mb-4 sm:mb-6 shadow-xl backdrop-blur-xl animate-float">
          <NeorthLogo size={30} animated={true} />
          <span className="text-[10px] sm:text-xs font-black text-[var(--emerald-glow)] tracking-wider sm:tracking-widest uppercase font-mono">
            CONSISTENT WEALTH BUILDING DAILY
          </span>
        </div>

        {/* Catchy & Crystal Clear Headline for All Audiences */}
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.12] mb-4 sm:mb-5 font-heading">
          Build Wealth Daily.<br />
          <span className="gradient-text-emerald">Achieve Real-Life Goals on Time.</span>
        </h1>

        {/* Short & Catchy Subtitle */}
        <p className="text-xs sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-6 sm:mb-8 font-medium leading-relaxed px-1">
          Lock in daily financial micro-habits, sync bank balances via RBI Account Aggregator, and compete in healthy inner-circle leaderboards where consistency and % completion win.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 max-w-md sm:max-w-none mx-auto w-full">
          <button
            onClick={onOpenWaitlist}
            className="btn-primary text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 w-full sm:w-auto shadow-xl"
          >
            <Sparkles size={18} />
            <span>Join Waitlist</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onExploreDemo}
            className="btn-secondary text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 w-full sm:w-auto"
          >
            <PlayCircle size={18} />
            <span>Explore Daily App</span>
          </button>
        </div>

        {/* Live Waitlist Counter */}
        <div className="flex flex-col items-center justify-center gap-1.5 mb-8">
          <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[rgba(16,48,33,0.7)] hover:bg-[rgba(16,48,33,0.9)] border border-[rgba(0,255,157,0.35)] shadow-md backdrop-blur-md transition-all text-xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--emerald-glow)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--emerald-glow)]"></span>
            </span>
            <span className="font-mono font-bold text-white text-xs bg-black/40 px-2 py-0.5 rounded border border-[rgba(0,255,157,0.3)]">
              {waitlistCount}
            </span>
            <span className="text-[var(--text-secondary)] font-medium text-[11px] sm:text-xs">
              people in waitlist →
            </span>
          </button>
          <p className="text-[10px] sm:text-[11px] text-[var(--emerald-glow)]/80 font-medium">
            🔒 Zero spam. Only a single email with download links on release.
          </p>
        </div>

        {/* Countdown Timer to Jan 1, 2027 */}
        <div className="mb-8">
          <CountdownTimer targetDate="2027-01-01T00:00:00" />
        </div>

        {/* Feature Highlights Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto text-[11px] sm:text-xs text-[var(--text-secondary)] font-bold">
          <div className="glass-panel p-2.5 sm:p-3 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.25)]">
            <ShieldCheck size={15} className="text-[var(--emerald-glow)] flex-shrink-0" />
            <span className="truncate">RBI AA Verified</span>
          </div>
          <div className="glass-panel p-2.5 sm:p-3 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.25)]">
            <Flame size={15} className="text-amber-400 flex-shrink-0" />
            <span className="truncate">Daily Habit Streaks</span>
          </div>
          <div className="glass-panel p-2.5 sm:p-3 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.25)]">
            <Target size={15} className="text-[var(--gold-glow)] flex-shrink-0" />
            <span className="truncate">Age & Goal Targets</span>
          </div>
          <div className="glass-panel p-2.5 sm:p-3 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.25)]">
            <Trophy size={15} className="text-[var(--emerald-glow)] flex-shrink-0" />
            <span className="truncate">Group Leaderboards</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
