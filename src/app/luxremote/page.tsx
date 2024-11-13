'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/HeroSection'
import DiscoverSection from '../components/DiscoverLuxRemote'
import ExperienceAccordion from '../components/ExperienceAccordion'
import CallToAction from '../components/CallToAction'
import RemoteInclusive from '../components/Remote-inclusive'


const FadeInSection: React.FC<{ 
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}> = ({ children, delay = 0, direction = 'up' }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  }

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
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          scale: 1,
        },
        hidden: { 
          opacity: 0,
          scale: 0.95,
          ...directionOffset[direction]
        }
      }}
      transition={{ 
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
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
        <FadeInSection delay={0.2}>
          <RemoteInclusive />
        </FadeInSection>
        <FadeInSection delay={0.3} direction="right">
          <div id="discover-section">
            <DiscoverSection />
          </div>
        </FadeInSection>
        <FadeInSection delay={0.4} direction="left">
          <ExperienceAccordion />
        </FadeInSection>
        <FadeInSection delay={0.5} direction="up">
          <CallToAction />
        </FadeInSection>
      </main>
    </div>
  )
}

export default LuxRemotePage