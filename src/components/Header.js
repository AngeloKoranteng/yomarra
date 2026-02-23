'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Sluit menu bij elke route change
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    };
    router.events?.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events?.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="top-wave" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            zIndex: 0
        }}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '80px', display: 'block'}}>
                 <path fill="#F2E6D8" d="M0,0 L1440,0 L1440,50 C1000,90 400,90 0,50 Z" />
            </svg>
      </div>

      <header className="header" style={{position: 'relative', zIndex: 100, backgroundColor: 'transparent', boxShadow: 'none', borderBottom: 'none'}}>
          <div className="container header-container">
              <div className="logo-container" style={{marginTop: '10px'}}>
                  <Link href="/" className="logo-link">
                      <img src="/logo-transparent.png" alt="Yomarra Logo" className="logo" style={{height: '100%', width: 'auto', objectFit: 'contain'}} />
                  </Link>
              </div>

              <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                  <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </button>

              <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                  <ul>
                      <li><Link href="/#home" onClick={closeMenu}>Home</Link></li>
                      <li><Link href="/projects" onClick={closeMenu}>Projecten</Link></li>
                      <li><Link href="/#pricing" onClick={closeMenu}>Prijzen</Link></li>
                      <li><Link href="/#contact" onClick={closeMenu}>Contact</Link></li>
                      <li><Link href="/#contact" className="nav-btn" onClick={closeMenu}>Start Nu</Link></li>
                  </ul>
              </nav>
          </div>
      </header>
    </>
  );
}
