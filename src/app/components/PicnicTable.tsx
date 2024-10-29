import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Sunset, GlassWater, HeartHandshake, Sparkles } from 'lucide-react'

const PicnicTable: React.FC = () => {
  const images = [
    '/LuxPicMain.jpeg',
    '/Catering2.jpg',
    '/Catering3.jpg',
    '/DiscoverLuxRemote.JPG',
    '/LuxCateringCard.JPG'
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [images.length])

  const packages = [
    {
      name: 'The Ultimate Cuddle Puddle',
      price: '$250',
      people: '2 people',
      duration: '2 hours',
      description: 'Indulge in a sumptuous sunset experience with our lavish pillow and blanket ensemble.',
      icon: Sunset
    },
    {
      name: 'Lux.Fino Golden Hour',
      price: '$470',
      people: '2 people',
      duration: '2 hours',
      description: 'Savor the epitome of Tofino luxury with our exquisite locally-curated charcuterie.',
      icon: GlassWater
    },
    {
      name: 'The Perfect Proposal Package',
      price: '$800',
      people: '2 people',
      duration: '2 hours',
      description: 'Craft an unforgettable moment with our bespoke romantic setup and concierge service.',
      icon: HeartHandshake
    },
    {
      name: 'Grand Luxury Experience',
      price: '$770',
      people: '2 people',
      duration: '2 hours',
      description: 'Immerse yourself in the pinnacle of outdoor opulence with our most lavish offering.',
      icon: Sparkles
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full px-2 py-12 sm:px-4 sm:py-24 bg-luxcream"
    >
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-20 text-luxnavy font-playfair"
      >
        Exquisite Picnic Experiences
      </motion.h2>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 sm:mb-24 space-y-8 sm:space-y-16 lg:space-y-0 lg:space-x-16">
        <motion.div 
          className="lg:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl text-luxcharcoal leading-relaxed text-center lg:text-left font-avenir">
            Immerse yourself in the pinnacle of outdoor luxury with our meticulously curated picnic experiences. Each setting is a masterpiece, featuring sumptuous seating, premium textiles, and elegant decor that transforms Tofino&apos;s natural splendor into your personal haven of indulgence.
          </p>
          <ul className="mt-6 sm:mt-10 space-y-4 sm:space-y-6 text-luxcharcoal font-avenir">
            <li className="flex items-center">
              <span className="mr-6 sm:mr-6">
                <GlassWater className="w-6 sm:w-8 h-6 sm:h-8 text-luxnavy" />
              </span>
              <span className="text-lg">Bespoke menus crafted to tantalize your palate</span>
            </li>
            <li className="flex items-center">
              <span className="mr-6 sm:mr-6">
                <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-luxnavy" />
              </span>
              <span className="text-lg">Eco-luxe amenities sourced from local artisans</span>
            </li>
            <li className="flex items-center">
              <span className="mr-6 sm:mr-6">
                <HeartHandshake className="w-6 sm:w-8 h-6 sm:h-8 text-luxnavy" />
              </span>
              <span className="text-lg">Personalized touches to elevate your special moment</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-64 sm:h-96 md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Luxury Picnic Setup ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {packages.map((pkg, index) => (
          <motion.div 
            key={pkg.name}
            className="bg-white p-6 sm:p-10 rounded-lg shadow-xl overflow-hidden border border-luxcream"
            initial={{ backgroundColor: "#FFFFFF" }}
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "#FAFAFA",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }
            }}
          >
            <motion.div 
              className="flex items-center mb-6 sm:mb-6"
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="mr-4 sm:mr-6 bg-luxcream p-2 sm:p-3 rounded-full">
                <pkg.icon className="w-6 sm:w-8 h-6 sm:h-8 text-luxnavy" />
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-luxnavy font-playfair">{pkg.name}</h3>
            </motion.div>
            <motion.p 
              className="text-2xl sm:text-3xl text-luxgold mb-4 sm:mb-6 font-avenir"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {pkg.price}
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl text-luxcharcoal mb-6 sm:mb-8 font-avenir leading-relaxed"
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {pkg.description}
            </motion.p>
            <motion.div 
              className="flex justify-between text-base sm:text-lg text-luxnavy font-avenir"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span>{pkg.people}</span>
              <span>{pkg.duration}</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 sm:mt-20 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.a 
          href="#book-now" 
          className="inline-block bg-luxnavy text-white font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-full hover:bg-luxgold hover:text-luxnavy transition-colors duration-300 font-avenir text-lg sm:text-xl tracking-wide"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          whileTap={{ scale: 0.95 }}
        >
          Reserve Your Luxury Picnic
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default PicnicTable