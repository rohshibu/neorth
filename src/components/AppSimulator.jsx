import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  TrendingUp, ShieldCheck, Flame, Users, CheckCircle2, 
  Sparkles, Check, AlertCircle, ArrowUpRight, Trophy, Camera, Heart, MessageCircle, ArrowRight
} from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function AppSimulator({ onOpenWaitlist }) {
  const [activeTab, setActiveTab] = useState('networth'); // networth, rituals, goals, leaderboard, proofs

  // Bank Aggregator Sync State
  const [syncedBanks, setSyncedBanks] = useState({
    hdfc: true,
    icici: true,
    zerodha: true,
    sbi: true,
  });

  const bankValues = {
    hdfc: 840000,
    icici: 910000,
    zerodha: 530000,
    sbi: 200000,
  };

  const calculateTotalNetWorth = () => {
    let total = 0;
    if (syncedBanks.hdfc) total += bankValues.hdfc;
    if (syncedBanks.icici) total += bankValues.icici;
    if (syncedBanks.zerodha) total += bankValues.zerodha;
    if (syncedBanks.sbi) total += bankValues.sbi;
    return total;
  };

  const toggleBank = (key) => {
    setSyncedBanks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Daily Rituals State
  const [ritualsCompleted, setRitualsCompleted] = useState({
    review: true,
    reflect: false,
    guidance: false,
    circle: false,
  });
  const [streakCount, setStreakCount] = useState(14);
  const [showStreakPopup, setShowStreakPopup] = useState(false);

  const toggleRitual = (key) => {
    const nextState = { ...ritualsCompleted, [key]: !ritualsCompleted[key] };
    setRitualsCompleted(nextState);

    // Check if all completed
    const allDone = Object.values(nextState).every(Boolean);
    if (allDone && !showStreakPopup) {
      setStreakCount((prev) => prev + 1);
      setShowStreakPopup(true);
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Milestone Proof State
  const [proofUploaded, setProofUploaded] = useState(false);
  const [cheerCount, setCheerCount] = useState(24);
  const [hasCheered, setHasCheered] = useState(false);

  const handleCheer = () => {
    if (!hasCheered) {
      setCheerCount((c) => c + 1);
      setHasCheered(true);
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  const handleUploadProof = () => {
    setProofUploaded(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.55 }
    });
  };

  // 2D Animation Illustration & Context per Screen (Real live examples)
  const screenAnimations = {
    networth: {
      image: '/anim-networth.jpg',
      badge: '1. LIVE RBI BANK SYNC',
      badgeColor: 'emerald',
      title: 'Zero Overwhelm • Calm Financial Clarity',
      tagline: 'HDFC, ICICI & Zerodha accounts automatically synced via RBI Account Aggregator.',
      statLabel: 'Consolidated Net Worth',
      statValue: `₹${calculateTotalNetWorth().toLocaleString('en-IN')}`,
      statusPill: '100% Consented & Encrypted',
    },
    rituals: {
      image: '/anim-rituals.jpg',
      badge: '2. DAILY MICRO-HABITS',
      badgeColor: 'amber',
      title: 'Turn "Later Maybe..." into Daily Momentum',
      tagline: '4 quick micro-habits logged every morning to build an unbreakable money streak.',
      statLabel: 'Active Discipline Streak',
      statValue: `${streakCount} Days Blazing 🔥`,
      statusPill: '4/4 Micro-Habits Logged',
    },
    goals: {
      image: '/anim-goals.jpg',
      badge: '3. REAL-LIFE GOALS WITH FRIENDS',
      badgeColor: 'emerald',
      title: 'Family & Friends Real Estate Fund',
      tagline: 'Collaborative goal pool with timeline targets anchored to target age 28.',
      statLabel: 'Pooled Goal Progress',
      statValue: '75% Completed (Dec 2026 Target)',
      statusPill: '₹10,000,000 Target on Schedule',
    },
    leaderboard: {
      image: '/anim-leaderboard.jpg',
      badge: '4. HEALTHY PEER COMPETITION',
      badgeColor: 'gold',
      title: 'Compete on % Completed — Not Balance',
      tagline: 'Inner circle friendly rivalry where daily consistency and % completion climb to #1.',
      statLabel: 'Bangalore Founders Circle',
      statValue: '#1 Rohith (42%) vs #2 Priya (38%)',
      statusPill: 'Fair Playing Field for All',
    },
    proofs: {
      image: '/anim-proof.jpg',
      badge: '5. VERIFIED MILESTONE PROOFS',
      badgeColor: 'emerald',
      title: 'Real-Life Milestone: Dream Car Delivered!',
      tagline: 'Post real milestone photo proofs to your inner group as you hit 40% of your 1 Crore target.',
      statLabel: 'Milestone Verified & Posted',
      statValue: '40% of 1 Crore Achieved 🏆',
      statusPill: 'Car Keys in Hand • Group Cheers',
    },
  };

  const currentAnimation = screenAnimations[activeTab];

  return (
    <div className="w-full max-w-6xl mx-auto my-6 sm:my-12 px-3 sm:px-6" id="app-simulator">
      
      {/* Header Banner */}
      <div className="text-center mb-5 sm:mb-8">
        <div className="badge-pill badge-pill-emerald mb-2 text-[10px] sm:text-xs">
          <Sparkles size={13} />
          <span>Interactive App Experience</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">
          Inside <span className="gradient-text-emerald">NEORTH</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-xs sm:text-sm px-2">
          Toggle each screen to experience daily wealth building, bank-synced goals, and healthy inner-circle competition.
        </p>
      </div>

      {/* Main Simulator Card */}
      <div className="glass-panel p-3 sm:p-5 md:p-6 relative overflow-hidden border border-[var(--border-emerald)] shadow-2xl">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-5 border-b border-[rgba(52,211,153,0.15)] scrollbar-none">
          <button
            onClick={() => setActiveTab('networth')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'networth'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-md shadow-emerald-500/20'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <TrendingUp size={14} />
            <span>1. RBI Net Worth</span>
          </button>

          <button
            onClick={() => setActiveTab('rituals')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'rituals'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-md'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Flame size={14} />
            <span>2. Daily Rituals ({streakCount} 🔥)</span>
          </button>

          <button
            onClick={() => setActiveTab('goals')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'goals'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-md'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Users size={14} />
            <span>3. Real-Life Goals</span>
          </button>

          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'leaderboard'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-md'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Trophy size={14} className={activeTab === 'leaderboard' ? 'text-black' : ''} />
            <span>4. Group Leaderboard</span>
          </button>

          <button
            onClick={() => setActiveTab('proofs')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'proofs'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-md'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Camera size={14} />
            <span>5. Milestone Proofs</span>
          </button>
        </div>

        {/* 2-Column Layout: Live App Screen + 2D Animation Scene for that screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* LEFT: Live Phone Simulator (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#051811] border border-[rgba(52,211,153,0.3)] rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-xl relative flex flex-col justify-between">
            
            {/* Phone Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(52,211,153,0.15)] mb-3">
              <div className="flex items-center gap-2">
                <NeorthLogo size={24} animated={false} />
                <div>
                  <div className="text-[10px] text-[var(--text-secondary)]">Live Simulator</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Rohith S. 👋</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] bg-[rgba(16,185,129,0.15)] text-[var(--emerald-glow)] px-2 py-0.5 rounded-full font-mono flex items-center gap-1 border border-emerald-500/30">
                  <ShieldCheck size={11} /> RBI AA Sync
                </span>
                <span className="text-[10px] bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded-full font-mono flex items-center gap-1 border border-amber-500/30">
                  <Flame size={11} className="fill-amber-400" /> {streakCount}d
                </span>
              </div>
            </div>

            {/* TAB 1 CONTENT: NET WORTH */}
            {activeTab === 'networth' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="bg-gradient-to-br from-[#0c3324] to-[#062016] border border-[rgba(52,211,153,0.3)] rounded-xl p-3.5 shadow-lg relative overflow-hidden">
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-semibold mb-1">
                    Consolidated Net Worth
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex flex-wrap items-baseline gap-2">
                    <span>₹{calculateTotalNetWorth().toLocaleString('en-IN')}</span>
                    <span className="text-[10px] font-sans text-[var(--emerald-glow)] bg-[rgba(0,255,157,0.1)] px-2 py-0.5 rounded-full flex items-center gap-0.5 font-bold">
                      <ArrowUpRight size={12} /> +13% (+₹2,65,000)
                    </span>
                  </div>
                  <div className="text-[10px] text-[var(--text-secondary)] mt-1 truncate">
                    Assets: ₹{(calculateTotalNetWorth() * 1.15).toLocaleString('en-IN')} • Liabilities: ₹{(calculateTotalNetWorth() * 0.15).toLocaleString('en-IN')}
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[rgba(52,211,153,0.2)] flex items-center justify-between text-[10px] text-[var(--text-secondary)]">
                    <span>Savings Velocity: <strong className="text-white">44%</strong></span>
                    <span>Debt Payoff: <strong className="text-[var(--emerald-glow)]">On Track</strong></span>
                  </div>
                </div>

                {/* Linked Accounts (Toggleable) */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider flex items-center justify-between">
                    <span>Linked Feeds (RBI AA)</span>
                    <span className="text-[9px] text-[var(--emerald-glow)]">Tap account to toggle</span>
                  </div>

                  <div
                    onClick={() => toggleBank('hdfc')}
                    className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      syncedBanks.hdfc
                        ? 'bg-[rgba(16,45,32,0.8)] border-[var(--emerald-glow)]'
                        : 'bg-black/30 border-gray-800 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-blue-900/60 text-blue-300 font-bold flex items-center justify-center text-[9px]">
                        HDFC
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">HDFC Salary Account</div>
                        <div className="text-[9px] text-[var(--text-secondary)]">Finvu AA Verified</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold font-mono text-white">₹8,40,000</div>
                      <div className="text-[9px] text-[var(--emerald-glow)]">{syncedBanks.hdfc ? 'Synced ✓' : 'Disabled'}</div>
                    </div>
                  </div>

                  <div
                    onClick={() => toggleBank('icici')}
                    className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      syncedBanks.icici
                        ? 'bg-[rgba(16,45,32,0.8)] border-[var(--emerald-glow)]'
                        : 'bg-black/30 border-gray-800 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-orange-900/60 text-orange-300 font-bold flex items-center justify-center text-[9px]">
                        ICICI
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">ICICI Mutual Funds</div>
                        <div className="text-[9px] text-[var(--text-secondary)]">Anumati AA Feed</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold font-mono text-white">₹9,10,000</div>
                      <div className="text-[9px] text-[var(--emerald-glow)]">{syncedBanks.icici ? 'Synced ✓' : 'Disabled'}</div>
                    </div>
                  </div>

                  <div
                    onClick={() => toggleBank('zerodha')}
                    className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      syncedBanks.zerodha
                        ? 'bg-[rgba(16,45,32,0.8)] border-[var(--emerald-glow)]'
                        : 'bg-black/30 border-gray-800 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-300 font-bold flex items-center justify-center text-[9px]">
                        ZRD
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Zerodha Demat Portfolio</div>
                        <div className="text-[9px] text-[var(--text-secondary)]">Setu AA Feed</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold font-mono text-white">₹5,30,000</div>
                      <div className="text-[9px] text-[var(--emerald-glow)]">{syncedBanks.zerodha ? 'Synced ✓' : 'Disabled'}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(6,21,14,0.9)] border border-[rgba(245,158,11,0.3)] rounded-xl p-2.5 text-[10px]">
                  <div className="text-[11px] font-bold text-[var(--gold-light)] flex items-center gap-1 mb-1">
                    <Sparkles size={12} /> Monthly Audit Breakdown
                  </div>
                  <div className="text-[var(--text-secondary)] flex justify-between">
                    <span>+₹1,40,000 Equity Index Appreciation</span>
                    <span className="text-[var(--emerald-glow)]">+13% Growth</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2 CONTENT: DAILY RITUALS */}
            {activeTab === 'rituals' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="text-[10px] text-[var(--text-secondary)] font-mono flex items-center justify-between">
                  <span>Today's 4 Micro-Habits</span>
                  <span className="text-[var(--emerald-glow)]">Tap step to check off</span>
                </div>

                <div
                  onClick={() => toggleRitual('review')}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.review ? 'bg-emerald-500/15 border-[var(--emerald-glow)]' : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      ritualsCompleted.review ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.review ? <Check size={11} /> : '1'}
                    </div>
                    <div className="text-xs font-bold text-white">1. Review Today's Money</div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono font-bold">
                    {ritualsCompleted.review ? 'Done ✓' : 'Tap'}
                  </span>
                </div>

                <div
                  onClick={() => toggleRitual('reflect')}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.reflect ? 'bg-emerald-500/15 border-[var(--emerald-glow)]' : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      ritualsCompleted.reflect ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.reflect ? <Check size={11} /> : '2'}
                    </div>
                    <div className="text-xs font-bold text-white">2. Reflect &amp; Record Win</div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono font-bold">
                    {ritualsCompleted.reflect ? 'Done ✓' : 'Tap'}
                  </span>
                </div>

                <div
                  onClick={() => toggleRitual('guidance')}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.guidance ? 'bg-emerald-500/15 border-[var(--emerald-glow)]' : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      ritualsCompleted.guidance ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.guidance ? <Check size={11} /> : '3'}
                    </div>
                    <div className="text-xs font-bold text-white">3. Receive AI Advice</div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono font-bold">
                    {ritualsCompleted.guidance ? 'Done ✓' : 'Tap'}
                  </span>
                </div>

                <div
                  onClick={() => toggleRitual('circle')}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.circle ? 'bg-emerald-500/15 border-[var(--emerald-glow)]' : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      ritualsCompleted.circle ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.circle ? <Check size={11} /> : '4'}
                    </div>
                    <div className="text-xs font-bold text-white">4. Inner Group Check-In</div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono font-bold">
                    {ritualsCompleted.circle ? 'Done ✓' : 'Tap'}
                  </span>
                </div>

                <div className="bg-gradient-to-r from-amber-500/15 to-emerald-500/15 border border-amber-400/40 rounded-xl p-2.5 text-center mt-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center justify-center gap-1">
                    <Flame size={14} className="fill-amber-400" /> Active Discipline Streak: {streakCount} Days!
                  </div>
                  <div className="text-[10px] text-[var(--emerald-glow)] mt-0.5">
                    Consistency Score: 98% • Climbing Inner Circle Leaderboard
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3 CONTENT: REAL-LIFE GOALS */}
            {activeTab === 'goals' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="bg-gradient-to-r from-emerald-950/60 to-black p-3.5 rounded-xl border border-emerald-500/30">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white truncate">₹10,000,000 Real Estate Fund</span>
                    <span className="font-mono text-[var(--emerald-glow)] font-bold ml-1">75% Achieved</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 mb-1.5">
                    <div className="bg-gradient-to-r from-emerald-500 to-[var(--emerald-glow)] h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="text-[10px] text-[var(--text-secondary)] flex justify-between">
                    <span>Target Age: 28</span>
                    <span>Deadline: Dec 2026</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    Inner Group Deposit Verification
                  </div>

                  <div className="p-2 bg-black/40 rounded-xl border border-emerald-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-[10px]">
                        RS
                      </div>
                      <div className="text-xs font-bold text-white">Rohith (You) • ₹25L Target</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-[var(--emerald-glow)] border border-emerald-500/40 flex items-center gap-0.5">
                      <Check size={10} /> Verified (GREEN)
                    </span>
                  </div>

                  <div className="p-2 bg-black/40 rounded-xl border border-emerald-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-[10px]">
                        PK
                      </div>
                      <div className="text-xs font-bold text-white">Priya K. • ₹25L Target</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-[var(--emerald-glow)] border border-emerald-500/40 flex items-center gap-0.5">
                      <Check size={10} /> Verified (GREEN)
                    </span>
                  </div>

                  <div className="p-2 bg-black/40 rounded-xl border border-red-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-300 font-bold flex items-center justify-center text-[10px]">
                        VS
                      </div>
                      <div className="text-xs font-bold text-white">Vikram S. • ₹25L Target</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-500/20 text-red-400 border border-red-500/40 flex items-center gap-0.5">
                      <AlertCircle size={10} /> Insufficient (RED)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4 CONTENT: INNER CIRCLE LEADERBOARD */}
            {activeTab === 'leaderboard' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between text-[10px] text-[var(--text-secondary)] font-mono">
                  <span>Inner Circle: Bangalore Founders</span>
                  <span className="text-[var(--gold-glow)]">Ranked by % Completed</span>
                </div>

                <div className="p-2.5 bg-gradient-to-r from-emerald-950/70 to-black rounded-xl border-2 border-[var(--emerald-glow)]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--emerald-glow)] text-black font-extrabold flex items-center justify-center text-[10px]">
                        #1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          <span>Rohith S. (You)</span>
                          <span className="text-[8px] bg-emerald-500/20 text-[var(--emerald-glow)] px-1 rounded font-mono">
                            48d Streak 🔥
                          </span>
                        </div>
                        <div className="text-[9px] text-[var(--text-secondary)]">Goal: ₹1 Crore Wealth • Age 28 Target</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-extrabold text-[var(--emerald-glow)] font-mono">42%</div>
                      <div className="text-[9px] text-[var(--text-secondary)] font-mono">₹42L / ₹1Cr</div>
                    </div>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1.5 mb-1">
                    <div className="bg-gradient-to-r from-emerald-500 to-[var(--emerald-glow)] h-1.5 rounded-full w-[42%]"></div>
                  </div>
                  <div className="text-[9px] text-[var(--emerald-glow)] font-medium flex justify-between">
                    <span>Consistency: 98%</span>
                    <span>Just posted 40% Milestone Proof 📸</span>
                  </div>
                </div>

                <div className="p-2 bg-black/40 rounded-xl border border-gray-800">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-800 text-gray-300 font-bold flex items-center justify-center text-[9px]">
                        #2
                      </div>
                      <div className="text-xs font-bold text-white">Priya K. (₹50L Goal)</div>
                    </div>
                    <div className="text-xs font-bold text-white font-mono">38%</div>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1">
                    <div className="bg-emerald-600 h-1 rounded-full w-[38%]"></div>
                  </div>
                </div>

                <div className="p-2 bg-black/40 rounded-xl border border-gray-800">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-800 text-gray-300 font-bold flex items-center justify-center text-[9px]">
                        #3
                      </div>
                      <div className="text-xs font-bold text-white">Arjun M. (₹25L Goal)</div>
                    </div>
                    <div className="text-xs font-bold text-white font-mono">31%</div>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1">
                    <div className="bg-emerald-600 h-1 rounded-full w-[31%]"></div>
                  </div>
                </div>

                <div className="p-2 bg-black/40 rounded-xl border border-gray-800">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-800 text-gray-300 font-bold flex items-center justify-center text-[9px]">
                        #4
                      </div>
                      <div className="text-xs font-bold text-white">Vikram S. (₹75L Goal)</div>
                    </div>
                    <div className="text-xs font-bold text-white font-mono">24%</div>
                  </div>
                  <div className="w-full bg-black/60 rounded-full h-1">
                    <div className="bg-amber-600 h-1 rounded-full w-[24%]"></div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5 CONTENT: MILESTONE PROOFS */}
            {activeTab === 'proofs' && (
              <div className="space-y-2.5 animate-fadeIn">
                <div className="bg-gradient-to-b from-[#0a281c] to-[#04150e] border border-emerald-500/40 rounded-xl p-3 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-[var(--emerald-glow)] text-emerald-300 font-bold flex items-center justify-center text-[10px]">
                        RS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Rohith S.</div>
                        <div className="text-[9px] text-[var(--text-secondary)]">Inner Circle Achievement Feed</div>
                      </div>
                    </div>
                    <span className="text-[9px] bg-emerald-500/20 text-[var(--emerald-glow)] px-1.5 py-0.5 rounded font-mono">
                      Verified ✓
                    </span>
                  </div>

                  <div className="bg-black/50 p-2.5 rounded-lg border border-emerald-500/30 mb-2">
                    <div className="text-xs font-extrabold text-white mb-0.5">
                      🎯 Finished 40% of my ‘₹1 Crore Wealth Goal’!
                    </div>
                    <p className="text-[10px] text-[var(--text-secondary)]">
                      "48-day daily streak. Dream car delivered! 60% left before target age 28."
                    </p>
                  </div>

                  <div className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-[#0c3826] to-[#041910] p-2.5 text-center mb-2">
                    <div className="text-[9px] text-[var(--emerald-glow)] font-mono font-bold">
                      📸 MILESTONE PHOTO PROOF POSTED • CAR KEYS VERIFIED
                    </div>
                    <div className="text-xs font-extrabold text-white font-mono mt-0.5">
                      40% MILESTONE COMPLETE
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <button
                      onClick={handleCheer}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all text-[11px] font-semibold ${
                        hasCheered
                          ? 'bg-emerald-500/20 text-[var(--emerald-glow)] border border-emerald-500/40'
                          : 'bg-black/40 text-[var(--text-secondary)] hover:text-white'
                      }`}
                    >
                      <Heart size={12} className={hasCheered ? 'fill-[var(--emerald-glow)] text-[var(--emerald-glow)]' : ''} />
                      <span>{cheerCount} Cheers</span>
                    </button>
                    <span className="text-[10px] text-[var(--text-secondary)]">8 Circle Comments</span>
                  </div>
                </div>

                <button
                  onClick={handleUploadProof}
                  className="btn-primary w-full text-xs py-2"
                >
                  <Camera size={13} />
                  <span>{proofUploaded ? 'Milestone Proof Posted to Circle! 📸' : 'Simulate Posting Your Milestone Photo'}</span>
                </button>
              </div>
            )}

            {/* Bottom Interactive CTA */}
            <div className="pt-2 border-t border-[rgba(52,211,153,0.15)] flex items-center justify-between mt-3">
              <span className="text-[10px] text-[var(--text-secondary)] font-mono">
                {currentAnimation.badge}
              </span>
              <button
                onClick={onOpenWaitlist}
                className="text-[11px] text-[var(--emerald-glow)] hover:text-white font-bold flex items-center gap-1 transition-colors"
              >
                <span>Reserve Early Access</span>
                <ArrowRight size={12} />
              </button>
            </div>

          </div>

          {/* RIGHT: DYNAMIC 2D ANIMATION SCENE FOR THE ACTIVE SCREEN (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-panel p-3.5 sm:p-5 border border-[rgba(0,255,157,0.3)] bg-gradient-to-b from-[#051c12] to-[#020b06] relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl h-full flex flex-col justify-between">
              
              {/* Dynamic 2D Scene Art */}
              <div className="relative rounded-2xl overflow-hidden mb-3.5 border border-emerald-500/30 group">
                <img 
                  key={currentAnimation.image}
                  src={currentAnimation.image} 
                  alt={currentAnimation.title} 
                  className="w-full h-56 sm:h-64 md:h-72 object-cover object-center transition-all duration-500 group-hover:scale-105 animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020906] via-transparent to-black/30 pointer-events-none"></div>

                {/* Floating animated gold coin orbit halo indicator */}
                <div className="absolute top-3 right-3 pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[var(--emerald-glow)] opacity-70"></span>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 p-0.5 shadow-[0_0_15px_#00ff9d]">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[9px] font-bold text-[var(--gold-glow)]">
                        ✦
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[rgba(0,255,157,0.3)] text-white">
                  <span className="text-[var(--gold-light)] font-bold">{currentAnimation.badge}</span>
                  <span className="text-[var(--emerald-glow)]">{currentAnimation.statusPill}</span>
                </div>
              </div>

              {/* Dynamic Scene Highlights (No heavy text blocks) */}
              <div className="space-y-2 mb-2 font-mono text-[11px]">
                <div className="p-2.5 rounded-xl bg-black/50 border border-emerald-500/25 flex items-center justify-between">
                  <div className="text-[10px] text-[var(--text-secondary)]">{currentAnimation.statLabel}</div>
                  <div className="text-xs font-bold text-[var(--emerald-glow)]">{currentAnimation.statValue}</div>
                </div>

                <div className="bg-[rgba(16,48,33,0.4)] border border-[rgba(0,255,157,0.2)] rounded-xl p-2.5">
                  <div className="text-xs font-bold text-white mb-0.5">
                    {currentAnimation.title}
                  </div>
                  <div className="text-[10px] text-[var(--text-secondary)] leading-relaxed">
                    {currentAnimation.tagline}
                  </div>
                </div>
              </div>

              {/* Quick Tab Switcher Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-2 border-t border-[rgba(52,211,153,0.15)]">
                {['networth', 'rituals', 'goals', 'leaderboard', 'proofs'].map((tabKey) => (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeTab === tabKey ? 'w-6 bg-[var(--emerald-glow)]' : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AppSimulator;
