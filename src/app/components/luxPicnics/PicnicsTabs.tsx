'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Sunset, GlassWater, HeartHandshake, Sparkles } from 'lucide-react'

const picnicPackages = [
  {
    title: 'The Ultimate Cuddle Puddle',
    name: 'The Ultimate Cuddle Puddle',
    price: '$250',
    people: '2 people',
    duration: '2 hours',
    description: "Snuggle up with your cuddle buddy and watch the sunset melt into the horizon with this beautifully curated pillow and blanket setup. We will ensure you are warm and cozy with a variety of plush pillows and blankets set in the most picture perfect location!",
    imageSrc: '/LuxPicMain.jpeg',
    imageAlt: 'Cozy beachside setup with pillows and blankets for the Ultimate Cuddle Puddle',
    link: '/packages/ultimate-cuddle-puddle',
    icon: Sunset
  },
  {
    title: 'Golden Hour',
    name: 'Lux.Fino Golden Hour',
    price: '$470',
    people: '2 people',
    duration: '2 hours',
    description: 'A true Tofino picnic experience! Feeling peckish? We have you covered with our locally curated charcuterie grazing boards fit for Queens and Kings. This table is the perfect match to ignite your ultimate vacation mode.',
    imageSrc: '/Catering2.jpg',
    imageAlt: 'Luxurious picnic setup during golden hour with gourmet charcuterie board',
    link: '/packages/golden-hour',
    icon: GlassWater
  },
  {
    title: 'The Perfect Proposal Package',
    name: 'The Perfect Proposal Package',
    price: '$800',
    people: '2 people',
    duration: '2 hours',
    description: 'Create an unforgettable experience for you and the one you call forever. This one-of-a-kind, intimate and romantic picnic experience will have you falling head over heels all over again. Take this time to sit back, relax and leave all the special details to us, as we will help coordinate and prepare your special day to perfection.',
    imageSrc: '/Catering3.jpg',
    imageAlt: 'Romantic picnic setup perfect for a marriage proposal',
    link: '/packages/perfect-proposal',
    icon: HeartHandshake
  },
  {
    title: 'Grand Luxury Experience',
    name: 'Grand Luxury Experience',
    price: '$770',
    people: '2 people',
    duration: '2 hours',
    description: 'Immerse yourself in the pinnacle of outdoor opulence with our most lavish offering.',
    imageSrc: '/DiscoverLuxRemote.JPG',
    imageAlt: 'Grand luxury picnic experience',
    link: '/packages/grand-luxury',
    icon: Sparkles
  },
]

const PicnicsSection: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % picnicPackages.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative w-full bg-luxpearl">
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-luxnavy font-playfair"
        >
          Choose Your Picnic
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {picnicPackages.map((pkg, index) => (
            <motion.button
              key={pkg.title}
              className={`text-md sm:text-lg md:text-xl font-semibold py-2 px-4 rounded-full transition-all duration-300 mb-2 sm:mb-0 ${
                index === currentTab
                  ? 'bg-luxnavy text-luxcedar shadow-lg'
                  : 'bg-luxcopper text-luxcedar hover:bg-luxblush'
              }`}
              onClick={() => setCurrentTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {pkg.title}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <motion.div 
            className="order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.h3
                key={`title-${currentTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-luxnavy font-playfair"
              >
                {picnicPackages[currentTab].name}
              </motion.h3>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base md:text-lg text-luxnavy mb-8 leading-relaxed font-avenir"
              >
                {picnicPackages[currentTab].description}
              </motion.p>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              <motion.p 
                className="text-2xl sm:text-3xl text-luxgold font-avenir"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {picnicPackages[currentTab].price}
              </motion.p>
              <motion.div 
                className="flex items-center text-base sm:text-lg text-luxnavy font-avenir"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-4">{picnicPackages[currentTab].people}</span>
                <span>{picnicPackages[currentTab].duration}</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-8"
            >
              <Link 
                href={picnicPackages[currentTab].link}
                className="inline-block px-6 py-3 bg-luxcopper text-luxcedar text-base md:text-lg rounded-full hover:bg-luxnavy hover:text-white transition-all duration-300 shadow-md"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full h-64 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                {picnicPackages.map((pkg, index) => (
                  index === currentTab && (
                    <motion.div
                      key={pkg.title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={pkg.imageSrc}
                        alt={pkg.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxnavy opacity-30"></div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-luxnavy font-playfair">Why Choose Lux.Fino Picnics?</h3>
          <ul className="space-y-4 sm:space-y-6 text-luxcharcoal font-avenir max-w-2xl mx-auto">
            <li className="flex items-center">
              <span className="mr-6">
                <GlassWater className="w-6 sm:w-8 h-6 sm:h-8 text-luxnavy" />
              </span>
              <span className="text-lg">Bespoke menus crafted to tantalize your palate</span>
            </li>
            <li className="flex items-center">
              <span className="mr-6">
                <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-luxnavy" />
              </span>
              <span className="text-lg">Eco-luxe amenities sourced from local artisans</span>
            </li>
            <li className="flex items-center">
              <span className="mr-6">
                <HeartHandshake className="w-6 sm:w-8 h-6 sm:h-8 text-luxnavy" />
              </span>
              <span className="text-lg">Personalized touches to elevate your special moment</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#book-now"
              className="inline-block px-6 py-3 bg-luxcopper text-luxcedar text-base md:text-lg rounded-full hover:bg-luxnavy hover:text-white transition-all duration-300 shadow-md tracking-wide"
            >
              Reserve Your Luxury Picnic
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default PicnicsSection