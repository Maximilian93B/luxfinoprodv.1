"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PicnicsTabs from '../components/PicnicsTabs'
import PicnicsTestimonials from '../components/PicnicsTestimonials'
import PicnicTable from '../components/PicnicTable'
import TribalParksSection from '../components/TribalParksAdvert'

const LuxPicnicsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-luxcream to-luxblush">
      <Navbar />

      <HeroSection 
        backgroundImage="/LuxPicMain.jpeg"
        quote="Experience the luxury of nature"
        subtitle="Luxurious Picnics in Tofino"
        isQuoteVisible={true}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-luxnavy"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A Glimpse at Our Tables
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="shadow-2xl rounded-lg overflow-hidden"
            >
              <PicnicsTabs />
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-luxnavy"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Picnic Offerings
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="shadow-2xl rounded-lg overflow-hidden"
            >
              <PicnicTable />
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-luxnavy"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What Our Guests Say
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <PicnicsTestimonials />
            </motion.div>
          </div>
        </section>

        <TribalParksSection />
      </motion.div>

      <Footer />
    </div>
  )
}

interface HeroSectionProps {
  backgroundImage: string
  quote: string
  subtitle: string
  isQuoteVisible: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  quote,
  subtitle,
  isQuoteVisible,
}) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen md:h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)'
        }}
      >
        <Image
          src={backgroundImage}
          alt="Luxurious picnic setting"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-luxnavy bg-opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 text-left max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Lux Picnics
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl text-luxcream font-light mb-6 max-w-3xl"
          style={{ fontFamily: 'Avenir, sans-serif' }}
        >
          Elevate Your Outdoor Dining Experience
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isQuoteVisible ? 1 : 0, y: isQuoteVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-luxgold font-medium mb-6 max-w-3xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {quote}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl text-white mb-8 max-w-2xl"
          style={{ fontFamily: 'Avenir, sans-serif' }}
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
            className="inline-block bg-luxblush text-luxnavy font-semibold px-8 py-4 rounded-full hover:bg-luxblush hover:text-white transition-colors duration-300 text-lg"
            style={{ fontFamily: 'Avenir, sans-serif' }}
          >
            Book Now
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-luxgold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  )
}

export default LuxPicnicsPage