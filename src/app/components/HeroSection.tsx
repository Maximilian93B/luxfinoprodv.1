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
      // Add canplay event listener
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
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/LuxRemoteVid.MP4" type="video/mp4" />
            <source src="/LuxRemoteVid.mp4" type="video/mp4" /> {/* Try lowercase extension */}
            <source src="/LuxRemoteVid.webm" type="video/webm" /> {/* Add WebM format if available */}
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-luxocean bg-opacity-20" />
        <div className="absolute inset-0 bg opacity-5" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-between h-full px-8 py-24 sm:px-8 lg:px-12 mt-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center space-y-6"
        >
         <h2 className="text-luxpearl text-5xl sm:text-3xl md:text-3xl font-avenir tracking-widest  uppercase">
            LuxFino Presents
          </h2>
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-luxpearl font-avenir leading-tight">
           LuxRemote
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-luxpearl font-avenir leading-tight">
            Seclusion Redefined
          </h2>
          <p className="mt-4 text-2xl sm:text-2xl md:text-3xl text-luxpearl font-playfair max-w-3xl mx-auto">
            Experience unparalleled luxury in nature's embrace
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <button
            onClick={handleScroll}
            className="px-12 py-4 text-lg font-semibold text-luxpearl bg-luxocean/80 rounded-full hover:bg-luxcopper duration-300 focus:outline-none focus:ring-2 focus:ring-luxcopper focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            aria-label="Explore LuxRemote"
          >
            Discover LuxRemote
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 space-y-6"
        >
          <div className="w-px h-24 bg-luxsand opacity-50" />
          <ChevronDown className="w-8 h-8 text-luxsand animate-bounce" />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-luxsand"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 bg-luxocean flex items-center justify-center">
            <div className="text-luxsand">
              <div className="w-16 h-16 border-4 border-luxsand border-t-transparent rounded-full animate-spin" />
              <p className="mt-4">Loading video...</p>
            </div>
          </div>
        )}
        {videoError && (
          <div className="absolute inset-0">
            <Image
              src="/LuxRemoteIndex.JPG"
              alt="Luxury Remote Experience"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
