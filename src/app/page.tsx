'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroIndex from './components/LuxIndex/IndexHero'
import LuxFinoServices from './components/LuxIndex/AboutIndex'
import ServiceSections from './components/LuxIndex/ServiceSection'
import OwnerFounderSection from './components/LuxIndex/Founders'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

// New imports for the particle effect
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine, Container } from "tsparticles-engine"
import MailingListDrawer from './components/LuxIndex/mailing-list-drawer'


// Framer Motion Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Animation Variants
const animationVariants = {
  left: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },
  right: {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },
  bottom: {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  }
}

// Animated Section Component
const AnimatedSection: React.FC<{ children: React.ReactNode; direction: 'left' | 'right' | 'bottom' }> = ({ children, direction }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1, 
    margin: "0px 0px -50px 0px"
  })


  return (
    <motion.div
      ref={ref}
      variants={animationVariants[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

// Parallax Background Component
const ParallaxBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1 // Ensure it stays behind content
        },
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#D4AF37", // Updated to match loading screen gold
          },
          links: {
            color: "luxpearl",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.4, max: 1.7 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0"
    />
  )
}

// Home Page Component
const HomePage: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(true)
  const [isMailingDrawerOpen, setIsMailingDrawerOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen loading screen
    const hasSeenLoading = localStorage.getItem('luxfino-loading-seen')
    if (hasSeenLoading) {
      setShowMainContent(true)
    }
  }, [])

  const handleEnter = useCallback(() => {
    setShowMainContent(true)
  }, [])

  if (!showMainContent) {
    return <LoadingScreen onEnter={handleEnter} />
  }

  return (
    <>
      <ParallaxBackground />
      <motion.div 
        className="min-h-screen relative"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <Navbar />
        
        <HeroIndex />
        
        <main className="relative">
          <div className="relative max-w-7xl mx-auto my-auto py-12 sm:px-6 lg:px-8">
            <AnimatedSection direction="left">
              <motion.div 
                className="py-24" 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LuxFinoServices />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div 
                className="py-24 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ServiceSections />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection direction="bottom">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <OwnerFounderSection />
              </motion.div>
            </AnimatedSection>
          
            <AnimatedSection direction="left">
              <motion.section 
                className="text-luxocean py-24"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <TribalParksSection />
                </div>
              </motion.section>
            </AnimatedSection>
          </div>
        </main>
        
        <Footer />
      </motion.div>
      
      <MailingListDrawer 
        isOpen={isMailingDrawerOpen}
        onClose={() => setIsMailingDrawerOpen(false)}
        autoTrigger={true}
      />
    </>
  )
}

export default HomePage