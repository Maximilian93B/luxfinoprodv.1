'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface VideoState {
  isLoaded: boolean
  hasError: boolean
}

const LoadingSpinner = React.memo(() => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-x-0 top-0 bg-luxocean bg-opacity-80 flex items-center justify-center py-2 sm:py-4 z-50"
  >
    <div className="text-luxsand text-center flex items-center space-x-2 sm:space-x-4">
      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-3 border-luxsand border-t-transparent rounded-full animate-spin" />
      <p className="text-sm sm:text-lg font-avenir">Preparing your exclusive experience...</p>
    </div>
  </motion.div>
))
LoadingSpinner.displayName = 'LoadingSpinner'

export default function HeroSection() {
  const [videoState, setVideoState] = useState<VideoState>({
    isLoaded: false,
    hasError: false
  })
  
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Enhanced animations configuration
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    })
  }

  // Memoize handlers
  const handleVideoLoad = useCallback(() => {
    setVideoState(prev => ({ ...prev, isLoaded: true }))
  }, [])

  const handleVideoError = useCallback((e: Event) => {
    const target = e.target as HTMLVideoElement
    console.error('Video loading error:', {
      error: target.error,
      networkState: target.networkState,
      readyState: target.readyState,
      src: target.src
    })
    setVideoState(prev => ({ ...prev, hasError: true }))
  }, [])

  const handleScroll = useCallback(() => {
    document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    videoElement.addEventListener('loadeddata', handleVideoLoad)
    videoElement.addEventListener('error', handleVideoError)
    videoElement.addEventListener('canplay', handleVideoLoad)

    return () => {
      videoElement.removeEventListener('loadeddata', handleVideoLoad)
      videoElement.removeEventListener('error', handleVideoError)
      videoElement.removeEventListener('canplay', handleVideoLoad)
    }
  }, [handleVideoLoad, handleVideoError])

  // Add scroll-based opacity animation
  const { scrollY } = useScroll()
  const titleOpacity = useTransform(
    scrollY,
    [0, 200], // Adjust these values to control when the fade starts/ends
    [1, 0]    // Opacity goes from 1 to 0
  )

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50 z-[1]" />
      
      <AnimatePresence>
        {!videoState.isLoaded && <LoadingSpinner />}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 sm:space-y-10 max-w-4xl mt-8 sm:mt-12"
        >
          <motion.h2
            variants={fadeInUpVariants}
            custom={1}
            className="text-luxpearl/90 text-base sm:text-lg md:text-xl font-avenir tracking-[0.25em] uppercase 
                       inline-block relative pb-4"
          >
            LuxFino Presents
          </motion.h2>

          <motion.h1
            variants={fadeInUpVariants}
            custom={2}
            style={{ opacity: titleOpacity }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-luxpearl font-playfair 
                       leading-[1.1] tracking-tight px-4"
          >
            LuxRemote
          </motion.h1>

          <motion.h2
            variants={fadeInUpVariants}
            custom={3}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-luxpearl/90 font-avenir 
                       tracking-wide leading-relaxed px-4 mb-2"
          >
            Seclusion Redefined
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            custom={4}
            className="text-base sm:text-lg md:text-xl text-luxpearl/80 font-avenir 
                       leading-relaxed max-w-2xl mx-auto px-6"
          >
            Experience unparalleled luxury in nature&apos;s embrace
          </motion.p>
        </motion.div>

        <motion.button
          onClick={handleScroll}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col items-center space-y-3 mt-auto pb-8"
        >
          <span className="text-luxpearl/80 text-sm tracking-[0.2em] font-avenir">
            DISCOVER MORE
          </span>
          <ChevronDown className="w-5 h-5 text-luxpearl/80 animate-bounce" />
        </motion.button>
      </div>

      {/* Enhanced video background */}
      {!videoState.hasError ? (
        <video
          poster="/LuxRemoteIndex.JPG"
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-[2s]"
        >
          <source src="/LuxRemoteVid.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src="/LuxRemoteIndex.JPG"
          alt="Luxury Remote Location"
          fill
          className="object-cover"
          priority
        />
      )}
    </div>
  )
}