'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Compass, Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'

export default function LuxFinoCTA() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [parallaxY, setParallaxY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = ['/LuxPicMain.jpeg',
    '/LuxRemotePic2.JPG', 
    '/WeddingPic.JPG'
  ]

  const router = useRouter()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setParallaxY(scrollY * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <section className="py-12 sm:py-24 bg-transparent relative overflow-hidden rounded-3xl">
   
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-6xl sm:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F8F3E3] leading-tight mb-12 text-center"
          variants={itemVariants}
        >
          Elevate Your <span className="italic">Escape</span>
        </motion.h1>

        <div className="bg-[#0C2233]/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-8 sm:space-y-12">
                <motion.p 
                  className="text-xl sm:text-2xl text-[#F8F3E3] max-w-2xl leading-relaxed"
                  variants={itemVariants}
                >
                  Immerse yourself in the pinnacle of luxury with LuxFino. Our meticulously curated experiences blend opulence with authenticity, creating unforgettable moments that resonate long after your journey ends.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8 w-full"
                  variants={itemVariants}
                >
                  <div className="group w-full sm:w-auto">
                    <button 
                      onClick={() => router.push('/bookings')}
                      className="w-full sm:w-auto btn btn-primary bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-[#F8F3E3] border-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg px-6 py-3 text-base sm:text-lg rounded-full font-semibold tracking-wide flex items-center justify-center"
                    >
                      Embark on Your Journey
                      <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div> 
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#F8F3E3] text-lg">Acclaimed by our distinguished guests</p>
                </motion.div>
                <motion.div
                  className="grid grid-cols-3 gap-4"
                  variants={itemVariants}
                >
                  {[
                    { icon: Compass, text: "Bespoke Itineraries" },
                    { icon: Sun, text: "Luxurious Retreats" },
                    { icon: Moon, text: "Exclusive Experiences" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <item.icon className="w-8 h-8 text-[#D4AF37] mb-2" />
                      <p className="text-[#F8F3E3] text-sm">{item.text}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
              <motion.div 
                className="lg:w-1/2 relative mt-8 lg:mt-0"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden rounded-3xl w-full h-[300px] sm:h-[400px]">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentImageIndex]}
                        alt={`Luxury experience at LuxFino ${currentImageIndex + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

