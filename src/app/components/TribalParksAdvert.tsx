'use client'

import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import Link from 'next/link'

const TribalParksSection: React.FC = () => {
  
  return (
    <section className="bg-gradient-to-b from-luxpearl to-luxcopper rounded-3xl shadow-2xl py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-16"
        >
          <Image
            src="/TribalParksLogo.svg"
            width={500}
            height={125}
            alt="Tribal Parks Allies Symbol"
            className="rounded-lg filter brightness-100 invert"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-luxcharcoal"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 font-playfair text-luxcedar"
          >
            LuxFino: Proud Supporters of Tribal Parks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto text-luxcharcoal text-xl md:text-2xl leading-relaxed font-avenir mb-16"
          >
            At LuxFino, our commitment extends beyond luxury experiences. We are proud to collaborate with Tribal Parks Allies, supporting initiatives that preserve Tofino&apos;s natural beauty and respect First Nations communities&apos; rights and traditions. Our goal is to contribute positively to the environment and cultural landscape, fostering sustainable tourism and community-driven practices.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="#learn-more"
            className="relative btn px-8 sm:px-12 py-3 sm:py-3 bg-gradient-to-r from-[#D9B88F] to-[#CB7D55] text-luxcedar font-serif font-light tracking-widest text-base sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            Discover Our Commitment
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9B88F] to-[#CB7D55] text-luxcedar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
    </section>
  )
}

export default TribalParksSection