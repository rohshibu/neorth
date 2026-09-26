import React from 'react';
import NeorthLogo from './NeorthLogo';
import CountdownTimer from './CountdownTimer';
import { Sparkles, ShieldCheck, Flame, ArrowRight, PlayCircle, Coins, Award } from 'lucide-react';

export function HeroSection({ onOpenWaitlist, onExploreDemo }) {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-4 overflow-hidden text-center">
      
      {/* Background Orbital Accent Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--emerald-primary)]/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[var(--gold-primary)]/12 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Floating Orbital Rings */}
      <div className="bg-orbit-ring w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2"></div>
      <div className="bg-orbit-ring-gold w-[450px] h-[450px] top-20 left-1/2 -translate-x-1/2"></div>

      {/* Floating Money Icons */}
      <div className="floating-coin top-12 left-[12%] text-[var(--gold-glow)] opacity-80 hidden lg:block">
        <Coins size={36} />
      </div>
      <div className="floating-coin top-24 right-[12%] text-[var(--emerald-glow)] opacity-80 hidden lg:block" style={{ animationDelay: '2s' }}>
        <Sparkles size={32} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Floating Animated Logo Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[rgba(16,48,33,0.7)] border border-[rgba(0,255,157,0.4)] mb-6 shadow-2xl backdrop-blur-xl animate-float">
          <NeorthLogo size={36} animated={true} />
          <span className="text-xs font-black text-[var(--emerald-glow)] tracking-widest uppercase font-mono">
            NEORTH — WHERE YOUR GOALS STAY IN ORBIT
          </span>
        </div>

        {/* Catchy & Crystal Clear Headline for All Audiences */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 font-heading">
          Build Your Net Worth.<br />
          <span className="gradient-text-emerald">Achieve Every Financial Goal.</span>
        </h1>

        {/* Short & Catchy Subtitle */}
        <p className="text-lg sm:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
          Build your net worth. Share the journey. Grow with a community chasing generational wealth.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenWaitlist}
            className="btn-primary text-base py-3.5 px-8 w-full sm:w-auto shadow-2xl"
          >
            <Sparkles size={20} />
            <span>Join Waitlist</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onExploreDemo}
            className="btn-secondary text-base py-3.5 px-8 w-full sm:w-auto"
          >
            <PlayCircle size={20} />
            <span>Try Net Worth Calculator</span>
          </button>
        </div>

        {/* Countdown Timer to Jan 1, 2027 */}
        <div className="mb-10">
          <CountdownTimer targetDate="2027-01-01T00:00:00" />
        </div>

        {/* Feature Highlights Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs text-[var(--text-secondary)] font-bold">
          <div className="glass-panel p-3.5 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.3)]">
            <ShieldCheck size={16} className="text-[var(--emerald-glow)]" />
            <span>Money Discipline</span>
          </div>
          <div className="glass-panel p-3.5 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.3)]">
            <Flame size={16} className="text-amber-400" />
            <span>Daily Money Rituals</span>
          </div>
          <div className="glass-panel p-3.5 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.3)]">
            <Coins size={16} className="text-[var(--gold-glow)]" />
            <span>Bi-Annual Ratio Flex</span>
          </div>
          <div className="glass-panel p-3.5 flex items-center justify-center gap-2 border-[rgba(0,255,157,0.3)]">
            <Award size={16} className="text-[var(--gold-light)]" />
            <span>Merit Rewards</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
