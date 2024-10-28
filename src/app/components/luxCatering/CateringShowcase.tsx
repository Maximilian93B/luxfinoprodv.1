'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const showcaseItems = [
  {
    title: "Tofino-Inspired Cuisine",
    description: "Experience the flavors of Tofino with our locally-inspired dishes that capture the essence of the Pacific Northwest.",
    image: "/luxfino-tofino-dish.jpg",
  },
  {
    title: "Local, Sustainable Ingredients",
    description: "We source the freshest ingredients from local Tofino farmers, fishers, and foragers to create our exquisite menus.",
    image: "/luxfino-local-ingredients.jpg",
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

  return (
    <div className="bg-gradient-to-b from-luxforest to-luxocean py-8 sm:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-luxpearl text-center mb-8 sm:mb-16">
          Taste the Best of Tofino with LuxFino Catering
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <div className="carousel w-full h-[300px] sm:h-[450px] rounded-box shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="carousel-item relative w-full h-full"
                >
                  <Image
                    src={showcaseItems[activeIndex].image}
                    alt={showcaseItems[activeIndex].title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-luxpearl to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-luxcedar">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{showcaseItems[activeIndex].title}</h3>
                    <p className="text-base sm:text-lg">{showcaseItems[activeIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-circle ${
                    index === activeIndex ? 'btn-primary' : 'btn-ghost'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="stats shadow-xl bg-gr p-4 sm:p-6">
              <div className="stat">
                <div className="stat-figure text-luxsand">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="stat-title text-base sm:text-lg">Years in Tofino</div>
                <div className="stat-value text-4xl sm:text-5xl py-1 sm:py-2">5+</div>
                <div className="stat-desc text-sm sm:text-base">Serving the local community</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-luxsand">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div className="stat-title text-base sm:text-lg">Local Suppliers</div>
                <div className="stat-value text-4xl sm:text-5xl py-1 sm:py-2">30+</div>
                <div className="stat-desc text-sm sm:text-base">Supporting Tofino's economy</div>
              </div>
            </div>
            
            <div className="card bg-luxpearl text-luxcedar font-bold shadow-xl">
              <div className="card-body p-6 sm:p-8">
                <h3 className="card-title text-xl sm:text-2xl mb-3 sm:mb-4">Tofino's Finest Ingredients</h3>
                <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-base sm:text-lg">
                  {localSpecialties.map((specialty, index) => (
                    <li key={index}>{specialty}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="btn btn-block rounded-lg bg-luxpearl hover:bg-luxforest hover:text-luxpearl text-lg sm:text-xl py-2">
              Plan Your Tofino Event
            </button>
          </div>
        </div>

        <div className="py-8 sm:py-16 bg-gradient-to-b from-luxpearl to-luxice my-4 sm:my-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-luxcedar text-center mb-6 sm:mb-10">
                Voices from Tofino
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                    name: "Sarah & Tom",
                    role: "Newlyweds",
                    image: "/sarah-tom.jpg",
                    quote: "LuxFino Catering captured the essence of Tofino in every bite. Our wedding guests are still raving about the locally-sourced seafood!"
                    },
                    {
                    name: "Mark",
                    role: "Tofino Surf Co.",
                    image: "/mark.jpg",
                    quote: "As a local business owner, I appreciate LuxFino's commitment to using Tofino's finest ingredients. They've catered all our corporate events with excellence."
                    }
                ].map((testimonial, index) => (
                    <div key={index} className="card bg-luxpearl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body p-6">
                        <div className="flex items-center mb-4">
                        <div className="avatar">
                            <div className="w-14 rounded-full ring ring-luxocean ring-offset-2">
                            <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-luxforest">{testimonial.name}</h3>
                            <p className="text-sm text-luxocean">{testimonial.role}</p>
                        </div>
                        </div>
                        <p className="text-luxcedar mb-4">{testimonial.quote}</p>
                        <div className="flex justify-end">
                        <div className="rating rating-sm">
                            {[...Array(5)].map((_, i) => (
                            <input key={i} type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-luxocean" checked readOnly />
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                <div className="text-center mt-8">
                <button className="btn btn-primary bg-luxocean hover:bg-luxforest text-luxpearl">
                    Read More Reviews
                </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}