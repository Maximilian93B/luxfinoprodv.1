'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Mail } from 'lucide-react'

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-[#F8F3E3] hover:text-[#D4AF37] transition-colors duration-300 text-lg">
    {children}
  </Link>
)

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#F8F3E3] hover:text-[#D4AF37] transition-colors duration-300 p-3 bg-[#0C2233] rounded-full hover:bg-[#1A3344]">
    {icon}
  </a>
)

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0C2233] to-[#1A3344] relative overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Lux.Fino.Logo2.svg"
          alt="LuxFino logo"
          fill
          priority
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          className="opacity-10"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-4xl font-bold text-[#D4AF37] mb-6">LuxFino</h3>
            <p className="text-[#F8F3E3]/80 mb-8 text-lg leading-relaxed">
              Crafting unforgettable luxury experiences in the wild beauty of Tofino.
            </p>
            <div className="flex space-x-6">
              <SocialIcon href="https://instagram.com/luxfino" icon={<Instagram size={24} />} />
              <SocialIcon href="https://facebook.com/luxfino" icon={<Facebook size={24} />} />
              <SocialIcon href="mailto:info@luxfino.com" icon={<Mail size={24} />} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold text-[#D4AF37] mb-6">Experiences</h4>
            <ul className="space-y-4">
              <li><FooterLink href="/luxpicnic">Luxury Picnics</FooterLink></li>
              <li><FooterLink href="/luxremote">Wild Escapes</FooterLink></li>
              <li><FooterLink href="/luxcatering">Bespoke Catering</FooterLink></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-2xl font-bold text-[#D4AF37] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><FooterLink href="/about">Our Story</FooterLink></li>
              <li><FooterLink href="/team">Our Team</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-2xl font-bold text-[#D4AF37] mb-6">Contact</h4>
            <address className="not-italic text-[#F8F3E3]/80 text-lg leading-relaxed">
              <p>1234 Pacific Rim Highway</p>
              <p>Tofino, BC V0R 2Z0</p>
              <p>Canada</p>
              <p className="mt-4">
                <a href="tel:+12501234567" className="hover:text-[#D4AF37] transition-colors duration-300">
                  +1 (250) 123-4567
                </a>
              </p>
            </address>
          </motion.div>
        </div>
        <motion.div
          className="mt-16 pt-8 border-t border-[#F8F3E3]/20 text-center text-[#F8F3E3]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg">&copy; {new Date().getFullYear()} LuxFino. All rights reserved.</p>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#7D8A6A] to-[#F8F3E3]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </footer>
  )
}