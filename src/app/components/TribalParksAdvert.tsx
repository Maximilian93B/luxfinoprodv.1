import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

const TribalParksSection: React.FC = () => {
  return (
    <section className="bg-luxsand  rounded-lg shadow-lg py-16 w">
      <div className="container w-full mx-auto text-center px-4 min-h-[45vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/TribalParksLogo.svg"
            width={400}
            height={100}
            alt="Tribal Parks Allies Symbol"
            className="rounded-lg text-white"
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
            className="text-2xl md:text-3xl font-bold mb-6 font-playfair"
          >
            LuxFino is Proud to Support Tribal Parks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-2xl mx-auto text-luxcharcoal text-lg leading-relaxed font-avenir"
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
            className="inline-block bg-luxgold text-luxnavy font-bold py-3 px-6 rounded-full hover:bg-luxblush hover:text-white transition-colors duration-300 font-avenir"
          >
            Learn More About Our Commitment
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TribalParksSection