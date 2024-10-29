'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
          src='/LuxIndexPicnic.JPG'
          alt="Luxurious picnic setting"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="transition-transform duration-300 ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxcopper/40 to-luxpearl/40"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 text-left max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-luxcedar mb-4 font-playfair"
        >
          Lux Picnics
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl text-luxcedar font-light mb-6 max-w-3xl font-avenir"
        >
          Elevate Your Outdoor Dining Experience
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isQuoteVisible ? 1 : 0, y: isQuoteVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-luxcedar/80 font-medium mb-6 max-w-3xl font-playfair italic"
        >
          &quot;{quote}&quot;
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl text-luxcedar/80 mb-8 max-w-2xl font-avenir"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-x-4"
        >
          <a
            href="#contact"
            className="inline-block bg-luxpearl text-luxnavy font-semibold px-8 py-4 rounded-full hover:bg-luxgold hover:text-white transition-all duration-300 text-lg font-avenir transform hover:scale-105"
          >
            Book Now
          </a>
          <a
            href="#learn-more"
            className="inline-block border-2 bg-luxcedar border-luxcedar text-luxpearl font-semibold px-8 py-4 rounded-full hover:bg-luxcedar hover:text-luxnavy transition-all duration-300 text-lg font-avenir transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
      </div>

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
            <svg className="w-10 h-10 text-luxgold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}