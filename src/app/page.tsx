'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import React, { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'
import QuoteRequestDrawer from './components/FormDrawer'


const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

const HomePage: NextPage = () => {
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false)

  const openQuoteDrawer = () => setIsQuoteDrawerOpen(true)
  const closeQuoteDrawer = () => setIsQuoteDrawerOpen(false)

  return (
    <div className="bg-luxcopper/50 text-luxnavy">
      <Navbar />
      <HeroSection openQuoteDrawer={openQuoteDrawer} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <ServiceSections />
        </AnimatedSection>
        
        <AnimatedSection>
          <SpecialEventsSection openQuoteDrawer={openQuoteDrawer} />
        </AnimatedSection>
        
        <AnimatedSection>
          <OwnerFounderSection />
        </AnimatedSection>
      </div>
      
      <AnimatedSection>
        <div className="bg-gradient-to-bl from-luxcopper/20 to-luxcream text-luxnavy py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TribalParksSection />
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />

      <QuoteRequestDrawer isOpen={isQuoteDrawerOpen} onClose={closeQuoteDrawer} />
    </div>
  )
}

export default HomePage

const slides = [
  {
    id: 1,
    image: '/LuxPicMain.jpeg',
    alt: 'Luxury Pop-up Picnics in Tofino',    title: 'Exquisite Pop-up Picnics',
    subtitle: 'LuxFino Picnics',
    description:
      'Immerse yourself in Tofinos breathtaking landscapes with our meticulously curated luxury picnics. Each experience is a perfect blend of elegance, comfort, and unforgettable moments.',
  },
  {
    id: 2,
    image: '/LuxRemoteIndex.JPG',
    alt: 'Wild Luxury Escapes in Tofino',
    title: 'Exclusive Off-Grid Adventures',
    subtitle: 'Lux Remote Escapes',
    description:
      'Embark on an extraordinary journey into Tofinos wilderness. Our off-grid luxury experiences combine rugged beauty with unparalleled comfort, offering a unique escape from the ordinary.',
  },
  {
    id: 3,
    image: '/Catering1.JPG',
    alt: 'Luxury Catering in Tofino',
    title: 'Bespoke Culinary Experiences',
    subtitle: 'LuxFino Catering',
    description:
      'Indulge in exquisite flavors crafted by our executive chef. Our bespoke menus blend the finest local ingredients with global inspiration, creating unparalleled dining experiences in the heart of Tofino.',
  },
]

const HeroSection: React.FC<{ openQuoteDrawer: () => void }> = ({ openQuoteDrawer }) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const slideCount = slides.length

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((current) => (current + 1) % slideCount)
  }, [slideCount])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 7000)

    return () => clearInterval(interval)
  }, [nextSlide])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide((index + slideCount) % slideCount)
  }, [currentSlide, slideCount])

  const prevSlide = () => goToSlide(currentSlide - 1)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 200, damping: 30, duration: 1.2 },
        opacity: { duration: 1 },
        scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
      transition: {
        x: { type: 'spring', stiffness: 200, damping: 30, duration: 1.2 },
        opacity: { duration: 1 },
        scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
      },
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2 + 0.5,
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-7000 ease-out"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-luxnavy/20 to-luxnavy/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center max-w-4xl"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h2 
              className="text-xl font-semibold text-luxgold mb-2 font-avenir tracking-widest uppercase"
              variants={textVariants}
              custom={0}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-luxice sm:text-5xl md:text-6xl mb-6 font-playfair leading-tight"
              variants={textVariants}
              custom={1}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="mt-3 text-base text-luxcream sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl leading-relaxed font-avenir"
              variants={textVariants}
              custom={2}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div 
              className="mt-10 sm:flex sm:justify-center"
              variants={textVariants}
              custom={3}
            >
              <motion.button
                onClick={openQuoteDrawer}
                className="bg-luxpearl text-luxnavy hover:bg-luxsand transition-colors duration-300 text-lg px-10 py-4 rounded-full font-avenir font-semibold tracking-wide shadow-lg hover:shadow-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-8">
        <motion.div 
          className="mb-6 mx-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div 
            className="h-1 bg-luxcream bg-opacity-20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
          >
            <motion.div
              className="h-full bg-luxgold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-luxgold w-12' : 'bg-luxcream bg-opacity-50 hover:bg-opacity-75'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-luxnavy bg-opacity-50 text-luxice p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(26, 43, 60, 0.75)' }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-luxnavy bg-opacity-50 text-luxice p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(26, 43, 60, 0.75)' }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </motion.button>
    </section>
  )
}

