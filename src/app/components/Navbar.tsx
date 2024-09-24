import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="normal-case text-xl">
          <Image
            src="/lux-fino-icon.svg"
            alt="Company Logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Web Menu */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link href="/luxpicnic" className="btn btn-ghost">
         Picnics
        </Link>
        <Link href="/luxremote" className="btn btn-ghost">
          Lux Remote
        </Link>
        <Link href="/luxcatering" className="btn btn-ghost">
          Exclusive & Corporate Catering
        </Link>
        <a href="tel:+11234567890" className="btn btn-outline">
          Call Us: +1 (800) 589-3466
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
        >
          <li>
            <Link href="/luxpicnic">Lux Picnics</Link>
          </li>
          <li>
            <Link href="/luxremote">Lux Remote</Link>
          </li>
          <li>
            <Link href="/luxcatering">Exclusive Catering</Link>
          </li>
          <li>
            <a href="tel:+11234567890">Call Us: +1 (123) 456-7890</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}