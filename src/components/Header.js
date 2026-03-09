"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Logo L - Hier wordt de afbeelding ingeladen en er is een aria-label voor screenreaders */}
        <Link href="/" className="logo-link" aria-label="Ga naar de homepagina" onClick={closeMobileMenu}>
          <div className="logo-image-container">
            <Image 
              src="/logo1.jpg" 
              alt="Yomarra Logo" 
              fill
              className="logo-img"
              sizes="(max-width: 768px) 150px, 200px"
              priority
            />
          </div>
        </Link>

        {/* Hamburger Menu Knop voor Mobiel - Voorzien van aria-label en aria-expanded */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu} 
          aria-label={isMobileMenuOpen ? 'Mobiel menu sluiten' : 'Mobiel menu openen'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigatie Menu - Toont links en markeert de actieve pagina met aria-current */}
        <nav id="mobile-navigation" className={`nav ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen && typeof window !== 'undefined' && window.innerWidth < 768}>
          <ul className="nav-list">
            <li>
              <Link 
                href="/diensten" 
                className={`nav-link ${pathname === '/diensten' ? 'active' : ''}`} 
                onClick={closeMobileMenu}
                aria-current={pathname === '/diensten' ? 'page' : undefined}
              >
                Diensten
              </Link>
            </li>
            <li>
              <Link 
                href="/#projects" 
                className="nav-link" 
                onClick={closeMobileMenu}
              >
                Projecten
              </Link>
            </li>
            <li>
              <Link 
                href="/over-ons" 
                className={`nav-link ${pathname === '/over-ons' ? 'active' : ''}`} 
                onClick={closeMobileMenu}
                aria-current={pathname === '/over-ons' ? 'page' : undefined}
              >
                Over ons
              </Link>
            </li>
          </ul>

          {/* Contact Knop direct in het menu (mobiel) of in de header (desktop) */}
          <Link href="/contact" className="btn btn-primary contact-btn" onClick={closeMobileMenu}>
            Contact
          </Link>
        </nav>
      </div>

    </header>
  );
}
