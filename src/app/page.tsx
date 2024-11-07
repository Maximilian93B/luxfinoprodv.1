'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion'
import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroIndex from './components/LuxIndex/IndexHero'
import LuxFinoServices from './components/LuxIndex/AboutIndex'
import ServiceSections from './components/LuxIndex/ServiceSection'
import OwnerFounderSection from './components/LuxIndex/Founders'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import MailingListDrawer from './components/LuxIndex/mailing-list-drawer'

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

const HomePage: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showMailingList, setShowMailingList] = useState(false)
  const [hasShownMailingList, setHasShownMailingList] = useState(false)
  const [lastMailingListShow, setLastMailingListShow] = useState<number | null>(null)
  const servicesSectionRef = React.useRef(null)
  const isServicesSectionPassed = useInView(servicesSectionRef, {
    amount: 0.3,
    margin: "0px 0px -20% 0px",
    once: true
  })

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  useEffect(() => {
    console.log('Service Section Ref:', servicesSectionRef.current)
    console.log('Effect running - isServicesSectionPassed:', isServicesSectionPassed)
    console.log('hasShownMailingList:', hasShownMailingList)
    
    if (isServicesSectionPassed && !hasShownMailingList) {
      const thirtySeconds = 30 * 1000
      const lastShown = localStorage.getItem('lastMailingListShow')
      const currentTime = Date.now()
      
      console.log('Last shown time:', lastShown)
      console.log('Current time:', currentTime)
      
      if (!lastShown || (currentTime - Number(lastShown)) > thirtySeconds) {
        console.log('Setting up mailing list timer')
        const timer = setTimeout(() => {
          console.log('Showing mailing list')
          setShowMailingList(true)
          setHasShownMailingList(true)
          localStorage.setItem('lastMailingListShow', currentTime.toString())
          setLastMailingListShow(currentTime)
        }, 300)
        
        return () => clearTimeout(timer)
      } else {
        console.log('Skipping mailing list - shown too recently')
      }
    }
  }, [isServicesSectionPassed, hasShownMailingList])

  const handleEnter = useCallback(() => {
    setShowMainContent(true);
  }, []);

  const handleMailingListClose = useCallback(() => {
    setShowMailingList(false)
  }, [])

  if (!showMainContent) {
    return (
      <LoadingScreen 
        onEnter={handleEnter}
      />
    );
  }

  return (
    <motion.div 
      className="bg-white min-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <Navbar />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-luxnavy z-50"
        style={{ scaleX }}
      />
      
      <HeroIndex />
      
      <main className="relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/LuxFinoMain.jpg"
            alt="LuxFino background"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            quality={100}
            className="opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto my-auto py-12 sm:px-6 lg:px-8">
          <AnimatedSection direction="left">
            <motion.div 
              id="services-section" 
              className="py-24" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LuxFinoServices />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <motion.div 
              ref={servicesSectionRef}
              id="details-section" 
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
              className="text-luxnavy py-24"
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
     
      <MailingListDrawer 
        isOpen={showMailingList} 
        onClose={handleMailingListClose} 
      />
    </motion.div>
  )
}

export default HomePage