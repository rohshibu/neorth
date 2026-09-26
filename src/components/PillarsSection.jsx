import React from 'react';
import { TrendingUp, Target, Flame, Users, ShieldCheck, Award, Zap, Sparkles } from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function PillarsSection() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "1. Wealth Building",
      tagline: "RBI Account Aggregator Engine",
      color: "emerald",
      points: [
        "Legally clean bank sync via Setu, Finvu, Anumati, Perfios",
        "Consolidated real-time Assets vs Liabilities tracking",
        "Dynamic 'What Changed & Why' monthly audit logs",
        "Net-worth tied tier subscriptions"
      ]
    },
    {
      icon: Target,
      title: "2. Goal Execution",
      tagline: "Deposit Proof Verification",
      color: "gold",
      points: [
        "Personal & group pooled goals with friends/family",
        "10-day post-completion third-party deposit verification",
        "Automated GREEN (Balance met) & RED (Deficit) indicators",
        "Proof picture upload to claim Merits for everyone"
      ]
    },
    {
      icon: Flame,
      title: "3. Daily Discipline",
      tagline: "4 Rituals & AI Mentor Hype",
      color: "emerald",
      points: [
        "Review money, reflect & record daily win, receive AI advice",
        "Duolingo-style daily streak milestones & merit bonuses",
        "Personalized AI Mentor hyping you up from all angles",
        "Streak recovery plans after missed days"
      ]
    },
    {
      icon: Users,
      title: "4. Community Circles",
      tagline: "7 Merit Tiers & Q2/Q4 Flex",
      color: "gold",
      points: [
        "7 Merit levels with annual track record refresh",
        "Q2 & Q4 Spotify/Strava style Ratio flex story generator",
        "Public forum (link-free) & private goal circles",
        "Exclusive BookMyShow & Eventbrite elite hangouts"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="pillars">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(16,48,33,0.7)] border border-[rgba(0,255,157,0.4)] mb-4 shadow-xl backdrop-blur-xl">
          <NeorthLogo size={24} animated={true} />
          <span className="text-xs font-black text-[var(--emerald-glow)] tracking-wider uppercase font-mono">
            The Four Pillars of NEORTH
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Consistency is Not a Personality Trait.<br />
          <span className="gradient-text-emerald">It is a System.</span>
        </h2>
        <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
          NEORTH bridges the gap between ambitious intentions and daily financial execution through four deeply integrated pillars.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, idx) => {
          const IconComp = p.icon;
          const isGold = p.color === 'gold';
          return (
            <div
              key={idx}
              className={`glass-panel p-6 border transition-all duration-300 ${
                isGold ? 'border-[rgba(245,158,11,0.3)] hover:border-[var(--gold-primary)]' : 'border-[rgba(52,211,153,0.3)] hover:border-[var(--emerald-glow)]'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-2xl ${
                  isGold ? 'bg-amber-500/15 text-[var(--gold-light)] border border-amber-500/30' : 'bg-emerald-500/15 text-[var(--emerald-glow)] border border-emerald-500/30'
                }`}>
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    isGold ? 'text-[var(--gold-light)]' : 'text-[var(--emerald-glow)]'
                  }`}>
                    {p.tagline}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs md:text-sm text-[var(--text-secondary)]">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      isGold ? 'bg-[var(--gold-primary)]' : 'bg-[var(--emerald-glow)]'
                    }`} />
                    <span>{pt}</span>
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
