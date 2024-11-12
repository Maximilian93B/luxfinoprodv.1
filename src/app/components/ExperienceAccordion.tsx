'use client'

import { useState } from 'react'
import { Leaf, Fish, Star, Check, Clock, Users, ArrowRight, LucideIcon } from "lucide-react"
import Link from 'next/link'
import { motion } from 'framer-motion'

// Add this interface before the PackageCard component
interface Package {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: LucideIcon;
  duration: string;
  groupSize: string;
}

export default function Component() {
  const packages = [
    {
      title: "Wellness Getaway",
      description: "Rejuvenate your mind, body, and soul in our serene natural setting.",
      features: [
        "Daily yoga and meditation sessions",
        "Spa treatments with natural ingredients",
        "Nutritionist-designed meal plan",
        "Access to thermal pools and saunas",
        "Personalized fitness consultation"
      ],
      price: "$3,500",
      icon: Leaf,
      duration: "3 days",
      groupSize: "1-2 people"
    },
    {
      title: "Fishing Adventure",
      description: "Experience world-class fishing in pristine waters with expert guides.",
      features: [
        "Guided fishing expeditions",
        "Top-of-the-line fishing equipment",
        "Gourmet fish preparation class",
        "Scenic boat tours",
        "Fish species identification workshop"
      ],
      price: "$3,800",
      icon: Fish,
      duration: "3 days",
      groupSize: "2-4 people"
    },
    {
      title: "Classic Lux Remote",
      description: "Our signature experience blending adventure and luxury in nature.",
      features: [
        "Luxury tent with panoramic views",
        "Private chef and butler service",
        "Customized adventure itinerary",
        "Stargazing sessions with an astronomer",
        "Helicopter tour of the surrounding area"
      ],
      price: "$4,200",
      icon: Star,
      duration: "3 days",
      groupSize: "2-6 people"
    },
  ]

  return (
    <div className="min-h-screen bg-[#0C2233] p-4 sm:p-8 md:p-16">
      <h2 className="text-6xl sm:text-6xl md:text-6xl font-bold text-[#D4AF37] mb-8 sm:mb-12 md:mb-16 text-center">
        Lux Remote 3-Day Packages
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  )
}

function PackageCard({ pkg }: { pkg: Package }) {
  const [selectedTab, setSelectedTab] = useState('overview')

  return (
    <div className="card bg-[#0C2233] shadow-xl overflow-hidden  border-[#D4AF37]/30 border-4">
      <div className="flex flex-col lg:flex-row">
        <div className="card-body bg-[#0C2233] text-[#F8F3E3] p-4 sm:p-6 lg:p-8 flex-1">
          <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-6">
            <div className="p-2 sm:p-3 bg-[#D4AF37] rounded-full shadow-lg">
              <pkg.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0C2233]" />
            </div>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D4AF37]">{pkg.price}</span>
          </div>
          <h3 className="card-title text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4 text-lux-ivory">{pkg.title}</h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4">{pkg.description}</p>
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-[#F8F3E3]/80">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-[#D4AF37]" />
              {pkg.duration}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-[#D4AF37]" />
              {pkg.groupSize}
            </div>
          </div>
        </div>
        <div className="card-body bg-[#0C2233] p-4 sm:p-6 lg:p-8 flex-1 border-t lg:border-t-0 lg:border-l border-[#D4AF37]/30">
          <div className="flex mb-4 border-b border-[#D4AF37]/30 w-full">
            <button
              className={`flex-1 px-2 sm:px-4 py-2 text-sm sm:text-base ${selectedTab === 'overview' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-[#F8F3E3]'}`}
              onClick={() => setSelectedTab('overview')}
            >
              Overview
            </button>
            <button
              className={`flex-1 px-2 sm:px-4 py-2 text-sm sm:text-base ${selectedTab === 'features' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-[#F8F3E3]'}`}
              onClick={() => setSelectedTab('features')}
            >
              Features
            </button>
          </div>
          {selectedTab === 'overview' ? (
            <div>
              <p className="text-sm sm:text-base lg:text-lg text-[#F8F3E3] mb-4">
                Immerse yourself in luxury and adventure with our {pkg.title.toLowerCase()}. This exclusive package offers a perfect blend of relaxation and excitement, tailored to provide an unforgettable experience.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[#F8F3E3]">
                Designed for {pkg.groupSize}, this {pkg.duration} journey will transport you to a world of unparalleled luxury and natural beauty.
              </p>
            </div>
          ) : (
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-[#F8F3E3] text-sm sm:text-base lg:text-lg">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#D4AF37] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="card-actions p-6 sm:p-8 bg-[#0C2233] border-t border-[#D4AF37]/30 flex justify-center">
        <Link href="/bookings" className="w-full max-w-[280px] sm:max-w-none sm:w-auto">
          <motion.button
            whileHover={{ 
              scale: 1.03,
              backgroundColor: '#D4AF37',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: '#606C5D' }}
            className="w-full sm:w-auto 
              px-6 sm:px-8 lg:px-12 
              py-3 sm:py-4 
              text-lux-ivory 
              rounded-full 
              text-sm sm:text-base lg:text-lg
              font-medium 
              transition-all duration-300 
              shadow-[0_0_20px_rgba(212,175,55,0.15)]
              hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]
              relative
              overflow-hidden
              bg-lux-olive"
          >
            <span className="relative z-10 flex items-center">
              Book Your Experience
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </motion.button>
        </Link>
      </div>
    </div>
  )
}