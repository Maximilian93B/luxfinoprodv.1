'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Star, Feather, Mail } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function LuxFinoCTA() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [parallaxY, setParallaxY] = useState(0)

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

  return (
    <section className="py-24 bg-gradient-to-b from-[#0C2233] to-[#7D8A6A]/20 relative overflow-hidden rounded-3xl">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C2233] to-transparent pointer-events-none z-0" />
      
      <div 
        className="absolute inset-0 bg-repeat opacity-5"
        style={{ transform: `translateY(${parallaxY}px)` }}
      ></div>
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-6xl sm:text-7xl xl:text-8xl font-bold text-lux-gold leading-tight mb-12 text-center"
          variants={itemVariants}
        >
          Elevate Your <span className="text-[#F8F3E3]">Experience</span>
        </motion.h1>

        <div className="bg-[#0C2233]/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-8 sm:space-y-12">
                <motion.p 
                  className="text-xl sm:text-xl text-[#F8F3E3] max-w-2xl"
                  variants={itemVariants}
                >
                  Ready for something extraordinary? We blend luxury stays with authentic adventures, creating getaways that feel both indulgent and meaningful.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8 w-full"
                  variants={itemVariants}
                >
                  <div className="group w-full sm:w-auto">
                    <button className="w-full sm:w-auto btn btn-primary bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#7D8A6A] hover:to-[#556B2F] text-[#F8F3E3] border-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg px-8 py-2 text-lg rounded-full font-semibold tracking-wide">
                      Start Now
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div> 
                </motion.div>
                <motion.div
                  className="mt-12 lg:mt-16"
                  variants={itemVariants}
                >
                  <h3 className="text-[#D4AF37] text-3xl mb-6">Join Our Inner Circle</h3>
                  <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
                    <div className="flex-grow">
                      <motion.div 
                        className="relative"
                        variants={itemVariants}
                      >
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="
                            w-full 
                            h-14 sm:h-16
                            px-6 sm:px-8
                            pr-[4.5rem] sm:pr-36 
                            text-base sm:text-lg
                            bg-[#1A3344] 
                            text-[#F8F3E3] 
                            placeholder-[#F8F3E3]/50
                            rounded-2xl sm:rounded-3xl
                            border-2 border-[#D4AF37]/20
                            focus:border-[#D4AF37]
                            focus:outline-none
                            transition-colors duration-300
                            shadow-inner
                          "
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <button className="
                            h-10 sm:h-12
                            inline-flex items-center justify-center
                            gap-2 sm:gap-3
                            bg-gradient-to-r from-[#D4AF37] to-[#B8860B]
                            hover:from-[#B8860B] hover:to-[#D4AF37]
                            text-[#F8F3E3] 
                            text-base sm:text-lg 
                            font-medium
                            px-5 sm:px-6
                            rounded-xl sm:rounded-2xl
                            transition-all duration-300
                            hover:shadow-[0_2px_10px_rgba(212,175,55,0.3)]
                            group
                          ">
                            <span className="hidden sm:inline">Subscribe</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </form>
                </motion.div>
              </div>
              <motion.div 
                className="lg:w-1/2 relative mt-12 lg:mt-0"
                variants={itemVariants}
              >
                <div className="relative group">
                  <Image
                    src="/LuxPicMain.jpeg"
                    width={800}
                    height={1000}
                    alt="Luxury experience at LuxFino"
                    className="rounded-3xl shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl w-full h-auto object-cover"
                  />
                
                </div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-[#7D8A6A] text-[#F8F3E3] px-2 sm:px-6 py-3 sm:py-3 rounded-full shadow-xl border border-[#F8F3E3]/10"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(125,138,106,0.3)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <p className="text-sm sm:text-base font-medium flex items-center">
                    <Feather className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    Eco-Luxury Certified
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}