import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-white text-black p-10">
      {/* Logo */}
      <div className="logo-container mb-6">
        <Image
          src="/lux-fino-icon.png" // Ensure the correct path and file extension
          alt="Company Logo"
          width={200}
          height={50}
          className="mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <nav>
          <h6 className="footer-title font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/accommodations" className="link link-hover">
                Accommodations
              </Link>
            </li>
            <li>
              <Link href="/catering" className="link link-hover">
                Catering
              </Link>
            </li>
            <li>
              <Link href="/picnics" className="link link-hover">
                Picnics
              </Link>
            </li>
            <li>
              <Link href="/corporate-events" className="link link-hover">
                Corporate Events
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
