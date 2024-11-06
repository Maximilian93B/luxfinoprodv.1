import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ChevronDown, Mountain, Tent, ChefHat, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

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
      speed: 0.4,
      straight: false,
    },
    number: {
      density: { enable: true, area: 1200 },
      value: 150,
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 0.5, max: 1.7 } },
  },
  detectRetina: true,
}

const Divider = () => (
  <div className="hidden lg:flex flex-col items-center justify-center px-2">
    <div className="w-px h-16 bg-white opacity-30"></div>
    <div className="w-3 h-3 rounded-full bg-white opacity-50 my-2"></div>
    <div className="w-px h-16 bg-white opacity-30"></div>
  </div>
)

export default function LuxFinoLandingLargerCards() {
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const parallaxRef = useRef(null)
  const controls = useAnimation()
  const isMobile = useMediaQuery('(max-width: 1023px)')

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && !isMobile) {
        const scrollPosition = window.pageYOffset
        setParallaxOffset(scrollPosition * 0.3)
        controls.start({ y: scrollPosition * 0.15 })
      }
    }

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
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
      title: 'Lux Remote',
      description: 'Luxury glamping retreats nestled in nature\'s embrace.',
      icon: <Tent className="w-10 h-10 lg:w-14 lg:h-14 text-luxcopper" />,
      image: '/LuxFinoMain.jpg',
      href: '/lux-remote',
    },
    {
      title: 'Lux Picnics',
      description: 'Exquisite culinary experiences with breathtaking ocean views.',
      icon: <Mountain className="w-10 h-10 lg:w-14 lg:h-14 text-luxcopper" />,
      image: '/LuxPicMain.jpeg',
      href: '/lux-picnics',
    },
    {
      title: 'Elopments, Weddings & Events',
      description: 'Bespoke culinary experiences crafted by seasoned chefs.',
      icon: <ChefHat className="w-10 h-10 lg:w-14 lg:h-14 text-luxcopper" />,
      image: '/WeddingPackages.JPG',
      href: '/in-house-chef',
    },

  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
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
          alt="Expansive Tofino landscape"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {!isMobile && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 pointer-events-none"
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 lg:px-8 py-8 lg:py-12 text-center">
        <motion.div 
          className="flex flex-col items-center justify-center"
          animate={{ 
            marginTop: expandedCard !== null ? "-1rem" : "0rem",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-extrabold mb-4 lg:mb-6 tracking-tight leading-none"
          >
            LuxFino
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg lg:text-2xl mb-8 lg:mb-10 max-w-xl lg:max-w-2xl leading-relaxed"
          >
            Immerse yourself in the untamed beauty of Tofino with our exclusive luxury experiences
          </motion.p>
        </motion.div>

        <div id="services" className="w-full max-w-[1200px] mb-8 lg:mb-10 flex-grow flex items-center">
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-4 w-full">
            {services.map((service, index) => (
              <React.Fragment key={service.title}>
                <motion.div
                  className="relative w-full lg:w-1/3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="block w-full rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
                    onHoverStart={() => setExpandedCard(index)}
                    onHoverEnd={() => setExpandedCard(null)}
                    animate={{ 
                      height: expandedCard === index ? "400px" : "350px",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"
                      animate={{
                        opacity: expandedCard === index ? 0.8 : 0.6
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        priority
                      />
                    </div>
                    <motion.div 
                      className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-center flex flex-col items-center justify-end h-full"
                      animate={{
                        y: expandedCard === index ? -8 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{
                          y: expandedCard === index ? -10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4">{service.title}</h2>
                      </motion.div>
                      <motion.p
                        className="text-base lg:text-lg mt-4"
                        animate={{
                          opacity: expandedCard === index ? 1 : 0.8,
                          y: expandedCard === index ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                      <motion.div
                        className="mt-6 inline-flex items-center text-primary-500 font-semibold"
                        animate={{
                          opacity: expandedCard === index ? 1 : 0,
                          y: expandedCard === index ? 0 : 10
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Link href={service.href} passHref>
                          <span className="mr-2 text-lg">Explore</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                {index < services.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 lg:mt-12">
          <Link href="/bookings" className="contents">
            <motion.button
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 lg:mt-8 px-12 py-4 mb-8 lg:mb-12 bg-white text-black rounded-full font-semibold text-lg lg:text-xl transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
            >
              Book Your Wild Experience
            </motion.button>
          </Link>

          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Link href="#services" passHref>
              <ChevronDown className="w-8 h-8 lg:w-10 lg:h-10" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
{/* 

    {
      title: 'Lux Remote',
      description: 'Luxury glamping retreats nestled in nature\'s embrace.',
      icon: <Tent className="w-10 h-10 lg:w-14 lg:h-14 text-luxcopper" />,
      image: '/LuxFinoMain.jpg',
      href: '/lux-remote',
    },
    {
      title: 'Lux Picnics',
      description: 'Exquisite culinary experiences with breathtaking ocean views.',
      icon: <Mountain className="w-10 h-10 lg:w-14 lg:h-14 text-luxcopper" />,
      image: '/LuxPicMain.jpeg',
      href: '/lux-picnics',
    },
    {
      title: 'Elopments, Weddings & Events',
      description: 'Bespoke culinary experiences crafted by seasoned chefs.',
      icon: <ChefHat className="w-10 h-10 lg:w-14 lg:h-14 text-luxcopper" />,
      image: '/WeddingPackages.JPG',
      href: '/in-house-chef',
    },


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
      speed: 0.4,
      straight: false,
    },
    number: {
      density: { enable: true, area: 1200 },
      value: 150,
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 0.5, max: 1.7 } },
  },
  detectRetina: true,
}
*/}