interface InfoCardProps {
  title: string
  content: string
  icon: string
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, icon }) => {
  return (
    <motion.div 
      className="bg-luxpearl/60 rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-4">
        <Image src={icon} alt={`${title} icon`} width={40} height={40} className="text-luxgold" />
        <h3 className="text-2xl font-playfair font-bold ml-4 text-luxnavy">{title}</h3>
      </div>
      <p className="font-avenir text-luxnavy/80 leading-relaxed">{content}</p>
    </motion.div>
  )
}

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-luxsand/70 to-luxpearl/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-playfair font-bold mb-8 text-center text-luxnavy"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About LuxFino
        </motion.h2>
        <motion.p 
          className="text-xl mb-16 max-w-3xl mx-auto text-center font-avenir leading-relaxed text-luxnavy/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          LuxFino is Tofino&apos;s premier provider of luxury pop-up picnics, in-house catering, and remote glamping. We create unforgettable moments with locally inspired touches that showcase the natural beauty of Tofino.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <InfoCard
            title="Our Mission"
            content={`At LuxFino, we blend luxury and nature to offer unique experiences that bring people together. Whether it&apos;s a beach picnic or a remote glamping retreat, our services celebrate the stunning landscapes of Tofino.`}
            icon="/Lux.Fino.Logo2.svg"
          />
          <InfoCard
            title="Services"
            content="LuxFino offers tailored luxury picnics, gourmet catering with local flavors, and exclusive remote glamping experiences. Our partnerships with local artisans ensure that every detail, from charcuterie boards to floral arrangements, is thoughtfully crafted."
            icon="/services-icon.svg"
          />
          <InfoCard
            title="Unique Experiences"
            content={`Experience the best of Tofino with personalized luxury services, including pop-up beach picnics and off-grid glamping escapes. We combine adventure with elegance to create unforgettable memories in one of the world&apos;s most stunning locations.`}
            icon="/experiences-icon.svg"
          />
        </div>

        <motion.div 
          className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/LuxRemotePic2.JPG"
            alt="Tofino's beautiful landscape"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-luxnavy bg-opacity-40 flex items-center justify-center backdrop-blur-sm">
            <p className="text-luxice text-4xl font-playfair font-semibold text-center px-4 max-w-4xl leading-tight">
              Discover the beauty of Tofino with LuxFino&apos;s curated experiences
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-luxsand to-transparent"></div>
    </section>
  )
}

const ServiceSections: React.FC = () => {
  return (
    <div className=" bg-gradient-to-b from-luxpearl/30 to-luxsand/70 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-playfair font-bold mb-16 text-center text-luxnavy"
        >
          Exquisite Experiences in Tofino
        </motion.h2>
        <ServiceSection
          title="Luxury Pop-up Picnics"
          description="Immerse yourself in Tofino&apos;s breathtaking landscapes with our meticulously curated luxury picnics. Each experience is a perfect blend of elegance, comfort, and unforgettable moments."
          buttonText="Explore LuxFino Picnics"
          imageSrc="/LuxPicMain.jpeg"
          imageAlt="Luxury beachside picnic setup with elegant decor and gourmet food"
          reverse={false}
          linkHref='/luxpicnic'
        />
        <ServiceSection
          title="Wild Luxury: Lux Remote Escapes"
          description="Discover the art of wild luxury with our exclusive off-grid adventures. Lux Remote offers a perfect blend of rugged beauty and unparalleled comfort, allowing you to immerse yourself in Tofino's wilderness without compromising on luxury."
          buttonText="Escape to Lux Remote"
          imageSrc="/DiscoverLuxRemote.JPG"
          imageAlt="Luxurious glamping setup with stunning ocean views"
          reverse={true}
          linkHref='/luxremote'
        />
        <ServiceSection
          title="Bespoke Culinary Experiences"
          description="Indulge in exquisite flavors crafted by our executive chef. Our bespoke catering service marries the finest local ingredients with global inspiration, creating unparalleled dining experiences that will delight your senses and impress your guests."
          buttonText="Book LuxFino Catering"
          imageSrc="/LuxCateringCard.JPG"
          imageAlt="Elegantly plated gourmet dish showcasing local ingredients"
          reverse={false}
          linkHref='/luxcatering'
        />
      </div>
    </div>
  )
}

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
          <div className="absolute inset-0 bg-luxnavy bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10"></div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl font-playfair font-bold mb-6 text-luxnavy">{title}</h3>
          <p className="text-luxnavy/80 mb-8 font-avenir leading-relaxed text-lg">{description}</p>
          <Link href={linkHref}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-luxnavy text-luxice hover:bg-luxocean transition-all duration-300 text-lg px-8 py-3 rounded-full font-avenir font-semibold tracking-wide"
            >
              {buttonText}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const OwnerFounderSection: React.FC = () => {
  return (
    <div className="bg-gradient-to bg-luxice/30 to-luxsand/70 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-playfair font-bold mb-8 text-center text-luxnavy"
        >
          The Visionaries Behind LuxFino
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-16 max-w-3xl mx-auto text-center font-avenir leading-relaxed text-luxnavy/80"
        >
          At the heart of LuxFino are Morgan and Dre, a dynamic duo combining their passions for luxury, food, and unforgettable experiences. Together, they bring their love for Tofino and its natural beauty into everything they create, from breathtaking picnics to immersive glamping adventures. Their unique talents and vision are the foundation of LuxFino, making every experience feel personal, thoughtful, and truly special.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <BioCard
            name="Morgan"
            imageSrc="/MorganBoiPIc.JPG" 
            bio="Morgan is dedicated to crafting unforgettable experiences for guests, believing that every moment begins with a lasting first impression. As a curator of beautiful aesthetics, she has a keen eye for hidden treasures and exquisite textiles, ensuring you feel like royalty while you relax and take in the breathtaking views."
          />

          <BioCard
            name="Andres"
            imageSrc="/DreHeadShot.JPG" 
            bio="Chef Andres, known as Dre, made his way to Tofino seven years ago, drawn by a deep passion for luxury and culinary artistry. His journey began at the stunning Clayoquot Wilderness Resort, where he infused his Latin American roots into every dish, blending comfort food with vibrant global influences. With over a decade of experience, nothing brings him more joy than seeing a smile after the first bite."
          />
        </div>
      </div>
    </div>
  )
}

