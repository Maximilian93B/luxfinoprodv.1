'use client'

import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TribalParksSection from './components/TribalParksAdvert'
import Footer from './components/Footer'
import QuoteRequestDrawer from './components/FormDrawer'

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const HomePage: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HeroSection />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <ServiceSections />
      </AnimatedSection>
      <AnimatedSection>
        <SpecialEventsSection />
      </AnimatedSection>
      <AnimatedSection>
        <OwnerFounderSection />
      </AnimatedSection>
      <AnimatedSection>
        <TribalParksSection />
      </AnimatedSection>
      <Footer />

      {/* Place QuoteRequestDrawer at the root level of the HomePage */}
      <QuoteRequestDrawer />
    </div>
  )
}


{/* Home Page Layout */}
export default HomePage;

const HeroSection: React.FC = () => {
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

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideCount = slides.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount)
    }, 7000)

    return () => clearInterval(interval)
  }, [slideCount])

  const goToSlide = (index: number) => {
    setCurrentSlide((index + slideCount) % slideCount)
  }

  return (
    <div className="relative min-h-screen">
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
            layout="fill"
            objectFit="cover"
            priority={index === currentSlide}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white mb-2 avenir-font tracking-wide">{slides[currentSlide].subtitle}</h2>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-4 font-playfair">
            {slides[currentSlide].title}
          </h1>
          <p className="mt-3 text-base text-white sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl leading-relaxed avenir-font">
            {slides[currentSlide].description}
          </p>
          <div className="mt-8 sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <QuoteRequestDrawer />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


const AboutSection: React.FC = () => {
  return (
    <div id="about" className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-playfair font-bold mb-8 text-center">About LuxFino</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-center avenir-font leading-relaxed">
          Lux.Fino is Tofino's premier provider of luxury pop-up picnics, in-house catering, and remote glamping. We create unforgettable moments with locally inspired touches that showcase the natural beauty of Tofino.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <InfoCard
            title="Our Mission"
            content="At Lux.Fino, we blend luxury and nature to offer unique experiences that bring people together. Whether it's a beach picnic or a remote glamping retreat, our services celebrate the stunning landscapes of Tofino."
            icon="/Lux.Fino.Logo2.svg"
          />
          <InfoCard
            title="Services"
            content="Lux.Fino offers tailored luxury picnics, gourmet catering with local flavors, and exclusive remote glamping experiences. Our partnerships with local artisans ensure that every detail, from charcuterie boards to floral arrangements, is thoughtfully crafted."
            icon="/services-icon.svg"
          />
          <InfoCard
            title="Unique Experiences"
            content="Experience the best of Tofino with personalized luxury services, including pop-up beach picnics and off-grid glamping escapes. We combine adventure with elegance to create unforgettable memories in one of the world's most stunning locations."
            icon="/experiences-icon.svg"
          />
        </div>

        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/LuxRemotePic2.JPG"
            alt="Tofino's beautiful landscape"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p className="text-white text-2xl font-playfair font-semibold text-center px-4">
              Discover the beauty of Tofino with LuxFino's curated experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface InfoCardProps {
  title: string
  content: string
  icon: string
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, icon }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <Image src={icon} alt={`${title} icon`} width={32} height={32} />
        <h3 className="text-2xl font-playfair font-bold ml-4">{title}</h3>
      </div>
      <p className="avenir-font text-gray-600">{content}</p>
    </div>
  )
}

{/*Services Section */}
const ServiceSections: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-playfair font-bold mb-16 text-center text-gray-800"
        >
          Exquisite Experiences in Tofino
        </motion.h2>
        <ServiceSection
          title="Luxury Pop-up Picnics"
          description="Immerse yourself in Tofino's breathtaking landscapes with our meticulously curated luxury picnics. Each experience is a perfect blend of elegance, comfort, and unforgettable moments, designed to elevate your outdoor dining adventure."
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
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10"></div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl font-playfair font-bold mb-6 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-8 avenir-font leading-relaxed text-lg">{description}</p>
          <Link href={linkHref}>
            <button className="btn btn-outline border-3 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 text-lg px-8 py-2 rounded-full font-semibold tracking-wide">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}


{/* Page Dividers */}
const Divider: React.FC = () => {
  return <div className="divider border-black"></div>;
};


{/* Founders Section  */}
const OwnerFounderSection: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-playfair font-bold mb-8 text-center text-gray-800"
        >
          The Visionaries Behind LuxFino
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-16 max-w-3xl mx-auto text-center avenir-font leading-relaxed text-gray-600"
        >
          At the heart of Lux.Fino are Morgan and Dre, a dynamic duo combining their passions for luxury, food, and unforgettable experiences. Together, they bring their love for Tofino and its natural beauty into everything they create, from breathtaking picnics to immersive glamping adventures. Their unique talents and vision are the foundation of Lux.Fino, making every experience feel personal, thoughtful, and truly special.
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
      className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-6 md:mb-0 md:mr-8">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200">
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
          <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-800">{name}</h3>
          <p className="text-gray-600 avenir-font leading-relaxed">{bio}</p>
        </div>
      </div>
    </motion.div>
  )
}

const SpecialEventsSection: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-playfair font-bold mb-8 text-center text-gray-800"
        >
          Extraordinary Moments, Unforgettable Experiences
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 mb-16 text-center avenir-font leading-relaxed"
        >
          Elevate your special occasions with unforgettable experiences at Lux Remote. Whether you're hosting a corporate meeting or celebrating a wedding, arrive in style, conduct your event in the serene wilderness, enjoy gourmet meals, and create memories that last a lifetime.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <EventCard
            title="Gourmet Lunch & Meeting"
            description="Host your meeting in the serene surroundings of Tofino or Lux Remote. Enjoy a gourmet lunch prepared by our top chef, making your business day both productive and indulgent."
            imageSrc="/LuxLunches.JPG"
            imageAlt="Gourmet Corporate Lunch"
          />
          <EventCard
            title="Dream Proposals at Lux Remote"
            description="Say 'I do' in the breathtaking wilderness of Lux Remote. Our exclusive location offers a romantic and intimate setting for your special day, complete with gourmet dining and unforgettable views."
            imageSrc="/WeddingPIc.JPG"
            imageAlt="Lux Remote Weddings"
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
}

const EventCard: React.FC<EventCardProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
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
        <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 avenir-font leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row items-center">
          <QuoteRequestDrawer />
        </div>
      </div>
    </motion.div>
  )
}

