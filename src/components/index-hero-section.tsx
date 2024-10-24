'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import QuoteRequestDrawer from './quote-request-drawer'

interface Slide {
  id: number
  image: string
  alt: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/LuxPicMain.jpeg',
    alt: 'Luxury Pop-up Picnics',
    title: 'LuxFino Picnics: Luxury Pop-up Picnics',
    description:
      'Elevate your next outing with a thoughtfully curated luxury picnic. Surrounded by Tofino's stunning landscapes, each picnic is designed to offer elegance, comfort, and a moment of indulgence you'll never forget.',
  },
  {
    id: 2,
    image: '/LuxRemoteIndex.JPG',
    alt: 'Wild Luxury: Escape with Lux Remote',
    title: 'Wild Luxury: Escape to Lux Remote',
    description:
      'Discover the art of wild luxury with Lux Remote. Escape the ordinary and immerse yourself in an exclusive off-grid adventure, combining rugged beauty with unparalleled comfort in nature's most breathtaking settings.',
  },
  {
    id: 3,
    image: '/Catering1.JPG',
    alt: 'Catering, Corporate Events, Weddings',
    title: 'Luxfino Catering: Tofino Tailored to Your Taste',
    description:
      'Delight your senses with Lux Catering's tailored culinary experiences. Our executive chef crafts bespoke menus that marry the freshest local ingredients with global inspiration—creating a dining experience like no other in the heart of Tofino.',
  },
]

export function IndexHeroSectionComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    contactMethod: '',
    selectedService: '',
  })

  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  const handleFormChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleServiceChange = (service: string) => {
    handleFormChange('selectedService', service)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen md:min-h-[90vh] text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === currentSlide}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center min-h-screen md:min-h-[80vh] px-4 sm:px-8 md:px-16 text-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 px-2">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium mb-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild variant="outline" size="lg">
                <Link href="#about">Learn More</Link>
              </Button>
              <Button onClick={toggleDrawer} size="lg">
                Book With LuxFino
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
        onClick={() => goToSlide(currentSlide - 1)}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous Slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
        onClick={() => goToSlide(currentSlide + 1)}
        aria-label="Next Slide"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next Slide</span>
      </Button>

      <QuoteRequestDrawer
        isOpen={drawerIsOpen}
        onClose={toggleDrawer}
        formData={formData}
        onFormChange={handleFormChange}
        selectedService={formData.selectedService}
        onServiceChange={handleServiceChange}
      />
    </section>
  )
}