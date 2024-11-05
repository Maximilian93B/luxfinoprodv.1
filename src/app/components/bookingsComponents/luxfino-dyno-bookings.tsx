'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, MapPin, ChefHat, Tent, Sparkles, Sunset, GlassWater, HeartHandshake, Check } from 'lucide-react'
import { locations } from '../luxPicnics/picnic-locationsl'

interface ServiceOption {
  id: string;
  title: string;
  description?: string;
  price?: string;
  people?: string;
  duration?: string;
  icon?: React.ElementType;
  image: string;
  color: string;
  hoverColor: string;
  options?: Array<{
    id: string;
    title: string;
    description?: string;
    price?: string;
    people?: string;
    duration?: string;
    icon?: React.ElementType;
    image?: string;
  }>;
}

const services: ServiceOption[] = [
  {
    id: 'luxremote',
    title: 'Lux Remote',
    description: 'Escape to secluded paradises with our luxury glamping experiences.',
    icon: Tent,
    image: '/LuxRemotePic2.JPG',
    color: 'bg-luxpearl',
    hoverColor: 'hover:bg-luxcopper',
    options: [
      { id: 'day1', title: 'Day 1: Immersion', description: 'Scenic seaplane flight and welcome package.' },
      { id: 'day2', title: 'Day 2: Indulgence', description: 'Gourmet breakfast and choice of adventure.' },
      { id: 'day3', title: 'Day 3: Tranquility', description: 'Leisurely morning and smooth departure.' },
    ]
  },
  {
    id: 'luxpicnic',
    title: 'Lux Picnics',
    description: 'Experience gourmet dining in Tofino\'s most breathtaking locations.',
    icon: Sparkles,
    image: '/LuxPicMain.jpeg',
    color: 'bg-luxpearl',
    hoverColor: 'hover:bg-luxcopper',
    options: [
      { id: 'cuddle', title: 'The Ultimate Cuddle Puddle', price: '$250', people: '2 people', duration: '2 hours', icon: Sunset, image: '/LuxPicMain.jpeg' },
      { id: 'golden', title: 'Golden Hour', price: '$470', people: '2 people', duration: '2 hours', icon: GlassWater, image: '/Catering2.jpg' },
      { id: 'proposal', title: 'The Perfect Proposal Package', price: '$800', people: '2 people', duration: '2 hours', icon: HeartHandshake, image: '/Catering3.jpg' },
      { id: 'grand', title: 'Grand Luxury Experience', price: '$770', people: '2 people', duration: '2 hours', icon: Sparkles, image: '/DiscoverLuxRemote.JPG' },
    ]
  },
  {
    id: 'luxcatering',
    title: 'Lux Catering',
    description: 'Elevate your events with our bespoke catering services.',
    icon: ChefHat,
    image: '/LuxCateringCard.JPG',
    color: 'bg-luxpearl',
    hoverColor: 'hover:bg-luxcopper',
    options: [
      { id: 'wedding', title: 'Elegant Weddings', description: 'Bespoke wedding catering services.' },
      { id: 'corporate', title: 'Corporate Events', description: 'Professional catering for business events.' },
      { id: 'intimate', title: 'Intimate Gatherings', description: 'Personalized catering for private parties.' },
      { id: 'coastal', title: 'Coastal Cuisine', description: 'Locally-inspired Pacific Northwest flavors.' },
    ]
  }
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
              i < currentStep ? 'bg-black text-luxpearl' : 'bg-white text-luxcedar border border-luxcedar'
            } shadow-lg transition-all duration-300`}>
              {i < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-semibold">{i + 1}</span>
              )}
            </div>
            <span className="text-xs mt-1 text-luxnavy font-light">
              {i === 0 ? 'Service' : i === 1 ? 'Option' : i === 2 ? 'Details' : 'Confirm'}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-luxnavy/20 rounded-full h-2">
        <div
          className="bg-luxgold h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

interface ServiceSelectionProps {
  services: ServiceOption[];
  selectedService: string;
  setSelectedService: (id: string) => void;
}

const ServiceSelection = ({ services, selectedService, setSelectedService }: ServiceSelectionProps) => (
  <motion.div key="step1" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-4">
    <h2 className="text-3xl font-playfair mb-4 text-luxnavy text-center">Select Your Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`w-full p-6 rounded-lg text-left transition-all shadow-lg ${
              selectedService === service.id ? service.color : 'bg-luxpearl'
            } ${service.hoverColor} ${
              selectedService === service.id ? 'text-luxcedar' : 'text-luxcedar'
            } transform hover:scale-105`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {service.icon && <service.icon className={`w-12 h-12 mb-4 ${selectedService === service.id ? 'text-luxgold' : 'text-luxnavy'}`} />}
            <h3 className="font-playfair text-2xl mb-3">{service.title}</h3>
            <p className={`text-sm ${selectedService === service.id ? 'text-cedar/90' : 'text-black/80'}`}>{service.description}</p>
          </motion.button>
        ))}
      </div>
      <div className="relative h-96 rounded-lg overflow-hidden border border-luxcedar">
        {services.map((service) => (
          <Image
            key={service.id}
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: 'cover' }}
            className={`transition-opacity duration-500 ease-in-out ${
              selectedService === service.id ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  </motion.div>
)

