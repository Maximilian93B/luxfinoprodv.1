'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface InfoCardProps {
  title: string
  content: string
  icon: string
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, icon }) => {
  return (
    <motion.div 
      className="card bg-luxcopper/20 shadow-xl hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-body">
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-luxpearl">
              <Image src={icon} alt={`${title} icon`} width={30} height={30} className="text-luxpearl" />
            </div>
          </div>
          <h3 className="card-title ml-4 text-2xl font-playfair text-luxcedar">{title}</h3>
        </div>
        <p className="font-avenir text-luxcedar/80 leading-relaxed">{content}</p>
      </div>
    </motion.div>
  )
}

export default function AboutIndex() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
        <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2 
          className="text-5xl font-playfair font-bold mb-8 text-center text-luxcedar"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          About LuxFino
        </motion.h2>
        <motion.p 
          className="text-xl mb-16 max-w-3xl mx-auto text-center text-luxcedar/80 font-avenir leading-relaxed "
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          LuxFino is Tofino&apos;s premier provider of luxury pop-up picnics, in-house catering, and remote glamping. We create unforgettable moments with locally inspired touches that showcase the natural beauty of Tofino.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <InfoCard
            title="Our Mission"
            content={`At LuxFino, we blend luxury and nature to offer unique experiences that bring people together. Whether it's a beach picnic or a remote glamping retreat, our services celebrate the stunning landscapes of Tofino.`}
            icon="/Lux.Fino.Logo2.svg"
          />
          <InfoCard
            title="Services"
            content="LuxFino offers tailored luxury picnics, gourmet catering with local flavors, and exclusive remote glamping experiences. Our partnerships with local artisans ensure that every detail, from charcuterie boards to floral arrangements, is thoughtfully crafted."
            icon="/services-icon.svg"
          />
          <InfoCard
            title="Unique Experiences"
            content={`Experience the best of Tofino with personalized luxury services, including pop-up beach picnics and off-grid glamping escapes. We combine adventure with elegance to create unforgettable memories in one of the world's most stunning locations.`}
            icon="/experiences-icon.svg"
          />
        </div>

        <motion.div 
          className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl bg-transparent"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/LuxRemotePic2.JPG"
            alt="Tofino's beautiful landscape"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <motion.div 
            className="absolute inset-0 bg-opacity-10 flex items-center justify-center "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}     
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card bg-opacity-20 max-w-7xl mx-4 ">
              <div className="card-body">
                <h3 className="card-title text-5xl font-playfair text-luxpearl justify-center p-4">
                  Discover Tofino
                </h3>
                <p className="text-3xl text-center font-avenir text-luxpearl">
                  Experience the beauty of Tofino with LuxFino&apos;s curated experiences
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn-primary bg-luxsand text-luxcedar hover:bg-luxocean hover:text-luxpearl transition-all duration-300 text-lg px-8 py-3 rounded-full font-avenir font-semibold tracking-wide">Explore Our Services</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}