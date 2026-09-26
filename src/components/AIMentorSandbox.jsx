import React, { useState } from 'react';
import { Bot, Send, Sparkles, Flame, ShieldAlert, Zap } from 'lucide-react';
import NeorthLogo from './NeorthLogo';

export function AIMentorSandbox({ onOpenWaitlist }) {
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Greetings Rohith! I am NEORTH AI—your dedicated financial mentor. I monitor your RBI AA bank feeds, daily streak progress, and goal milestones. What goal are we executing today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const presetQueries = [
    "⚡ Give me my daily hype check & streak motivation!",
    "📈 How do I reach ₹1 Crore Net Worth in 5 years?",
    "🔒 How does RBI Account Aggregator keep my bank feeds safe?",
    "🏆 How do I unlock Tier 5 Elite Merits?",
  ];

  const handleSend = (queryText) => {
    const textToSend = queryText || userQuery;
    if (!textToSend.trim()) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    setUserQuery('');
    setIsTyping(true);

    // Generate response based on prompt keywords
    setTimeout(() => {
      let replyText = "Focus on the daily system. Your consistency is your unfair advantage. Keep logging your rituals!";

      if (textToSend.includes("hype") || textToSend.includes("motivation")) {
        replyText = "🔥 Listen up champ! You're on a 14-day streak with ₹24.8 Lakh Net Worth (+13% this month). You deleted Timidity & Wavering Mind from your dictionary. Take your next action NOW!";
      } else if (textToSend.includes("1 Crore") || textToSend.includes("Net Worth")) {
        replyText = "📈 To hit ₹1 Crore by 2030: Increase monthly equity SIP by ₹15,000, maintain income-to-expense ratio above 4:1, and verify your quarterly goal balances via RBI AA bank feeds. You're 24.8% there!";
      } else if (textToSend.includes("RBI") || textToSend.includes("safe")) {
        replyText = "🔒 NEORTH uses RBI-licensed Account Aggregators (Setu, Finvu, Anumati, Perfios). Your bank credentials are NEVER stored. Data flows end-to-end encrypted with your explicit consent.";
      } else if (textToSend.includes("Merits") || textToSend.includes("Tier")) {
        replyText = "🏆 Tier 5 Elite requires 5,001 Merits. Complete all 4 Daily Rituals (+100/day), submit group goal completion proofs (+500), and maintain a 30-day streak (+250 bonus)!";
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: replyText }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto" id="ai-mentor">
      <div className="glass-panel p-6 md:p-8 border border-[var(--border-emerald)] relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(52,211,153,0.15)]">
          <NeorthLogo size={34} animated={true} />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">NEORTH AI Mentor Sandbox</h3>
              <span className="badge-pill badge-pill-emerald text-[10px]">
                <Zap size={10} /> Active Hype Engine
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Duolingo-style goal encouragement & financial intelligence
            </p>
          </div>
        </div>

        {/* Preset Prompt Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {presetQueries.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(preset)}
              className="text-xs bg-[rgba(16,45,32,0.6)] hover:bg-[rgba(16,185,129,0.2)] border border-[rgba(52,211,153,0.2)] hover:border-[var(--emerald-glow)] text-[var(--text-primary)] px-3 py-1.5 rounded-full transition-all cursor-pointer text-left"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Chat History Box */}
        <div className="bg-[#030e09] border border-gray-800 rounded-2xl p-4 min-h-[220px] max-h-[300px] overflow-y-auto mb-4 space-y-3 font-mono text-xs scrollbar-none">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center text-[var(--emerald-glow)] flex-shrink-0">
                  <Bot size={14} />
                </div>
              )}
              <div
                className={`p-3 rounded-2xl max-w-[85%] font-sans text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[var(--emerald-primary)] text-black font-semibold rounded-tr-none'
                    : 'bg-[rgba(16,45,32,0.8)] border border-[rgba(52,211,153,0.3)] text-white rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 text-[var(--emerald-glow)] text-xs items-center pl-2">
              <Bot size={14} className="animate-spin" />
              <span>NEORTH AI is analyzing financial history...</span>
            </div>
          )}
        </div>

        {/* Input Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Ask NEORTH AI about your net worth goals, rituals, or bank sync..."
            className="flex-1 bg-[#051811] border border-[rgba(52,211,153,0.3)] rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[var(--emerald-glow)]"
          />
          <button type="submit" className="btn-primary py-2.5 px-4 text-xs">
            <Send size={14} />
          </button>
        </form>

      </div>
    </section>
  );
}

export default AIMentorSandbox;
