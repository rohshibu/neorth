import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, ShieldCheck, CheckCircle2, Copy } from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function WaitlistModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    targetGoal: '₹1 Crore by 2030',
  });

  const [submitted, setSubmitted] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel p-6 md:p-8 max-w-md w-full relative border border-[var(--border-emerald-bright)] shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <NeorthLogo size={36} animated={true} />
              <div>
                <h3 className="text-2xl font-black text-white font-heading">Join Waitlist</h3>
                <p className="text-xs text-[var(--emerald-glow)] font-mono font-bold">
                  Platform Launch: January 1, 2027
                </p>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] mb-5">
              Get early access to consented RBI Account Aggregator bank feeds, net worth tracking, and daily money rituals.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rohith Sharma"
                  className="w-full bg-[#04160d] border border-[rgba(0,255,157,0.3)] rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--emerald-glow)]"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rohith@neorth.com"
                  className="w-full bg-[#04160d] border border-[rgba(0,255,157,0.3)] rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--emerald-glow)]"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">
                  Target Net Worth Goal
                </label>
                <select
                  value={formData.targetGoal}
                  onChange={(e) => setFormData({ ...formData, targetGoal: e.target.value })}
                  className="w-full bg-[#04160d] border border-[rgba(0,255,157,0.3)] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[var(--emerald-glow)]"
                >
                  <option value="₹50 Lakhs">₹50 Lakhs</option>
                  <option value="₹1 Crore by 2030">₹1 Crore by 2030</option>
                  <option value="₹5 Crores">₹5 Crores</option>
                  <option value="₹10 Crores+">₹10 Crores+</option>
                </select>
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full text-sm py-3">
                  <Sparkles size={16} />
                  <span>Join Waitlist</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[var(--text-secondary)] pt-1">
                <ShieldCheck size={12} className="text-[var(--emerald-glow)]" />
                <span>Legally clean consented bank feeds via RBI Account Aggregators</span>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-[rgba(0,255,157,0.2)] border-2 border-[var(--emerald-glow)] rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--emerald-glow)]">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              You are on the Waitlist, {formData.name || 'Visionary'}!
            </h3>

            <p className="text-xs text-[var(--text-secondary)] mb-5 max-w-sm mx-auto">
              We will notify you at your email address when early onboarding begins for the January 1, 2027 launch.
            </p>

            <div className="bg-[rgba(4,22,13,0.9)] border border-[rgba(0,255,157,0.3)] rounded-2xl p-4 mb-5 text-xs text-left font-mono">
              <div className="text-[10px] text-[var(--text-secondary)] mb-1">YOUR EXCLUSIVE REFERRAL LINK</div>
              <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-xl border border-gray-800">
                <span className="text-[var(--emerald-glow)] truncate">neorth.app/waitlist?ref=NEORTH-2027</span>
                <button
                  onClick={() => {
                    setLinkCopied(true);
                    setTimeout(() => setLinkCopied(false), 2500);
                  }}
                  className="text-white hover:text-[var(--emerald-glow)] p-1"
                >
                  {linkCopied ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <button onClick={onClose} className="btn-secondary w-full text-xs py-2.5">
              Back to NEORTH Platform
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal;
