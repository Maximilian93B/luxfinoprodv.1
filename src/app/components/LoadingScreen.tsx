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

  return (
    <motion.div 
      className="fixed inset-0 bg-luxpearl flex flex-col items-center justify-center overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="relative mb-8"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-4 border-r-4 border-luxgold opacity-50"
          style={{ width: '180px', height: '180px', margin: '-15px' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-b-4 border-l-4 border-luxnavy opacity-30"
          style={{ width: '210px', height: '210px', margin: '-30px' }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/Lux.Fino.Logo2.svg"
            alt="Lux.Fino Logo"
            width={150}
            height={150}
            className="relative z-10"
          />
        </motion.div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxnavy mb-4 font-playfair text-center"
      >
        Welcome to Lux Fino
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-luxcharcoal font-avenir text-base sm:text-lg mb-6 text-center max-w-md"
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
            <div className="h-20 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-luxnavy mb-2 font-playfair">
                    {services[currentServiceIndex].title}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div
              className="w-full max-w-xs h-2 bg-luxnavy bg-opacity-10 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-luxgold to-luxnavy"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.div
              className="mt-4 text-luxnavy font-avenir text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p>Preparing your luxurious experience... {Math.round(progress)}%</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.button
            key="enter-button"
            onClick={onEnter}
            className="bg-luxcedar text-luxpearl hover:bg-luxgold transition-all duration-300 text-lg px-8 py-3 rounded-full font-avenir font-semibold tracking-wide shadow-lg hover:shadow-xl"
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
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-luxgold via-luxnavy to-luxgold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export default LoadingScreen