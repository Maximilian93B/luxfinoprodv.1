'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import HeroIndex from './components/LuxIndex/IndexHero'
import AboutIndex from './components/LuxIndex/AboutIndex'
import ServiceSections from './components/LuxIndex/ServiceSection'
import OwnerFounderSection from './components/LuxIndex/Founders'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'



const QuoteRequestDrawer = dynamic(() => import('./components/FormDrawer'), {
  ssr: false,
  loading: () => <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-luxnavy bg-opacity-50 flex items-center justify-center"
  >
    <div className="bg-luxsand p-4 rounded-lg shadow-lg">
      <p className="text-luxnavy font-avenir">Loading quote request form...</p>
    </div>
  </motion.div>
})

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={staggerChildrenVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, child => (
        <motion.div variants={fadeInVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

const HomePage: React.FC = () => {
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const openQuoteDrawer = useCallback(() => setIsQuoteDrawerOpen(true), [])
  const closeQuoteDrawer = useCallback(() => setIsQuoteDrawerOpen(false), [])

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingScreen progress={loadingProgress} />
  }

  return (
    <motion.div 
      className="bg-gradient-to-b from-luxsand to-luxpearl min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <Navbar />
      <HeroIndex openQuoteDrawer={openQuoteDrawer} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <AboutIndex />
        </AnimatedSection>
        
        <AnimatedSection>
          <ServiceSections />
        </AnimatedSection>
        
        <AnimatedSection>
          <OwnerFounderSection />
        </AnimatedSection>
      </main>
      
      <AnimatedSection>
        <section className="text-luxnavy py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TribalParksSection />
          </div>
        </section>
      </AnimatedSection>
      
      <Footer />

      <AnimatePresence>
        {isQuoteDrawerOpen && (
          <QuoteRequestDrawer isOpen={isQuoteDrawerOpen} onClose={closeQuoteDrawer} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default HomePage