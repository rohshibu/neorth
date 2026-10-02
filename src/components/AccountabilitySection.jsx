import React from 'react';
import { 
  ShieldCheck, ArrowRight, 
  Coins, Zap, Trophy 
} from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function AccountabilitySection({ onOpenWaitlist }) {
  const steps = [
    {
      num: "01",
      title: "Set Your Real-Life Goal",
      description: "Define a concrete goal tied to your target age and deadline. No vague resolutions—pure measurable clarity.",
      icon: Trophy,
      badge: "Target Definition"
    },
    {
      num: "02",
      title: "Pay to Stay Accountable",
      description: "You pay a monthly subscription while actively working toward your goal. Real skin in the game keeps you focused every single day.",
      icon: ShieldCheck,
      badge: "Skin in the Game"
    },
    {
      num: "03",
      title: "The Faster You Finish, The Better",
      description: "Daily rituals and inner circle momentum drive aggressive execution. The faster you achieve your goal, the higher your velocity.",
      icon: Zap,
      badge: "Speed & Discipline"
    },
    {
      num: "04",
      title: "100% Value Back as Merits",
      description: "The moment your goal is achieved, every single rupee you paid in subscription is converted directly into Merits inside Neorth.",
      icon: Coins,
      badge: "Full Value Returned"
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-3.5 sm:px-6 max-w-6xl mx-auto w-full scroll-mt-20" id="payment">
      <div id="accountability" className="-mt-20 pt-20"></div>
      
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.4)] mb-3 shadow-lg backdrop-blur-xl">
          <NeorthLogo size={18} animated={false} />
          <span className="text-[10px] sm:text-xs font-black text-[var(--gold-light)] tracking-wider uppercase font-mono">
            The Accountability Engine
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          Pay to Stay Accountable.<br />
          <span className="gradient-text-emerald">Succeed to Get Value Back.</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
          Neorth is an app that helps you achieve your goals. You set your goals and pay a subscription while you work toward achieving them. When you succeed, you get value back through Merits.
        </p>
      </div>

      {/* 4-Step Accountability Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx}
              className="glass-panel p-4 sm:p-5 border border-[rgba(52,211,153,0.2)] hover:border-[var(--emerald-glow)] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black font-mono text-[var(--gold-light)] bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded-md">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-[var(--emerald-glow)] border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[var(--emerald-glow)] uppercase font-semibold mb-1">
                  {step.badge}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(52,211,153,0.1)] flex items-center text-[10px] text-[var(--text-secondary)] font-mono">
                <span>Accountability Step {idx + 1} of 4</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* The Core Ideation Quote Banner */}
      <div className="glass-panel p-5 sm:p-7 border border-[rgba(0,255,157,0.3)] bg-gradient-to-r from-[rgba(6,28,18,0.9)] via-[rgba(3,15,10,0.95)] to-[rgba(6,28,18,0.9)] rounded-2xl text-center shadow-xl">
        <p className="text-sm sm:text-base md:text-lg text-white font-medium italic max-w-3xl mx-auto leading-relaxed">
          &ldquo;The idea is simple: you pay to stay accountable, take daily action, and improve your life—and when you succeed, you get value back through Merits.&rdquo;
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="btn-primary text-xs sm:text-sm py-2 px-5 flex items-center gap-1.5"
          >
            <span>Claim Early Access</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

    </section>
  );
}

export default AccountabilitySection;
