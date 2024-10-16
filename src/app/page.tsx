'use client'

import React from "react";
import { NextPage } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TribalParksSection from "./components/TribalParksAdvert";
import IndexHeroSection from "./components/IndexHero";
import AboutSection from "./components/AboutLuxIndex";
import ServiceSections from "./components/LuxServicesSection";
import OwnerFounderSection from "./components/Founders";
import SecipalEventsSection from "./components/SpecialEventsCards";



{/* Page Structure */}
const HomePage: NextPage = () => {

  return (
    <div className="bg-white text-black">
      <Navbar />
      <IndexHeroSection/>
      <AboutSection />
      <ServiceSections />
      <SecipalEventsSection />
      <OwnerFounderSection />
      <TribalParksSection />
      <Footer />
    </div>
  );
};

{/* Home Page Layout */}
export default HomePage;

