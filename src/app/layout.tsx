import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';
import NavBar from './components/Navbar';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './components/Footer';

// Configure the Playfair Display font with Next.js
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','700'],
});

export const metadata: Metadata = {
  title: 'LuxFino | Tofino Luxury Accommodations',
  description: 'LuxFino is a boutique hotel in Tofino, BC that offers luxury accommodations, dining, and event services as well as pop-up picnic experiences.',
  keywords: 'Tofino luxury, glamping, pop-up picnics, luxury events, wedding catering, remote escapes',
  openGraph: {
    title: 'LuxFino | Luxury Experiences in Tofino',
    description: 'Immerse yourself in the untamed beauty of Tofino with our exclusive luxury experiences',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} avenir-font min-h-screen flex flex-col`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
