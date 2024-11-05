'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Linkedin, MoreHorizontal, X, Phone, Home } from 'lucide-react'

const menuItems = [
  { href: "/luxpicnic", label: "Picnics" },
  { href: "/luxremote", label: "Discover LuxRemote" },
  { href: "/luxcatering", label: "Catering, Weddings, & Events" },
]

const socialIcons = [
  { Icon: Linkedin, href: "https://www.linkedin.com" },
  { Icon: Instagram, href: "https://www.instagram.com" },
  { Icon: Home, href: "https://www.airbnb.com" },
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white text-luxcedar backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Lux.Fino.Logo2.svg"
            alt="LuxFino Logo"
            width={isScrolled ? 150 : 150}
            height={isScrolled ? 150 : 150}
            priority
            quality={100}
            className="w-auto transition-all duration-300 "
            style={{
              height: isScrolled ? '60px' : '60px',
              objectFit: 'contain',
            }}
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="font-avenir text-luxcedar hover:text-luxocean transition-all duration-300 text-xs uppercase tracking-widest border-b-2 border-transparent hover:border-luxocean"
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="tel:+18005893466" 
            className="bg-gradient-to-r from-luxcopper to-luxpearl text-luxcedar px-4 py-2 rounded-full font-avenir hover:opacity-90 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Phone size={14} />
            <span className="font-playfair text-xs">+1 (800) 589-3466</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {socialIcons.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxcedar hover:text-luxocean transition-all duration-300 transform hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-luxcedar hover:text-luxocean transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white text-luxcedar backdrop-blur-md shadow-lg"
          >
            <div className="container mx-auto py-6 px-8 space-y-6 flex flex-col items-center">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-center py-2 font-avenir text-luxcedar font-medium hover:text-luxocean transition-all duration-300 text-lg hover:-translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="tel:+18005893466" 
                className="text-center py-2 font-playfair font-medium text-luxcedar hover:text-luxocean transition-colors duration-300 text-lg flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>+1 (800) 589-3466</span>
              </a>
              <div className="flex justify-center space-x-8 pt-6 border-t border-luxpearl/20 w-full">
                {socialIcons.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxcedar hover:text-luxocean transition-colors duration-300"
                  >
                    <Icon size={22} />
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