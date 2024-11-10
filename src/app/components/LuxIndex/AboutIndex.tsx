'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Eye, ChevronRight, ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: "Luxury Remote Escapes",
    description: "Discover the ultimate in private wilderness luxury. Our exclusive glamping sanctuaries blend five-star comfort with Tofino's untouched natural beauty, creating your own personal paradise.",
    image: "/LuxRemotePic2.JPG",
    link: "/luxremote"
  },
  {
    title: "Pop Up Picnics",
    description: "Elevate your dining experience with our signature luxury picnics. Savor artisanal cuisine amid Tofino's most exclusive locations, where every meal becomes a masterpiece and every moment a cherished memory.",
    image: "/LuxPicMain.jpeg",
    link: "/luxpicnic"
  },
  {
    title: "Events, Weddings & Catering",
    description: "Let us orchestrate your dream celebration. From intimate gatherings to grand affairs, our world-class team crafts bespoke experiences that exceed expectations, ensuring your special day is nothing short of extraordinary.",
    image: "/LuxCateringCard.JPG",
    link: "/luxcatering"
  },
]

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
}

export default function LuxFinoServices() {
  const [activeService, setActiveService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)


  const currentService = hoveredService !== null ? hoveredService : activeService

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
      setProgress(0)
    }, 8000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100))
    }, 80)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8  bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-7xl md:text-7xl font-playfair font-semibold mb-16 text-center text-lux-gold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience Extraordinary Living
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <nav className="space-y-6 " role="tablist">
              {services.map((service, index) => (
                <motion.button
                  key={service.title}
                  className={`
                    w-full text-left py-6 px-8 rounded-xl
                    relative overflow-hidden transition-all duration-500
                    text-lux-gold
                    ${index === activeService 
                      ? 'bg-lux-olive/30 shadow-lg'
                      : 'bg-transparent hover:bg-lux-olive/15'
                    }
                  `}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  role="tab"
                  aria-selected={index === activeService}
                  aria-controls={`panel-${index}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-3xl font-playfair text-lux-gold">{service.title}</h3>
                    <ChevronRight size={24} className="text-lux-gold" />
                  </div>
                  <p className="font-avenir text-lux-ivory text-lg opacity-80">
                    {service.description.substring(0, 80)}...
                  </p>
                  {index === activeService && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-lux-gold"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>
          </div>

          <div className="lg:w-2/3">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="sync">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    initial="initial"
                    animate={currentService === index ? "animate" : "initial"}
                    exit="exit"
                    className={`absolute inset-0 ${
                      currentService === index 
                        ? 'bg-gradient-to-r from-lux-olive/20 to-lux-gold/10'
                        : ''
                    }`}
                    role="tabpanel"
                    id={`panel-${index}`}
                    aria-labelledby={`tab-${index}`}
                    hidden={currentService !== index}
                  >
                    <Image
                      src={service.image}
                      alt={`${service.title} - LuxFino luxury experience in Tofino`}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="transition-opacity duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      loading="eager"
                    />
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      currentService === index
                        ? 'bg-gradient-to-t from-black/40 via-black/40 to-black/20'
                        : 'bg-gradient-to-t from-black/30 via-black/30 to-transparent'
                    }`} />
                    <motion.div 
                      className="absolute inset-0 flex flex-col justify-end p-8 text-luxpearl z-10"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h3 className="text-4xl font-playfair mb-4">{service.title}</h3>
                      <p className="font-avenir text-xl leading-relaxed mb-6 max-w-2xl">
                        {service.description}
                      </p>
                      <motion.a
                        href="#details-section"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="h-14
                          inline-flex items-center justify-center gap-3
                          bg-gradient-to-r from-[#7D8A6A] to-[#556B2F] 
                          hover:from-[#556B2F] hover:to-[#7D8A6A]
                          text-[#F8F3E3] text-lg font-medium
                          px-8 rounded-full
                          shadow-[0_2px_10px_rgba(125,138,106,0.2)]
                          transition-all duration-300 ease-out
                          hover:shadow-[0_5px_20px_rgba(125,138,106,0.3)]
                          hover:translate-y-[-2px]
                          active:translate-y-[1px]
                          whitespace-nowrap
                          group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Learn More</span>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} aria-hidden="true" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-luxgold"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lux-ivory font-avenir mb-10 text-2xl leading-relaxed max-w-5xl mx-auto">
            Welcome to LuxFino, where luxury meets the wild beauty of Tofino. Our signature experiences transform your moments into extraordinary memories, curated exclusively for those who seek the finest things in life. Let us introduce you to a world where wild meets luxury.
          </p>
          <motion.a 
            href="#details-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto h-14 
              inline-flex items-center justify-center gap-3
              bg-gradient-to-r from-[#D4AF37] to-[#B8860B] 
              hover:from-[#B8860B] hover:to-[#D4AF37]
              text-[#F8F3E3] text-lg font-medium
              px-8 rounded-full
              shadow-[0_2px_10px_rgba(212,175,55,0.3)]
              transition-all duration-300 ease-out 
              hover:shadow-[0_5px_20px_rgba(212,175,55,0.4)]
              hover:translate-y-[-2px]
              active:translate-y-[1px]
              group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Begin Your LuxFino Journey</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}