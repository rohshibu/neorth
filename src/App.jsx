import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NetWorthCalculator from './components/NetWorthCalculator';
import AppSimulator from './components/AppSimulator';
import PillarsSection from './components/PillarsSection';
import AIMentorSandbox from './components/AIMentorSandbox';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const handleExploreDemo = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#020906] text-white">
      {/* Background Cosmic Grid Pattern */}
      <div className="cosmic-grid"></div>

      {/* Top Sticky Navigation */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <HeroSection
          onOpenWaitlist={handleOpenWaitlist}
          onExploreDemo={handleExploreDemo}
        />

        {/* Interactive Net Worth Growth Calculator */}
        <NetWorthCalculator onOpenWaitlist={handleOpenWaitlist} />

        {/* Interactive App Simulator (RBI AA, Daily Rituals, Ratio Flex, Group Goals, 7 Merit Tiers) */}
        <AppSimulator onOpenWaitlist={handleOpenWaitlist} />

        {/* Four Pillars of NEORTH */}
        <PillarsSection />

        {/* AI Mentor Interactive Sandbox */}
        <AIMentorSandbox onOpenWaitlist={handleOpenWaitlist} />
      </main>

      {/* Footer */}
      <Footer onOpenWaitlist={handleOpenWaitlist} />

      {/* VIP Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}

export default App;
