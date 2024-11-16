'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, MapPin, ChefHat, Tent, Sparkles, Sunset, GlassWater, HeartHandshake, Check } from 'lucide-react'
import { locations } from '../luxPicnics/picnic-locationsl'
import { ServiceType } from '@prisma/client';



{/* Service Options */} 
interface ServiceOption {
  id: string;
  title: string;
  description?: string;
  price?: string;
  people?: string;
  duration?: string;
  icon?: React.ElementType;
  image?: string;
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


{/* Service Options: LuxFino Options */}   
const services: ServiceOption[] = [
  {
    id: 'luxremote',
    title: 'Lux Remote',
    description: 'Escape to secluded paradises with our luxury glamping experiences.',
    icon: Tent,
    image: '/LuxRemotePic2.JPG',
    color: 'bg-[var(--lux-olive)]',
    hoverColor: 'hover:bg-[var(--lux-charcoal)]',
    options: [
      { id: 'day1', title: 'Day 1: Immersion', description: 'Scenic seaplane flight and welcome package.' },
      { id: 'day2', title: 'Day 2: Indulgence', description: 'Gourmet breakfast and choice of adventure.' },
      { id: 'day3', title: 'Day 3: Tranquility', description: 'Leisurely morning and smooth departure.' },
    ]
  },
  {
    id: 'luxpicnic',
    title: 'Lux Picnics',
    description: 'Experience gourmet dining in Tofino&apos;s most breathtaking locations.',
    icon: Sparkles,
    image: '/LuxPicMain.jpeg',
    color: 'bg-[var(--lux-olive)]',
    hoverColor: 'hover:bg-[var(--lux-charcoal)]',
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
    color: 'bg-[var(--lux-olive)]',
    hoverColor: 'hover:bg-[var(--lux-charcoal)]',
    options: [
      { id: 'wedding', title: 'Elegant Weddings', description: 'Bespoke wedding catering services.' },
      { id: 'corporate', title: 'Corporate Events', description: 'Professional catering for business events.' },
      { id: 'intimate', title: 'Intimate Gatherings', description: 'Personalized catering for private parties.' },
      { id: 'coastal', title: 'Coastal Cuisine', description: 'Locally-inspired Pacific Northwest flavors.' },
    ]
  }
]

{/* Animation */} 
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}



