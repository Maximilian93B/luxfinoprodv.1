import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

interface LoadingScreenProps {
  progress: number;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress, onLoadingComplete }) => {
  const controls = useAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        onLoadingComplete()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [progress, onLoadingComplete])

  useEffect(() => {
    if (progress === 100) {
      controls.start({ opacity: 0, transition: { duration: 1, delay: 0.5 } })
    }
  }, [progress, controls])

  return (
    <motion.div 
      className="fixed inset-0 bg-luxpearl flex flex-col items-center justify-center overflow-hidden px-4"
      animate={controls}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-4 border-r-4 border-luxgold opacity-50"
          style={{ width: '180px', height: '180px', margin: '-15px' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-b-4 border-l-4 border-luxnavy opacity-30"
          style={{ width: '210px', height: '210px', margin: '-30px' }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxnavy mt-6 mb-2 font-playfair text-center"
      >
        Welcome to Lux Fino
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="text-luxcharcoal font-avenir text-base sm:text-lg mb-6 text-center"
      >
        Crafting your luxurious experience...
      </motion.p>
      
      <motion.div
        className="w-full max-w-xs h-2 bg-luxnavy bg-opacity-10 rounded-full overflow-hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-luxgold to-luxnavy"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.div
        className="mt-6 text-luxnavy font-avenir text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
      >
        {progress < 100 ? (
          <p>Loading... {Math.round(progress)}%</p>
        ) : (
          <p>Welcome to luxury</p>
        )}
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-luxgold via-luxnavy to-luxgold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.5, duration: 2.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export default LoadingScreen