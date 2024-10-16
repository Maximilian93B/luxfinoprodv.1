import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-white text-black p-6">
      {/* Logo */}
      <div className="logo-container mb-4">
        <Image
          src="/Lux.Fino.logo.svg" // Ensure the correct path and file extension
          alt="Company Logo"
          width={250}
          height={250}
          className="mx-auto h-auto w-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <nav>
          <h6 className="footer-title font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/luxremote" className="link link-hover">
                Accommodations
              </Link>
            </li>
            <li>
              <Link href="/luxcatering" className="link link-hover">
                Catering
              </Link>
            </li>
            <li>
              <Link href="/luxpicnics" className="link link-hover">
                Picnics
              </Link>
            </li>
            <li>
              <Link href="/corporate-events" className="link link-hover">
                Corporate Events/Weddings
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="footer-title font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="link link-hover">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link link-hover">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="link link-hover">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/features" className="link link-hover">
                Features
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="footer-title font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="link link-hover">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="link link-hover">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="link link-hover">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
