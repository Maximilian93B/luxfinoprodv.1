'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface BioCardProps {
  name: string
  imageSrc: string
  bio: string
  roles: string[]
}

const BioCard: React.FC<BioCardProps> = ({ name, imageSrc, bio, roles }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-transparent p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-luxpearl p-8 rounded-2xl h-full">
        <div className="flex flex-col items-center">
          <motion.div 
            className="mb-12 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-luxsand shadow-lg">
              <Image
                src={imageSrc}
                alt={name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="absolute -bottom-12 left-1/4 transform -translate-x-1/2 bg-luxgold text-luxcedar px-4 py-1 rounded-full font-avenir font-semibold shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles.join(" & ")}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.h3 
            className="text-4xl font-playfair font-bold mb-8 text-luxcedar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {name}
          </motion.h3>
          <motion.p 
            className="text-luxcedar/90 font-avenir leading-relaxed text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {bio}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default function OwnerFounderSection() {
  return (
    <section className="py-32 bg-transparent rounded-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-12 text-center font-playfair text-luxpearl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The People Behind LuxFino
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-20 max-w-3xl mx-auto text-center font-avenir leading-relaxed text-luxpearl"
        >
          At the heart of LuxFino are Morgan and Dre, a dynamic duo combining their passions for luxury, food, and unforgettable experiences. Together, they bring their love for Tofino and its natural beauty into everything they create, from breathtaking picnics to immersive glamping adventures.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <BioCard
            name="Morgan"
            roles={["Co-Founder", "Experience Curator"]}
            imageSrc="/MorganBoiPIc.JPG" 
            bio="Morgan is dedicated to crafting unforgettable experiences for guests, believing that every moment begins with a lasting first impression. As a curator of beautiful aesthetics, she has a keen eye for hidden treasures and exquisite textiles, ensuring you feel like royalty while you relax and take in the breathtaking views."
          />

          <BioCard
            name="Andres"
            roles={["CEO", "Executive Chef"]}
            imageSrc="/DreHeadShot.JPG" 
            bio="Chef Andres, known as Dre, made his way to Tofino seven years ago, drawn by a deep passion for luxury and culinary artistry. His journey began at the stunning Clayoquot Wilderness Resort, where he infused his Latin American roots into every dish, blending comfort food with vibrant global influences. With over a decade of experience, nothing brings him more joy than seeing a smile after the first bite."
          />
        </div>
      </div>
    </section>
  )
}