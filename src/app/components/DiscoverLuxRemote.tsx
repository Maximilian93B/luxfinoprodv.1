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
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 mb-24`}
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
          className="relative h-[500px] overflow-hidden rounded-2xl shadow-md shadow-lux-ivory"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit:"cover"}}
            className="transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lux-ivory/30 to-lux-ivory/50" />
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
          className="text-5xl md:text-5xl font-light mb-6 font-playfair text-lux-gold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-avenir text-lux-ivory leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

const DiscoverSection: React.FC = () => {
  return (
    <section id="discover" className="py-24 bg-lux-ocean overflow-hidden">
      <div className="container mx-auto px-8 relative">
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-7xl font-light text-center mb-20 font-playfair text-lux-gold leading-tight mt-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Discover the Essence of LuxRemote
        </motion.h1>
        
        <DiscoverItem
          title="Ultimate Seclusion"
          imageSrc="/DiscoverLuxRemote.JPG"
          description="Escape to a pristine wilderness haven where luxury meets solitude. Immerse in nature's raw beauty while indulging in unparalleled privacy and opulence."
        />
        
        <DiscoverItem
          title="Where Luxury Meets Wilderness"
          imageSrc="/LuxRemotePic2.JPG"
          description="Experience refined elegance seamlessly integrated with untamed beauty. Enjoy breathtaking vistas, exquisite cuisine, and bespoke services in harmony with nature."
          reverse
        />
        
        <DiscoverItem
          title="Work and Create in Nature's Office"
          imageSrc="/LuxWork.JPG"
         description="Elevate your work in a tranquil sanctuary. With Starlink connectivity, blend productivity and serenity in your private wilderness office, where inspiration knows no bounds."
        />

        <DiscoverItem
          title="Your Personal Sanctuary"
          imageSrc="/LuxRemote3.JPG"
          description="Unwind, rejuvenate, and rediscover yourself in our adaptable haven. From solitude to romance to adventure, immerse in tailored experiences that nourish your soul."
          reverse
        />
            
        <DiscoverItem
          title="Ultimate Wellness "
          imageSrc="/LuxRemoteExp.JPG"
          description="Embark on a transformative journey of self-care. Indulge in bespoke wellness experiences, from forest bathing to gourmet nutrition, designed to revitalize body and mind."
        />

      </div>
    </section>
  )
}

export default DiscoverSection;