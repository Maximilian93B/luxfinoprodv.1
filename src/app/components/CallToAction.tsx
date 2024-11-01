'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Briefcase, Sparkles } from 'lucide-react'

const SimpleBooking: React.FC = () => {
  return (
    <section className="py-24 bg-luxocean text-luxpearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-8 font-playfair leading-tight"
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
              <Calendar className="w-12 h-12 mx-auto mb-4 text-luxgold" />
              <h3 className="text-xl font-playfair mb-2">Choose Your Dates</h3>
              <p className="font-avenir">Select your ideal timeframe for the perfect getaway</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-luxgold" />
              <h3 className="text-xl font-playfair mb-2">Tailored Experience</h3>
              <p className="font-avenir">We'll craft a bespoke itinerary just for you</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-luxgold" />
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
            <a 
              href="/book-now" 
              className="inline-block px-8 py-4 bg-luxsand text-luxpearl rounded-full font-avenir text-lg sm:text-xl font-semibold hover:bg-luxpearl hover:text-luxcedar transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Book Your LuxRemote Experience
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleBooking