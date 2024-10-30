'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Package, MapPin, Calendar, Sparkles } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    icon: <Package className="w-8 h-8 text-luxgold" />,
    title: "Select Your Picnic Package",
    description: "Choose from our curated selection of luxury picnic experiences, each designed to cater to your unique preferences."
  },
  {
    icon: <MapPin className="w-8 h-8 text-luxgold" />,
    title: "Choose Your Location",
    description: "Pick from our handpicked scenic locations in Tofino, or let us know your dream spot for a truly personalized experience."
  },
  {
    icon: <Calendar className="w-8 h-8 text-luxgold" />,
    title: "Set the Date",
    description: "Select your preferred date and time for your luxurious outdoor dining adventure."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-luxgold" />,
    title: "Relax and Enjoy",
    description: "Sit back and let LuxFino Picnics handle the rest. We'll take care of every detail to ensure a magical experience."
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const StepItem = ({ step, index }: { step: typeof steps[0], index: number }) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      variants={fadeInUp}
    >
      <motion.div 
        className="w-20 h-20 rounded-full bg-luxcopper flex items-center justify-center mb-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {step.icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 font-playfair text-luxnavy">{step.title}</h3>
      <p className="text-luxcedar font-avenir">{step.description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-luxpearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.5 }
            }
          }}
          initial="hidden"
          animate={controls}
        >
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 2.5 } }
          }}
        >
          <a 
            href="#glimpse-tables" 
            className="inline-block bg-luxcopper text-luxcedar font-bold py-4 px-8 rounded-full transition-colors duration-300 font-avenir text-lg hover:bg-luxnavy hover:text-luxcedar"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('glimpse-tables')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Glimpse at Our Picnics
          </a>
        </motion.div>
      </div>
    </section>
  )
}