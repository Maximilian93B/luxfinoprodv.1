'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface BioCardProps {
  name: string
  imageSrc: string
  bio: string
  roles: string[]
}

const BioCard: React.FC<BioCardProps> = ({ name, imageSrc, bio, roles }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-luxcream p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <div className="mb-6 relative">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-luxocean">
            <Image
              src={imageSrc}
              alt={name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
          <motion.div 
            className="absolute -bottom-14 left-2 transform -translate-x-1/2 bg-luxgold text-luxpearl px-4 py-1 rounded-full font-avenir font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {roles.join(" & ")}
          </motion.div>
        </div>
        <h3 className="text-3xl font-playfair font-bold mt-8 text-luxpearl">{name}</h3>
        <p className="text-luxpearl/80 font-avenir leading-relaxed text-center mt-4">{bio}</p>
      </div>
    </motion.div>
  )
}

export default function OwnerFounderSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-playfair font-bold mb-8 text-center text-luxpearl"
        >
          The Visionaries Behind LuxFino
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-16 max-w-3xl mx-auto text-center font-avenir leading-relaxed text-luxpearl/90"
        >
          At the heart of LuxFino are Morgan and Dre, a dynamic duo combining their passions for luxury, food, and unforgettable experiences. Together, they bring their love for Tofino and its natural beauty into everything they create, from breathtaking picnics to immersive glamping adventures.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <BioCard
            name="Morgan"
            roles={["Co-Founder", "Experience Curator"]}
            imageSrc="/MorganBoiPIc.JPG" 
            bio="Morgan is dedicated to crafting unforgettable experiences for guests, believing that every moment begins with a lasting first impression. As a curator of beautiful aesthetics, she has a keen eye for hidden treasures and exquisite textiles, ensuring you feel like royalty while you relax and take in the breathtaking views."
          />

          <BioCard
            name="Andres"
            roles={["CEO","Executive Chef"]}
            imageSrc="/DreHeadShot.JPG" 
            bio="Chef Andres, known as Dre, made his way to Tofino seven years ago, drawn by a deep passion for luxury and culinary artistry. His journey began at the stunning Clayoquot Wilderness Resort, where he infused his Latin American roots into every dish, blending comfort food with vibrant global influences. With over a decade of experience, nothing brings him more joy than seeing a smile after the first bite."
          />
        </div>
      </div>
    </section>
  )
}