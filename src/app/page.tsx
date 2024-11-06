'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroIndex from './components/LuxIndex/IndexHero'
import LuxFinoServices from './components/LuxIndex/AboutIndex'
import ServiceSections from './components/LuxIndex/ServiceSection'
import OwnerFounderSection from './components/LuxIndex/Founders'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import MailingListDrawer from './components/LuxIndex/mailing-list-drawer'
import { useInView } from 'react-intersection-observer'


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
  const [showMainContent, setShowMainContent] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showMailingList, setShowMailingList] = useState(false)
  const [hasShownMailingList, setHasShownMailingList] = useState(false)
  const [lastMailingListShow, setLastMailingListShow] = useState<number | null>(null)


  const { ref: servicesSectionRef, inView: ServicesSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
})

  useEffect(() => {
    if (ServicesSectionInView && !hasShownMailingList) {
      const fiveSeconds = 5 * 1000
      const lastShown = localStorage.getItem('lastMailingListShow')
      
      if (!lastShown || (Date.now() - Number(lastShown)) > fiveSeconds) {
        const timer = setTimeout(() => {
          setShowMailingList(true)
          setHasShownMailingList(true)
          const currentTime = Date.now()
          localStorage.setItem('lastMailingListShow', currentTime.toString())
          setLastMailingListShow(currentTime)
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [ServicesSectionInView, hasShownMailingList])

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
      
      <HeroIndex />
      
      <main className="max-w-7xl mx-auto my-auto py-12 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div id="services-section" className="py-24" ref={servicesSectionRef}>
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
     
      <MailingListDrawer 
        isOpen={showMailingList} 
        onClose={handleMailingListClose} 
      />
    </motion.div>
  )
}

export default HomePage