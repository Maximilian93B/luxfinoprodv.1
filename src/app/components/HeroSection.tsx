'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      const handleLoadedData = () => {
        console.log('Video loaded successfully')
        setIsVideoLoaded(true)
      }
      
      const handleError = (e: Event) => {
        const target = e.target as HTMLVideoElement
        console.error('Video loading error:', {
          error: target.error,
          networkState: target.networkState,
          readyState: target.readyState,
          src: target.src
        })
        setVideoError(true)
      }

      videoElement.addEventListener('loadeddata', handleLoadedData)
      videoElement.addEventListener('error', handleError)
      videoElement.addEventListener('canplay', handleLoadedData)

      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData)
        videoElement.removeEventListener('error', handleError)
        videoElement.removeEventListener('canplay', handleLoadedData)
      }
    }
  }, [])

  const handleScroll = () => {
    const element = document.getElementById('discover')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-luxsand"
      style={{ opacity }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{ scale }}
      >
        {!videoError && (
          <video
            poster="/LuxRemoteIndex.JPG"
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="relative inset-0 w-full h-full object-cover"
          >
            <source src="/LuxRemoteVid.MP4" type="video/mp4" />
            <source src="/LuxRemoteVid.MP4" type="video/mp4" />
            <source src="/LuxRemoteVid.MP4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-luxsand bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxocean/30 via-transparent to-luxocean/30" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center space-y-4 sm:space-y-6 max-w-4xl mt-8 sm:mt-0"
        >
          <h2 className="text-luxpearl text-xl sm:text-xl md:text-xl lg:text-2xl font-avenir tracking-[0.2em] uppercase mb-2 sm:mb-4">
            LuxFino Presents
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-luxpearl font-playfair leading-tight mb-2 sm:mb-4">
            LuxRemote
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-light text-luxpearl font-avenir leading-tight mb-4 sm:mb-8">
            Seclusion Redefined
          </h2>
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-luxpearl font-avenir max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled luxury in nature&apos;s embrace
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 sm:mt-12"
        >
          <button
            onClick={handleScroll}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-luxpearl bg-black rounded-full hover:bg-luxcopper duration-300 focus:outline-none focus:ring-2 focus:ring-luxcopper focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            aria-label="Explore LuxRemote"
          >
            Discover LuxRemote
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 space-y-4 sm:space-y-6 flex flex-col items-center"
        >
          
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mt-2  text-luxsand animate-bounce" />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-luxsand"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {!isVideoLoaded && !videoError && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-0 bg-luxocean bg-opacity-80 flex items-center justify-center py-2 sm:py-4"
          >
            <div className="text-luxsand text-center flex items-center space-x-2 sm:space-x-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-3 border-luxsand border-t-transparent rounded-full animate-spin" />
              <p className="text-sm sm:text-lg font-avenir">Preparing your exclusive experience...</p>
            </div>
          </motion.div>
        )}
        {videoError && (
          <div className="absolute inset-0">
            <Image
              src="/LuxRemoteIndex.JPG"
              alt="Luxury Remote Experience"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}