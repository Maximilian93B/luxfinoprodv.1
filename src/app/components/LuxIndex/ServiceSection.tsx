import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceSectionProps {
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  linkHref: string
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  reverse = false,
  linkHref,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 md:mb-32 last:mb-0"
    >
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-16`}>
        <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="object-cover w-full h-[300px] md:h-[500px] transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-4xl md:text-6xl font-playfair font-bold mb-4 md:mb-6 text-lux-gold">{title}</h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lux-ivory mb-6 md:mb-8 font-avenir leading-relaxed text-lg md:text-xl px-4 md:px-0"
          >
            {description}
          </motion.p>
          <Link href={linkHref}>
            <motion.button 
              className="h-11 md:h-13
                inline-flex items-center justify-center
                bg-gradient-to-r from-[#7D8A6A] to-[#556B2F] 
                hover:from-[#556B2F] hover:to-[#7D8A6A]
                text-[#F8F3E3] text-sm md:text-base font-medium
                px-8 md:px-10 py-3 md:py-4 rounded-full
                shadow-[0_2px_10px_rgba(125,138,106,0.2)]
                transition-all duration-300 ease-out
                hover:shadow-[0_5px_20px_rgba(125,138,106,0.3)]
                hover:translate-y-[-2px]
                active:translate-y-[1px]
                whitespace-nowrap
                group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServiceSections() {
  return (
    <section className="bg-transparent rounded-xl py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-playfair font-semibold mb-6 md:mb-8 text-center text-lux-gold"
        >
          Your Tofino Adventure Awaits
        </motion.h2>
        <p className="text-lux-ivory text-center mb-12 md:mb-16 font-avenir text-xl md:text-2xl max-w-3xl mx-auto px-4 md:px-0">
          Ready to experience Tofino like never before? Let us create unforgettable moments that blend luxury with the raw beauty of the Pacific Northwest.
        </p>
        <ServiceSection
          title="Luxury Picnics"
          description="Picture this: your own private beach setup, complete with cozy blankets, stunning decor, and a gourmet feast. We'll handle every detail while you soak in those incredible ocean views. Perfect for proposals, celebrations, or just because you deserve something special."
          buttonText="Plan Your Perfect Picnic"
          imageSrc="/LuxPicMain.jpeg"
          imageAlt="Luxury beachside picnic setup with elegant decor and gourmet food"
          linkHref='/luxpicnic'
        />
        <ServiceSection
          title="Wilderness Retreats"
          description="Want to wake up to the sound of waves and smell of cedar trees? Our luxury glamping experiences give you the best of both worlds – untouched nature with all the comforts of a five-star hotel. Think plush beds, gourmet meals, and your own personal paradise."
          buttonText="Explore Retreats"
          imageSrc="/DiscoverLuxRemote.JPG"
          imageAlt="Luxurious glamping setup with stunning ocean views"
          reverse={true}
          linkHref='/luxremote'
        />
        <ServiceSection
          title="Private Chef Experiences"
          description="Let our talented chefs bring the restaurant to you. Whether it's a romantic dinner for two or a celebration with friends, we'll create a custom menu using the finest local ingredients. All you need to do is sit back, relax, and enjoy every bite."
          buttonText="Start Planning"
          imageSrc="/LuxCateringCard.JPG"
          imageAlt="Elegantly plated gourmet dish showcasing local ingredients"
          linkHref='/luxcatering'
        />
      </div>
    </section>
  )
}