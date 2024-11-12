'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface BioCardProps {
  name: string
  imageSrc: string
  bio: string
  roles: string[]
  vision: string
  passion: string
}

const BioCard: React.FC<BioCardProps> = ({ name, imageSrc, bio, roles, vision, passion }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col">
      <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-transparent p-1 rounded-2xl hover:shadow-lg transition-all duration-300"
      >
        <div className="bg-transparent py-6 sm:py-12 rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="mb-4 sm:mb-6 relative">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-lux-gold shadow-lg">
                <Image
                  src={imageSrc}
                  alt={name}
                  fill  
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 20rem"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="transition-transform duration-300"
                />
              </div>
            </div>
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-2 sm:mb-4 text-lux-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {name}
            </motion.h3>
            <motion.div 
              className="bg-luxgold text-lux-ivory px-3 py-1 rounded-full font-avenir font-semibold shadow-md mb-4 text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {roles.join(" & ")}
            </motion.div>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center w-[90%] sm:w-2/3 md:w-1/2 px-3 py-2.5 sm:py-3 
                bg-[#7D8A6A] text-[#F8F3E3] rounded-full shadow-xl border border-[#F8F3E3]/10 
                font-avenir font-semibold transition-colors duration-300 hover:bg-luxgold hover:text-luxpearl 
                text-[14px] sm:text-base"
            >
              {isExpanded ? (
                <>
                  <span className="mr-1.5 sm:mr-2">Close</span>
                  <ChevronUp size={14} className="sm:w-4 sm:h-4" />
                </>
              ) : (
                <>
                  <span className="mr-1.5 sm:mr-2">Read More</span>
                  <ChevronDown size={14} className="sm:w-4 sm:h-4" />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-lux-olive mt-4 p-4 sm:p-8 rounded-2xl shadow-md overflow-hidden"
          >
            <motion.div 
              className="text-lux-ivory font-avenir leading-relaxed text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-base sm:text-lg mb-4 sm:mb-6">{bio}</p>
              <h4 className="text-2xl sm:text-3xl font-playfair font-bold text-lux-navy mb-3 sm:mb-4">Vision & Passion</h4>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h5 className="text-xl sm:text-2xl font-semibold text-lux-navy mb-1 sm:mb-2">Our Vision:</h5>
                  <p className="text-base sm:text-lg">{vision}</p>
                </div>
                <div>
                  <h5 className="text-xl sm:text-2xl font-semibold text-lux-navy mb-1 sm:mb-2">What Drives Us:</h5>
                  <p className="text-base sm:text-lg">{passion}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function OwnerFounderSection() {
  return (
    <section className="py-8 sm:py-12 bg-transparent rounded-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-12 text-center font-playfair text-lux-gold"
        >
          Meet Your Hosts
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 max-w-3xl mx-auto text-center font-avenir leading-relaxed text-lux-ivory"
        >
          Hey there! We&apos;re Morgan and Dre, two Tofino locals who love creating magical moments. We combined our passions – Morgan&apos;s eye for beautiful spaces and Dre&apos;s incredible culinary skills – to bring you something truly special here in our slice of paradise.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          <BioCard
            name="Morgan"
            roles={["Co-Founder", "Experience Designer"]}
            imageSrc="/MorganBoiPIc.JPG" 
            bio="With an eye for beautiful details and a heart for creating warm, welcoming spaces, I'm all about turning dreams into reality. Whether it's finding that perfect sunset spot or adding those little touches that make you feel special, creating magical moments is what makes my heart happy."
            vision="To help you experience Tofino in a way that feels both luxurious and completely natural – like your own private slice of paradise."
            passion="There's nothing quite like seeing someone's face light up when they walk into one of our setups. That moment of pure joy and wonder? That's what drives me every single day."
          />

          <BioCard
            name="Andres"
            roles={["Co-Founder", "Executive Chef"]}
            imageSrc="/DreHeadShot.JPG" 
            bio="Known around here as Dre, I fell in love with Tofino's incredible food scene seven years ago. After honing my craft at the prestigious Clayoquot Wilderness Resort, I'm excited to bring you dishes that tell a story – combining my Latin American roots with the amazing local ingredients we have here on the coast."
            vision="To create dining experiences that surprise and delight, turning every meal into a moment you'll want to relive again and again."
            passion="Food is how I share love and create connections. When I see someone take that first bite and their eyes light up – that's pure magic. It's about creating those perfect moments, one plate at a time."
          />
        </div>
      </div>
    </section>
  )
}