{/* Progress Bar For multiple step booking process */} 
const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
              i < currentStep ? 'bg-[var(--lux-charcoal)] text-[var(--lux-ivory)]' : 'bg-[var(--lux-ivory)] text-[var(--lux-navy)]'
            } shadow-lg transition-all duration-300`}>
              {i < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-semibold">{i + 1}</span>
              )}
            </div>
            <span className="text-xs mt-1 text-[var(--lux-navy)] font-light">
              {i === 0 ? 'Service' : i === 1 ? 'Option' : i === 2 ? 'Details' : 'Confirm'}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-[var(--lux-navy)]/20 rounded-full h-2">
        <div
          className="bg-[var(--lux-gold)] h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}



{/* Service Selection */} 
const ServiceSelection = ({ services, selectedService, setSelectedService }: { services: ServiceOption[]; selectedService: string; setSelectedService: (id: string) => void }) => (
  <motion.div key="step1" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-4">
    <h2 className="text-3xl font-playfair mb-4 text-[var(--lux-navy)] text-center">Select Your Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`w-full p-6 rounded-lg text-left transition-all shadow-lg ${
              selectedService === service.id ? 'bg-[var(--lux-olive)]' : 'bg-[var(--lux-ivory)]'
            } hover:bg-[var(--lux-charcoal)] ${
              selectedService === service.id ? 'text-[var(--lux-ivory)]' : 'text-[var(--lux-navy)]'
            } transform hover:scale-105 relative overflow-hidden`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {service.icon && <service.icon className={`w-12 h-12 mb-4 ${selectedService === service.id ? 'text-[var(--lux-gold)]' : 'text-[var(--lux-navy)]'}`} />}
            <h3 className="font-playfair text-2xl mb-3">{service.title}</h3>
            <p className={`text-sm ${selectedService === service.id ? 'text-[var(--lux-ivory)]/90' : 'text-[var(--lux-navy)]/80'}`}>{service.description}</p>
            {selectedService === service.id && (
              <div className="absolute top-2 right-2 bg-[var(--lux-gold)] text-[var(--lux-navy)] rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
            )}
          </motion.button>
        ))}
      </div>
      <div className="relative h-96 rounded-lg overflow-hidden">
        {services.map((service) => (
          <Image
            key={service.id}
            src={service.image || '/placeholder.jpg'}
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

{/* Option Selection */} 

const OptionSelection = ({ currentService, selectedOption, setSelectedOption }: { currentService: ServiceOption; selectedOption: string; setSelectedOption: (id: string) => void }) => (
  <motion.div key="step2" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-4">
    <h2 className="text-3xl font-playfair mb-4 text-[var(--lux-navy)] text-center">Choose Your {currentService.title} Option</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {currentService.options?.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => setSelectedOption(option.id)}
          className={`p-4 rounded-lg text-left transition-all shadow-lg ${
            selectedOption === option.id
              ? 'bg-[var(--lux-olive)]'
              : 'bg-[var(--lux-ivory)] hover:bg-[var(--lux-charcoal)]'
          } transform hover:scale-105 relative overflow-hidden`}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            {option.icon && <option.icon className={`w-8 h-8 mb-2 ${selectedOption === option.id ? 'text-[var(--lux-gold)]' : 'text-[var(--lux-navy)]'}`} />}
            <h3 className={`font-playfair text-xl mb-1 ${selectedOption === option.id ? 'text-[var(--lux-ivory)]' : 'text-[var(--lux-navy)]'}`}>{option.title}</h3>
            <p className={`text-sm mb-2 ${selectedOption === option.id ? 'text-[var(--lux-ivory)]/90' : 'text-[var(--lux-navy)]/80'}`}>{option.description}</p>
            {option.price && (
              <p className={`text-sm font-bold ${selectedOption === option.id ? 'text-[var(--lux-gold)]' : 'text-[var(--lux-navy)]'}`}>{option.price} - {option.duration}</p>
            )}
          </div>
          {selectedOption === option.id && (
            <div className="absolute top-2 right-2 bg-[var(--lux-gold)] text-[var(--lux-navy)] rounded-full p-1">
              <Check className="w-4 h-4" />
            </div>
          )}
        </motion.button>
      ))}
    </div>
  </motion.div>
)


{/* Date and Guests Selection */} 

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
    <h2 className="text-3xl font-playfair mb-4 text-[var(--lux-navy)] text-center">Choose Your Details</h2>
    <div className="space-y-4">
      <div className="flex items-center bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md">
        <Calendar className="w-6 h-6 text-[var(--lux-gold)] mr-3" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-transparent text-[var(--lux-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)] rounded-md"
        />
      </div>
      <div className="flex items-center bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md">
        <Users className="w-6 h-6 text-[var(--lux-gold)] mr-3" />
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-transparent text-[var(--lux-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)] rounded-md"
        >
          <option value="">Number of Guests</option>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>
      {selectedService === 'luxpicnic' && (
        <div className="flex items-center bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md">
          <MapPin className="w-6 h-6 text-[var(--lux-gold)] mr-3" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-[var(--lux-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)] rounded-md"
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
          <div className="flex items-center bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md">
            <ChefHat className="w-6 h-6 text-[var(--lux-gold)] mr-3" />
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full bg-transparent text-[var(--lux-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)] rounded-md"
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex items-center bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md">
            <textarea
              value={dietaryRequirements}
              onChange={(e) => setDietaryRequirements(e.target.value)}
              placeholder="Any dietary requirements or special requests?"
              className="w-full bg-transparent text-[var(--lux-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)] rounded-md h-24 resize-none"
            />
          </div>
        </>
      )}
    </div>
  </motion.div>
)




{/* Booking Confirmation */} 
const BookingConfirmation = ({ 
  currentService, 
  selectedOption, 
  date, 
  guests, 
  location,
  eventType,
  dietaryRequirements,
  customerName,
  customerEmail,
  customerPhone
}: {
  currentService: ServiceOption | undefined;
  selectedOption: string;
  date: string;
  guests: string;
  location: string;
  eventType: string;
  dietaryRequirements: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}) => {
  const selectedOptionDetails = currentService?.options?.find(o => o.id === selectedOption);



  return (
    <motion.div key="step4" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-8">
      <h2 className="text-4xl font-playfair mb-6 text-luxnavy text-center">Your LuxFino Experience</h2>
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            src={selectedOptionDetails?.image || currentService?.image || '/placeholder.svg'}
            alt={`${currentService?.title} - ${selectedOptionDetails?.title}`}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-3xl font-playfair text-white mb-2">{currentService?.title}</h3>
              <p className="text-xl text-luxpearl">{selectedOptionDetails?.title}</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-luxnavy/10 pb-4">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-luxgold mr-3" />
              <span className="text-luxcedar">Date</span>
            </div>
            <span className="font-semibold text-luxcedar">{date}</span>
          </div>
          <div className="flex items-center justify-between border-b border-luxnavy/10 pb-4">
            <div className="flex items-center">
              <Users className="w-6 h-6 text-luxgold mr-3" />
              <span className="text-luxcedar">Guests</span>
            </div>
            <span className="font-semibold text-luxcedar">{guests}</span>
          </div>
          {location && (
            <div className="flex items-center justify-between border-b border-luxnavy/10 pb-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-luxgold mr-3" />
                <span className="text-luxcedar">Location</span>
              </div>
              <span className="font-semibold text-luxcedar">{location}</span>
            </div>
          )}
          {eventType && (
            <div className="flex items-center justify-between border-b border-luxnavy/10 pb-4">
              <div className="flex items-center">
                <ChefHat className="w-6 h-6 text-luxgold mr-3" />
                <span className="text-luxcedar">Event Type</span>
              </div>
              <span className="font-semibold text-luxcedar">{eventType}</span>
            </div>
          )}
          {dietaryRequirements && (
            <div className="pt-4">
              <h4 className="font-semibold text-luxcedar mb-2">Dietary Requirements / Special Requests:</h4>
              <p className="text-luxcedar bg-luxpearl/50 p-4 rounded-lg">{dietaryRequirements}</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-luxcedar/70 italic">
        Your LuxFino experience has been crafted with care. We&apos;ll be in touch shortly to finalize the details and ensure every moment is perfect.
      </p>
    </motion.div>
  );
}


{/* Customer Information */}
const CustomerInformation = ({ 
  customerFirstName,
  setCustomerFirstName,
  customerLastName,
  setCustomerLastName,
  customerEmail,
  setCustomerEmail,
  customerPhone,
  setCustomerPhone
}: {
  customerFirstName: string;
  setCustomerFirstName: (value: string) => void;
  customerLastName: string;
  setCustomerLastName: (value: string) => void;
  customerEmail: string;
  setCustomerEmail: (value: string) => void;
  customerPhone: string;
  setCustomerPhone: (value: string) => void;
}) => (
  <motion.div key="step3" {...fadeIn} transition={{ duration: 0.5 }} className="space-y-4">
    <h2 className="text-3xl font-playfair mb-4 text-[var(--lux-navy)] text-center">Your Details</h2>
    <div className="space-y-4">
      <input
        type="text"
        value={customerFirstName}
        onChange={(e) => setCustomerFirstName(e.target.value)}
        placeholder="First Name"
        className="w-full bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)]"
      />
      <input
        type="text"
        value={customerLastName}
        onChange={(e) => setCustomerLastName(e.target.value)}
        placeholder="Last Name"
        className="w-full bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)]"
      />
      <input
        type="email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
        placeholder="Email"
        className="w-full bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)]"
      />
      <input
        type="tel"
        value={customerPhone}
        onChange={(e) => setCustomerPhone(e.target.value)}
        placeholder="Phone Number"
        className="w-full bg-[var(--lux-ivory)] p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--lux-gold)]"
      />
    </div>
  </motion.div>
)


{/* LuxFino Dynamic Booking Multiple Step Form Version 2 */} 

// Add types for the form state
interface BookingFormState {
  selectedService: string;
  selectedOption: string;
  date: string;
  guests: string;
  location: string;
  eventType: string;
  dietaryRequirements: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
}

export default function LuxFinoDynamicBooking() {
  // All state declarations should be here at the top of the component
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')
  const [location, setLocation] = useState('')
  const [eventType, setEventType] = useState('')
  const [dietaryRequirements, setDietaryRequirements] = useState('')
  const [customerFirstName, setCustomerFirstName] = useState('')
  const [customerLastName, setCustomerLastName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  // Auto-dismiss feedback after 5 seconds
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const currentService = services.find(s => s.id === selectedService)

  const isStepValid = () => {
    switch (step) {
      case 1:
        return selectedService !== ''
      case 2:
        return selectedOption !== ''
      case 3:
        return customerFirstName !== '' && 
               customerLastName !== '' && 
               customerEmail !== '' && 
               /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail); // Basic email validation
      case 4:
        return true;
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const currentOption = currentService?.options?.find(o => o.id === selectedOption)
      
      if (selectedService === 'luxcatering') {
        const bookingData = {
          date: new Date(date).toISOString(),
          guests: Number(guests) || 1,
          customerFirstName,
          customerLastName,
          customerEmail,
          customerPhone,
          eventType: eventType,
          eventTitle: currentOption?.title || '',
          dietaryRequirements
        }

        const response = await fetch('/api/bookings/catering', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        })

        if (!response.ok) {
          throw new Error('Failed to submit booking');
        }

        setFeedback({
          message: `Thank you ${customerFirstName}! Your catering inquiry has been received. We will contact you at ${customerEmail} within 24-48 hours to discuss your event details.`,
          type: 'success'
        });

        // Wait 3 seconds before resetting form
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Reset form
        setStep(1);
        setSelectedService('');
        setSelectedOption('');
        setDate('');
        setGuests('');
        setEventType('');
        setDietaryRequirements('');
        setCustomerFirstName('');
        setCustomerLastName('');
        setCustomerEmail('');
        setCustomerPhone('');
      } 
      else if (selectedService === 'luxremote') {
        const bookingData = {
          date: new Date(date).toISOString(),
          guests: Number(guests) || 1,
          customerFirstName,
          customerLastName,
          customerEmail,
          customerPhone,
          packageType: selectedOption,
          packageTitle: currentOption?.title || '',
          additionalNotes: dietaryRequirements // reusing the dietary requirements field for notes
        }

        const response = await fetch('/api/bookings/remote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        })

        if (!response.ok) {
          throw new Error('Failed to submit booking');
        }

        setFeedback({
          message: `Thank you ${customerFirstName}! Your LuxRemote inquiry has been received. We will contact you at ${customerEmail} within 24-48 hours to discuss your adventure details.`,
          type: 'success'
        });

        // Wait 3 seconds before resetting form
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Reset form
        setStep(1);
        setSelectedService('');
        setSelectedOption('');
        setDate('');
        setGuests('');
        setDietaryRequirements('');
        setCustomerFirstName('');
        setCustomerLastName('');
        setCustomerEmail('');
        setCustomerPhone('');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setFeedback({
        message: 'Something went wrong. Please try again or contact us directly.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const renderSummary = () => {
    if (step === 1) return null;
    return (
      <div className="mb-6 p-4 bg-[var(--lux-navy)] text-[var(--lux-ivory)] rounded-lg shadow-md border border-[var(--lux-gold)]/30">
        <h3 className="text-xl font-playfair mb-2 text-[var(--lux-gold)] font-semibold">Your LuxFino Experience:</h3>
        {selectedService && <p><span className="font-semibold text-[var(--lux-gold)]">Service:</span> {currentService?.title}</p>}
        {selectedOption && <p><span className="font-semibold text-[var(--lux-gold)]">Option:</span> {currentService?.options?.find(o => o.id === selectedOption)?.title}</p>}
        {date && <p><span className="font-semibold text-[var(--lux-gold)]">Date:</span> {date}</p>}
        {guests && <p><span className="font-semibold text-[var(--lux-gold)]">Guests:</span> {guests}</p>}
        {location && <p><span className="font-semibold text-[var(--lux-gold)]">Location:</span> {location}</p>}
        {eventType && <p><span className="font-semibold text-[var(--lux-gold)]">Event Type:</span> {eventType}</p>}
      </div>
    );
  };

  // Add feedback component to render
  const FeedbackMessage = () => {
    if (!feedback) return null;

    return (
      <div
        className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
          feedback.type === 'success' 
            ? 'bg-[var(--lux-olive)] text-[var(--lux-ivory)]' 
            : 'bg-red-500 text-white'
        }`}
        role="alert"
      >
        <p>{feedback.message}</p>
      </div>
    );
  };

  return (
    <div className="bg-[var(--lux-navy)] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {feedback && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            feedback.type === 'success' 
              ? 'bg-[var(--lux-olive)] text-[var(--lux-ivory)]' 
              : 'bg-red-500 text-white'
          }`}
          role="alert"
        >
          <p>{feedback.message}</p>
        </div>
      )}
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-6xl sm:text-7xl font-playfair font-light text-center mb-16 text-[var(--lux-ivory)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Craft Your LuxFino Experience
        </motion.h1>

        <div className="bg-[var(--lux-ivory)]/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border-2 border-[var(--lux-gold)]">
          <ProgressBar currentStep={step} totalSteps={4} />
          {renderSummary()}
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
              <CustomerInformation
                customerFirstName={customerFirstName}
                setCustomerFirstName={setCustomerFirstName}
                customerLastName={customerLastName}
                setCustomerLastName={setCustomerLastName}
                customerEmail={customerEmail}
                setCustomerEmail={setCustomerEmail}
                customerPhone={customerPhone}
                setCustomerPhone={setCustomerPhone}
              />
            )}

            {step === 4 && (
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

            {step === 5 && (
              <BookingConfirmation
                currentService={currentService}
                selectedOption={selectedOption}
                date={date}
                guests={guests}
                location={location}
                eventType={eventType}
                dietaryRequirements={dietaryRequirements}
                customerName={`${customerFirstName} ${customerLastName}`}
                customerEmail={customerEmail}
                customerPhone={customerPhone}
              />
            )}
          </AnimatePresence>

          <div className="mt-12 flex justify-between">
            {step > 1 && (
              <motion.button
                onClick={prevStep}
                disabled={isSubmitting}
                className="px-8 py-3 bg-[var(--lux-navy)] text-[var(--lux-gold)] rounded-full hover:bg-[var(--lux-charcoal)] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
            )}
            {step < 4 ? (
              <motion.button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="px-8 py-3 bg-[var(--lux-navy)] text-[var(--lux-gold)] rounded-full hover:bg-[var(--lux-charcoal)] transition-colors shadow-md ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 bg-[var(--lux-gold)] text-[var(--lux-navy)] rounded-full hover:bg-[var(--lux-ivory)] hover:text-[var(--lux-navy)] transition-colors shadow-md ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Confirm Booking'
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}