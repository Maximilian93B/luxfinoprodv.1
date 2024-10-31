'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import HeroIndex from './components/LuxIndex/IndexHero'
import LuxFinoServices from './components/LuxIndex/AboutIndex'
import ServiceSections from './components/LuxIndex/ServiceSection'
import OwnerFounderSection from './components/LuxIndex/Founders'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const QuoteRequestDrawer = dynamic(() => import('./components/FormDrawer'), {
  ssr: false,
  loading: () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-luxnavy bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-luxsand p-6 rounded-lg shadow-2xl">
        <p className="text-luxnavy font-avenir text-lg">Loading quote request form...</p>
      </div>
    </motion.div>
  )
})

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

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={staggerChildrenVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

const HomePage: React.FC = () => {
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const openQuoteDrawer = useCallback(() => setIsQuoteDrawerOpen(true), [])
  const closeQuoteDrawer = useCallback(() => setIsQuoteDrawerOpen(false), [])

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = useCallback(() => {
    setShowMainContent(true);
  }, []);

  if (!showMainContent) {
    return (
      <LoadingScreen 
        onEnter={handleEnter}
      />
    );
  }

  return (
    <motion.div 
      className="bg-gradient-to-b from-luxcopper to-luxsand min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <Navbar />
      
      <HeroIndex openQuoteDrawer={openQuoteDrawer} />
      
      <main className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div id="services-section" className="py-24">
            <LuxFinoServices />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div  id="details-section" className="py-24">
            <ServiceSections />
          </div>
        </AnimatedSection>
        


        <AnimatedSection>

            <OwnerFounderSection />
    
        </AnimatedSection>
      
        <AnimatedSection>
          <section className="text-luxnavy py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <TribalParksSection />
            </div>
          </section>
        </AnimatedSection>
      </main>
      
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