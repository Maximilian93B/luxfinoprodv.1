'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Menu, X, Phone } from 'lucide-react'

const menuItems = [
  { href: "/luxpicnic", label: "Picnics" },
  { href: "/luxremote", label: "Discover LuxRemote" },
  { href: "/luxcatering", label: "Catering, Weddings, & Events" },
]

const socialIcons = [
  { Icon: Linkedin, href: "https://www.linkedin.com" },
  { Icon: Instagram, href: "https://www.instagram.com" },
  { Icon: Facebook, href: "https://www.facebook.com" },
  { 
    Icon: () => (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 8l10 6 10-6-10-6zM2 18l10 6 10-6M2 13l10 6 10-6"/>
      </svg>
    ), 
    href: "https://www.airbnb.com" 
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-luxpearl/90 py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/lux fino-icon.pdf.svg"
            alt="LuxFino Logo"
            width={100}
            height={100}
            className={`transition-all duration-300 ${isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'}`}
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="font-avenir text-luxcedar hover:text-luxcedar transition-all duration-300 text-md uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="tel:+18005893466" 
            className="bg-gradient-to-r from-luxpearl to-luxsand text-luxcedar px-6 py-2 rounded-full font-avenir hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2 shadow-lg"
          >
            <Phone size={16} />
            <span className="font-playfair">+1 (800) 589-3466</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {socialIcons.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxcedar hover:text-luxcedar transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-luxcedar hover:text-luxocean transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-luxnavy/90 to-luxsand/90 backdrop-blur-md"
          >
            <div className="container mx-auto py-4 px-6 space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="block py-2 font-avenir text-luxcedar font-medium hover:text-luxocean transition-all duration-300 text-lg hover:-translate-y-0.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="tel:+18005893466" 
                className="py-2 font-playfair font-medium text-luxcedar hover:text-luxocean transition-colors duration-300 text-lg flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>+1 (800) 589-3466</span>
              </a>
              <div className="flex justify-center space-x-6 pt-4 border-t border-luxpearl/90">
                {socialIcons.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxcedar hover:text-luxocean transition-colors duration-300"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}