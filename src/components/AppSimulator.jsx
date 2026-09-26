import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  TrendingUp, ShieldCheck, Flame, Award, Users, CheckCircle2, 
  Sparkles, RefreshCw, ChevronRight, Share2, PlusCircle, Check, AlertCircle, ArrowUpRight, MessageSquare, Lock
} from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function AppSimulator({ onOpenWaitlist }) {
  const [activeTab, setActiveTab] = useState('networth'); // networth, rituals, ratio, circles, merits

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
  const [journalText, setJournalText] = useState('');
  const [streakCount, setStreakCount] = useState(14);
  const [merits, setMerits] = useState(2480);
  const [showStreakPopup, setShowStreakPopup] = useState(false);

  const toggleRitual = (key) => {
    const nextState = { ...ritualsCompleted, [key]: !ritualsCompleted[key] };
    setRitualsCompleted(nextState);

    // Check if all completed
    const allDone = Object.values(nextState).every(Boolean);
    if (allDone && !showStreakPopup) {
      setStreakCount((prev) => prev + 1);
      setMerits((prev) => prev + 100);
      setShowStreakPopup(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Ratio Story State
  const [storyCopied, setStoryCopied] = useState(false);

  // Group Goal Proof state
  const [proofSubmitted, setProofSubmitted] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto my-12 px-4" id="app-simulator">
      
      {/* Header Banner */}
      <div className="text-center mb-8">
        <div className="badge-pill badge-pill-emerald mb-3">
          <Sparkles size={14} />
          <span>Interactive App Experience</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          Inside <span className="gradient-text-emerald">NEORTH</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm md:text-base">
          Try the live simulator below to experience how NEORTH syncs your banks via RBI Account Aggregators, turns goals into daily rituals, and builds your merit score.
        </p>
      </div>

      {/* Main Simulator Card */}
      <div className="glass-panel p-4 md:p-8 relative overflow-hidden border border-[var(--border-emerald)] shadow-2xl">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-[rgba(52,211,153,0.15)] scrollbar-none">
          <button
            onClick={() => setActiveTab('networth')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'networth'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-lg shadow-emerald-500/20'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <TrendingUp size={16} />
            <span>1. RBI Bank & Net Worth</span>
          </button>

          <button
            onClick={() => setActiveTab('rituals')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'rituals'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-lg'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Flame size={16} />
            <span>2. Daily Rituals ({streakCount} 🔥)</span>
          </button>

          <button
            onClick={() => setActiveTab('ratio')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'ratio'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-lg'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Share2 size={16} />
            <span>3. Bi-Annual Ratio Story</span>
          </button>

          <button
            onClick={() => setActiveTab('circles')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'circles'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-lg'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Users size={16} />
            <span>4. Circles & Group Goals</span>
          </button>

          <button
            onClick={() => setActiveTab('merits')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'merits'
                ? 'bg-[var(--emerald-primary)] text-black font-bold shadow-lg'
                : 'bg-[rgba(16,45,32,0.5)] text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Award size={16} />
            <span>5. 7 Merit Tiers</span>
          </button>
        </div>

        {/* TAB 1: NET WORTH & RBI ACCOUNT AGGREGATOR */}
        {activeTab === 'networth' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Phone Screen Mockup */}
            <div className="lg:col-span-7 bg-[#051811] border border-[rgba(52,211,153,0.3)] rounded-3xl p-5 md:p-6 shadow-2xl relative">
              
              {/* Phone Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(52,211,153,0.15)] mb-4">
                <div className="flex items-center gap-2">
                  <NeorthLogo size={28} animated={false} />
                  <div>
                    <div className="text-xs text-[var(--text-secondary)]">Good morning,</div>
                    <div className="text-base font-bold text-white">Rohith S. 👋</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] bg-[rgba(16,185,129,0.15)] text-[var(--emerald-glow)] px-2.5 py-1 rounded-full font-mono flex items-center gap-1 border border-emerald-500/30">
                    <ShieldCheck size={12} /> RBI AA Sync
                  </span>
                </div>
              </div>

              {/* Net Worth Main Card (Inspired by image_2.png) */}
              <div className="bg-gradient-to-br from-[#0c3324] to-[#062016] border border-[rgba(52,211,153,0.3)] rounded-2xl p-5 mb-5 shadow-lg relative overflow-hidden">
                <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold mb-1">
                  Total Consolidate Net Worth
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white font-mono flex items-baseline gap-3">
                  ₹{calculateTotalNetWorth().toLocaleString('en-IN')}
                  <span className="text-xs font-sans text-[var(--emerald-glow)] bg-[rgba(0,255,157,0.1)] px-2.5 py-1 rounded-full flex items-center gap-1">
                    <ArrowUpRight size={14} /> +13% (+₹2,65,000)
                  </span>
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">
                  Assets: ₹{(calculateTotalNetWorth() * 1.15).toLocaleString('en-IN')} | Liabilities: ₹{(calculateTotalNetWorth() * 0.15).toLocaleString('en-IN')}
                </div>

                {/* Micro Sparkline visual */}
                <div className="mt-4 pt-3 border-t border-[rgba(52,211,153,0.2)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>Savings Rate: <strong className="text-white">44%</strong></span>
                  <span>Debt Payoff: <strong className="text-[var(--emerald-glow)]">On Track (82%)</strong></span>
                </div>
              </div>

              {/* Interactive Connected Banks List (RBI AA Simulation) */}
              <div className="space-y-3 mb-5">
                <div className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider flex items-center justify-between">
                  <span>RBI Account Aggregator Linked Feeds</span>
                  <span className="text-[11px] text-[var(--emerald-glow)]">Toggle to test live recalculation</span>
                </div>

                <div
                  onClick={() => toggleBank('hdfc')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    syncedBanks.hdfc
                      ? 'bg-[rgba(16,45,32,0.8)] border-[var(--emerald-glow)]'
                      : 'bg-black/30 border-gray-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/60 text-blue-300 font-bold flex items-center justify-center text-xs">
                      HDFC
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">HDFC Salary Account</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">Finvu AA Consent Verified</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold font-mono text-white">₹8,40,000</div>
                    <div className="text-[10px] text-[var(--emerald-glow)]">{syncedBanks.hdfc ? 'Synced' : 'Disabled'}</div>
                  </div>
                </div>

                <div
                  onClick={() => toggleBank('icici')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    syncedBanks.icici
                      ? 'bg-[rgba(16,45,32,0.8)] border-[var(--emerald-glow)]'
                      : 'bg-black/30 border-gray-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-900/60 text-orange-300 font-bold flex items-center justify-center text-xs">
                      ICICI
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">ICICI Direct Mutual Funds</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">Anumati AA Feed</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold font-mono text-white">₹9,10,000</div>
                    <div className="text-[10px] text-[var(--emerald-glow)]">{syncedBanks.icici ? 'Synced' : 'Disabled'}</div>
                  </div>
                </div>

                <div
                  onClick={() => toggleBank('zerodha')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    syncedBanks.zerodha
                      ? 'bg-[rgba(16,45,32,0.8)] border-[var(--emerald-glow)]'
                      : 'bg-black/30 border-gray-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-300 font-bold flex items-center justify-center text-xs">
                      ZRD
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Zerodha Kite Demat</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">Setu AA Automated Sync</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold font-mono text-white">₹5,30,000</div>
                    <div className="text-[10px] text-[var(--emerald-glow)]">{syncedBanks.zerodha ? 'Synced' : 'Disabled'}</div>
                  </div>
                </div>
              </div>

              {/* What Changed & Why Log (Requested Feature Improvement) */}
              <div className="bg-[rgba(6,21,14,0.9)] border border-[rgba(245,158,11,0.3)] rounded-xl p-4">
                <div className="text-xs font-bold text-[var(--gold-light)] flex items-center gap-2 mb-2">
                  <Sparkles size={14} /> What Changed & Why (Monthly Audit)
                </div>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
                  <li><span className="text-white font-medium">+₹1,40,000</span> Nifty 50 Index SIP market appreciation</li>
                  <li><span className="text-white font-medium">+₹85,000</span> Performance bonus credited via HDFC</li>
                  <li><span className="text-white font-medium">-₹25,000</span> Car loan principal prepayment (Debt reduction)</li>
                </ul>
              </div>

            </div>

            {/* Explanatory Panel for Feature #1 & #2 */}
            <div className="lg:col-span-5 space-y-5">
              <div className="glass-panel p-5 border-l-4 border-l-[var(--emerald-glow)]">
                <h3 className="text-xl font-bold text-white mb-2">
                  Legally Clean RBI Account Aggregator Integration
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-4">
                  In India, NEORTH leverages official **RBI Account Aggregator frameworks (Setu, Finvu, Anumati, Perfios)**. It’s the only legally compliant way to pull consented financial data safely across 20+ banks without screen scraping.
                </p>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[var(--text-emerald)]">
                    <CheckCircle2 size={16} /> 100% Encrypted & User-Consented
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-emerald)]">
                    <CheckCircle2 size={16} /> Real-Time Asset & Liability Balance
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-emerald)]">
                    <CheckCircle2 size={16} /> Dynamic "What Changed & Why" Audit Logs
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(16,45,32,0.4)] border border-[rgba(52,211,153,0.2)] rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--emerald-glow)] mb-2">
                  Recommended AI Action
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-3">
                  "Based on your ₹8.4L liquid balance in HDFC, moving ₹40,000 surplus into high-yield short debt fund will add ₹3,200/mo without risking your liquidity buffer."
                </p>
                <button onClick={onOpenWaitlist} className="btn-secondary w-full text-xs py-2">
                  Apply Action via Mentor
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: DAILY RITUALS & DUOLINGO STREAK */}
        {activeTab === 'rituals' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Phone Ritual Screen */}
            <div className="lg:col-span-7 bg-[#051811] border border-[rgba(52,211,153,0.3)] rounded-3xl p-5 md:p-6 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(52,211,153,0.15)] mb-4">
                <div>
                  <div className="text-xs text-[var(--text-secondary)]">Daily Growth Rituals</div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    Today's Discipline <Flame size={18} className="text-orange-500 fill-orange-500" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5">
                  <Flame size={14} className="fill-amber-400" /> {streakCount} Day Streak
                </div>
              </div>

              {/* Interactive Ritual Steps */}
              <div className="space-y-3 mb-6">
                
                {/* Step 1 */}
                <div
                  onClick={() => toggleRitual('review')}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.review
                      ? 'bg-[rgba(16,185,129,0.15)] border-[var(--emerald-glow)]'
                      : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      ritualsCompleted.review ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.review ? <Check size={14} /> : '1'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Review Your Money</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">Inspected income, expenses & outcomes since last review</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono">+25 Merits</span>
                </div>

                {/* Step 2 */}
                <div
                  onClick={() => toggleRitual('reflect')}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.reflect
                      ? 'bg-[rgba(16,185,129,0.15)] border-[var(--emerald-glow)]'
                      : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      ritualsCompleted.reflect ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.reflect ? <Check size={14} /> : '2'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Reflect & Record</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">Journaled daily win & area to improve</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono">+25 Merits</span>
                </div>

                {/* Step 3 */}
                <div
                  onClick={() => toggleRitual('guidance')}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.guidance
                      ? 'bg-[rgba(16,185,129,0.15)] border-[var(--emerald-glow)]'
                      : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      ritualsCompleted.guidance ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.guidance ? <Check size={14} /> : '3'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Receive AI Guidance</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">Personalized insight & next action step</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono">+25 Merits</span>
                </div>

                {/* Step 4 */}
                <div
                  onClick={() => toggleRitual('circle')}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    ritualsCompleted.circle
                      ? 'bg-[rgba(16,185,129,0.15)] border-[var(--emerald-glow)]'
                      : 'bg-black/30 border-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      ritualsCompleted.circle ? 'bg-[var(--emerald-primary)] text-black' : 'border border-gray-600 text-gray-400'
                    }`}>
                      {ritualsCompleted.circle ? <Check size={14} /> : '4'}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Participate in Circle</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">Reviewed group updates & gave input</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--emerald-glow)] font-mono">+25 Merits</span>
                </div>

              </div>

              {/* Reward Banner */}
              {showStreakPopup && (
                <div className="bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-400/50 rounded-2xl p-4 text-center animate-bounce">
                  <div className="text-sm font-bold text-amber-300 flex items-center justify-center gap-2">
                    <Flame size={18} className="fill-amber-400" /> Milestone Unlocked: {streakCount} Days!
                  </div>
                  <div className="text-xs text-[var(--text-primary)] mt-1">
                    You earned +100 Bonus Merits! Total Balance: <strong className="text-[var(--gold-light)]">{merits} Merits</strong>
                  </div>
                </div>
              )}

            </div>

            {/* Ritual Explanation */}
            <div className="lg:col-span-5 space-y-5">
              <div className="glass-panel p-5 border-l-4 border-l-amber-500">
                <h3 className="text-xl font-bold text-white mb-2">
                  Duolingo-Style Daily Gamification
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-4">
                  Consistency is not a personality trait—it's a system. NEORTH gives you 4 quick daily rituals. Completing them builds streaks, awards Merits, and triggers AI mentor nudges to keep you focused on your target net worth.
                </p>
                <div className="bg-[rgba(6,21,14,0.8)] p-3 rounded-xl border border-amber-500/30 text-xs text-[var(--gold-light)] font-mono">
                  🔥 Next Milestone: 30-Day Streak → Unlocks "1 Crore Club" Private Circle Access!
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: BI-ANNUAL RATIO FLEX STORIES (Q2 & Q4) */}
        {activeTab === 'ratio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Spotify / Strava Style Shareable Story Card */}
            <div className="lg:col-span-6 mx-auto w-full max-w-sm">
              <div className="bg-gradient-to-b from-[#0a2f21] via-[#051c13] to-[#020b07] border-2 border-[var(--emerald-glow)] rounded-3xl p-6 shadow-2xl relative text-center overflow-hidden">
                
                {/* Background Orbital Glow */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--emerald-glow)]/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <NeorthLogo size={28} animated={true} />
                    <span className="font-extrabold text-white text-sm tracking-wider">NEORTH</span>
                  </div>
                  <span className="badge-pill badge-pill-gold text-[10px]">
                    Q4 MERIT REVEAL
                  </span>
                </div>

                <div className="text-xs uppercase text-[var(--text-secondary)] tracking-widest font-semibold mb-2">
                  Income-to-Expense Ratio
                </div>

                {/* Big Ratio Display */}
                <div className="text-6xl font-extrabold text-white font-mono my-3 tracking-tight">
                  5 : 1
                </div>

                <div className="inline-block bg-[rgba(16,185,129,0.2)] border border-[var(--emerald-glow)] text-[var(--emerald-glow)] font-bold text-xs px-3 py-1 rounded-full mb-6">
                  ✨ Elite Financial Discipline (Top 2%)
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-left font-mono">
                  <div className="bg-black/40 p-3 rounded-xl border border-gray-800">
                    <div className="text-[10px] text-[var(--text-secondary)]">NET WORTH GROW</div>
                    <div className="text-lg font-bold text-white">+₹2,65,000</div>
                  </div>
                  <div className="bg-black/40 p-3 rounded-xl border border-gray-800">
                    <div className="text-[10px] text-[var(--text-secondary)]">MERIT LEVEL</div>
                    <div className="text-lg font-bold text-[var(--gold-light)]">Level 4 Elite</div>
                  </div>
                </div>

                <div className="text-xs italic text-[var(--text-secondary)] mb-6">
                  "Building net worth with Timidity and Wavering mind removed."
                </div>

                <button
                  onClick={() => {
                    setStoryCopied(true);
                    setTimeout(() => setStoryCopied(false), 3000);
                  }}
                  className="btn-primary w-full text-xs py-2.5"
                >
                  <Share2 size={16} />
                  <span>{storyCopied ? 'Story Link Copied!' : 'Share to Instagram & LinkedIn'}</span>
                </button>

              </div>
            </div>

            {/* Ratio Story Explanation */}
            <div className="lg:col-span-6 space-y-5">
              <div className="glass-panel p-6 border-l-4 border-l-[var(--emerald-glow)]">
                <div className="badge-pill badge-pill-emerald mb-2">Q2 & Q4 Bi-Annual Feature</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bi-Annual Ratio Videos & Merit Reveals
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Every 6 months (Q2 & Q4), NEORTH compiles your income-to-expense ratios, savings acceleration, and net worth growth into a stunning Spotify Wrapped / Strava-style story card.
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-black/30 rounded-xl border border-gray-800 flex items-center gap-3">
                    <Award className="text-[var(--gold-glow)]" size={20} />
                    <div>
                      <div className="font-bold text-white">No Link Spam in Community</div>
                      <div className="text-[var(--text-secondary)]">Proof-verified financial stats keep flexes clean & authentic.</div>
                    </div>
                  </div>

                  <div className="p-3 bg-black/30 rounded-xl border border-gray-800 flex items-center gap-3">
                    <Sparkles className="text-[var(--emerald-glow)]" size={20} />
                    <div>
                      <div className="font-bold text-white">Social Media Flex Ready</div>
                      <div className="text-[var(--text-secondary)]">Optimized aspect ratio for Instagram Stories, X (Twitter), and LinkedIn.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 4: CIRCLES & GROUP GOALS (VERIFIED BANK BALANCE PROOF) */}
        {activeTab === 'circles' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Phone Screen: Group Goals */}
            <div className="lg:col-span-7 bg-[#051811] border border-[rgba(52,211,153,0.3)] rounded-3xl p-5 md:p-6 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(52,211,153,0.15)] mb-4">
                <div>
                  <div className="text-xs text-[var(--text-secondary)]">Group Goal Verification</div>
                  <div className="text-base font-bold text-white">Family & Friends Wealth Pool</div>
                </div>
                <span className="badge-pill badge-pill-emerald text-[11px]">
                  RBI AA Automated Proof
                </span>
              </div>

              {/* Goal Progress Card */}
              <div className="bg-gradient-to-r from-emerald-950/60 to-black p-4 rounded-2xl border border-emerald-500/30 mb-5">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white">Goal: ₹10,000,000 Real Estate Fund</span>
                  <span className="font-mono text-[var(--emerald-glow)] font-bold">75% Achieved</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-[var(--emerald-glow)] h-2 rounded-full w-3/4"></div>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)]">
                  Finish Date: Dec 31, 2026 | Auto-verified via RBI Bank Feeds within 10 days of completion.
                </div>
              </div>

              {/* Member Contribution Balance Checklist */}
              <div className="space-y-3 mb-5">
                <div className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                  Member Contribution Status (RBI AA Verified)
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-emerald-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-bold flex items-center justify-center text-xs">
                      RS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Rohith (You)</div>
                      <div className="text-[10px] text-[var(--text-secondary)] font-mono">Target: ₹25,00,000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-[var(--emerald-glow)] border border-emerald-500/40 flex items-center gap-1">
                      <Check size={12} /> Balance Verified (GREEN)
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-emerald-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-bold flex items-center justify-center text-xs">
                      PK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Priya K.</div>
                      <div className="text-[10px] text-[var(--text-secondary)] font-mono">Target: ₹25,00,000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-[var(--emerald-glow)] border border-emerald-500/40 flex items-center gap-1">
                      <Check size={12} /> Balance Verified (GREEN)
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-red-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500 text-red-300 font-bold flex items-center justify-center text-xs">
                      VS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Vikram S.</div>
                      <div className="text-[10px] text-[var(--text-secondary)] font-mono">Target: ₹25,00,000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/40 flex items-center gap-1">
                      <AlertCircle size={12} /> Insufficient (RED)
                    </span>
                  </div>
                </div>

              </div>

              {/* Submit Proof Button */}
              <button
                onClick={() => {
                  setProofSubmitted(true);
                  confetti({ particleCount: 50 });
                }}
                className="btn-secondary w-full text-xs py-2.5"
              >
                <PlusCircle size={14} />
                <span>{proofSubmitted ? 'Proof Image Uploaded (+500 Merits!)' : 'Submit Investment Proof & Claim Merits'}</span>
              </button>

            </div>

            {/* Explanation */}
            <div className="lg:col-span-5 space-y-5">
              <div className="glass-panel p-5 border-l-4 border-l-[var(--emerald-glow)]">
                <h3 className="text-xl font-bold text-white mb-2">
                  Personal & Group Goal Proof System
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-4">
                  Friends or families set non-periodic pooled goals. NEORTH tracks synced bank accounts in the background:
                </p>
                
                <ul className="text-xs text-[var(--text-secondary)] space-y-2 list-disc list-inside">
                  <li><strong className="text-[var(--emerald-glow)]">Green Status:</strong> Bank balance meets or exceeds contribution target.</li>
                  <li><strong className="text-red-400">Red Status:</strong> Bank balance under target threshold.</li>
                  <li><strong className="text-white">Verification Window:</strong> Ensures money saved has been transferred to third party within 10 days of completion date!</li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: 7 MERIT TIERS */}
        {activeTab === 'merits' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="badge-pill badge-pill-gold mb-2">7-Level Merit Reputation Architecture</span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Earn Merits. Access Elite Circles & Hangouts.
              </h3>
              <p className="text-xs md:text-sm text-[var(--text-secondary)]">
                Merits reflect your annual financial discipline. They refresh yearly and establish your permanent track record across 7 levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
              
              <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 hover:border-emerald-500 transition-all">
                <div className="text-xs text-emerald-400 font-bold mb-1">TIER 1 & 2</div>
                <div className="text-lg font-bold text-white mb-1">Seed & Pathfinder</div>
                <div className="text-xs text-[var(--text-secondary)] font-sans">0 - 1,000 Merits</div>
                <div className="text-[11px] text-[var(--text-emerald)] mt-2">Unlocks basic forums & daily streak tracker</div>
              </div>

              <div className="bg-black/40 border border-emerald-500/40 rounded-2xl p-4 hover:border-emerald-500 transition-all">
                <div className="text-xs text-[var(--emerald-glow)] font-bold mb-1">TIER 3 & 4</div>
                <div className="text-lg font-bold text-white mb-1">Builder & Accelerator</div>
                <div className="text-xs text-[var(--text-secondary)] font-sans">1,001 - 5,000 Merits</div>
                <div className="text-[11px] text-[var(--text-emerald)] mt-2">Unlocks ₹1 Lakh & ₹10 Lakh Saved Circles</div>
              </div>

              <div className="bg-black/40 border border-amber-500/40 rounded-2xl p-4 hover:border-amber-500 transition-all">
                <div className="text-xs text-amber-400 font-bold mb-1">TIER 5 & 6</div>
                <div className="text-lg font-bold text-white mb-1">Elite & Sovereign</div>
                <div className="text-xs text-[var(--text-secondary)] font-sans">5,001 - 25,000 Merits</div>
                <div className="text-[11px] text-[var(--gold-light)] mt-2">Unlocks IRL Event Creation & Mentorship</div>
              </div>

              <div className="bg-gradient-to-br from-amber-950/60 to-black border border-amber-400 rounded-2xl p-4">
                <div className="text-xs text-amber-300 font-bold mb-1">TIER 7</div>
                <div className="text-lg font-bold text-amber-200 mb-1">Monarch Elite</div>
                <div className="text-xs text-[var(--text-secondary)] font-sans">25,000+ Merits</div>
                <div className="text-[11px] text-amber-300 mt-2">Exclusive Eventbrite / BookMyShow Hangouts</div>
              </div>

            </div>

            <div className="text-center pt-2">
              <button onClick={onOpenWaitlist} className="btn-gold text-xs py-2.5 px-6">
                <Award size={16} />
                <span>Reserve Your Level 1 Status on Launch</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default AppSimulator;
