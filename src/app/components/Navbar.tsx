import Link from "next/link";

export default function Navbar() {
    return (
      <div className="navbar bg-base-100">
        {/* Logo or brand name */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Luxury Services
          </Link>
        </div>
  
        {/* Right-side navigation and phone number */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 z-10">
            <li tabIndex={0}>
              <details>
                <summary>Services</summary>
                <ul className="flex flex-wrap w-48 p-2 bg-base-100">
                  <li>
                    <Link href="/luxpicnic">Luxury Picnic</Link>
                  </li>
                  <li>
                    <Link href="/luxremote">Luxury Glamping</Link>
                  </li>
                  <li>
                    <Link href="/luxcatering">In-House Catering</Link>
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

