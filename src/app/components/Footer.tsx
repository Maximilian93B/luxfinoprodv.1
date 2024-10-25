'use client'

import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter } from "lucide-react"

const Footer: FC = () => {
  const linkVariants = {
    hover: { x: 5, transition: { duration: 0.2 } }
  }

  return (
    <footer className="bg-gradient-to-b from-luxpearl to-luxsand text-luxice py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Image
            src="/Lux.Fino.logo.svg"
            alt="LuxFino Logo"
            width={250}
            height={50}
            className="mx-auto h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <nav>
            <h6 className="text-luxocean font-playfair text-xl mb-6">Experiences</h6>
            <ul className="space-y-4">
              {["Accommodations", "Catering", "Picnics", "Corporate Events", "Weddings"].map((item) => (
                <motion.li key={item} whileHover="hover" variants={linkVariants}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-luxocean transition-colors duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <nav>
            <h6 className="text-luxocean font-playfair text-xl mb-6">Company</h6>
            <ul className="space-y-4">
              {["About Us", "Contact", "Careers", "Press"].map((item) => (
                <motion.li key={item} whileHover="hover" variants={linkVariants}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-luxocean transition-colors duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <nav>
            <h6 className="text-luxocean font-playfair text-xl mb-6">Legal</h6>
            <ul className="space-y-4">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                <motion.li key={item} whileHover="hover" variants={linkVariants}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-luxocean transition-colors duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-luxocean/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-luxocean">&copy; {new Date().getFullYear()} LuxFino. All rights reserved.</p>
          <div className="flex space-x-6">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-luxocean hover:text-luxsand transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer