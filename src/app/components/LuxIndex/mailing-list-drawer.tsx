'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Check, ChevronLeft, Star } from 'lucide-react'

interface MailingListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  autoTrigger?: boolean;
}

const MailingListDrawer: React.FC<MailingListDrawerProps> = ({ 
  isOpen: controlledIsOpen, 
  onClose, 
  autoTrigger = true
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(controlledIsOpen)
  const [hasBeenClosed, setHasBeenClosed] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hasClosedBefore = localStorage.getItem('mailingListDrawerClosed')
    if (hasClosedBefore) {
      setHasBeenClosed(true)
    }

    if (autoTrigger && !hasClosedBefore) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000) // Show after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [autoTrigger])

  useEffect(() => {
    setIsOpen(controlledIsOpen)
  }, [controlledIsOpen])

  const handleClose = () => {
    setIsOpen(false)
    if (autoTrigger) {
      setHasBeenClosed(true)
      localStorage.setItem('mailingListDrawerClosed', 'true')
    }
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => {
      setIsSubmitted(false)
      handleClose()
    }, 3000)
  }

  const drawerVariants = {
    hidden: { 
      x: '100%',
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
      x: '0%',
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
      x: 50,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            className="fixed inset-y-0 right-0 bg-[var(--lux-navy)] shadow-lg z-50 overflow-y-auto w-full sm:w-96 md:w-[28rem]"
          >
            {/* Fixed header with close button */}
            <div className="sticky top-0 bg-[var(--lux-navy)] bg-opacity-80 backdrop-blur-sm shadow-md z-10 border-b border-[var(--lux-gold)]">
              <div className="px-4 py-3 flex justify-between items-center">
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full hover:bg-[var(--lux-gold)]/20 transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="h-6 w-6 text-[var(--lux-gold)]" />
                </button>
                <h2 className="text-xl font-bold text-[var(--lux-gold)] font-playfair">LuxFino Exclusive</h2>
                <div className="w-10"></div> {/* Spacer for centering */}
              </div>
            </div>

            <motion.div 
              className="p-6 sm:p-8 relative flex flex-col justify-start items-center min-h-[calc(100vh-64px)]"
              variants={contentVariants}
            >
              {/* Content */}
              <div className="w-full flex flex-col items-center justify-start space-y-8">
                <div className="w-full relative">
                  <Image
                    src="/DiscoverLuxRemote.JPG"
                    alt="LuxFino Experience"
                    width={400}
                    height={250}
                    className="rounded-lg shadow-2xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-[var(--lux-gold)]">
                    <h3 className="text-2xl font-bold mb-2 font-playfair">Tofino Luxury Awaits</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-[var(--lux-gold)] fill-current" />
                      <Star className="h-5 w-5 text-[var(--lux-gold)] fill-current" />
                      <Star className="h-5 w-5 text-[var(--lux-gold)] fill-current" />
                      <Star className="h-5 w-5 text-[var(--lux-gold)] fill-current" />
                      <Star className="h-5 w-5 text-[var(--lux-gold)] fill-current" />
                      <span className="ml-2 text-sm">5.0 (250+ reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="w-full text-center">
                  <h2 className="text-3xl font-bold mb-4 text-[var(--lux-gold)] font-playfair">Exclusive Updates</h2>
                  <p className="text-lg text-[var(--lux-ivory)] mb-6 font-avenir">Be the first to know about our curated luxury experiences, special offers, and Tofino&apos;s hidden gems.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--lux-gold)]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 text-base sm:text-lg bg-[var(--lux-navy)] border border-[var(--lux-gold)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)] text-[var(--lux-ivory)] placeholder-[var(--lux-gold)]/50 font-avenir"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full h-10 sm:h-12 
                        inline-flex items-center justify-center 
                        gap-2 sm:gap-3
                        bg-gradient-to-r from-[var(--lux-gold)] to-[#B8860B]
                        hover:from-[#B8860B] hover:to-[var(--lux-gold)]
                        text-[var(--lux-ivory)]
                        text-base sm:text-lg
                        font-medium
                        px-5 sm:px-6
                        rounded-xl sm:rounded-2xl
                        transition-all duration-300
                        hover:shadow-[0_2px_10px_rgba(212,175,55,0.3)]
                        group"
                    >
                      {isSubmitted ? (
                        <span className="flex items-center justify-center">
                          <Check className="h-5 w-5 mr-2" />
                          Welcome to LuxFino!
                        </span>
                      ) : (
                        'Join the LuxFino Experience'
                      )}
                    </button>
                  </form>
                </div>
                <div className="w-full text-center mt-8">
                  <p className="text-sm text-[var(--lux-gold)]/70 font-avenir">
                    By joining, you agree to our <a href="#" className="underline hover:text-[var(--lux-ivory)]">Terms of Service</a> and <a href="#" className="underline hover:text-[var(--lux-ivory)]">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {autoTrigger && !isOpen && hasBeenClosed && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 -translate-y-1/2 right-0 bg-[var(--lux-navy)] text-[var(--lux-ivory)] p-3 rounded-l-full shadow-lg hover:bg-[var(--lux-gold)] hover:text-[var(--lux-navy)] transition-colors duration-200"
          aria-label="Open subscription form"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      )}
    </>
  )
}

export default MailingListDrawer