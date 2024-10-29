'use client'

import React from 'react'
import { motion } from 'framer-motion'
import PicnicHero from '../components/luxPicnics/PicnicHero'
import PicnicsTabs from '../components/luxPicnics/PicnicsTabs'
import PicnicsTestimonials from '../components/luxPicnics/PicnicsTestimonials'
import Footer from '../components/Footer'
import LuxuryPicnicMap from '../components/luxPicnics/picnic-map'
import LuxuryPicnicCTA from '../components/luxPicnics/PicnicCTA'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const LuxPicnicsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-luxcopper to-luxpearl min-h-screen">
      <PicnicHero 
        quote="Experience the luxury of nature"
        subtitle="Luxurious Picnics in Tofino"
        isQuoteVisible={true}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-12 py-20"
      >
         {/** SECTION 1 */}
        <section className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-luxnavy font-playfair"
          >
            A Glimpse at Our Tables
          </motion.h2>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shadow-2xl rounded-lg overflow-hidden"
          >
            <PicnicsTabs />
          </motion.div>
        </section>  

        {/** SECTION 2 */}
        <section className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
              <LuxuryPicnicMap />
          </motion.div>
        </section>

        {/** SECTION 3 */}
        <section className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          <LuxuryPicnicCTA />
          </motion.div>
         </section>


         {/** SECTION 4 */}
        <section className="container mx-auto px-4">
        
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          <PicnicsTestimonials />
          </motion.div>
         </section>
    
      </motion.div>
     

      <Footer />
    </div>
  )
}

export default LuxPicnicsPage