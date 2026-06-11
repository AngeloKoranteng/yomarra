"use client";
// --- FOOTER CODE ---
// Dit bestand regelt de footer (onderkant) die op �lke pagina van de website terugkomt.

import Link from 'next/link';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
        backgroundColor: '#211611',
        color: 'rgba(240,232,220,.78)',
        padding: '5.25rem 0 2.5rem',
        fontFamily: 'var(--font-open-sans)',
        borderTop: '1px solid rgba(240,232,220,.12)'
    }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                
                <div style={{ maxWidth: '320px' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                        <div style={{
                            fontFamily: 'var(--font-luckiest-guy)',
                            fontSize: '2.6rem',
                            letterSpacing: '2px',
                            color: '#FBF7F0',
                            marginBottom: '1rem',
                            display: 'inline-block'
                        }}>
                            YOMARRA
                        </div>
                    </Link>
                    <p style={{ color: 'rgba(240,232,220,.58)', lineHeight: '1.7', fontSize: '1rem', maxWidth: '280px' }}>
                        "Social media hoeft niet ingewikkeld te zijn."
                    </p>
                </div>

                <div>
                    <h4 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '.75rem', marginBottom: '1.5rem', fontWeight: '700', color: '#D9A06B', letterSpacing: '.24em', textTransform: 'uppercase' }}>
                        Diensten
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link href="/strategie" style={{ color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(240,232,220,.72)'}>Social media strategie</Link></li>
                        <li><Link href="/content" style={{ color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(240,232,220,.72)'}>Content creatie</Link></li>
                        <li><Link href="/promotie" style={{ color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(240,232,220,.72)'}>Branding / Promotie</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '.75rem', marginBottom: '1.5rem', fontWeight: '700', color: '#D9A06B', letterSpacing: '.24em', textTransform: 'uppercase' }}>
                        Informatie
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link href="/over-ons" style={{ color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(240,232,220,.72)'}>Over ons</Link></li>
                        <li><Link href="/contact" style={{ color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(240,232,220,.72)'}>Contact</Link></li>
                        <li><a href="/yomarra-offerte-sectie.pdf" download style={{ color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(240,232,220,.72)'}>Offerte downloaden</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '.75rem', marginBottom: '1.5rem', fontWeight: '700', color: '#D9A06B', letterSpacing: '.24em', textTransform: 'uppercase' }}>
                        Social media
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li>
                            <a href="https://www.linkedin.com/company/yomarra/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color='#fff'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(240,232,220,.72)'}>
                                <FaLinkedin /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@yomarra.co" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color='#fff'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(240,232,220,.72)'}>
                                <FaTiktok /> TikTok
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/yomarra.co" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(240,232,220,.72)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color='#fff'} onMouseLeave={(e) => e.currentTarget.style.color='rgba(240,232,220,.72)'}>
                                <FaInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div style={{ 
                borderTop: '1px solid rgba(240,232,220,0.12)', 
                paddingTop: '2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                gap: '0.5rem',
                color: 'rgba(240,232,220,.42)', 
                fontSize: '0.9rem' 
            }}>
                <p style={{ margin: 0 }}>
                    &copy; 2026 Yomarra. Alle rechten voorbehouden. &bull; <a href="mailto:infoyomarra@gmail.com" style={{ color: 'rgba(240,232,220,.42)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(240,232,220,.42)'}>infoyomarra@gmail.com</a>
                </p>
                <p style={{ margin: 0 }}>
                    KVK: 90645561 &bull; Venray, Nederland
                </p>
            </div>

        </div>
    </footer>
  );
}
