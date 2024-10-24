import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

const TribalParksSection: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto text-center px-4 min-h-[45vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/TribalParksLogo.svg"
            width={300}
            height={100}
            alt="Tribal Parks Allies Symbol"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            LuxFino is Proud to Support Tribal Parks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed"
          >
            LuxFino is proud to work in collaboration with Tribal Parks Allies, supporting initiatives that preserve the natural beauty of Tofino and respecting the rights and traditions of First Nations communities. Our commitment extends beyond luxury experiences—we aim to contribute positively to the environment and the cultural landscape in which we operate, fostering sustainable tourism and community-driven practices.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8"
        >
          <a
            href="#learn-more"
            className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TribalParksSection;