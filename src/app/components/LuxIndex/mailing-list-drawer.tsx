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
            className="fixed right-0 h-[calc(100vh-4rem)] w-full sm:w-[90vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] bg-white shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{ top: `calc(${scrollY}px + 4rem)` }}
            role="dialog"
            aria-labelledby="drawer-title"
          >
            <div className="relative w-full h-1/3 sm:h-1/2 overflow-hidden grid grid-cols-3 gap-1">
              <div className="relative overflow-hidden group">
                <Image
                  src="/LuxPicMain.jpeg"
                  alt="LuxFino Lux Picnics"
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lux Picnics
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <Image
                  src="/LuxFinoMain.jpg"
                  alt="LuxFino Lux Remote Glamping"
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lux Remote
                </div>
              </div>
              <div className="relative overflow-hidden group">
                <Image
                  src="/WeddingPic.JPG"
                  alt="LuxFino In-House Chef Catering"
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  In-House Chef
                </div>
              </div>
              <button 
                onClick={onClose}
                className="btn btn-circle btn-ghost absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-8 sm:p-10 bg-gradient-to-b from-gray-50 to-white">
              <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
                <h2 id="drawer-title" className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Exclusive LuxFino Insider List</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Join our exclusive mailing list and be the first to experience LuxFino&apos;s exquisite offerings in Tofino, BC. Receive insider access to our Lux Picnics, Lux Remote glamping, and In-House Chef Catering services.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 mr-2" />
                      <span>Thank you for joining LuxFino&apos;s exclusive list!</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                      <label htmlFor="email" className="label">
                        <span className="label-text text-gray-700 text-sm font-medium">Email</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="input input-bordered w-full pl-10 bg-white text-gray-900 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                        />
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      className="btn w-full bg-black hover:bg-gray-800 text-white border-transparent hover:border-transparent transition-colors duration-300 rounded-none"
                    >
                      Join LuxFino Insiders
                    </button>
                  </form>
                )}
                
                <p className="text-sm text-gray-500 text-center mt-auto">
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