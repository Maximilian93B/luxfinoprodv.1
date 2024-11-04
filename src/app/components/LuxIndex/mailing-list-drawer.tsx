'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'

interface MailingListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailingListDrawer: React.FC<MailingListDrawerProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-drawer-backdrop pointer-events-none"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 h-[calc(100vh-4rem)] w-full sm:w-[90vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] bg-luxpearl shadow-2xl z-drawer overflow-hidden flex flex-col scroll-smooth scrollbar-hide"
            style={{ top: `calc(${scrollY}px + 4rem)` }}
          >
            <div className="relative w-full h-1/2 sm:h-2/3 overflow-hidden rounded-sm pointer-events-auto">
              <Image
                src="/LuxCateringCard.JPG"
                alt="LuxFino Culinary Experience"
                fill
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                className="transition-transform duration-300 hover:scale-105"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 btn btn-ghost btn-circle text-luxpearl hover:bg-luxsand/20"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <div className="relative p-16 sm:p-16 flex flex-col space-y-8 mb-12">
                <h2 className="text-5xl sm:text-4xl font-bold text-luxcedar">Join Our Exclusive Mailing List</h2>
                
                <p className="text-lg text-luxcedar">
                  Be the first to experience LuxFino&apos;s culinary delights, receive exclusive offers, and enter our monthly giveaway for a chance to win an exquisite dining experience.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <div className="relative mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="input input-bordered w-full pl-12 py-3 bg-luxpearl/50 text-luxcedar border-luxcedar text-lg"
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxcedar h-6 w-6" />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="btn w-full bg-gradient-to-r from-[#D9B88F] to-[#CB7D55] text-luxcedar transition-colors duration-300 py-2 px-4 text-lg rounded-full"
                  >
                    Subscribe to LuxFino
                  </button>
                </form>
                
                <p className="text-sm text-luxcedar opacity-70 text-center mt-auto">
                  By subscribing, you agree to receive marketing communications from LuxFino. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MailingListDrawer