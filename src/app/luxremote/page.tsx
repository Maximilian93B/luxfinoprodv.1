'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/HeroSection'
import DiscoverSection from '../components/DiscoverLuxRemote'
import ExperienceAccordion from '../components/ExperienceAccordion'
import CallToAction from '../components/CallToAction'
import RemoteInclusive from '../components/Remote-inclusive'


const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

const LuxRemotePage: React.FC = () => {
  return (
    <div className='bg-lux-ocean min-h-screen'>
      <main>
        <HeroSection />
        <FadeInSection>
          <RemoteInclusive />
        </FadeInSection>
        <FadeInSection>
          <div id="discover-section">
            <DiscoverSection />
          </div>
        </FadeInSection>
        <FadeInSection>
          <ExperienceAccordion />
        </FadeInSection>
        <FadeInSection>
          <CallToAction />
        </FadeInSection>
      </main>
    </div>
  )
}

export default LuxRemotePage