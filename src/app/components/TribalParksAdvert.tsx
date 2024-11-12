'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Leaf, Feather, Mountain } from 'lucide-react'

export default function TribalParksSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => setIsExpanded(!isExpanded)

  return (
    <section className="py-12 px-0 md:py-12 md:px-12 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10 px-0 md:px-4">
        <motion.div
          className="flex flex-col items-center justify-center mb-8 md:mb-16 relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative cursor-pointer group w-full"
            onClick={toggleExpanded}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/TribalParksLogo.svg"
              width={1200}
              height={300}
              alt="Tribal Parks Allies Symbol"
              className="rounded-lg w-full md:w-[1000px] relative z-10 brightness-0 invert"
            />
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-lux-charcol flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm font-semibold text-lux-olive">Discover More</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-12 bg-transparent text-lux-ivory p-8 rounded-lg shadow-lg max-w-3xl mx-4"
              >
                <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-lux-gold leading-tight">
                  Tribal Parks Allies: Protecting Indigenous Lands and Cultures
                </h3>
                <p className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                  Our partnership with Tribal Parks Allies goes beyond luxury experiences. We&apos;re committed to preserving Tofino&apos;s natural beauty and respecting First Nations communities&apos; rights and traditions.
                </p>
                <ul className="text-left list-none mb-10 space-y-4 max-w-2xl mx-auto">
                  <li className="flex items-center space-x-3">
                    <Leaf className="w-5 h-5 text-lux-gold flex-shrink-0" />
                    <span className="text-base md:text-lg">Supporting sustainable tourism initiatives</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mountain className="w-5 h-5 text-lux-gold flex-shrink-0" />
                    <span className="text-base md:text-lg">Preserving local ecosystems and wildlife</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Feather className="w-5 h-5 text-lux-gold flex-shrink-0" />
                    <span className="text-base md:text-lg">Promoting cultural awareness and respect</span>
                  </li>
                </ul>
                <div className="text-center">
                  <button className="bg-transparent border border-lux-gold text-lux-gold px-6 py-2 rounded-full font-medium hover:bg-lux-gold hover:text-white transition-all duration-300 text-xs uppercase tracking-widest shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                    Explore Tofino Initiatives
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 font-playfair text-lux-gold"
        >
          LuxFino & Tribal Parks
        </motion.h2>

        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Leaf size={36} className="text-[#7D8A6A]" />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}>
            <Feather size={36} className="text-[#D4AF37]" />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}>
            <Mountain size={36} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}