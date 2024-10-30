'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowDown } from 'lucide-react'

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

const ServiceDrawer = ({ service, isExpanded, toggleExpand }: { service: any, isExpanded: boolean, toggleExpand: () => void }) => {
  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden"
      initial={{ flex: 1 }}
      animate={{ flex: isExpanded ? 2 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={toggleExpand}
    >
      <Image
        src={service.image}
        alt={service.alt}
        width={1920}
        height={1080}
        className="transition-transform duration-500 ease-in-out transform hover:scale-110"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxocean opacity-40" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 text-luxpearl">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href={service.link}
                className="inline-block bg-luxocean text-luxpearl px-4 py-2 rounded-full font-avenir font-semibold text-sm transition-all duration-300 hover:bg-luxpearl hover:text-luxcedar"
              >
                Learn More
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isExpanded && (
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-playfair leading-tight"
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
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 font-avenir"
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-playfair">{service.title}</h2>
        )}
        <motion.p
          className="text-base sm:text-lg md:text-xl font-avenir overflow-hidden leading-relaxed"
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-2 sm:mb-4 font-playfair text-luxpearl sm:text-inherit"
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
            className="text-xl sm:text-3xl md:text-4xl text-luxpearl font-avenir text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Luxury Experiences in Tofino
          </motion.p>
        </div>
      </motion.div>

      <div className="h-full flex flex-col sm:flex-row mt-24 sm:mt-0">
        {services.map((service, index) => (
          <ServiceDrawer
            key={service.id}
            service={service}
            isExpanded={expandedIndex === index}
            toggleExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center z-10"
      >
        <div
          onClick={() => {
            document.getElementById('services-section')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start' 
            })
          }}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <ArrowDown className="h-8 w-8 sm:h-10 sm:w-10 text-luxpearl" />
        </div>
      </motion.div>
    </section>
  )
}