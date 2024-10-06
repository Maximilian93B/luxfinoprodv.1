"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PicnicsTabs from '../components/PicnicsTabs';
import PicnicsTestimonials from '../components/PicnicsTestimonials';
import PicnicTable from '../components/PicnicTable';


const LuxPicnicsPage: React.FC = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);


  // Make the quote fade in after the page loads
  useEffect(() => {
    const quoteTimer = setTimeout(() => { setIsQuoteVisible(true); }, 200);
    return () => { clearTimeout(quoteTimer); };
  }, []);


  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero h-[70vh] bg-cover bg-bottom relative"
        style={{ backgroundImage: `url('/picnic_hero.jpg')`, backgroundPosition: 'center 40%' }}
      >
        <div className="hero-overlay bg-opacity-20"></div>

        {/* Centered Content in Hero Section */}
        <div className="absolute w-full text-center px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Quote */}
          <h2
            className={`text-5xl text-white transition-opacity duration-[3000ms] ease-in-out ${
              isQuoteVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ fontFamily: `'Playfair Display'` }}
          >
            Let us take care of your every need.
          </h2>

          {/* Divider Line */}
          <div className="bg-white py-[1px] mx-auto w-[70%] mt-[10px] mb-[10px]"></div>

          {/* Centered Text (Without Box Background) */}
          <p
            id="picnic-packages"
            className={`text-2xl text-white opacity-90 transition-opacity duration-[3000ms] ease-in-out ${
              isQuoteVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ fontFamily: 'Playfair Display' }}
          >
            Indulge in a luxurious picnic experience set in the most picturesque locations of Tofino, BC.
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="bg-gray-100 py-5 px-6"></div>

      {/* Picnic Packages Section with Tabs */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">

          {/* Divider Line for a modern touch */}
          <div className="w-16 mx-auto border-b-4 border-gray-300 mb-10"></div>

          <h2 className="text-5xl font-bold text-center mb-6" style={{ fontFamily: `'Playfair Display', serif` }}>
            A glimpse at our tables
          </h2>

          {/* PicnicsTabs Component */}
          <div className="shadow-lg rounded-lg overflow-hidden bg-white p-8">
            <PicnicsTabs />
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg overflow-hidden bg-white p-8">
            <PicnicTable />
          </div>
      
      {/* Testimonials Section */}
      <PicnicsTestimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LuxPicnicsPage;
