'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseItems = [
  {
    title: "Elegant Weddings",
    description: "Create unforgettable memories with our bespoke wedding catering services, tailored to your unique love story.",
    image: "/WeddingPIc.JPG",
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and team with our professional catering services for meetings, conferences, and galas.",
    image: "/CateringSale2.JPG",
  },
  {
    title: "Intimate Gatherings",
    description: "Elevate your private parties and family celebrations with our personalized catering experiences.",
    image: "/LuxCateringCard.JPG",
  },
  {
    title: "Coastal Cuisine",
    description: "Experience the flavors of Tofino with our locally-inspired dishes that capture the essence of the Pacific Northwest.",
    image: "/Catering4.JPG",
  },
];

const eventSpecialties = [
  "Custom menu creation",
  "On-site chef services",
  "Full-service staffing",
  "Bar and beverage services",
  "Event styling and decor",
];

export default function LuxFinoEventsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <div className="bg-[#F8F3E3] sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2233] text-center mb-10 sm:mb-14 lg:mb-16">
          Unforgettable Events, Exquisite Catering
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-xl shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={showcaseItems[activeIndex].image}
                    alt={showcaseItems[activeIndex].title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#F8F3E3]">{showcaseItems[activeIndex].title}</h3>
                    <p className="text-sm sm:text-base text-[#F8F3E3]/90">{showcaseItems[activeIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F8F3E3]/60 hover:bg-[#F8F3E3]/80 rounded-full p-2 transition-colors duration-300">
                <ChevronLeft className="w-6 h-6 text-[#0C2233]" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F8F3E3]/60 hover:bg-[#F8F3E3]/80 rounded-full p-2 transition-colors duration-300">
                <ChevronRight className="w-6 h-6 text-[#0C2233]" />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 gap-3">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#D4AF37] w-8' : 'bg-[#D4AF37]/40 hover:bg-[#D4AF37]/60'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="grid grid-cols-2 gap-6 bg-[#F8F3E3] rounded-xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#0C2233] mb-2">100+</div>
                <div className="text-base sm:text-lg text-[#0C2233] font-semibold">Events Catered</div>
                <div className="text-sm text-[#333333]">Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#0C2233] mb-2">5⭐</div>
                <div className="text-base sm:text-lg text-[#0C2233] font-semibold">Customer Rating</div>
                <div className="text-sm text-[#333333]">Based on 200+ reviews</div>
              </div>
            </div>
            
            <div className="bg-[#F8F3E3] rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#0C2233] text-[#F8F3E3] py-4 px-6">
                <h3 className="text-xl sm:text-2xl font-bold">Our Event Services</h3>
              </div>
              <div className="p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {eventSpecialties.map((specialty, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3" />
                      <span className="text-sm sm:text-base text-[#0C2233]">{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center py-8">
            <button className="w-full rounded-xl bg-[#0C2233] hover:bg-[#D4AF37] text-[#F8F3E3] text-lg sm:text-xl py-4 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Request a Custom Quote
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}