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
      value: 250,
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 0.7, max: 1.5 } },
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

export default function LuxFinoLandingDrawerCards() {
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
      title: 'Lux Picnics',
      description: 'Exquisite culinary experiences with breathtaking ocean views. Indulge in gourmet delights while surrounded by Tofino\'s stunning landscapes.',
      icon: <Mountain className="w-12 h-12 lg:w-16 lg:h-16" />,
      image: '/LuxPicMain.jpeg',
      href: '/luxpicnic',
    },
    {
      title: 'Lux Remote',
      description: 'Luxury glamping retreats nestled in nature\'s embrace. Experience the wilderness in comfort and style, with all the amenities you need.',
      icon: <Tent className="w-12 h-12 lg:w-16 lg:h-16" />,
      image: '/LuxFinoMain.jpg',
      href: '/luxremote',
    },
    {
      title: 'Event Catering & Elopement Packages',
      description: 'Bespoke culinary experiences crafted by seasoned chefs. Enjoy personalized menus and exquisite dishes in the comfort of your accommodation.',
      icon: <ChefHat className="w-12 h-12 lg:w-16 lg:h-16" />,
      image: '/WeddingPackages.JPG',
      href: '/luxcatering',
    },
  ]

  return (
    <div className="relative min-h-screen lg:min-h-[120vh] bg-black text-white overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 h-full w-screen overflow-hidden"
        style={{
          transform: isMobile ? 'none' : `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative w-[180%] h-[120%] -left-[40%] -top-[10%]">
          <Image
            src="/LuxFinoMain.jpg"
            alt="Expansive Tofino landscape"
            fill
            sizes="100vw"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center 0%',
              transform: 'scale(0.85)',
            }}
            priority
          />
        </div>
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

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 lg:px-12 py-8 lg:py-24 text-center">
        <motion.div 
          className="hidden lg:flex flex-col items-center justify-center"
          animate={{ 
            marginTop: expandedCard !== null ? "-2rem" : "0rem",
            transition: { duration: 0.5 }
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl lg:text-7xl font-extrabold mb-2 lg:mb-3 tracking-tight leading-none"
          >
            LuxFino
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-base lg:text-2xl mb-4 lg:mb-6 max-w-xl lg:max-w-2xl leading-relaxed px-4"
          >
            Immerse yourself in the untamed beauty of Tofino with our exclusive luxury experiences
          </motion.p>
        </motion.div>

        <div className="flex lg:hidden flex-col items-center justify-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight leading-none">
            LuxFino
          </h1>
        </div>

        <div id="services" className="w-full max-w-[1600px] mb-8 lg:mb-20 flex-grow flex items-center">
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-12 w-full">
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
                    onClick={() => isMobile && setExpandedCard(expandedCard === index ? null : index)}
                    onHoverStart={() => !isMobile && setExpandedCard(index)}
                    onHoverEnd={() => !isMobile && setExpandedCard(null)}
                    animate={{ 
                      height: expandedCard === index ? "400px" : "280px",
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"
                      animate={{
                        opacity: expandedCard === index ? 0.9 : 0.6
                      }}
                      transition={{ duration: 0.5 }}
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
                      className="absolute inset-x-0 bottom-0 p-4 lg:p-8 text-center flex flex-col items-center"
                      initial={false}
                      animate={{
                        justifyContent: expandedCard === index ? "flex-start" : "flex-end",
                        paddingTop: expandedCard === index ? "3rem" : "1.5rem"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="flex flex-col items-center"
                        animate={{
                          scale: expandedCard === index ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                        <h2 className="text-2xl lg:text-4xl font-bold mt-3 lg:mt-4">{service.title}</h2>
                      </motion.div>
                      <motion.p
                        className="text-base lg:text-lg mt-6 overflow-hidden"
                        animate={{
                          opacity: expandedCard === index ? 1 : 0,
                          height: expandedCard === index ? "auto" : "0",
                          marginTop: expandedCard === index ? "1.5rem" : "0"
                        }}
                        transition={{ 
                          duration: 0.4,
                          opacity: { duration: 0.3 },
                          height: { duration: 0.4 },
                          marginTop: { duration: 0.4 }
                        }}
                      >
                        {service.description}
                      </motion.p>
                      <motion.div
                        className="mt-8 inline-flex items-center text-white font-semibold"
                        animate={{
                          opacity: expandedCard === index ? 1 : 0,
                          y: expandedCard === index ? 0 : 20
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Link href={service.href} className="hover:opacity-80 inline-flex items-center">
                          <span className="mr-2 text-lg">Explore</span>
                          <ArrowRight className="w-5 h-5 inline" />
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

        <motion.div 
          className="flex flex-col items-center"
          animate={{ 
            marginBottom: expandedCard !== null ? "-2rem" : "0rem",
            transition: { duration: 0.5 }
          }}
        >
          <Link href="/bookings" className="contents">
            <motion.button
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 lg:mt-8 px-12 py-4 mb-8 lg:mb-12 bg-white text-black rounded-full font-semibold text-lg lg:text-xl transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
            >
              Book Your Wild Experience
            </motion.button>
          </Link>

          <Link href="#services" className="hover:opacity-80">
            <ChevronDown className="w-8 h-8 lg:w-10 lg:h-10" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}