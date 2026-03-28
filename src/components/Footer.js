"use client";
// --- FOOTER CODE ---
// Dit bestand regelt de footer (onderkant) die op �lke pagina van de website terugkomt.

import Link from 'next/link';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
        backgroundColor: '#111', 
        color: '#fff', 
        padding: '5rem 0 2rem 0',
        fontFamily: 'var(--font-open-sans)',
        borderTop: '5px solid #8B3A0F'
    }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            
            {/* Main Footer Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                
                {/* Kolom: Logo & Tagline */}
                <div>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                        <div style={{
                            fontFamily: 'var(--font-luckiest-guy)',
                            fontSize: '2.5rem',
                            letterSpacing: '2px',
                            color: '#fff',
                            marginBottom: '1rem',
                            display: 'inline-block'
                        }}>
                            YOMARRA
                        </div>
                    </Link>
                    <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '1rem' }}>
                        "Social media hoeft niet ingewikkeld te zijn."
                    </p>
                </div>

                {/* Kolom 1: Diensten */}
                <div>
                    <h4 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                        Diensten
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link href="/strategie" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='#aaa'}>Social media strategie</Link></li>
                        <li><Link href="/content" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='#aaa'}>Content creatie</Link></li>
                        <li><Link href="/promotie" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='#aaa'}>Branding / Promotie</Link></li>
                    </ul>
                </div>

                {/* Kolom 2: Informatie */}
                <div>
                    <h4 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                        Informatie
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link href="/over-ons" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='#aaa'}>Over ons</Link></li>
                        <li><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='#aaa'}>Contact</Link></li>
                        <li><a href="/yomarra-offerte-sectie.pdf" download style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='#aaa'}>Offerte downloaden</a></li>
                    </ul>
                </div>

                {/* Kolom 3: Social media */}
                <div>
                    <h4 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                        Social media
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li>
                            <a href="https://instagram.com/yomarra" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color='#fff'} onMouseLeave={(e) => e.currentTarget.style.color='#aaa'}>
                                <FaInstagram /> @yomarra
                            </a>
                        </li>
                        <li>
                            <a href="https://tiktok.com/@yomarra" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color='#fff'} onMouseLeave={(e) => e.currentTarget.style.color='#aaa'}>
                                <FaTiktok /> @yomarra
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Onderste balk (Copyright & Info) */}
            <div style={{ 
                borderTop: '1px solid rgba(255,255,255,0.1)', 
                paddingTop: '2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                gap: '0.5rem',
                color: '#888', 
                fontSize: '0.9rem' 
            }}>
                <p style={{ margin: 0 }}>
                    &copy; 2026 Yomarra. Alle rechten voorbehouden. &bull; <a href="mailto:infoyomarra@gmail.com" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='#888'}>infoyomarra@gmail.com</a>
                </p>
                <p style={{ margin: 0 }}>
                    KVK: 90645561 &bull; Venray, Nederland
                </p>
            </div>

        </div>
    </footer>
  );
}
