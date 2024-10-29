import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (progress === 100) {
      controls.start({ opacity: 0, transition: { duration: 1, delay: 0.5 } })
    }
  }, [progress, controls])

  return (
    <motion.div 
      className="fixed inset-0 bg-luxpearl flex flex-col items-center justify-center overflow-hidden"
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
          style={{ width: '240px', height: '240px', margin: '-20px' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-b-4 border-l-4 border-luxnavy opacity-30"
          style={{ width: '280px', height: '280px', margin: '-40px' }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/Lux.Fino.logo.svg"
            alt="Lux.Fino Logo"
            width={200}
            height={200}
            className="relative z-10"
          />
        </motion.div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="text-5xl font-bold text-luxnavy mt-8 mb-2 font-playfair"
      >
        Welcome to LuxFino
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="text-luxcharcoal font-avenir text-lg mb-8"
      >
        Crafting your luxurious experience...
      </motion.p>
      
      <motion.div
        className="w-64 h-2 bg-luxnavy bg-opacity-10 rounded-full overflow-hidden"
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
        className="mt-8 text-luxcedar font-avenir"
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