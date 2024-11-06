import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ChevronDown, Mountain, Tent, ChefHat } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

// Custom hook for media query
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

// Optimized particle options
const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    color: { value: "#ffffff" },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "bounce" as const },
      random: false,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 50,
    },
    opacity: { value: 0.2 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 2 } },
  },
  detectRetina: true,
}

export default function LuxFinoLandingEnhanced() {
  const [activeService, setActiveService] = useState(0)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const parallaxRef = useRef(null)
  const controls = useAnimation()
  const isMobile = useMediaQuery('(max-width: 767px)')

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3)
    }, 5000)

    const handleScroll = () => {
      if (parallaxRef.current && !isMobile) {
        const scrollPosition = window.pageYOffset
        setParallaxOffset(scrollPosition * 0.3) // Reduced parallax effect
        controls.start({ y: scrollPosition * 0.2 })
      }
    }

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      clearInterval(interval)
      if (!isMobile) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [controls, isMobile])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const services = [
    {
      title: 'Lux Picnics',
      description: 'Exquisite culinary experiences with breathtaking ocean views.',
      icon: <Mountain className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-4" />,
      image: '/LuxFinoMain.jpg',
      href: '/lux-picnics',
    },
    {
      title: 'Lux Remote',
      description: 'Luxury glamping retreats nestled in nature\'s embrace.',
      icon: <Tent className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-4" />,
      image: '/LuxPicMain.jpeg',
      href: '/lux-remote',
    },
    {
      title: 'Elopments , Catering and Events ',
      description: 'Bespoke culinary experiences crafted by seasoned chefs.',
      icon: <ChefHat className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-4" />,
      image: '/WeddingPackages.JPG',
      href: '/in-house-chef',
    },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Optimized Background Image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        style={{
          transform: isMobile ? 'none' : `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Image
          src="/LuxFinoMain.jpg"
          alt="Background landscape"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Conditional Particles Rendering */}
      {!isMobile && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 pointer-events-none"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-extrabold mb-8 md:mb-10 tracking-tight mt-16"
        >
          LuxFino
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl mb-12 md:mb-16 max-w-xl md:max-w-2xl px-4"
        >
          Immerse yourself in the beauty of Tofino with our exclusive luxury experiences
        </motion.p>

        {/* Services Showcase */}
        <div id="services" className="w-full max-w-md md:max-w-4xl px-4 md:px-6">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: activeService === index ? 1 : 0.3, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
                className="mb-8 md:mb-12"
              >
                <Link href={service.href} className="block">
                  <motion.div
                    className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg overflow-hidden cursor-pointer relative p-2"
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.03,
                      transition: { duration: 0.2, ease: "easeInOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-full md:w-1/2 relative h-56 md:h-72">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        priority
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-8 text-left">
                      <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center">
                        {service.icon}
                        <span className="ml-2">{service.title}</span>
                      </h2>
                      <p className="text-sm md:text-base text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <Link href="/book" className="inline-block">
          <motion.div
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 md:mt-16 px-8 md:px-10 py-4 bg-white text-black rounded-full font-semibold text-base md:text-lg transition-colors duration-300 hover:bg-gray-200"
          >
            Book Your Experience
          </motion.div>
        </Link>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#services" className="block">
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}