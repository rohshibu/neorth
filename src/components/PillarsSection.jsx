import React from 'react';
import { TrendingUp, Target, Flame, Users } from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function PillarsSection() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "1. Measurable Wealth Building",
      subtitle: "Consented RBI account sync and verified real-time net worth tracking with zero manual spreadsheets.",
      color: "emerald"
    },
    {
      icon: Users,
      title: "2. Healthy Competitive Groups & Communities",
      subtitle: "Compete with inner circles on goal completion percentages, celebrating momentum rather than asset flexes.",
      color: "gold"
    },
    {
      icon: Flame,
      title: "3. Consistency & Accountability",
      subtitle: "Pay a subscription to stay accountable, take daily action, and convert paid fees into Merits when you succeed.",
      color: "emerald"
    },
    {
      icon: Target,
      title: "4. Built for People Who Exponentially Want to Improve Their Lives",
      subtitle: "Engineered for high-agency achievers who demand daily progress, verified milestones, and elevated peer standards.",
      color: "gold"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-3.5 sm:px-6 max-w-6xl mx-auto w-full" id="pillars">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(16,48,33,0.7)] border border-[rgba(0,255,157,0.4)] mb-3 shadow-lg backdrop-blur-xl">
          <NeorthLogo size={20} animated={true} />
          <span className="text-[10px] sm:text-xs font-black text-[var(--emerald-glow)] tracking-wider uppercase font-mono">
            The Four Pillars of NEORTH
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          Daily Consistency is a System.<br />
          <span className="gradient-text-emerald">Built for Real-Life Goals.</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
          Four core principles designed to turn ambitious goals into daily execution and healthy accountability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {pillars.map((p, idx) => {
          const IconComp = p.icon;
          const isGold = p.color === 'gold';
          return (
            <div
              key={idx}
              className={`glass-panel p-4 sm:p-6 border transition-all duration-300 ${
                isGold ? 'border-[rgba(245,158,11,0.25)] hover:border-[var(--gold-primary)]' : 'border-[rgba(52,211,153,0.25)] hover:border-[var(--emerald-glow)]'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className={`p-2.5 sm:p-3 rounded-2xl flex-shrink-0 ${
                  isGold ? 'bg-amber-500/15 text-[var(--gold-light)] border border-amber-500/30' : 'bg-emerald-500/15 text-[var(--emerald-glow)] border border-emerald-500/30'
                }`}>
                  <IconComp size={22} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1.5">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {p.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PillarsSection;
