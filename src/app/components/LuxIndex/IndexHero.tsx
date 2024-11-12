import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion,  useAnimation } from 'framer-motion'
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

const Divider = () => (
  <div className="hidden lg:flex flex-col items-center justify-center px-2">
    <div className="w-px h-16 bg-lux-gold"></div>
    <div className="w-3 h-3 rounded-full bg-lux-gold my-2"></div>
    <div className="w-px h-16 bg-lux-gold"></div>
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
      title: 'Lux Remote',
      description: 'Immerse yourself in private, luxury glamping sanctuaries. Our retreats blend luxury comfort with Tofinos pristine wilderness for an exclusive escape.',
      icon: <Tent className="w-12 h-12 lg:w-16 lg:h-16" />,
      image: '/LuxFinoMain.jpg',
      href: '/luxremote',
    },
    {
      title: 'Lux Picnics',
      description: 'Savor our chef-curated picnics in secret coastal locations. From intimate dates to group celebrations, experience our picnics against Tofino\'s dramatic shoreline.',
      icon: <Mountain className="w-12 h-12 lg:w-16 lg:h-16" />,
      image: '/LuxPicMain.jpeg',
      href: '/luxpicnic',
    },
    {
      title: 'Event Catering & Elopement Packages',
      description: 'From intimate elopements to grand celebrations, our chefs craft personalized culinary journeys. Let us transform your special moments into extraordinary memories.',
      icon: <ChefHat className="w-12 h-12 lg:w-16 lg:h-16" />,
      image: '/WeddingPackages.JPG',
      href: '/luxcatering',
    },
  ]

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      color: { value: "#D4AF37" },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "bounce" as const },
        random: false,
        speed: 0.4,
        straight: false,
      },
      number: {
        density: { 
          enable: true, 
          area: isMobile ? 800 : 1200
        },
        value: isMobile ? 150 : 250
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 0.7, max: 1.5 } },
    },
    detectRetina: true,
  }

  return (
    <div className="relative min-h-screen lg:min-h-[120vh] bg-lux-ocean text-lux-ivory overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 h-[110%] w-screen overflow-hidden"
        style={{
          transform: isMobile ? 'none' : `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative w-[120%] h-full -left-[10%]">
          <Image
            src="/LuxFinoMain.jpg"
            alt="Expansive Tofino landscape"
            fill
            sizes="100vw"
            priority
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center 0%',
              transform: 'scale(0.9)',
            }}
           
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 w-full min-h-screen flex">
        <div className="w-full flex items-center justify-center mt-28 sm:mt-32 lg:mt-48">
          <div className="max-w-[1600px] w-full flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 px-4 lg:px-12">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 relative z-20">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.165, 0.84, 0.44, 1]
                }}
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-center px-4 sm:px-2 text-transparent bg-clip-text bg-gradient-to-r from-lux-gold via-luxpearl to-lux-gold relative z-20"
              >
              Reimagine Luxury in Tofino
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5,
                  ease: "easeOut" 
                }}
                className="hidden sm:block text-lux-ivory/90 text-xl sm:text-2xl lg:text-3xl max-w-[320px] sm:max-w-xl lg:max-w-3xl leading-relaxed px-4 text-center font-light"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Where wilderness meets luxury.{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="font-medium text-lux-gold"
                >
                  Let us create unforgettable experiences for you.
                </motion.span>
              </motion.p>
            </div>

            <div id="services" className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 sm:gap-10 lg:gap-12 w-full">
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
                          height: expandedCard === index ? "480px" : "340px",
                          transition: { duration: 0.5, ease: "easeInOut" }
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
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
                          className="absolute inset-x-0 bottom-0 p-8 text-center flex flex-col items-center z-20"
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
                            <h2 className="text-3xl lg:text-4xl font-bold mt-3 lg:mt-4">{service.title}</h2>
                          </motion.div>
                          <motion.p
                            className="text-lux-ivory text-lg lg:text-xl mt-6 overflow-hidden"
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
                            className="mt-8 inline-flex items-center text-luxpearl font-semibold"
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
              className="flex flex-col items-center w-full px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >  
              <Link href="/bookings" className="w-full max-w-[280px] sm:max-w-none sm:w-auto">
                <motion.button
                  whileHover={{ 
                    scale: isMobile ? 1 : 1.03,
                    backgroundColor: '#D4AF37',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ backgroundColor: '#606C5D' }}
                  className="w-full sm:w-auto 
                    px-6 sm:px-8 lg:px-12 
                    py-3 sm:py-4 
                    mb-6 sm:mb-8 lg:mb-10 
                    text-lux-ivory 
                    rounded-full 
                    text-sm sm:text-base lg:text-lg
                    font-medium 
                    transition-all duration-300 
                    shadow-md sm:shadow-lg hover:shadow-xl
                    relative
                    overflow-hidden
                    bg-lux-olive
                    border border-lux-gold/20"
                >
                  <span className="relative z-10">Book Your Experience</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}