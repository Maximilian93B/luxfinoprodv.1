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
      className={`relative cursor-pointer overflow-hidden ${isMobile ? 'h-1/3' : 'h-full'}`}
      initial={{ flex: 1 }}
      animate={{ flex: isExpanded ? (isMobile ? 2 : 2) : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={toggleExpand}
    >
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxocean opacity-40" />
      <div className={`absolute inset-0 flex flex-col justify-end p-4 ${isExpanded ? 'pb-16' : 'pb-4'} sm:p-6 sm:pb-20 md:p-8 md:pb-24 text-luxpearl`}>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mb-2 sm:mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href={service.link}
                className="inline-block bg-luxocean text-luxpearl px-3 py-1 sm:px-4 sm:py-2 rounded-full font-avenir font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-luxpearl hover:text-luxcedar"
              >
                Learn More
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isExpanded && (
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 font-playfair leading-tight"
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
              className="text-sm sm:text-base md:text-xl font-semibold mb-2 sm:mb-4 font-avenir"
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
          className="text-xs sm:text-sm md:text-base font-avenir overflow-hidden leading-relaxed"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function HeroIndex({ openQuoteDrawer }: { openQuoteDrawer: () => void }) {
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
    <section className="relative h-screen overflow-hidden bg-luxcopper">
      <motion.div
        className="absolute top-[10%] sm:top-1/4 left-0 right-0 z-30 p-4 sm:p-6 md:p-8 transform -translate-y-1/2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 sm:mb-4 font-playfair text-luxpearl sm:text-inherit"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="sm:text-luxcedar">Welcome t</span>
            <span className="sm:text-luxpearl">o</span>
            <span className="sm:text-luxcedar"> </span>
            <span className="sm:text-luxpearl">LuxFino</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-luxpearl font-avenir text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Luxury Experiences in Tofino
          </motion.p>
        </div>
      </motion.div>

      <div className={`h-full flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
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
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div
          onClick={() => {
            document.getElementById('services-section')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start' 
            })
          }}
          className="cursor-pointer hover:scale-110 transition-transform duration-300 flex justify-center items-center bg-luxocean bg-opacity-50 rounded-full p-2"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-luxpearl" />
        </div>
      </motion.div>
    </section>
  )
}