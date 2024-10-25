'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ExperienceItem {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 'day1',
    title: 'Day 1: Arrival & Immersion',
    content: 'Begin your journey with a scenic seaplane flight over Tofino\'s breathtaking coastline. Upon landing, a personal guide will escort you to your secluded retreat nestled in the wilderness. Enjoy a welcome package featuring local delicacies as you settle into your luxurious surroundings.',
    imageSrc: '/LuxRemoteIndex.JPG',
  },
  {
    id: 'day2',
    title: 'Day 2: Adventure & Indulgence',
    content: 'Awake to the sound of nature and savor a gourmet breakfast prepared by our private chef. Choose your adventure: kayak through serene waters, embark on a guided rainforest hike, or relax with a spa treatment. In the evening, delight in a candlelit dinner under the stars.',
    imageSrc: '/DiscoverLuxRemote.JPG',
  },
  {
    id: 'day3',
    title: 'Day 3: Farewell & Memories',
    content: 'After a leisurely morning, capture the last moments of tranquility before your departure. We\'ll handle all the details to ensure a smooth journey home, leaving you with cherished memories and a renewed spirit.',
    imageSrc: '/LuxRemotePic2.JPG',
  },
]

const LuxuryExperienceWatch: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0)

  const nextDay = () => {
    setActiveDay((prev) => (prev + 1) % experienceData.length)
  }

  const prevDay = () => {
    setActiveDay((prev) => (prev - 1 + experienceData.length) % experienceData.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-luxsand/80 to-luxice overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-5" />
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-16 font-playfair text-luxocean leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Your Lux Remote Journey
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-20 font-avenir text-luxcedar max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Each moment at Lux Remote is thoughtfully curated to offer an unparalleled escape. Immerse yourself in the transformative experience that awaits you:
        </motion.p>
        
        <div className="relative w-full max-w-3xl mx-auto aspect-square">
          {/* Circular background with image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              className="absolute inset-0 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={experienceData[activeDay].imageSrc}
                alt={experienceData[activeDay].title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-luxnavy/50" />
            </motion.div>
          </AnimatePresence>
          
          {/* Circular borders */}
          <div className="absolute inset-0 rounded-full border-8 border-luxsand/30 shadow-lg" />
          <div className="absolute inset-4 rounded-full border border-luxsand/20" />
          <div className="absolute inset-8 rounded-full border border-luxsand/10" />
          
          
          
          {/* Center content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              className="absolute inset-0 flex items-center justify-center p-12"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center text-black">
                <h3 className="text-3xl font-light mb-6 font-playfair">{experienceData[activeDay].title}</h3>
                <p className="text-lg mb-8 font-avenir leading-relaxed">{experienceData[activeDay].content}</p>
                <motion.button
                  className="px-8 py-3 bg-luxsand/80 text-luxocean rounded-full font-light text-lg hover:bg-luxcopper/80 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(203, 125, 85, 0.8)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reserve This Day
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-luxsand/80 text-luxocean rounded-full p-2 shadow-md hover:bg-luxcopper/80 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevDay}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-luxsand/80 text-luxocean rounded-full p-2 shadow-md hover:bg-luxcopper/80 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextDay}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default LuxuryExperienceWatch