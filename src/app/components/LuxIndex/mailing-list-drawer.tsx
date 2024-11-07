'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Check } from 'lucide-react'

interface MailingListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  autoTrigger?: boolean;
}

const drawerVariants = {
  hidden: { 
    y: '100%',
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  visible: { 
    y: '0%',
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.4,
      ease: "easeInOut"
    }
  }
}

const contentVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const MailingListDrawer: React.FC<MailingListDrawerProps> = ({ 
  isOpen: controlledIsOpen, 
  onClose, 
  autoTrigger = true
}) => {
  const [email, setEmail] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isOpen, setIsOpen] = useState(controlledIsOpen)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)

      if (autoTrigger && !hasTriggered) {
        const servicesSection = document.getElementById('services-section')
        if (servicesSection) {
          const servicesSectionBottom = servicesSection.offsetTop + servicesSection.offsetHeight
          if (newScrollY > servicesSectionBottom) {
            setIsOpen(true)
            setHasTriggered(true)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [autoTrigger, hasTriggered])

  useEffect(() => {
    setIsOpen(controlledIsOpen)
  }, [controlledIsOpen])

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => {
      setIsSubmitted(false)
      handleClose()
    }, 3000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={drawerVariants}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl z-50"
        >
          <motion.div 
            className="p-6 max-w-2xl mx-auto"
            variants={contentVariants}
          >
            {/* Drawer handle bar */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
              <div className="h-1.5 w-12 bg-gray-300 rounded-full" />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              {/* Your close icon */}
            </button>

            {/* Content */}
            <div className="mt-8">
              {/* Your existing drawer content */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MailingListDrawer