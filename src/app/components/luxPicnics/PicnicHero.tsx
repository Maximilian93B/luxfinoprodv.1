'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'  
import Link from 'next/link'    

interface HeroSectionProps {
  quote: string
  subtitle: string
  isQuoteVisible: boolean
}

export default function PicnicHero({
  quote,
  subtitle,
  isQuoteVisible,
}: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src='/LuxPicMain.jpeg'
          alt="Luxurious picnic setting"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="transition-transform duration-300 ease-out hover:scale-105"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-luxcopper/20 to-luxpearl/20"
          style={{ opacity }}
        ></motion.div>
      </motion.div>

      <motion.div 
        className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 text-left max-w-6xl mx-auto"
        style={{ opacity }}
      >
        <AnimatePresence>
          <motion.h1
            key="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-luxpearl mb-4 font-playfair"
          >
            Lux Picnics
          </motion.h1>

          <motion.h2
            key="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl text-luxcedar font-light mb-6 max-w-3xl font-avenir"
          >
            Elevate Your Outdoor Dining Experience
          </motion.h2>

          {isQuoteVisible && (
            <motion.h3
              key="quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-luxcedar font-medium mb-6 max-w-3xl font-playfair italic"
            >
              &quot;{quote}&quot;
            </motion.h3>
          )}

          <motion.p
            key="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-luxcedar mb-8 max-w-2xl font-avenir"
          >
            {subtitle}
          </motion.p>

          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-x-4"
          >
            <motion.div className="inline-block">
              <Link href="/bookings">
                <motion.span
                  className="inline-block bg-luxpearl text-luxnavy font-semibold px-8 py-4 rounded-full hover:bg-luxgold hover:text-white transition-all duration-300 text-lg font-avenir"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.span>
              </Link>
            </motion.div>
            <motion.a
              href="#how-it-works"
              className="inline-block border-2 bg-luxcedar border-luxcedar text-luxpearl font-semibold px-8 py-4 rounded-full hover:bg-luxcedar hover:text-luxnavy transition-all duration-300 text-lg font-avenir"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="animate-bounce cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ChevronDown size={48} className="text-luxgold" />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}