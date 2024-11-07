'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LoadingScreenProps {
  onEnter: () => void;
}

const services = [
  { title: "Luxury Pop-up Picnics" },
  { title: "Remote Glamping" },
  { title: "Events, Weddings & Catering" }
]

const GoldParticle: React.FC = () => {
  const randomX = Math.random() * 100 + '%'
  const randomY = Math.random() * 100 + '%'
  const randomSize = Math.random() * 2 + 1 // Reduced max size for mobile
  const randomDuration = Math.random() * 10 + 5

  return (
    <motion.div
      className="absolute rounded-full bg-[#D4AF37]"
      style={{
        left: randomX,
        top: randomY,
        width: randomSize,
        height: randomSize,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.5, 0],
        y: [0, -20],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [cycleCount, setCycleCount] = useState(0)

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % services.length
        if (nextIndex === 0) {
          setCycleCount((prevCount) => prevCount + 1)
        }
        return nextIndex
      })
    }, 2000)

    return () => clearInterval(serviceInterval)
  }, [])

  useEffect(() => {
    if (cycleCount >= 1) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer)
            setTimeout(() => setIsLoading(false), 500)
            return 100
          }
          return prevProgress + 2
        })
      }, 20)

      return () => clearInterval(timer)
    }
  }, [cycleCount])

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gold particles */}
      {Array.from({ length: 30 }).map((_, index) => (
        <GoldParticle key={index} />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="relative mb-6 sm:mb-8"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#D4AF37] opacity-50"
          style={{ width: '120px', height: '120px', margin: '-10px' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-white opacity-30"
          style={{ width: '140px', height: '140px', margin: '-20px' }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/Lux.Fino.Logo2.svg"
            alt="Lux.Fino Logo"
            width={100}
            height={100}
            className="relative z-10 brightness-0 invert"
          />
        </motion.div>
      </motion.div>
      
      <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-2 sm:mb-4 font-playfair text-center">
        {Array.from("LuxFino").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-white font-avenir text-sm sm:text-base mb-4 sm:mb-6 text-center max-w-md px-2"
      >
        Crafting unforgettable luxury experiences in Tofino
      </motion.p>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <div className="h-16 sm:h-20 mb-4 sm:mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#D4AF37] mb-2 font-playfair">
                    {services[currentServiceIndex].title}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div
              className="w-full max-w-xs h-1 sm:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.div
              className="mt-2 sm:mt-4 text-white font-avenir text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p>Loading your luxurious experience... {Math.round(progress)}%</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.button
            key="enter-button"
            onClick={onEnter}
            className=" mt-5 bg-[#D4AF37] text-black hover:bg-white transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full font-avenir font-semibold tracking-wide shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter LuxFino
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export default LoadingScreen