

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    image: '/LuxPicMain.jpeg',
    alt: 'Luxury Pop-up Picnics in Tofino',
    title: 'Exquisite Pop-up Picnics',
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

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.8, ease: 'easeInOut' },
      scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.2,
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
  exit: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export default function HeroIndex({ openQuoteDrawer }: { openQuoteDrawer: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const slideCount = slides.length

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((current) => (current + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((current) => (current - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-all duration-1000 ease-in-out"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-luxforest/30 to-luxocean/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center max-w-7xl"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h2 
              className="text-3xl font-semibold text-luxgold mb-2 font-avenir text-luxpearl tracking-widest uppercase"
              variants={textVariants}
              custom={0}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-luxpearl sm:text-5xl md:text-6xl mb-6 font-playfair leading-tight"
              variants={textVariants}
              custom={1}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="mt-3 text-lg text-luxpearl sm:text-lg sm:max-w-4xl sm:mx-auto md:text-xl leading-relaxed font-avenir"
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
                className="bg-luxpearl text-luxnavy hover:bg-luxsand transition-all duration-300 text-lg px-10 py-4 rounded-full font-avenir font-semibold tracking-wide shadow-lg hover:shadow-xl flex items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="mb-6 mx-10">
          <motion.div 
            className="h-1"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
          >
            <motion.div
              className="h-full bg-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
            />
          </motion.div>
        </div>

        <div className="flex justify-center items-center space-x-3">
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
        </div>
      </motion.div>

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