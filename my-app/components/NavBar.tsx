'use client';

import Link from "next/link"; // Ensure this import is correct
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation"; // It's usually imported from 'next/router', not 'next/navigation'

const NavBar = () => {
  const pathname = usePathname(); // Make sure this is correctly imported

  return (
    <div className="navbar">
      <Link className="navbar-logo" href='/landing'>LOGO</Link>
      <section>
        <h1 className="navbar-wrapper">
          {navbarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`); 
            return (
              <Link href={item.route} key={item.route} className="navbar-content">
                <h1 className={isActive? "active-link" : ""}>{item.label}</h1>
              </Link>
            );
          })}
        </h1>
      </section>
    </div>
  );
};

export default NavBar;