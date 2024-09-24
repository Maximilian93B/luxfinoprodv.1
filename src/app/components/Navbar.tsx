import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 flex items-center justify-between">
      {/* Logo or brand name */}
      <div className="flex-1 flex items-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            src="/lux fino-icon.pdf.svg"
            alt="Company Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              strokeWidth="2"
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

      {/* Right-side navigation and phone number */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 z-10">
          <li tabIndex={0}>
            <details>
              <summary>
                <Image
                  src="lux fino-icon.pdf.svg"
                  alt="Company Logo"
                  width={80} // Adjust the width as needed
                  height={80} // Adjust the height as needed
                />
              </summary>
              <ul className="flex flex-wrap w-48 p-2 bg-base-600">
                <li>
                  <Link href="/luxpicnic">Lux Picnics</Link>
                </li>
                <li>
                  <Link href="/luxremote">Lux Remote</Link>
                </li>
                <li>
                  <Link href="/luxcatering">LuxFino Catering</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        {/* Phone number display */}
        <div className="ml-4">
          <a href="tel:+11234567890" className="btn btn-outline">
            Call Us: +1 (123) 456-7890
          </a>
        </div>
      </div>
    </div>
  );
}
