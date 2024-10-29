'use client'

import React, { useState, useCallback } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import HeroIndex from './components/LuxIndex/IndexHero'
import AboutIndex from './components/LuxIndex/AboutIndex'
import ServiceSections from './components/LuxIndex/ServiceSection'
import OwnerFounderSection from './components/LuxIndex/Founders'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'

// Dynamically import the QuoteRequestDrawer to improve initial load time
const QuoteRequestDrawer = dynamic(() => import('./components/FormDrawer'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUpVariants}
    >
      {children}
    </motion.div>
  )
}

const HomePage: React.FC = () => {
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false)

  const openQuoteDrawer = useCallback(() => setIsQuoteDrawerOpen(true), [])
  const closeQuoteDrawer = useCallback(() => setIsQuoteDrawerOpen(false), [])

  return (
    <div className=" bg-gradient-to-b from-luxsand to-luxforest min-h-screen">
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
        <section className=" text-luxnavy py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TribalParksSection />
          </div>
        </section>
      </AnimatedSection>
      
      <Footer />

      <QuoteRequestDrawer isOpen={isQuoteDrawerOpen} onClose={closeQuoteDrawer} />
    </div>
  )
}

export default HomePage