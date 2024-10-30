'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Utensils, Camera } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const LuxuryPicnicCTA: React.FC = () => {
  const features = [
    { icon: <Sparkles className="w-6 h-6" />, text: "Curated Luxury Experience" },
    { icon: <Heart className="w-6 h-6" />, text: "Romantic Moments" },
    { icon: <Utensils className="w-6 h-6" />, text: "Gourmet Delights" },
    { icon: <Camera className="w-6 h-6" />, text: "Instagram-Worthy Settings" },
  ]

  return (
    <section className="bg-luxnavy text-luxcedar py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 font-playfair"
            >
              Elevate Your Outdoor Dining Experience
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-8 font-avenir"
            >
              Indulge in the epitome of alfresco luxury with Lux.Fino&apos;s bespoke picnic experiences. Immerse yourself in nature&apos;s beauty while savoring exquisite cuisine and creating unforgettable memories.
            </motion.p>
            <motion.ul 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-luxgold">{feature.icon}</span>
                  <span className="font-avenir">{feature.text}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="#book-now" 
                className="inline-block bg-luxcopper text-luxcedar font-bold py-3 px-8 rounded-full hover:bg-luxgold transition-colors duration-300 font-avenir"
              >
                Book Your Luxury Picnic
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="relative h-96 lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/LuxIndexPicnic.JPG"
              alt="Luxury Picnic Setup"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-luxice bg-opacity-20 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-luxnavy bg-opacity-75 p-4 rounded-lg">
             <p className="text-luxpearl text-lg font-avenir">
                &quot;An unforgettable experience that exceeded all our expectations. The attention to detail was impeccable!&quot; - Sarah & John
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LuxuryPicnicCTA