'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EventBookingCTA() {
  return (
    <section className="bg-luxsand py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-luxpearl">
            Let Lux Fino Cater Your Next Event
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-luxpearl/80 max-w-2xl mx-auto">
            Whether you&apos;re planning a wedding, corporate event, or special celebration, our team is here to bring your vision to life with exquisite cuisine and impeccable service.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button className="rounded-full font-semibold text-lg bg-luxpearl text-luxsand px-8 py-4 shadow-lg hover:bg-luxcopper hover:text-luxsand hover:shadow-xl transition-all duration-300">
              Book a Consultation
            </button>
            <button className="rounded-full font-semibold text-lg border-2 border-luxpearl text-luxpearl px-8 py-4 shadow-lg hover:bg-luxpearl hover:text-luxsand hover:shadow-xl transition-all duration-300">
              Download Our Brochure
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}