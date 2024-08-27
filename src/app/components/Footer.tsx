import Link from "next/link";

export default function Footer() {
  return (
    
    <footer className="footer bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/branding" className="link link-hover">
          Accomodations
        </Link>
        <Link href="/design" className="link link-hover">
          Catering
        </Link>
        <Link href="/marketing" className="link link-hover">
          Picnics
        </Link>
        <Link href="/advertisement" className="link link-hover">
          Coporate Events
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/about" className="link link-hover">
          About us
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
        <Link href="/jobs" className="link link-hover">
          Jobs
        </Link>
        <Link href="/press-kit" className="link link-hover">
          Features
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/terms" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/privacy" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="/cookies" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
}
