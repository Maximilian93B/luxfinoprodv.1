'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function EnhancedCTA() {
  return (
    <section className="py-20 bg-luxocean  overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="absolute inset-0  opacity-10" />
        
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-12 h-12 text-luxpearl" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6 font-playfair text-luxpearl leading-tight">
            Craft Your Perfect Escape
          </h2>
          
          <motion.button
            className="group relative px-8 py-3 text-lg font-medium text-luxcedar bg-luxcopper rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin Your Journey</span>
            <motion.div
              className="absolute inset-0 bg-luxpearl"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <p className="text-md mt-6 font-avenir text-luxpearl italic">
            Bespoke experiences tailored just for you
          </p>
        </motion.div>
      </div>
    </section>
  )
}