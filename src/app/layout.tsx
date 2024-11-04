import { Playfair_Display } from 'next/font/google'; // Import Playfair Display
import { Metadata } from 'next'; // <-- Import the Metadata type
import Navbar from './components/Navbar';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Configure the Playfair Display font with Next.js
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','700'], // Choose the weights you want to use
});

export const metadata: Metadata = {
  title: 'LuxFino | Tofino Luxury Accommodations',
  description: 'LuxFino is a boutique hotel in Tofino, BC that offers luxury accommodations, dining, and event services as well as pop-up picnic experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} avenir-font`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
