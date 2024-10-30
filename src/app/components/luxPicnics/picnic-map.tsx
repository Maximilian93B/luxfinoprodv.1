'use client'

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, DollarSign, X, ChevronLeft, ChevronRight, Compass, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { locations } from './picnic-locationsl'

const Map = dynamic(() => import('./map-component'), { 
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-luxocean"></div>
    </div>
  ),
  ssr: false 
})

const LuxuryPicnicMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)
  const [isMapView, setIsMapView] = useState(true)

  const handlePrevLocation = useCallback(() => {
    setSelectedLocation((prev) => 
      prev === null || prev === 1 ? locations.length : prev - 1
    )
  }, [])

  const handleNextLocation = useCallback(() => {
    setSelectedLocation((prev) => 
      prev === null ? 1 : prev === locations.length ? 1 : prev + 1
    )
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center bg-transparent">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl font-bold mb-8 text-center font-playfair text-luxcedar"
        >
          Discover and Choose Your Location
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg mb-12 font-avenir max-w-2xl mx-auto text-luxcedar"
        >
          Explore our handpicked locations for an unforgettable luxury picnic experience in the heart of Tofino&apos;s natural beauty.
        </motion.p>
        <div className="relative w-full h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <motion.button
              onClick={() => setIsMapView(!isMapView)}
              className="px-6 py-3 bg-luxcopper text-luxcedar font-avenir font-semibold rounded-full hover:bg-luxgold hover:text-luxnavy transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMapView ? 'View List' : 'View Map'}
              <Compass className="inline-block ml-2 w-5 h-5" />
            </motion.button>
          </div>
          <AnimatePresence mode="wait">
            {isMapView ? (
              <motion.div
                key="map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Map selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full overflow-y-auto p-8 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {locations.map((location) => (
                    <motion.div
                      key={location.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-luxpearl rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => setSelectedLocation(location.id)}
                    >
                      <div className="relative h-64">
                        <Image
                          src={location.image}
                          alt={location.name}
                          layout="fill"
                          objectFit="cover"
                        />
                        {location.extraFee && (
                          <div className="absolute top-2 right-2 bg-luxgold text-luxnavy text-xs font-bold px-2 py-1 rounded-full">
                            Premium
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-luxnavy mb-2 font-playfair">{location.name}</h3>
                        <p className="text-luxcharcoal mb-4 font-avenir text-sm">{location.subtext}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-luxnavy">
                            <MapPin className="w-4 h-4 mr-" />
                            <span>Tofino, BC</span>
                          </div>
                          <div className="flex items-center text-luxnavy">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>Available Year-round</span>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-sm">
                          <div className="flex items-center text-luxnavy">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>2-3 hours</span>
                          </div>
                          {location.extraFee && (
                            <div className="flex items-center text-luxgold">
                              <DollarSign className="w-4 h-4 mr-1" />
                              <span>Extra fee applies</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-luxnavy bg-opacity-90 p-4"
              >
                <div className="bg-luxpearl rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
                  <div className="relative h-96">
                    <Image
                      src={locations[selectedLocation - 1].image}
                      alt={locations[selectedLocation - 1].name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="absolute top-4 right-4 bg-luxsand rounded-full p-2 hover:bg-luxcedar transition-colors duration-300"
                      aria-label="Close details"
                    >
                      <X className="w-6 h-6 text-luxnavy" />
                    </button>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-luxnavy mb-4 font-playfair">
                      {locations[selectedLocation - 1].name}
                    </h3>
                    <p className="text-luxcharcoal mb-6 font-avenir text-lg">
                      {locations[selectedLocation - 1].subtext}
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center text-luxnavy">
                        <MapPin className="w-6 h-6 mr-3" />
                        <span className="font-avenir text-lg">Tofino, BC</span>
                      </div>
                      <div className="flex items-center text-luxnavy">
                        <Calendar className="w-6 h-6 mr-3" />
                        <span className="font-avenir text-lg">Available Year-round</span>
                      </div>
                      <div className="flex items-center text-luxnavy">
                        <Clock className="w-6 h-6 mr-3" />
                        <span className="font-avenir text-lg">2-3 hours</span>
                      </div>
                      {locations[selectedLocation - 1].extraFee && (
                        <div className="flex items-center text-luxgold">
                          <DollarSign className="w-6 h-6 mr-3" />
                          <span className="font-avenir text-lg">Extra fee applies</span>
                        </div>
                      )}
                    </div>
                    <motion.button
                      className="w-full bg-luxcopper text-luxcedar font-bold py-4 px-8 rounded-full transition-colors duration-300 font-avenir text-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book This Location
                    </motion.button>
                  </div>
                </div>
                <button
                  onClick={handlePrevLocation}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-luxsand rounded-full p-3 hover:bg-luxcedar transition-colors duration-300"
                  aria-label="Previous location"
                >
                  <ChevronLeft className="w-8 h-8 text-luxnavy" />
                </button>
                <button
                  onClick={handleNextLocation}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-luxsand rounded-full p-3 hover:bg-luxcedar transition-colors duration-300"
                  aria-label="Next location"
                >
                  <ChevronRight className="w-8 h-8 text-luxnavy" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default LuxuryPicnicMap