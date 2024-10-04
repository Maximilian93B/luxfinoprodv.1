"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PicnicsTabs from '../components/PicnicsTabs';
import PicnicsTestimonials from '../components/PicnicsTestimonials';

const LuxPicnicsPage: React.FC = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  // Make the quote fade in after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuoteVisible(true);
    }, 200); // Adjust this delay if you want it to start fading in later

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero h-[85vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url('/pexels-cottonbro-5359324.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-20"></div>

        {/* Large Quote at the Bottom of Hero Section */}
        <div className="absolute w-full text-center px-4">
          <h2
            className={`text-6xl text-white transition-opacity duration-[3000ms] ease-in-out ${
              isQuoteVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ fontFamily: `'Playfair Display'` }}
          >
            Let us take care of your every need.
          </h2>
        </div>

        {/* Explore Packages Button at the bottom right */}
        <div className="absolute w-full flex justify-center bottom-80">
          <a
            href="#picnic-packages"
            className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md  transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white"
          >
            Explore packages
          </a>
        </div>
      </div>

      {/* Introducing the Picnics */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto text-center">
          <p
            id="picnic-packages"
            className="text-xl md:text-2xl text-gray-700"
            style={{ fontFamily: `'Playfair Display'` }}
          >
            Indulge in a luxurious picnic experience set in the most picturesque locations of Tofino, BC.
          </p>
        </div>
      </div>

      {/* Picnic Packages Section with Tabs */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          {/* Divider Line for a modern touch */}
          <div className="w-16 mx-auto border-b-4 border-gray-300 mb-10"></div>

          <h2 className="text-5xl font-bold text-center mb-6" style={{ fontFamily: `'Playfair Display', serif` }}>
            Our Picnic Packages
          </h2>

          <p
            className="text-lg text-center mb-10 max-w-xl mx-auto text-gray-600"
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            All tables are a minimum of 2 hours long and include a beautifully styled tablescape complete with cozy &
            luxurious pillow seating to comfortably lounge in, high-quality blankets, rugs and cushions, decor, infused
            water, waste basket, and personalized welcome chalkboard.
          </p>

          {/* PicnicsTabs Component */}
          <div className="shadow-lg rounded-lg overflow-hidden bg-white p-8">
            <PicnicsTabs />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <PicnicsTestimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LuxPicnicsPage;
