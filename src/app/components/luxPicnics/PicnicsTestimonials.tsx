import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const PicnicsTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Emily R.',
      feedback:
        'The Lux Picnic was the highlight of our trip! The setup was beautiful, and the food was exquisite.',
      rating: 5,
    },
    {
      name: 'James P.',
      feedback:
        'A truly unforgettable experience. The staff went above and beyond to make our picnic extraordinary.',
      rating: 5,
    },
    {
      name: 'Sarah L.',
      feedback:
        'An exceptional way to celebrate our anniversary. Every detail was perfect from start to finish.',
      rating: 5,
    },
    {
      name: 'Michael S.',
      feedback:
        'Impeccable service and meticulous attention to detail. Highly recommend Lux Picnics for any special occasion.',
      rating: 5,
    },
    {
      name: 'Olivia K.',
      feedback:
        'We felt utterly pampered! The picnic setting was stunning, and the location was absolutely breathtaking.',
      rating: 5,
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-luxcream py-16 md:py-24"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-12 md:mb-16 tracking-wide text-luxnavy"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Enchanting Experiences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-luxpearl p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-luxcream"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxgold fill-current" />
                ))}
              </div>
              <p
                className="text-lg md:text-xl text-luxcharcoal italic leading-relaxed mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {testimonial.feedback}
              </p>
              <div className="w-16 h-1 bg-luxcream mx-auto mb-4"></div>
              <p
                className="text-base md:text-lg font-semibold text-luxcharcoal"
                style={{ fontFamily: 'Avenir, sans-serif' }}
              >
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <a 
            href="#book-now" 
            className="inline-block bg-luxocean text-luxpearl font-bold py-4 px-8 rounded-full hover:bg-luxcedar hover:text-luxpearl transition-colors duration-300 text-lg tracking-wide"
            style={{ fontFamily: 'Avenir, sans-serif' }}
          >
            Experience Luxury
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PicnicsTestimonials