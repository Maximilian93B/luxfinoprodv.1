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
      className="mb-32 last:mb-0"
    >
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="object-cover w-full h-[500px] transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-4xl font-playfair font-bold mb-6 text-luxcedar">{title}</h3>
          <p className="text-luxcedar/80 mb-8 font-avenir leading-relaxed text-xl">{description}</p>
          <Link href={linkHref}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-luxocean text-luxpearl hover:bg-luxsand hover:text-luxpearl transition-all duration-300 text-lg px-8 py-3 rounded-full font-avenir font-semibold tracking-wide"
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
    <section className=" bg-luxpearl  rounded-xl py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-5xl font-playfair font-semibold mb-8 text-center text-luxcedar"
        >
          Explore Our Services
        </motion.h2>
        <p className="text-luxcedar/80 text-center mb-16 font-avenir text-lg max-w-3xl mx-auto">
          Dive deeper into our exclusive offerings and discover how LuxFino can transform your Tofino experience into an unforgettable journey of luxury and natural beauty.
        </p>
        <ServiceSection
          title="Luxury Pop-up Picnics"
          description="Immerse yourself in Tofino's breathtaking landscapes with our meticulously curated luxury picnics. We handle every detail, from selecting the perfect location to preparing gourmet local cuisine, ensuring a seamless blend of comfort and natural beauty."
          buttonText="Plan Your Picnic"
          imageSrc="/LuxPicMain.jpeg"
          imageAlt="Luxury beachside picnic setup with elegant decor and gourmet food"
          linkHref='/luxpicnic'
        />
        <ServiceSection
          title="Wild Luxury: Lux Remote Escapes"
          description="Experience the untamed beauty of Tofino without sacrificing comfort. Our Lux Remote escapes offer exclusive access to pristine wilderness locations, complete with luxurious amenities. It's the perfect balance of adventure and indulgence."
          buttonText="Book Your Escape"
          imageSrc="/DiscoverLuxRemote.JPG"
          imageAlt="Luxurious glamping setup with stunning ocean views"
          reverse={true}
          linkHref='/luxremote'
        />
        <ServiceSection
          title="Bespoke Culinary Experiences"
          description="Elevate your dining experience with our expert catering services. Our executive chef crafts exquisite menus using the finest local ingredients, bringing the flavors of the Pacific Northwest to your table. Perfect for intimate gatherings or grand celebrations."
          buttonText="Customize Your Menu"
          imageSrc="/LuxCateringCard.JPG"
          imageAlt="Elegantly plated gourmet dish showcasing local ingredients"
          linkHref='/luxcatering'
        />
      </div>
    </section>
  )
}