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
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--lux-olive)] via-[var(--lux-navy)] to-[var(--lux-olive)] rounded-lg opacity-20 group-hover:opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Image
              src="/TribalParksLogo.svg"
              width={1200}
              height={300}
              alt="Tribal Parks Allies Symbol"
              className="rounded-lg w-full md:w-[1000px] relative z-10"
            />
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-lux-charcol flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm font-semibold">Discover More</span>
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
                className="mt-8 bg-lux-olive text-lux-ivory p-6 rounded-lg shadow-lg max-w-3xl"
              >
                <h3 className="text-2xl font-bold mb-4">Tribal Parks Allies: Protecting Indigenous Lands and Cultures</h3>
                <p className="text-lg mb-4">
                  Our partnership with Tribal Parks Allies goes beyond luxury experiences. We're committed to preserving Tofino's natural beauty and respecting First Nations communities' rights and traditions.
                </p>
                <ul className="text-left list-disc list-inside mb-4">
                  <li>Supporting sustainable tourism initiatives</li>
                  <li>Preserving local ecosystems and wildlife</li>
                  <li>Promoting cultural awareness and respect</li>
                </ul>
                <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#B08000] transition-colors">
                  Learn About Other Tofino Initiatives
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 font-playfair text-lux-olive"
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