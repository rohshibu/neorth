import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

export function CountdownTimer({ targetDate = '2027-01-01T00:00:00', compact = false }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  if (compact) {
    return (
      <div className="badge-pill badge-pill-emerald font-mono">
        <Clock size={13} className="animate-spin" style={{ animationDuration: '8s' }} />
        <span>Launch: {timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m</span>
      </div>
    );
  }

  return (
    <div className="glass-panel p-4 md:p-6 text-center border border-[var(--border-emerald)] relative overflow-hidden max-w-xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Calendar size={18} className="text-[var(--emerald-glow)]" />
        <span className="text-xs uppercase tracking-widest text-[var(--emerald-glow)] font-bold">
          Official Platform Launch Countdown
        </span>
      </div>
      <div className="text-xs text-[var(--text-secondary)] mb-4">
        Target Launch Date: <strong className="text-white font-mono">January 1, 2027</strong>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4 font-mono">
        <div className="bg-[rgba(6,21,14,0.8)] border border-[rgba(52,211,153,0.3)] rounded-xl p-2 md:p-3">
          <div className="text-xl md:text-3xl font-extrabold text-white">
            {timeLeft.days}
          </div>
          <div className="text-[10px] md:text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1">
            Days
          </div>
        </div>

        <div className="bg-[rgba(6,21,14,0.8)] border border-[rgba(52,211,153,0.3)] rounded-xl p-2 md:p-3">
          <div className="text-xl md:text-3xl font-extrabold text-[var(--emerald-glow)]">
            {pad(timeLeft.hours)}
          </div>
          <div className="text-[10px] md:text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1">
            Hours
          </div>
        </div>

        <div className="bg-[rgba(6,21,14,0.8)] border border-[rgba(52,211,153,0.3)] rounded-xl p-2 md:p-3">
          <div className="text-xl md:text-3xl font-extrabold text-white">
            {pad(timeLeft.minutes)}
          </div>
          <div className="text-[10px] md:text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1">
            Minutes
          </div>
        </div>

        <div className="bg-[rgba(6,21,14,0.8)] border border-[rgba(245,158,11,0.4)] rounded-xl p-2 md:p-3">
          <div className="text-xl md:text-3xl font-extrabold text-[var(--gold-glow)]">
            {pad(timeLeft.seconds)}
          </div>
          <div className="text-[10px] md:text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
