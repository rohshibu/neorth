import React from 'react';
import { TrendingUp, Target, Flame, Users } from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function PillarsSection() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "1. Wealth Building",
      tagline: "RBI Account Aggregator Engine",
      color: "emerald",
      points: [
        "Consented bank sync via RBI-regulated Setu, Finvu & Anumati",
        "Real-time consolidated Net Worth with zero manual entry",
        "Automated 'What Changed & Why' monthly balance audits"
      ]
    },
    {
      icon: Target,
      title: "2. Goal Execution",
      tagline: "Target Age & Timeline Milestones",
      color: "gold",
      points: [
        "Tie real-life goals to your exact target age and target year",
        "Daily progress calculated automatically from linked bank accounts",
        "10-day post-completion verification for authentic goal fulfillment"
      ]
    },
    {
      icon: Flame,
      title: "3. Daily Discipline",
      tagline: "4 Daily Rituals & Streak System",
      color: "emerald",
      points: [
        "4 quick micro-habits: review money, reflect win, AI advice, circle sync",
        "Consistency streaks that build daily financial discipline",
        "Personalized AI mentor keeping your goals front and center"
      ]
    },
    {
      icon: Users,
      title: "4. Community & Competition",
      tagline: "Leaderboards & Achievement Proofs",
      color: "gold",
      points: [
        "Compete in inner groups on percentage of personal goals completed",
        "Leaderboards reward daily consistency and improving momentum",
        "Post milestone photos with your circle when you hit targets (e.g. 40% of ₹1 Cr)"
      ]
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
          Four tightly engineered systems that turn long-term wealth ambitions into daily micro-progress and healthy peer accountability.
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
              <div className="flex items-center gap-3 mb-3.5">
                <div className={`p-2.5 sm:p-3 rounded-2xl flex-shrink-0 ${
                  isGold ? 'bg-amber-500/15 text-[var(--gold-light)] border border-amber-500/30' : 'bg-emerald-500/15 text-[var(--emerald-glow)] border border-emerald-500/30'
                }`}>
                  <IconComp size={22} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{p.title}</h3>
                  <span className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider ${
                    isGold ? 'text-[var(--gold-light)]' : 'text-[var(--emerald-glow)]'
                  }`}>
                    {p.tagline}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                      isGold ? 'bg-[var(--gold-primary)]' : 'bg-[var(--emerald-glow)]'
                    }`} />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PillarsSection;
