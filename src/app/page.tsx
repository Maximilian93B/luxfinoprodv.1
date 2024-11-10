'use client'

import React, { useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroIndex from './components/LuxIndex/IndexHero'
import LuxFinoServices from './components/LuxIndex/AboutIndex'
import ServiceSections from './components/LuxIndex/ServiceSection'
import OwnerFounderSection from './components/LuxIndex/Founders'
import TribalParksSection from './components/TribalParksAdvert'
import LoadingScreen from './components/LoadingScreen'

// New imports for the particle effect
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import MailingListDrawer from './components/LuxIndex/mailing-list-drawer'
import LuxCTA from './components/luxCTA'


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
          zIndex: 0
        },
        background: {
          color: {
            value: "#0C2233", // Deep Navy
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
              distance: 150,
              duration: 0.4,
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: ["#D4AF37", "#F8F3E3"], // Gold and Ivory particles
          },
          links: {
            color: "#D4AF37", // Gold links
            distance: 150,
            enable: false,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
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
            value: { min: 0.5, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

// Home Page Component
const HomePage: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false)
  const [isMailingDrawerOpen, setIsMailingDrawerOpen] = useState(false)

  const handleEnter = useCallback(() => {
    setShowMainContent(true)
  }, [])

  if (!showMainContent) {
    return <LoadingScreen onEnter={handleEnter} />
  }

  return (
    <div className="relative min-h-screen bg-lux-navy">
      <div className="absolute inset-0 z-0">
        <ParallaxBackground />
      </div>
      <motion.div 
        className="relative z-10 min-h-screen"
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



           
            <AnimatedSection direction="right">
              <motion.div 
                className="py-24" 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
               <LuxCTA />
              </motion.div>
            </AnimatedSection>
           
          </div>
        </main>
      </motion.div>
      
      <MailingListDrawer 
        isOpen={isMailingDrawerOpen}
        onClose={() => setIsMailingDrawerOpen(false)}
        autoTrigger={true}
      />
    </div>
  )
}

export default HomePage