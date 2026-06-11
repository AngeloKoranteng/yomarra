// --- HOMEPAGE CODE ---
// Dit bestand bouwt de hele beginpagina van de website.
// We laden hier afbeeldingen, kaders en testjes in om deze te tonen.

import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { FaArrowRight, FaStar, FaChartLine, FaCheckCircle, FaLaptop, FaBullseye, FaComments, FaBullhorn, FaMobileAlt, FaCamera, FaUserFriends, FaFilePdf } from 'react-icons/fa';
// Global styles are imported in layout.js

// Dit is het hoofdblok (functie) die alle onderdelen van de Homepage verzamelt.
export default function Home() {
  
  // Wat hieronder in de -return- staat, is grofweg de HTML (visuele blokken) die op het scherm verschijnt.
  return (
    <main style={{position: 'relative', overflowX: 'hidden'}}>
        {/* Style block for animations */}
        <style dangerouslySetInnerHTML={{__html: `
          .floating-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .floating-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          .price-card {
            transition: transform 0.3s ease, border-color 0.3s ease;
          }
          .price-card:hover {
            transform: translateY(-15px);
            border-color: #8B4513;
          }
          .price-card-popular {
            transform: scale(1);
            z-index: 10;
          }
          @media (min-width: 992px) {
            .price-card-popular {
              transform: scale(1.05);
            }
          }
          .emoticon-link {
            transition: transform 0.3s ease;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            min-width: 120px;
          }
          .emoticon-link:hover {
            transform: translateY(-8px);
          }
          .emoticon-link:hover .icon-box {
            background-color: #8B4513 !important;
            color: #F2E6D8 !important;
            box-shadow: 0 12px 24px rgba(139, 69, 19, 0.2) !important;
          }
        `}} />

        {/* Hero Section */}
        <section id="home" className="hero" style={{ position: 'relative', background: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat", minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '4rem' }}>
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.7)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }}></div>
            <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto', padding: '40px 24px', color: '#fff', textAlign: 'center', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                <span className="badge" style={{ display: 'inline-block', background: '#8B3A0F', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold', textShadow: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>★ 5/5 — Altijd impact</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1.2', marginBottom: '20px', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold', color: '#ffffff' }}>Social media hoeft niet<br/>ingewikkeld te zijn.</h1>
                <p style={{ fontSize: '1.2rem', opacity: 1, marginBottom: '32px', lineHeight: '1.6', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>Yomarra helpt jouw bedrijf groeien met pakkende content, een duidelijke strategie en meetbare impact.</p>
                <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', textShadow: 'none' }}>
                    <Link href="/contact" className="btn-primary" style={{ background: '#8B3A0F', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', transition: 'opacity 0.3s' }}>Neem contact op &rarr;</Link>
                    <Link href="/diensten" className="btn-secondary" style={{ border: '2px solid #fff', color: '#fff', padding: '12px 26px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', backgroundColor: 'transparent', transition: 'background 0.3s' }}>Bekijk onze diensten</Link>
                </div>
            </div>

            {/* Bottom Wave to White */}
            <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                    <path fill="#ffffff" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
                </svg>
            </div>
        </section>

        {/* Brand Expertise / Emoticons Strip */}
        <section style={{backgroundColor: '#fff', padding: '4rem 0 2rem 0'}}>
            <div className="container">
                <div style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    flexWrap: 'wrap', 
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {/* Emoticon 1: Megaphone / Promo */}
                    <Link href="/promotie" className="emoticon-link">
                        <div className="icon-box" style={{
                            width: '100px', height: '100px', 
                            backgroundColor: '#F2E6D8', 
                            borderRadius: '24px', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            color: '#8B4513', fontSize: '3rem',
                            boxShadow: '0 8px 16px rgba(139, 69, 19, 0.1)',
                            transition: 'all 0.3s ease'
                        }}>
                            <FaBullhorn />
                        </div>
                        <div>Promotie</div>
                    </Link>

                    {/* Emoticon 2: Target / Strategy */}
                    <Link href="/strategie" className="emoticon-link">
                        <div className="icon-box" style={{
                            width: '100px', height: '100px', 
                            backgroundColor: '#F2E6D8', 
                            borderRadius: '24px', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            color: '#8B4513', fontSize: '3rem',
                            boxShadow: '0 8px 16px rgba(139, 69, 19, 0.1)',
                            transition: 'all 0.3s ease'
                        }}>
                            <FaBullseye />
                        </div>
                        <div>Strategie</div>
                    </Link>

                    {/* Emoticon 3: Camera / Content */}
                    <Link href="/content" className="emoticon-link">
                        <div className="icon-box" style={{
                            width: '100px', height: '100px', 
                            backgroundColor: '#F2E6D8', 
                            borderRadius: '24px', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            color: '#8B4513', fontSize: '3rem',
                            boxShadow: '0 8px 16px rgba(139, 69, 19, 0.1)',
                            transition: 'all 0.3s ease'
                        }}>
                            <FaCamera />
                        </div>
                        <div>Content</div>
                    </Link>
                </div>
            </div>
        </section>

        {/* Over Ons / Solutions Section */}
        <section id="about" style={{backgroundColor: '#fff', padding: '6rem 0'}}>
            <div className="container">
                <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                    <h2 style={{fontFamily: 'var(--font-montserrat)', color: '#111', fontSize: '3rem', fontWeight: 'bold'}}>Wat we doen</h2>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
                    
                    {/* Card 1 */}
                    <div className="floating-card" style={{borderRadius: '24px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{height: '180px', backgroundColor: '#FCD553', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <FaLaptop style={{fontSize: '5rem', color: '#fff'}} />
                        </div>
                        <div style={{padding: '2.5rem'}}>
                            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111'}}>Wat Yomarra doet</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                                Wij nemen het volledige proces uit handen: van strategie tot creatie en publicatie. We helpen jouw merk groeien met doordachte content.
                            </p>
                            <Link href="/over-ons" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                                Check it Out <FaArrowRight fontSize="0.8rem" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="floating-card" style={{borderRadius: '24px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{height: '180px', backgroundColor: '#8ea6ff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <FaBullseye style={{fontSize: '5rem', color: '#fff'}} />
                        </div>
                        <div style={{padding: '2.5rem'}}>
                            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111'}}>Mijn visie</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                                Elk bedrijf moet zijn unieke verhaal laten voelen. Merken moeten dominant zichtbaar zijn voor de juiste doelgroep en impact maken.
                            </p>
                            <Link href="/over-ons" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                                Check it Out <FaArrowRight fontSize="0.8rem" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="floating-card" style={{borderRadius: '24px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{height: '180px', backgroundColor: '#ff9a76', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <FaComments style={{fontSize: '5rem', color: '#fff'}} />
                        </div>
                        <div style={{padding: '2.5rem'}}>
                            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111'}}>Wat krijg je?</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                                Persoonlijke aandacht, creatieve concepten die opvallen, en meetbare resultaten gericht op conversie en constante groei.
                            </p>
                            <Link href="/diensten" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                                Check it Out <FaArrowRight fontSize="0.8rem" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Pricing / Packages Section */}
        <section id="pricing" style={{ backgroundColor: '#F3E7D9', padding: '6rem 0', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1px', left: 0, width: '100%', zIndex: 1 }}>
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px', transform: 'scaleY(-1)' }}>
                    <path fill="#ffffff" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
                </svg>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ color: '#8F431C', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Pakketten
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-montserrat)', color: '#111', fontSize: 'clamp(2.3rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '1rem' }}>
                        Kies jouw pakket.
                    </h2>
                    <p style={{ color: '#555', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
                        Transparante prijzen, maximale impact. Klik op een pakket voor extra details, precies zoals in de zip-versie.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="/yomarra-offerte-sectie.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', backgroundColor: '#1A1110', padding: '1rem 2rem', borderRadius: '999px', color: '#FDFAF6', textDecoration: 'none', transition: '0.3s', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
                            <FaFilePdf style={{ fontSize: '1.8rem', color: '#C27A55' }} />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.05rem', color: '#FDFAF6' }}>Download Offerte</div>
                                <div style={{ fontSize: '0.85rem', color: 'rgba(253,250,246,0.65)', marginTop: '0.2rem' }}>Bekijk de uitgebreide pakket specificaties</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto', alignItems: 'stretch' }}>
                    {[
                        {
                            number: '01',
                            title: 'START',
                            price: '€250',
                            priceLabel: 'eenmalig',
                            period: 'Looptijd: 1 - 2 maanden',
                            image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1200&q=80',
                            summary: 'De fundering van een serieus merk.',
                            details: ['Branding analyse & positionering', 'Merkidentiteit & tone of voice', 'Contentstrategie & pilaren', 'Hooks, captions & templates'],
                            href: '/contact?plan=start',
                            cta: 'Aanvragen',
                            accent: '#7A2E12',
                            open: false,
                        },
                        {
                            number: '02',
                            title: 'GROEI',
                            price: '€499',
                            priceLabel: '/ maand',
                            period: 'Looptijd: 3 of 6 maanden',
                            image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80',
                            summary: 'Bereik omzetten in klanten.',
                            details: ['Reels & TikTok strategie', 'Actief community management', 'DM -> gesprek -> deal systeem', 'Maandelijkse rapportage'],
                            href: '/contact?plan=groei',
                            cta: 'Start nu',
                            accent: '#8F431C',
                            open: true,
                        },
                        {
                            number: '03',
                            title: 'ALL-IN',
                            price: '€1.000',
                            priceLabel: '/ maand',
                            period: 'Minimaal 6 maanden',
                            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
                            summary: 'Volledige overname van social media.',
                            details: ['Alles van START + GROEI', 'Volledige contentplanning', 'Lead kwalificatie & opvolging', 'Prioriteit support & check-ins'],
                            href: '/contact?plan=all-in',
                            cta: 'Aanvragen',
                            accent: '#7A2E12',
                            open: false,
                        },
                    ].map((pkg) => (
                        <details key={pkg.title} open={pkg.open} style={{ backgroundColor: '#fff9f4', border: '1px solid rgba(122,46,18,0.12)', borderTop: `4px solid ${pkg.accent}`, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <summary style={{ listStyle: 'none', cursor: 'pointer', padding: '1.5rem 1.5rem 1rem', outline: 'none' }}>
                                <div style={{ width: '100%', height: '180px', position: 'relative', marginBottom: '1.25rem', borderRadius: '16px', overflow: 'hidden' }}>
                                    <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                </div>
                                <div style={{ fontSize: '0.68rem', letterSpacing: '3px', color: '#C27A55', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{pkg.number}</div>
                                <div style={{ fontFamily: 'var(--font-montserrat)', fontSize: '2.2rem', color: '#1A1110', lineHeight: 1, marginBottom: '0.4rem', fontWeight: 'bold' }}>{pkg.title}</div>
                                <div style={{ fontSize: '0.85rem', color: '#8C7B6E', fontStyle: 'italic', marginBottom: '1rem' }}>{pkg.summary}</div>
                                <div style={{ marginBottom: '0.3rem' }}>
                                    <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: '2.1rem', color: '#7A2E12', lineHeight: 1, fontWeight: 'bold' }}>{pkg.price}</span>
                                    <span style={{ fontSize: '0.8rem', color: '#8C7B6E', marginLeft: '0.35rem' }}>{pkg.priceLabel}</span>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#8C7B6E', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>{pkg.period}</div>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#8F431C', fontWeight: 700 }}>
                                    Bekijk details <FaArrowRight fontSize="0.85rem" />
                                </span>
                            </summary>
                            <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid rgba(122,46,18,0.1)' }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                    {pkg.details.map((item) => (
                                        <li key={item} style={{ fontSize: '0.95rem', color: '#5a4035', display: 'flex', gap: '0.6rem', lineHeight: 1.5 }}>
                                            <span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={pkg.href} style={{ display: 'block', textAlign: 'center', padding: '0.95rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px', border: `1.5px solid ${pkg.accent}`, color: pkg.accent, background: 'transparent' }}>
                                    {pkg.cta}
                                </Link>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    </main>
  );
}




