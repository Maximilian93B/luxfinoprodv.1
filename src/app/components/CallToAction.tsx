'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function EnhancedCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-luxocean to-luxforest overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10" />
        
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
            <Sparkles className="w-12 h-12 text-luxsand" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6 font-playfair text-luxice leading-tight">
            Craft Your Perfect Escape
          </h2>
          
          <motion.button
            className="group relative px-8 py-3 text-lg font-semibold text-luxocean bg-luxsand rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin Your Journey</span>
            <motion.div
              className="absolute inset-0 bg-luxcopper"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <p className="text-sm mt-4 font-avenir text-luxsand italic">
            Bespoke experiences tailored just for you
          </p>
        </motion.div>
      </div>
    </section>
  )
}