"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PicnicsTabs from '../components/PicnicsTabs';
import PicnicsTestimonials from '../components/PicnicsTestimonials';
import PicnicTable from '../components/PicnicTable';
import Image from 'next/image'; // If you're using Next.js
import TribalParksSection from '../components/TribalParksAdvert';





const LuxPicnicsPage: React.FC = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  // Make the quote fade in after the page loads
  useEffect(() => {
    const quoteTimer = setTimeout(() => {
      setIsQuoteVisible(true);
    }, 200);
    return () => {
      clearTimeout(quoteTimer);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

    {/* Hero Section */}
    <HeroSection
      backgroundImage="/LuxPicMain.jpeg"
      quote="Let us take care of your every need."
      subtitle="Indulge in a luxurious picnic experience set in the most picturesque locations of Tofino, BC.Indulge in a luxurious picnic experience set in the most picturesque locations of Tofino, BC."
      isQuoteVisible={isQuoteVisible}
    />

  {/* Picnic Packages Section with Tabs */}
  <div className="py-8 bg-gray-100">
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <h2
        className="text-5xl font-bold text-center mb-12"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        A Glimpse at Our Tables
      </h2>

      {/* PicnicsTabs Component */}
      <div className="shadow-lg rounded-lg overflow-hidden">
        <PicnicsTabs />
      </div>
    </div>
  </div>

  {/* Picnic Table Component */}
  <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }} > </h2>
      {/* PicnicTable Component */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <PicnicTable />
        </div>
      </div>
  </div>

  {/* Testimonials Section */}
  <div className="py-16 bg-gray-50">
    <PicnicsTestimonials />
  </div>


{/*Tribal Pakrs Advert */}
 <TribalParksSection/>
  {/* Footer */}
  <Footer />
</div>
  );
};

export default LuxPicnicsPage;







{/* Hero Section Component  */}
interface HeroSectionProps {
  backgroundImage: string;
  quote: string;
  subtitle: string;
  isQuoteVisible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  quote,
  subtitle,
  isQuoteVisible,
}) => {
  return (
    <div className="relative h-screen md:h-[80vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Positioned Left */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 text-left">
        {/* Optional Logo */}
        {/* <div className="mb-4">
          <Image src="/path-to-logo.png" alt="Logo" width={100} height={100} />
        </div> */}

        {/* Header */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 transition-all duration-1000 ease-in-out ${
            isQuoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Lux Picnics
        </h1>

        {/* Quote */}
        <h2
          className={`text-xl sm:text-2xl md:text-3xl text-white font-medium mb-6 max-w-2xl transition-all duration-1000 ease-in-out delay-200 ${
            isQuoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {quote}
        </h2>

        {/* Call to Action Button */}
        <a
          href="#packages"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Explore Our Packages
        </a>
      </div>
    </div>
  );
};