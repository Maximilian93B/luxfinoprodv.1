'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface DiscoverItemProps {
  title: string;
  imageSrc: string;
  description: string;
  reverse?: boolean;
}

const DiscoverItem: React.FC<DiscoverItemProps> = ({ title, imageSrc, description, reverse = false }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.div 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 mb-8`}
      style={{ opacity, y }}
    >
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{objectFit:"cover"}}
            className="transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxnavy/30 to-transparent" />
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full md:w-1/2 text-left"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl md:text-4xl font-light mb-6 font-playfair text-luxpearl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 font-avenir text-luxpearl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-luxcopper text-luxcedar rounded-full font-light text-lg hover:bg-luxcopper/80 transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(203, 125, 85, 0.8)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Discover More
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

const DiscoverSection: React.FC = () => {
  return (
    <section id="discover" className="py-24 bg-luxocean overflow-hidden">
      <div className="container mx-auto px-8 relative">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-5" />
        <motion.h1 
          className="text-5xl md:text-5xl lg:text-6xl font-light text-center  mb-12 font-playfair text-luxpearl leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Discover the Essence of LuxRemote
        </motion.h1>
        
        <DiscoverItem
          title="Escape to Ultimate Seclusion"
          imageSrc="/DiscoverLuxRemote.JPG"
          description="Uncover a haven untouched by time, where solitude reigns supreme. Nestled in Tofino's pristine wilderness, our exclusive retreat offers unparalleled privacy. Immerse yourself in nature's raw beauty while indulging in the pinnacle of luxury, leaving the world far behind."
        />
        
        <DiscoverItem
          title="Where Luxury Embraces Wilderness"
          imageSrc="/LuxRemotePic2.JPG"
          description="Experience the harmonious blend of untamed beauty and refined elegance. Our secluded accommodations seamlessly integrate with their natural surroundings, offering breathtaking panoramas, exquisite cuisine, and bespoke services. Every detail is meticulously curated to forge an intimate bond with nature without compromising on comfort."
          reverse
        />
        
        <DiscoverItem
          title="Your Personal Sanctuary Beckons"
          imageSrc="/LuxRemote3.JPG"
          description="In this timeless sanctuary, find the space to unwind, rejuvenate, and rediscover your essence. Whether seeking peaceful solitude, a romantic retreat, or an extraordinary adventure, our remote haven adapts to your desires. Immerse yourself in personalized experiences that nourish your soul and craft enduring memories."
        />
      </div>
    </section>
  )
}

export default DiscoverSection;