const OptionSelection = ({ currentService, selectedOption, setSelectedOption }: { currentService: ServiceOption; selectedOption: string; setSelectedOption: (id: string) => void }) => (
  <motion.div key="step2" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-4">
    <h2 className="text-3xl font-playfair mb-4 text-luxnavy text-center">Choose Your {currentService.title} Option</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {currentService.options?.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => setSelectedOption(option.id)}
          className={`p-4 rounded-lg text-left transition-all shadow-lg ${
            selectedOption === option.id
              ? currentService.color
              : 'bg-luxpearl hover:bg-luxsand/20'
          } transform hover:scale-105`}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            {option.icon && <option.icon className={`w-8 h-8 mb-2 ${selectedOption === option.id ? 'text-luxgold' : 'text-luxnavy'}`} />}
            <h3 className={`font-playfair text-xl mb-1 ${selectedOption === option.id ? 'text-white' : 'text-luxnavy'}`}>{option.title}</h3>
            <p className={`text-sm mb-2 ${selectedOption === option.id ? 'text-white/90' : 'text-black/80'}`}>{option.description}</p>
            {option.price && (
              <p className={`text-sm font-bold ${selectedOption === option.id ? 'text-luxgold' : 'text-luxnavy'}`}>{option.price} - {option.duration}</p>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  </motion.div>
)

const DateAndGuestsSelection = ({ 
  date, 
  setDate, 
  guests, 
  setGuests, 
  location, 
  setLocation, 
  selectedService,
  eventType,
  setEventType,
  dietaryRequirements,
  setDietaryRequirements
}: {
  date: string;
  setDate: (date: string) => void;
  guests: string;
  setGuests: (guests: string) => void;
  location: string;
  setLocation: (location: string) => void;
  selectedService: string;
  eventType: string;
  setEventType: (eventType: string) => void;
  dietaryRequirements: string;
  setDietaryRequirements: (requirements: string) => void;
}) => (
  <motion.div key="step3" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-4">
    <h2 className="text-3xl font-playfair mb-4 text-luxnavy text-center">Choose Your Details</h2>
    <div className="space-y-4">
      <div className="flex items-center bg-luxpearl p-3 rounded-lg shadow-md">
        <Calendar className="w-6 h-6 text-luxgold mr-3" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-transparent text-luxcedar focus:outline-none focus:ring-2 focus:ring-luxgold rounded-md"
        />
      </div>
      <div className="flex items-center bg-luxpearl p-3 rounded-lg shadow-md">
        <Users className="w-6 h-6 text-luxgold mr-3" />
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-transparent text-luxcedar focus:outline-none focus:ring-2 focus:ring-luxgold rounded-md"
        >
          <option value="">Number of Guests</option>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>
      {selectedService === 'luxpicnic' && (
        <div className="flex items-center bg-luxcedar p-3 rounded-lg shadow-md">
          <MapPin className="w-6 h-6 text-luxgold mr-3" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-luxnavy focus:outline-none focus:ring-2 focus:ring-luxgold rounded-md"
          >
            <option value="">Select a Location</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.name}>
                {loc.name} {loc.subtext ? `(${loc.subtext})` : ''} {loc.extraFee ? '(Extra Fee)' : ''}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedService === 'luxcatering' && (
        <>
          <div className="flex items-center bg-luxpearl p-3 rounded-lg shadow-md">
            <ChefHat className="w-6 h-6 text-luxgold mr-3" />
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full bg-transparent text-luxnavy focus:outline-none focus:ring-2 focus:ring-luxgold rounded-md"
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex items-center bg-luxpearl p-3 rounded-lg shadow-md">
            <textarea
              value={dietaryRequirements}
              onChange={(e) => setDietaryRequirements(e.target.value)}
              placeholder="Any dietary requirements or special requests?"
              className="w-full bg-transparent text-luxnavy focus:outline-none focus:ring-2 focus:ring-luxgold rounded-md h-24 resize-none"
            />
          </div>
        </>
      )}
    </div>
  </motion.div>
)

const BookingConfirmation = ({ 
  currentService, 
  selectedOption, 
  date, 
  guests, 
  location,
  eventType,
  dietaryRequirements
}: {
  currentService: ServiceOption | undefined;
  selectedOption: string;
  date: string;
  guests: string;
  location: string;
  eventType: string;
  dietaryRequirements: string;
}) => (
  <motion.div key="step4" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-4">
    <h2 className="text-3xl font-playfair mb-4 text-luxnavy text-center">Confirm Your Booking</h2>
    <div className="space-y-4 bg-luxpearl p-6 rounded-lg shadow-lg">
      <p className="flex items-center"><span className="font-semibold mr-2 text-luxgold">Service:</span> {currentService?.title}</p>
      <p className="flex items-center"><span className="font-semibold mr-2 text-luxgold">Option:</span> {currentService?.options?.find(o => o.id === selectedOption)?.title}</p>
      <p className="flex items-center"><span className="font-semibold mr-2 text-luxgold">Date:</span> {date}</p>
      <p className="flex items-center"><span className="font-semibold mr-2 text-luxgold">Guests:</span> {guests}</p>
      {location && <p className="flex items-center"><span className="font-semibold mr-2 text-luxgold">Location:</span> {location}</p>}
      {eventType && <p className="flex items-center"><span className="font-semibold mr-2 text-luxgold">Event Type:</span> {eventType}</p>}
      {dietaryRequirements && (
        <div>
          <p className="font-semibold text-luxgold mb-2">Dietary Requirements / Special Requests:</p>
          <p className="text-luxnavy bg-white/50 p-4 rounded">{dietaryRequirements}</p>
        </div>
      )}
    </div>
    <p className="mt-8 text-sm text-luxnavy/70 italic text-center">
      By confirming, you agree to our terms and conditions. Our team will contact you shortly to finalize the details of your LuxFino experience.
    </p>
  </motion.div>
)

export default function LuxFinoDynamicBooking() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')
  const [location, setLocation] = useState('')
  const [eventType, setEventType] = useState('')
  const [dietaryRequirements, setDietaryRequirements] = useState('')

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const currentService = services.find(s => s.id === selectedService)

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-6xl sm:text-7xl font-playfair font-light text-center mb-16 text-luxnavy"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Craft Your LuxFino Experience
        </motion.h1>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-luxcedar p-12">
          <ProgressBar currentStep={step} totalSteps={4} />
          <AnimatePresence mode="wait">
            {step === 1 && (
              <ServiceSelection
                services={services}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            )}

            {step === 2 && currentService && (
              <OptionSelection
                currentService={currentService}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            )}

            {step === 3 && (
              <DateAndGuestsSelection
                date={date}
                setDate={setDate}
                guests={guests}
                setGuests={setGuests}
                location={location}
                setLocation={setLocation}
                selectedService={selectedService}
                eventType={eventType}
                setEventType={setEventType}
                dietaryRequirements={dietaryRequirements}
                setDietaryRequirements={setDietaryRequirements}
              />
            )}

            {step === 4 && (
              <BookingConfirmation
                currentService={currentService}
                selectedOption={selectedOption}
                date={date}
                guests={guests}
                location={location}
                eventType={eventType}
                dietaryRequirements={dietaryRequirements}
              />
            )}
          </AnimatePresence>

          <div className="mt-12 flex justify-between">
            {step > 1 && (
              <motion.button
                onClick={prevStep}
                className="px-8 py-3 bg-luxcedar text-luxpearl rounded-full hover:bg-white hover:text-luxcedar transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
            )}
            {step < 4 ? (
              <motion.button
                onClick={nextStep}
                className="px-8 py-3 bg-luxnavy text-luxcedar border border-luxcedar rounded-full  transition-colors shadow-md ml-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                onClick={() => alert('Booking confirmed! We will contact you soon.')}
                className="px-8 py-3 bg-luxgold text-luxnavy rounded-full hover:bg-luxnavy hover:text-luxgold transition-colors shadow-md ml-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Confirm Booking
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}