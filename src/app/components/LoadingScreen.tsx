'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LoadingScreenProps {
  onEnter: () => void;
}

const getServiceDescription = (index: number) => {
  const descriptions = [
    "Immerse yourself in curated outdoor dining experiences",
    "Discover luxury in nature's most serene settings",
    "Celebrate life's moments with unparalleled elegance"
  ];
  return descriptions[index];
};

const services = [
  { 
    title: "Luxury Pop-up Picnics",
    description: "Immerse yourself in curated outdoor dining experiences"
  },
  { 
    title: "Remote Glamping",
    description: "Discover luxury in nature's most serene settings"
  },
  { 
    title: "Events & Celebrations",
    description: "Celebrate life's moments with unparalleled elegance"
  }
];

const GoldParticle: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, size: 0, duration: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 5
    })
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <motion.div
      className="absolute rounded-full bg-[#D4AF37]"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: position.size,
        height: position.size,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.7, 0],
        y: [0, -30],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: position.duration,
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % services.length
        if (nextIndex === 0) {
          setCycleCount((prevCount) => prevCount + 1)
        }
        return nextIndex
      })
    }, 1500)

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
      transition: { 
        delay: i * 0.08,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  }

  const logoContainerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-lux-navy flex flex-col items-center justify-center overflow-hidden px-4 z-[9999]"
      variants={containerVariants}
      exit="exit"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {isMounted && Array.from({ length: 40 }).map((_, index) => (
        <GoldParticle key={index} />
      ))}

      <motion.div
        variants={logoContainerVariants}
        initial="initial"
        animate="animate"
        className="relative flex items-center justify-center"
        style={{ width: '280px', height: '280px' }}
      >
        {/* Container for all rotating elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ 
              rotate: 360,
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
            className="absolute rounded-full border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#D4AF37] opacity-40"
            style={{ 
              width: '280px', 
              height: '280px',
            }}
          />

          {/* Middle rotating ring */}
          <motion.div
            animate={{ 
              rotate: -360,
              transition: {
                duration: 25,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
            className="absolute rounded-full border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-white opacity-25"
            style={{ 
              width: '240px', 
              height: '240px',
            }}
          />

          {/* Inner rotating ring */}
          <motion.div
            animate={{ 
              rotate: 180,
              transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
            className="absolute rounded-full border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#D4AF37] opacity-30"
            style={{ 
              width: '200px', 
              height: '200px',
            }}
          />

          {/* Glow effect */}
          <motion.div
            className="absolute rounded-full bg-[#D4AF37] blur-[40px] opacity-20"
            style={{ 
              width: '160px', 
              height: '160px',
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Logo container with floating effect (removed spin) */}
          <motion.div
            animate={{ 
              y: [-4, 4, -4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                repeatType: "reverse"
              },
              scale: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                repeatType: "reverse"
              }
            }}
            className="absolute flex items-center justify-center"
            style={{
              width: '160px',
              height: '160px',
            }}
          >
            <Image
              src="/Lux.Fino.Logo2.svg"
              alt="Lux.Fino Logo"
              width={160}
              height={160}
              priority
              className="brightness-0 invert drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            />
          </motion.div>
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37] mb-4 sm:mb-6 font-playfair text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
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
        className="text-white font-avenir text-lg sm:text-xl mb-8 sm:mb-10 text-center max-w-md px-4 leading-relaxed"
      >
        Elevating Moments into Unforgettable Experiences in Tofino
      </motion.p>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <div className="h-20 sm:h-24 mb-6 sm:mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-3 font-playfair">
                    {services[currentServiceIndex].title}
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base font-avenir">
                    {getServiceDescription(currentServiceIndex)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div
              className="w-full max-w-sm h-1 sm:h-2 bg-white/5 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6CC] to-[#D4AF37]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.p
              className="mt-4 text-white/70 font-avenir text-sm sm:text-base italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Curating your bespoke experience... {Math.round(progress)}%
            </motion.p>
          </motion.div>
        ) : (
          <motion.button
            key="enter-button"
            onClick={onEnter}
            className="mt-8 bg-[#D4AF37] text-black hover:bg-white transition-all duration-300 
                     text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-full 
                     font-avenir font-semibold tracking-wide shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(212, 175, 55, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#D4AF37] via-[#F5E6CC] to-[#D4AF37]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export default LoadingScreen