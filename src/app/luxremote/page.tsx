// LuxRemotePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Additional components
import HeroSection from '../components/HeroSection';
import DiscoverSection from '../components/DiscoverLuxRemote';
import ExperienceAccordion from '../components/ExperienceAccordion';

import CallToAction from '../components/CallToAction';

const LuxRemotePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DiscoverSection />
      <ExperienceAccordion />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LuxRemotePage;
