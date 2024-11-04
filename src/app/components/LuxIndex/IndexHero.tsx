'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

const services = [
  {
    id: 1,
    image: '/LuxPicMain.jpeg',
    alt: 'Luxury Pop-up Picnics in Tofino',
    title: 'Pop-up Picnics',
    subtitle: 'Dine in Nature',
    description: 'Immerse yourself in Tofino&apos;s breathtaking landscapes with our meticulously curated luxury picnics. Each experience is a perfect blend of elegance, comfort, and unforgettable moments.',
    link: '/luxpicnic'
  },
  {
    id: 2,
    image: '/LuxRemoteIndex.JPG',
    alt: 'Wild Luxury Escapes in Tofino',
    title: 'Off-Grid Adventures',
    subtitle: 'Escape the Ordinary',
    description: 'Embark on an extraordinary journey into Tofino&apos;s wilderness. Our off-grid luxury experiences combine rugged beauty with unparalleled comfort, offering a unique escape from the ordinary.',
    link: '/luxremote'
  },
  {
    id: 3,
    image: '/Catering1.JPG',
    alt: 'Luxury Catering in Tofino',
    title: 'Bespoke Catering',
    subtitle: 'Culinary Excellence',
    description: 'Indulge in exquisite flavors crafted by our executive chef. Our bespoke menus blend the finest local ingredients with global inspiration, creating unparalleled dining experiences in the heart of Tofino.',
    link: '/luxcatering'
  },
]

const ServiceDrawer = ({ service, isExpanded, toggleExpand, isMobile }: { service: any, isExpanded: boolean, toggleExpand: () => void, isMobile: boolean }) => {
  return (
    <motion.div
      className={`relative cursor-pointer overflow-hidden ${isMobile ? 'h-[33vh]' : 'h-[100vh]'}`}
      initial={{ flex: 1 }}
      animate={{ flex: isExpanded ? (isMobile ? 3 : 2) : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={toggleExpand}
    >
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxocean opacity-40" />
      <div className={`absolute inset-0 flex flex-col justify-end p-4 ${isExpanded ? 'pb-16' : 'pb-4'} sm:p-6 sm:pb-20 md:p-8 md:pb-24 text-luxpearl`}>
     <AnimatePresence>   
          {isExpanded && (
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 font-playfair leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {service.title}
            </motion.h2>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isExpanded && (
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 font-avenir"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.subtitle}
            </motion.h3>
          )}
        </AnimatePresence>
        {!isExpanded && (
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 font-playfair">{service.title}</h2>
        )}
        <motion.p
          className="text-md sm:text-lg md:text-xl font-avenir overflow-hidden leading-relaxed"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {service.description}
        </motion.p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-4 sm:mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={service.link}>
                <motion.div 
             className="relative btn px-8 sm:px-12 py-3 sm:py-3 bg-gradient-to-r from-[#D9B88F] to-[#CB7D55] text-luxcedar font-serif font-light tracking-widest text-base sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence></AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function HeroIndex({ showQuoteDrawer }: { showQuoteDrawer: () => void }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col">
      <motion.div
        className="absolute inset-x-0 top-8 z-30 pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-4 sm:pb-8 bg-gradient-to-b from-luxsand/30 to-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10 text-center">
          <motion.h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-3 sm:mb-4 font-playfair text-luxpearl drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-luxcedar block mb-1 sm:mb-2">Welcome to</span>
            <span className="text-luxpearl">LuxFino</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-lg md:text-xl lg:text-2xl text-luxpearl font-avenir text-center drop-shadow-md mb-4 max-w-xl mx-auto px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Luxury Experiences in Tofino
          </motion.p>
        </div>
      </motion.div>

      <div className={`flex-1 flex ${isMobile ? 'flex-col' : 'flex-row'} mt-20 sm:mt-0`}>
        {services.map((service, index) => (
          <ServiceDrawer
            key={service.id}
            service={service}
            isExpanded={expandedIndex === index}
            toggleExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
            isMobile={isMobile}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 mb-2"
      >
        <div
          onClick={() => {
            document.getElementById('services-section')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start' 
            })
          }}
          className="cursor-pointer hover:scale-110 transition-transform duration-300 flex justify-center items-center bg-luxpearl rounded-full p-2"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-luxcedar" />
        </div>
      </motion.div>
    </section>
  )
}