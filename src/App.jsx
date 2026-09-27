import React, { useState } from 'react';
import CosmicGalaxyBackground from './components/CosmicGalaxyBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NetWorthCalculator from './components/NetWorthCalculator';
import AppSimulator from './components/AppSimulator';
import PillarsSection from './components/PillarsSection';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(() => {
    try {
      const saved = localStorage.getItem('neorth_waitlist_count');
      const parsed = saved ? parseInt(saved, 10) : NaN;
      return !isNaN(parsed) && parsed >= 827 ? parsed : 827;
    } catch {
      return 827;
    }
  });

  const handleIncrementWaitlist = () => {
    setWaitlistCount((prev) => {
      const next = prev + 1;
      try {
        localStorage.setItem('neorth_waitlist_count', next.toString());
      } catch {
        // safe storage handling
      }
      return next;
    });
  };

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
    <div className="min-h-screen flex flex-col relative bg-[#010905] text-white overflow-hidden">
      {/* Dynamic Dark Green Galaxy & Orbit Motion Background */}
      <CosmicGalaxyBackground />

      {/* Top Sticky Navigation */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} waitlistCount={waitlistCount} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <HeroSection
          onOpenWaitlist={handleOpenWaitlist}
          onExploreDemo={handleExploreDemo}
          waitlistCount={waitlistCount}
        />

        {/* Interactive Net Worth Growth Calculator */}
        <NetWorthCalculator onOpenWaitlist={handleOpenWaitlist} />

        {/* Interactive App Simulator (RBI AA, Daily Rituals, Ratio Flex, Group Goals, 7 Merit Tiers) */}
        <AppSimulator onOpenWaitlist={handleOpenWaitlist} />

        {/* Four Pillars of NEORTH */}
        <PillarsSection />
      </main>

      {/* Footer */}
      <Footer onOpenWaitlist={handleOpenWaitlist} waitlistCount={waitlistCount} />

      {/* VIP Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        waitlistCount={waitlistCount}
        onWaitlistSubmitted={handleIncrementWaitlist}
      />
    </div>
  );
}

export default App;
