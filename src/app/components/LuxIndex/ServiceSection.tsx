import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


export default function ServiceSections() {
    return (
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-playfair font-bold mb-16 text-center text-luxcedar"
          >
            Look Further into LuxFino
          </motion.h2>
          <ServiceSection
            title="Luxury Pop-up Picnics"
            description="Immerse yourself in Tofino&apos;s breathtaking landscapes with our meticulously curated luxury picnics. Each experience is a perfect blend of elegance, comfort, and unforgettable moments."
            buttonText="Explore our Pop-up Picnics"
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
            buttonText="Book Catering and Events"
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
            
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl font-playfair font-bold mb-6 text-luxcedar">{title}</h3>
            <p className="text-luxcedar/80 mb-8 font-avenir leading-relaxed text-xl">{description}</p>
            <Link href={linkHref}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-luxocean text-luxpearl hover:bg-luxsand hover:text-luxpearl transition-all duration-300 text-lg px-8 py-3 rounded-full font-avenir font-semibold tracking-wide"
              >
                {buttonText}
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    )
  }
  