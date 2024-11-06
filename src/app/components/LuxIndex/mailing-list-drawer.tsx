'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Check } from 'lucide-react'

interface MailingListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailingListDrawer: React.FC<MailingListDrawerProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
    }, 3000)
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
            className="fixed inset-0 bg-black bg-opacity-80 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 h-[calc(100vh-4rem)] w-full sm:w-[90vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] bg-base-200 shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{ top: `calc(${scrollY}px + 4rem)` }}
            role="dialog"
            aria-labelledby="drawer-title"
          >
            <div className="relative w-full h-1/3 sm:h-1/2 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="LuxFino Luxury Experience in Tofino"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
              <button 
                onClick={onClose}
                className="btn btn-circle btn-ghost absolute top-4 right-4 text-base-100 hover:bg-base-200 hover:bg-opacity-20"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-6 sm:p-8 bg-gradient-to-b from-base-200 to-base-300">
              <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
                <h2 id="drawer-title" className="text-3xl sm:text-4xl font-bold text-primary">Exclusive LuxFino Insider List</h2>
                
                <p className="text-lg text-base-content">
                  Join our exclusive mailing list and be the first to experience LuxFino&apos;s exquisite offerings in Tofino, BC. Receive insider access to our Lux Picnics, Lux Remote glamping, and In-House Chef Catering services.
                </p>
                
                {isSubmitted ? (
                  <div className="alert alert-success shadow-lg">
                    <div>
                      <Check className="h-6 w-6 flex-shrink-0" />
                      <span>Thank you for joining LuxFino&apos;s exclusive list!</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                      <label htmlFor="email" className="label">
                        <span className="label-text text-base-content">Email</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content h-5 w-5 opacity-60" />
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="input input-bordered w-full pl-10 bg-base-100 text-base-content"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                      Join LuxFino Insiders
                    </button>
                  </form>
                )}
                
                <p className="text-sm text-base-content opacity-70 text-center mt-auto">
                  By subscribing, you agree to receive curated communications from LuxFino. Unsubscribe anytime.
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