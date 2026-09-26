import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, ShieldCheck, ArrowUpRight, Coins } from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function NetWorthCalculator({ onOpenWaitlist }) {
  const [savings, setSavings] = useState(600000);
  const [investments, setInvestments] = useState(1400000);
  const [debt, setDebt] = useState(300000);
  const [monthlyContribution, setMonthlyContribution] = useState(45000);

  const currentNetWorth = savings + investments - debt;
  
  // Standard 5-year compounding vs NEORTH Optimized (+14% return rate with automated debt payoff & SIP rebalancing)
  const calculate5YearProjected = (boost = 0) => {
    const rate = (0.12 + boost) / 12;
    const months = 60;
    let futureInvestments = investments;
    for (let i = 0; i < months; i++) {
      futureInvestments = (futureInvestments + monthlyContribution) * (1 + rate);
    }
    return Math.round(savings + futureInvestments - (debt * 0.2));
  };

  const standard5Yr = calculate5YearProjected(0);
  const neorth5Yr = calculate5YearProjected(0.035); // 3.5% extra compounding from NEORTH AI & AA Bank sync

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto" id="calculator">
      <div className="glass-panel p-6 md:p-10 border border-[var(--border-emerald-bright)] relative overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[rgba(0,255,157,0.2)]">
          <div className="flex items-center gap-3">
            <NeorthLogo size={38} animated={true} />
            <div>
              <h3 className="text-2xl font-black text-white font-heading">
                Interactive Net Worth Growth Calculator
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Calculate your 5-year wealth trajectory powered by NEORTH's RBI AA engine
              </p>
            </div>
          </div>
          <div className="badge-pill badge-pill-gold self-start md:self-auto font-mono text-xs">
            <Coins size={14} /> Live Projection Mode
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-2">
                <span>1. Bank Savings & Cash</span>
                <span className="text-[var(--emerald-glow)] font-mono">₹{savings.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={savings}
                onChange={(e) => setSavings(Number(e.target.value))}
                className="w-full accent-[var(--emerald-glow)] cursor-pointer bg-gray-800 rounded-lg h-2"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-2">
                <span>2. Investments (Mutual Funds / Stocks / Gold)</span>
                <span className="text-[var(--emerald-glow)] font-mono">₹{investments.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="20000000"
                step="100000"
                value={investments}
                onChange={(e) => setInvestments(Number(e.target.value))}
                className="w-full accent-[var(--emerald-glow)] cursor-pointer bg-gray-800 rounded-lg h-2"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-2">
                <span>3. Liabilities & Debt</span>
                <span className="text-red-400 font-mono">₹{debt.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={debt}
                onChange={(e) => setDebt(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer bg-gray-800 rounded-lg h-2"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-white mb-2">
                <span>4. Monthly Wealth Contribution</span>
                <span className="text-[var(--gold-light)] font-mono">₹{monthlyContribution.toLocaleString('en-IN')}/mo</span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full accent-[var(--gold-glow)] cursor-pointer bg-gray-800 rounded-lg h-2"
              />
            </div>

          </div>

          {/* Results Visual Card */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Current Net Worth Pill */}
            <div className="bg-gradient-to-br from-[#0a2c1f] to-[#04160e] border border-[var(--emerald-glow)] rounded-2xl p-5 text-center shadow-xl">
              <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold mb-1">
                Your Current Net Worth
              </div>
              <div className="text-4xl font-black text-white font-mono">
                ₹{currentNetWorth.toLocaleString('en-IN')}
              </div>
            </div>

            {/* 5-Year Projection Comparison */}
            <div className="bg-[#030e09] border border-gray-800 rounded-2xl p-5 space-y-3 font-mono">
              <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-sans font-semibold">
                5-Year Wealth Trajectory (2026–2031)
              </div>

              <div className="p-3 bg-black/40 rounded-xl border border-gray-800 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[var(--text-secondary)]">Without System (Generic App)</div>
                  <div className="text-lg font-bold text-white">₹{standard5Yr.toLocaleString('en-IN')}</div>
                </div>
                <span className="text-gray-500 font-sans text-[11px]">Standard 12%</span>
              </div>

              <div className="p-4 bg-gradient-to-r from-emerald-950/80 to-black rounded-xl border-2 border-[var(--emerald-glow)] flex items-center justify-between text-xs shadow-lg">
                <div>
                  <div className="text-[var(--emerald-glow)] font-bold flex items-center gap-1 font-sans">
                    <Sparkles size={14} /> With NEORTH System
                  </div>
                  <div className="text-2xl font-black text-white">₹{neorth5Yr.toLocaleString('en-IN')}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[var(--emerald-glow)] font-sans flex items-center gap-1 justify-end">
                    <ArrowUpRight size={14} /> +₹{(neorth5Yr - standard5Yr).toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-[var(--text-secondary)] font-sans">Extra Wealth Created</div>
                </div>
              </div>

            </div>

            <button onClick={onOpenWaitlist} className="btn-gold w-full text-xs py-3">
              <Sparkles size={16} />
              <span>Lock In Your 5-Year Wealth Goal on Launch</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default NetWorthCalculator;
