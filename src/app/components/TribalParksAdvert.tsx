'use client'

import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

const TribalParksSection: React.FC = () => {
  return (
    <section className="bg-transparent rounded-lg shadow-2xl py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <Image
            src="/TribalParksLogo.svg"
            width={400}
            height={100}
            alt="Tribal Parks Allies Symbol"
            className="rounded-lg filter brightness-0 invert"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-luxcharcoal"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-playfair text-luxpearl"
          >
            LuxFino is Proud to Support Tribal Parks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-3xl mx-auto text-luxcharcoal text-lg md:text-xl leading-relaxed font-avenir mb-12 text-luxpearl/80"
          >
            LuxFino is proud to work in collaboration with Tribal Parks Allies, supporting initiatives that preserve the natural beauty of Tofino and respecting the rights and traditions of First Nations communities. Our commitment extends beyond luxury experiences—we aim to contribute positively to the environment and the cultural landscape in which we operate, fostering sustainable tourism and community-driven practices.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="#learn-more"
            className="inline-block bg-luxocean text-luxpearl font-bold py-4 px-8 rounded-full transition-colors duration-300 font-avenir text-lg hover:bg-luxsand hover:text-luxpearl"
          >
            Learn More About Our Commitment
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-luxnavy opacity-5 z-0">
        <Image
          src="/tribal-pattern.png"
          layout="fill"
          objectFit="cover"
          alt="Tribal pattern background"
          className="mix-blend-overlay"
        />
      </div>
    </section>
  )
}

export default TribalParksSection