interface BioCardProps {
  name: string
  imageSrc: string
  bio: string
}

const BioCard: React.FC<BioCardProps> = ({ name, imageSrc, bio }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-luxcream p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-6 md:mb-0 md:mr-8">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-luxsand">
            <Image
              src={imageSrc}
              alt={name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
        <div className="text-center md:text-left flex-1">
          <h3 className="text-2xl font-playfair font-bold mb-4 text-luxnavy">{name}</h3>
          <p className="text-luxnavy/80 font-avenir leading-relaxed">{bio}</p>
        </div>
      </div>
    </motion.div>
  )
}

const SpecialEventsSection: React.FC<{ openQuoteDrawer: () => void }> = ({ openQuoteDrawer }) => {
  return (
    <div className="bg-gradient-to-b from-luxsand/70 to-luxpearl/30 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-playfair font-bold mb-8 text-center text-luxnavy"
        >
          Extraordinary Moments, Unforgettable Experiences
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-luxnavy/80 mb-16 text-center font-avenir leading-relaxed"
        >
          Elevate your special occasions with unforgettable experiences at Lux Remote. Whether you&apos;re hosting a corporate meeting or celebrating a wedding, arrive in style, conduct your event in the serene wilderness, enjoy gourmet meals, and create memories that last a lifetime.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <EventCard
            title="Gourmet Lunch & Meeting"
            description="Host your meeting in the serene surroundings of Tofino or Lux Remote. Enjoy a gourmet lunch prepared by our top chef, making your business day both productive and indulgent."
            imageSrc="/LuxLunches.JPG"
            imageAlt="Gourmet Corporate Lunch"
            openQuoteDrawer={openQuoteDrawer}
          />
          <EventCard
            title="Dream Proposals at Lux Remote"
            description="Say 'I do' in the breathtaking wilderness of Lux Remote. Our exclusive location offers a romantic and intimate setting for your special day, complete with gourmet dining and unforgettable views."
            imageSrc="/WeddingPIc.JPG"
            imageAlt="Lux Remote Weddings"
            openQuoteDrawer={openQuoteDrawer}
          />
        </div>
      </div>
    </div>
  )
}

interface EventCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  openQuoteDrawer: () => void
}

const EventCard: React.FC<EventCardProps> = ({ title, description, imageSrc, imageAlt, openQuoteDrawer }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-luxcream rounded-lg shadow-xl overflow-hidden"
    >
      <div className="relative h-80 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-10">
        <h3 className="text-2xl font-playfair font-bold mb-4 text-luxnavy">{title}</h3>
        <p className="text-luxnavy/80 mb-6 font-avenir leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row items-center">
          <motion.button
            onClick={openQuoteDrawer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-luxgold text-luxnavy hover:bg-luxsand transition-all duration-300 text-lg px-8 py-3 rounded-full font-avenir font-semibold tracking-wide"
          >
            Request a Quote
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

