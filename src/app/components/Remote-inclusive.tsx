'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Plane,Tent,Compass,ChevronDown } from 'lucide-react'

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <Plane className="w-12 h-12" />,
    title: "Private Floatplane",
    description: "Exclusive aerial transfer with breathtaking coastal views"
  },
  {
    icon: <Tent className="w-12 h-12" />,
    title: "Luxury Retreats",
    description: "Opulent wilderness accommodations with modern comforts"
  },
  {
    icon: <Compass className="w-12 h-12" />,
    title: "Curated Adventures",
    description: "Tailored expeditions unveiling Tofino's hidden wonders"
  },

]

const AllInclusiveExperience: React.FC = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-32 bg-lux-ocean text-lux-ivory overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-luxgold opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-lux-gold opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-light text-center mb-8 font-playfair leading-tight text-lux-gold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Effortlessy Escape with LuxRemote
        </motion.h2>
        <motion.p 
          className="text-2xl md:text-3xl text-center mb-20 font-avenir max-w-3xl mx-auto leading-relaxed text-lux-ivory"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every exquisite detail, meticulously crafted for your perfect escape.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-luxpearl/5 p-6 rounded-2xl backdrop-blur-lg border border-luxcedar/10 hover:border-luxgold/30 transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <motion.div 
                className="bg-gradient-to-br from-transparent to-lux-olive p-4 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-playfair mb-2 text-lux-gold">{service.title}</h3>
              <p className="text-lg font-avenir text-lux-ivory">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-block cursor-pointer"
            onClick={handleScroll}
            whileHover={{ y: 5 }}
          >
            <motion.p 
              className="text-lux-gold text-2xl font-playfair mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Discover More
            </motion.p>
            <motion.div
              className="flex justify-center items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <div className="w-px h-24 bg-gradient-to-b from-lux-olive to-lux-gold" />
            </motion.div>
            <motion.div
              className="mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-lux-ivory mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AllInclusiveExperience