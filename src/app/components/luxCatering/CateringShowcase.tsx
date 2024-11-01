'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseItems = [
  {
    title: "Tofino-Inspired Cuisine",
    description: "Experience the flavors of Tofino with our locally-inspired dishes that capture the essence of the Pacific Northwest.",
    image: "/LuxCateringCard.JPG",
  },
  {
    title: "Local, Sustainable Ingredients",
    description: "We source the freshest ingredients from local Tofino farmers, fishers, and foragers to create our exquisite menus.",
    image: "/LuxCatering2.JPG",
  },
  {
    title: "Oceanfront Event Catering",
    description: "From beachside weddings to corporate retreats, we bring our culinary expertise to Tofino's stunning coastal venues.",
    image: "/luxfino-oceanfront-catering.jpg",
  },
  {
    title: "Seasonal Tofino Specialties",
    description: "Our menus change with the seasons, showcasing the best of what Tofino has to offer throughout the year.",
    image: "/luxfino-seasonal-menu.jpg",
  },
];

const localSpecialties = [
  "Fresh-caught Pacific seafood",
  "Tofino-foraged mushrooms and berries",
  "Locally-brewed craft beers and ciders",
  "Vancouver Island wines",
  "House-smoked salmon and other delicacies",
];


export default function LuxFinoCateringShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <div className="bg-gradient-to-b from-luxpearl  to-luxpsand1 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-luxcedar text-center mb-10 sm:mb-14 lg:mb-16">
          Taste the Best of Tofino with LuxFino Catering
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-luxpearl">{showcaseItems[activeIndex].title}</h3>
                    <p className="text-sm sm:text-base text-luxpearl/90">{showcaseItems[activeIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-luxpearl/60 hover:bg-luxpearl/80 rounded-full p-2 transition-colors duration-300">
                <ChevronLeft className="w-6 h-6 text-luxocean" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-luxpearl/60 hover:bg-luxpearl/80 rounded-full p-2 transition-colors duration-300">
                <ChevronRight className="w-6 h-6 text-luxocean" />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 gap-3">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-luxpearl w-8' : 'bg-luxpearl/40 hover:bg-luxpearl/60'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="grid grid-cols-2 gap-6 bg-luxpearl rounded-xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-luxcedar mb-2">5+</div>
                <div className="text-base sm:text-lg text-luxcedar font-semibold">Years in Tofino</div>
                <div className="text-sm text-luxcedar">Serving the community</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-luxcedar mb-2">30+</div>
                  <div className="text-base sm:text-lg text-luxcedar font-semibold">Local Suppliers</div>
                <div className="text-sm text-luxcedar">Supporting Tofino</div>
              </div>
            </div>
            
            <div className="bg-luxpearl rounded-xl shadow-lg overflow-hidden">
              <div className="bg-luxsand text-luxpearl py-4 px-6">
                <h3 className="text-xl sm:text-2xl font-bold">Tofino&apos;s Finest Ingredients</h3>
              </div>
              <div className="p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {localSpecialties.map((specialty, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-luxsand rounded-full mr-3" />
                      <span className="text-sm sm:text-base text-luxcedar">{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="w-full rounded-xl bg-luxsand hover:bg-luxforest text-luxpearl text-lg sm:text-xl py-4 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Plan Your Tofino Event
            </button>
          </div>
        </div>
          </div>
        </div>
  );
}