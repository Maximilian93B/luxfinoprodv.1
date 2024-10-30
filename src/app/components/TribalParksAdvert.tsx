'use client'

import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import Link from 'next/link'

const TribalParksSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-luxpearl to-luxsand rounded-3xl shadow-2xl py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
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
        >
          <Link
            href="#learn-more"
            className="inline-block bg-luxocean text-luxpearl font-bold py-5 px-10 rounded-full transition-all duration-300 font-avenir text-xl hover:bg-luxpearl hover:text-luxcedar hover:shadow-lg transform hover:-translate-y-1"
          >
            Discover Our Commitment
          </Link>
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

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-luxgold via-luxocean to-luxsand"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
    </section>
  )
}

export default TribalParksSection