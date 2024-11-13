'use client'

import Image from 'next/image'
import { ChefHat, Leaf, Users } from 'lucide-react'
import Link from 'next/link'
import React, { useRef } from 'react';

export default function LuxFinoCateringPage() {
  const foodImages = [
    '/Catering1.JPG',
    '/Catering2.JPG',
    '/Catering3.JPG',
    '/Catering4.JPG',
    '/Catering1.JPG',
    '/Catering2.JPG',
    '/Catering3.JPG',
    '/Catering4.JPG',
    '/Catering1.JPG',
    '/Catering2.JPG',
    '/Catering3.JPG',
    '/Catering4.JPG',
  ]

  const galleryRef = useRef<HTMLElement>(null);

  const getGridSpan = (index: number) => {
    const patterns: { [key: number]: string } = {
      0: 'md:col-span-8',
      1: 'md:col-span-4',
      2: 'md:col-span-4',
      3: 'md:col-span-4',
      4: 'md:col-span-4',
      5: 'md:col-span-8',
      6: 'md:col-span-6',
      7: 'md:col-span-6',
    };
    return patterns[index % Object.keys(patterns).length] || 'md:col-span-6';
  };

  const getAspectRatio = (index: number) => {
    const patterns: { [key: number]: string } = {
      0: 'aspect-[16/9]',
      1: 'aspect-[4/5]',
      2: 'aspect-[4/5]',
      3: 'aspect-[1/1]',
      4: 'aspect-[4/5]',
      5: 'aspect-[16/9]',
      6: 'aspect-[3/4]',
      7: 'aspect-[3/4]',
    };
    return patterns[index % Object.keys(patterns).length] || 'aspect-[4/3]';
  };

  return (
    <div className="min-h-screen bg-black text-lux-ivory">
      {/* Hero Section - Enhanced typography and overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/Catering4.JPG"
          alt="LuxFino Culinary Experience"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="absolute z-0 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lux-charcoal via-black/50 to-transparent z-10"></div>
        <div className="relative z-20 text-center text-lux-ivory space-y-10 px-4">
          <h1 className="text-7xl md:text-9xl font-extralight tracking-[0.2em] leading-tight">LuxFino</h1>
          <div className="relative h-[1px] w-0 mx-auto bg-lux-gold animate-expandLine"></div>
          <h2 className="text-3xl md:text-5xl font-thin tracking-[0.2em] leading-relaxed">
            <span className="block mb-4">Catering</span>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-luxsand"></div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent"></div>
            </div>
            <span className="block my-4 text-luxsand">Private Dining</span>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-luxsand"></div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent"></div>
            </div>
            <span className="block mt-4">Events</span>
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed">
              <span className="text-luxsand italic">Tofino&rsquo;s</span> finest private culinary experiences
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent opacity-50"></div>
              <span className="text-sm md:text-lg tracking-[0.25em] uppercase font-light text-lux-gold">est. 2018</span>
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent opacity-50"></div>
            </div>
            <p className="text-sm md:text-lg tracking-[0.15em] uppercase font-light text-lux-ivory">
              where every detail tells a story
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-40 bg-luxocean text-luxpearl relative">
        {/* Add subtle animated background pattern */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-center mb-12 md:mb-24 tracking-[0.15em] md:tracking-[0.2em] px-2">
            <span className="text-luxsand bg-gradient-to-r from-luxsand to-luxsand/70 bg-clip-text text-transparent block sm:inline">
              Customized
            </span>
            <span className="relative mt-4 sm:mt-0 sm:ml-4 block sm:inline">
              Culinary Experiences
              <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent"></div>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-20">
            {[
              { 
                icon: ChefHat, 
                title: "Personalized Menus", 
                description: "Tailored to your refined palate and dietary preferences, crafted with precision.",
                gradient: "from-luxsand/20 to-luxocean/30"
              },
              { 
                icon: Leaf, 
                title: "Local Ingredients", 
                description: "Sourcing the finest seasonal produce from Tofino's local artisans and farmers.",
                gradient: "from-luxsand/30 to-luxocean/40"
              },
              { 
                icon: Users, 
                title: "Intimate to Grand", 
                description: "Expertly scaling from intimate private dinners to magnificent celebrations.",
                gradient: "from-luxsand/20 to-luxocean/30"
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 
                                group-hover:opacity-100 transition-all duration-700`}></div>
                
                <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col items-center text-center 
                               backdrop-blur-sm border border-luxpearl/20 rounded-xl sm:rounded-2xl
                               group-hover:border-luxsand/40 transition-all duration-500
                               hover:transform hover:translate-y-[-4px] sm:hover:translate-y-[-8px]">
                  <div className="relative mb-6 sm:mb-8 transition-transform duration-700 ease-out
                                group-hover:transform group-hover:scale-110">
                    <div className="absolute inset-0 bg-luxsand/5 blur-2xl rounded-full 
                                  group-hover:bg-luxsand/20 transition-all duration-700"></div>
                    <feature.icon className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-luxsand 
                                           group-hover:rotate-3 transition-all duration-500" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 tracking-[0.1em] sm:tracking-[0.15em] 
                               text-luxsand group-hover:text-luxpearl transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent 
                                mb-4 sm:mb-6 group-hover:w-16 sm:group-hover:w-24 transition-all duration-500"></div>
                  
                  <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-luxpearl/80 
                               group-hover:text-luxpearl transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Gallery Button */}
          <div className="text-center mt-12 sm:mt-16 md:mt-24">
            <button 
              onClick={() => galleryRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-3 text-sm sm:text-base 
                       tracking-[0.2em] uppercase font-light overflow-hidden"
            >
              <span className="relative z-10 text-luxpearl">View Full Gallery</span>
              <div className="absolute inset-0 border border-luxpearl group-hover:border-luxpearl 
                           transition-all duration-300"/>
              <div className="absolute inset-0 bg-luxsand scale-x-0 group-hover:scale-x-100 
                           origin-left transition-transform duration-500"/>
              <span className="absolute inset-0 flex items-center justify-center text-luxocean 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View Full Gallery
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section ref={galleryRef} className="py-20 sm:py-28 md:py-40 bg-luxocean relative">
        {/* Add subtle animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-center mb-12 md:mb-24 tracking-[0.15em] md:tracking-[0.2em] px-2">
            <span className="text-lux-gold bg-gradient-to-r from-lux-ivory to-luxsand bg-clip-text block sm:inline">
              Culinary
            </span>
            <span className="relative mt-4 sm:mt-0 sm:ml-4 block sm:inline">
              Masterpieces
              <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxsand to-transparent"></div>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 max-w-8xl mx-auto">
            {foodImages.map((src, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl
                          transform transition-all duration-700 ease-out
                          hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(255,255,255,0.07)]
                          ${getGridSpan(index)}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lux-ivory to-lux-ivory opacity-0 
                              group-hover:opacity-10 transition-all duration-700"></div>
                
                <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl
                             backdrop-blur-sm
                             shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                             group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)]
                             transition-all duration-500
                             ${getAspectRatio(index)}`}>
                  <Image
                    src={src}
                    alt={`Culinary creation ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    priority={index < 2}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="transition-all duration-1000 ease-out
                             group-hover:scale-105 group-hover:brightness-110"
                  />
                  
                  <div className="absolute bottom-4 left-4 text-luxpearl/0 group-hover:text-lux-ivory/80 
                                font-light tracking-[0.15em] transition-all duration-500">
                    <span className="text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 md:py-40 bg-luxocean text-luxpearl relative">
        {/* Add subtle animated background pattern */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center space-y-12 sm:space-y-16 md:space-y-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.15em] md:tracking-[0.2em] leading-relaxed px-2">
              <span className="text-luxpearl bg-gradient-to-r from-luxpearl to-luxpearl/70 bg-clip-text text-transparent block">
                Elevate Your
              </span>
              <span className="relative mt-4 block">
                Tofino Experience
                <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxpearl to-transparent"></div>
              </span>
            </h2>

            <Link 
              href="/booking" 
              className="group inline-block relative px-8 sm:px-12 md:px-16 py-3 sm:py-4 
                        text-base sm:text-lg md:text-xl font-light tracking-[0.2em] overflow-hidden"
            >
              <span className="relative z-10 text-luxpearl group-hover:opacity-0 transition-opacity duration-500">
                Book Your Culinary Journey
              </span>
              
              {/* Border and Background Effects */}
              <div className="absolute inset-0 border border-luxpearl/30 
                           group-hover:border-luxpearl group-hover:bg-luxpearl 
                           transition-all duration-500"></div>
              
              {/* Sliding Background Effect */}
              <div className="absolute inset-0 bg-luxpearl scale-x-0 group-hover:scale-x-100 
                           origin-left transition-transform duration-500"></div>
              
              {/* Hover Text */}
              <span className="absolute inset-0 z-20 flex items-center justify-center 
                            text-luxforest opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500">
                Book Your Culinary Journey
              </span>

              {/* Decorative Corner Elements */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-luxpearl/30 
                           group-hover:border-luxpearl/80 transition-all duration-500 delay-100"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-luxpearl/30 
                           group-hover:border-luxpearl/80 transition-all duration-500 delay-100"></div>
            </Link>

            {/* Optional: Additional Text */}
            <p className="text-sm sm:text-base text-luxpearl/80 font-light tracking-wider max-w-2xl mx-auto">
              Experience culinary artistry on your own terms in Tofino.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}