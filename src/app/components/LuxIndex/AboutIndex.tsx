'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Eye } from 'lucide-react'

const services = [
  {
    title: "Pop Up Picnics",
    description: "Experience gourmet dining in Tofino&apos;s most breathtaking locations. Our eco-friendly setups and locally-sourced cuisine create unforgettable moments in nature.",
    image: "/LuxPicMain.jpeg"
  },
  {
    title: "Lux Remote",
    description: "Escape to secluded paradises with our luxury glamping experiences. Indulge in comfort while immersing yourself in Tofino&apos;s pristine wilderness.",
    image: "/LuxRemotePic2.JPG"
  },
  {
    title: "Events",
    description: "From corporate retreats to milestone celebrations, we transform your vision into reality. Our bespoke event planning ensures every detail is perfection.",
    image: "/Catering2.JPG"
  },
  {
    title: "Weddings",
    description: "Say 'I do' in nature's embrace. Our sustainable wedding experiences blend romance with Tofino&apos;s raw beauty for a truly magical celebration.",
    image: "/WeddingPIc.JPG"
  },
  {
    title: "Catering",
    description: "Savor the flavors of the Pacific Northwest with our artisanal catering. Our chefs craft exquisite menus using the finest local and sustainable ingredients.",
    image: "/LuxCateringCard.JPG"
  }
]

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
}

const LuxFinoServices: React.FC = () => {
  const [activeService, setActiveService] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const currentService = hoveredService !== null ? hoveredService : activeService

  return (
    <section className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-playfair font-light mb-12 text-center text-luxnavy"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LuxFino offers a range of services to make your experience unforgettable
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <nav className="space-y-4">
              {services.map((service, index) => (
                <motion.button
                  key={service.title}
                  className={`w-full text-left py-4 px-6 rounded-lg transition-all duration-300 relative overflow-hidden ${
                    index === activeService
                      ? 'bg-luxgold text-luxnavy'
                      : 'bg-luxnavy/5 text-luxnavy hover:bg-luxgold/20'
                  }`}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-2xl font-playfair mb-2">{service.title}</h3>
                  <p className="font-avenir text-sm opacity-80">
                    {service.description.substring(0, 60)}...
                  </p>
                  <motion.div
                    className="absolute top-2 right-2 text-luxpearl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Eye size={20} />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-luxgold"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={services[currentService].image}
                  alt={services[currentService].title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxnavy/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-luxpearl">
                  <h3 className="text-3xl font-playfair mb-4">{services[currentService].title}</h3>
                  <p className="font-avenir text-lg leading-relaxed">
                    {services[currentService].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-luxcharcoal font-avenir mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Discover the perfect blend of luxury and nature with our bespoke experiences. 
            Let us craft unforgettable moments for you in Tofino&apos;s breathtaking landscapes.
          </p>
          <motion.button 
            className="bg-luxcedar text-luxpearl hover:bg-luxgold transition-all duration-300 text-lg px-10 py-4 rounded-full font-avenir font-light tracking-wide shadow-md hover:shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Our Services</span>
            <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-luxgold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default LuxFinoServices