// LuxRemotePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import DiscoverSection from '../components/DiscoverLuxRemote';
import ExperienceAccordion from '../components/ExperienceAccordion';
import CallToAction from '../components/CallToAction';
import TribalParksAdvert from '../components/TribalParksAdvert';
import RemoteInclusive from '../components/Remote-inclusive';


const LuxRemotePage: React.FC = () => {
  return (
    <div className='bg-luxocean'>
      <Navbar />
      <HeroSection />
      <RemoteInclusive />
      <div id="discover-section">
        <DiscoverSection />
      </div>
      <ExperienceAccordion />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LuxRemotePage;
