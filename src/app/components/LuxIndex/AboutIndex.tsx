'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Eye, ChevronRight, ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: "Pop Up Picnics",
    description: "Experience gourmet dining in Tofino&apos;s most breathtaking locations. Our eco-friendly setups and locally-sourced cuisine create unforgettable moments in nature.",
    image: "/LuxPicMain.jpeg",
    link: "/services/pop-up-picnics"
  },
  {
    title: "Lux Remote",
    description: "Escape to secluded paradises with our luxury glamping experiences. Indulge in comfort while immersing yourself in Tofino&apos;s pristine wilderness.",
    image: "/LuxRemotePic2.JPG",
    link: "/services/lux-remote"
  },
  {
    title: "Events, Weddings & Catering",
    description: "From corporate retreats to milestone celebrations, we transform your vision into reality. Our bespoke event planning ensures every detail is perfection.",
    image: "/Catering2.JPG",
    link: "/services/events"
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

  const currentService = hoveredService !== null ? hoveredService : activeService

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-luxpearl py-24 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-playfair font-light mb-16 text-center text-luxcedar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover What LuxFino Can Offer
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <nav className="space-y-6">
              {services.map((service, index) => (
                <motion.button
                  key={service.title}
                  className={`w-full text-left py-6 px-8 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    index === activeService
                      ? 'bg-luxgold text-luxcedar shadow-lg'
                      : 'bg-luxnavy/5 text-luxcedar hover:bg-luxpearl/20'
                  }`}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-3xl font-playfair">{service.title}</h3>
                    <motion.div
                      className="text-luxcedar"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </div>
                  <p className="font-avenir text-lg opacity-80">
                    {service.description.substring(0, 80)}...
                  </p>
                  <motion.div
                    className="absolute top-6 right-4 text-luxocean"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Eye size={40} className='text-luxocean'/>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-luxocean"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>
          </div>

          <div className="lg:w-2/3">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={services[currentService].image}
                    alt={`${services[currentService].title} - LuxFino luxury experience in Tofino`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxocean/50 to-transparent" />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-8 text-luxpearl"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-4xl font-playfair mb-4">{services[currentService].title}</h3>
                    <p className="font-avenir text-xl leading-relaxed mb-6">
                      {services[currentService].description}
                    </p>
                    <motion.a
                      href={services[currentService].link}
                      className="inline-flex items-center text-luxpearl hover:text-luxgold transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ArrowUpRight className="ml-2" size={20} />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-luxcharcoal font-avenir mb-10 text-2xl leading-relaxed max-w-5xl mx-auto">
            Immerse yourself in the perfect blend of luxury and nature with our bespoke experiences. 
            Let us craft unforgettable moments for you in Tofino&apos;s breathtaking landscapes.
          </p>
          <motion.button 
            className="bg-luxcedar text-luxpearl hover:bg-luxgold transition-all duration-300 text-xl px-12 py-5 rounded-full font-avenir font-light tracking-wide shadow-md hover:shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore All Our Services</span>
            <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-2" size={24} />
            <span className="absolute inset-0 bg-luxgold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}