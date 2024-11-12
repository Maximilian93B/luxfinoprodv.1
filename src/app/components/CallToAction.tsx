'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Briefcase, Sparkles } from 'lucide-react'
import Link from 'next/link'

const SimpleBooking: React.FC = () => {
  return (
    <section className="py-24 bg-lux-ocean text-lux-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-8 font-playfair leading-tightt text-lux-gold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Are Ready for You
        </motion.h2>
        <motion.p 
          className="text-xl sm:text-2xl text-center mb-12 font-avenir"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Book your escape and let LuxRemote handle the rest
        </motion.p>

        <motion.div 
          className="bg-luxnavy/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-lux-olive" />
              <h3 className="text-xl font-playfair mb-2">Choose Your Dates</h3>
              <p className="font-avenir">Select your ideal timeframe for the perfect getaway</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-lux-olive" />
              <h3 className="text-xl font-playfair mb-2">Tailored Experience</h3>
              <p className="font-avenir">We&apos;ll craft a bespoke itinerary just for you</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-lux-olive" />
              <h3 className="text-xl font-playfair mb-2">Enjoy Your Stay</h3>
              <p className="font-avenir">Immerse yourself in unparalleled luxury and tranquility</p>
            </div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/book-now" 
                className="h-12 sm:h-14
                  inline-flex items-center justify-center gap-2
                  bg-gradient-to-r from-[#7D8A6A]/90 to-[#556B2F]/90 
                  hover:from-[#556B2F] hover:to-[#7D8A6A]
                  text-[#F8F3E3] text-base sm:text-lg font-medium
                  px-6 sm:px-8 rounded-full
                  shadow-[0_2px_8px_rgba(125,138,106,0.15)]
                  backdrop-blur-sm
                  transition-all duration-300 ease-out
                  hover:shadow-[0_4px_12px_rgba(125,138,106,0.25)]
                  hover:translate-y-[-1px]
                  active:translate-y-[0.5px]
                  whitespace-nowrap
                  group
                  border border-[#7D8A6A]/20"
              >
                Book Your LuxRemote Experience
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleBooking