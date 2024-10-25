'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: "/luxpicnic", label: "Lux Picnics" },
    { href: "/luxremote", label: "Lux Remote" },
    { href: "/luxcatering", label: "Exclusive Catering" },
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

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-luxsand/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Lux.Fino.logo.svg"
            alt="LuxFino Logo"
            width={200}
            height={80}
            className={`object-contain transition-all duration-300 ${
              isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link 
                href={item.href} 
                className="font-avenir text-luxice hover:text-luxsand transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.a 
            href="tel:+18005893466" 
            className="bg-gradient-to-r from-luxice to-luxdsnd text-luxcedar px-6 py-2 rounded-full font-avenir hover:from-luxcopper hover:to-luxsand transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={16} />
            <span className="font-playfair">+1 (800) 589-3466</span>
          </motion.a>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {socialIcons.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxice hover:text-luxsand transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-luxice hover:text-luxsand transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-luxsand/80 backdrop-blur-sm overflow-hidden"
          >
            <div className="container mx-auto py-4 px-6 space-y-4 bg-gradient-to-b from-luxnavy to-luxsand/50">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="block py-2 font-avenir text-luxcedar font-medium hover:text-luxsand transition-colors duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a 
                href="tel:+18005893466" 
                className="py-2 font-playfair font-medium text-luxcedar hover:text-luxcopper transition-colors duration-300 text-lg flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
              >
                <Phone size={20} />
                <span>+1 (800) 589-3466</span>
              </motion.a>
              <motion.div 
                className="flex justify-center space-x-6 pt-4  font-bold border-t border-luxsand/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (menuItems.length + 1) * 0.1 }}
              >
                {socialIcons.map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-luxcedar hover:text-luxsand font-bold transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}