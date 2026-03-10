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
        <section id="home" style={{
            backgroundColor: '#F2E6D8', /* Bruine huisstijl lichte kleur */
            paddingTop: 'clamp(4rem, 10vw, 6rem)',
            paddingBottom: 'clamp(5rem, 12vw, 8rem)',
            position: 'relative'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                {/* Left Text */}
                <div style={{zIndex: 2}}>
                    <h1 style={{color: '#111', fontSize: 'clamp(2.5rem, 8vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: '1.1', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold'}}>
                        Social media hoeft niet ingewikkeld te zijn.
                    </h1>
                    <p style={{color: '#444', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '450px'}}>
                        Wij helpen jouw bedrijf groeien met pakkende content, een duidelijke strategie en meetbare impact.
                    </p>
                    
                    <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
                        <Link href="/contact" className="btn" style={{
                            background: '#111', 
                            color: '#fff', 
                            border: 'none', 
                            padding: '1.2rem 2.5rem', 
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            fontSize: '1rem',
                            textDecoration: 'none'
                        }}>
                            Neem Contact Op
                        </Link>

                        <div style={{ width: '80px', height: 'auto' }}>
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10,80 Q30,20 80,40 M80,40 L60,30 M80,40 L70,60" fill="transparent" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div style={{marginTop: '3rem'}}>
                        <div style={{display: 'flex', color: '#111', fontSize: '1.2rem', marginBottom: '0.5rem', gap: '0.2rem'}}>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p style={{color: '#444', fontSize: '0.9rem', fontWeight: 'bold'}}>Rated 5/5 - Altijd impact</p>
                    </div>
                </div>

                {/* Right Image */}
                <div style={{position: 'relative', zIndex: 2}}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '450px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Image removed by request */}
                    </div>
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
        <section id="pricing" style={{backgroundColor: '#F2E6D8', padding: '6rem 0', position: 'relative'}}>
            {/* Top Wave from White to Beige */}
            <div style={{position: 'absolute', top: '-1px', left: 0, width: '100%', zIndex: 1}}>
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px', transform: 'scaleY(-1)'}}>
                    <path fill="#ffffff" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
                </svg>
            </div>

            <div className="container" style={{position: 'relative', zIndex: 2, marginTop: '2rem'}}>
                <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                    <h2 style={{fontFamily: 'var(--font-montserrat)', color: '#111', fontSize: '3rem', fontWeight: 'bold'}}>Kies jouw pakket</h2>
                    <p style={{color: '#555', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem'}}>Transparante prijzen, maximale impact. Alle prijzen zijn exclusief btw.</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <a href="/Yomarra_Offerte.pptx" download style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', backgroundColor: '#1A1110', padding: '1rem 2rem', borderRadius: '10px', color: '#FDFAF6', textDecoration: 'none', transition: '0.3s', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
                            <FaFilePdf style={{ fontSize: '1.8rem', color: '#C27A55' }} /> 
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#FDFAF6' }}>Download Offerte</div>
                                <div style={{ fontSize: '0.85rem', color: 'rgba(253,250,246,0.6)', marginTop: '0.2rem' }}>Bekijk de uitgebreide pakket specificaties</div>
                            </div>
                        </a>
                    </div>
                </div>

                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto', alignItems: 'stretch'}}>
                    
                    {/* START */}
                    <div style={{ backgroundColor: '#fff9f4', border: '1px solid rgba(122,46,18,0.12)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '4px solid #7A2E12', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.68rem', letterSpacing: '3px', color: '#C27A55', marginBottom: '0.5rem', textTransform: 'uppercase' }}>01</div>
                        <div style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.6rem', color: '#1A1110', lineHeight: 1, marginBottom: '0.4rem', fontWeight: 'bold' }}>START</div>
                        <div style={{ fontSize: '0.85rem', color: '#8C7B6E', fontStyle: 'italic', marginBottom: '1.5rem' }}>De fundering van een serieus merk</div>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <span style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.4rem', color: '#7A2E12', lineHeight: 1, fontWeight: 'bold' }}>€250</span>
                            <span style={{ fontSize: '0.8rem', color: '#8C7B6E' }}> eenmalig</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#8C7B6E', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.8rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(122,46,18,0.1)' }}>Looptijd: 1 – 2 maanden</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Branding analyse & positionering</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Merkidentiteit & tone of voice</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Contentstrategie & pilaren</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Hooks, captions & Canva templates</li>
                        </ul>
                        <Link href="/contact?plan=start" style={{ display: 'block', textAlign: 'center', padding: '0.85rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', border: '1.5px solid #7A2E12', color: '#7A2E12', background: 'transparent' }}>Aanvragen</Link>
                    </div>

                    {/* GROEI */}
                    <div style={{ backgroundColor: '#7A2E12', border: '1px solid #7A2E12', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '4px solid #C27A55', boxShadow: '0 20px 50px rgba(122,46,18,0.3)', borderRadius: '8px' }}>
                        <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: '#FDFAF6', color: '#7A2E12', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '0.25rem 0.7rem' }}>Meest gekozen</div>
                        <div style={{ fontSize: '0.68rem', letterSpacing: '3px', color: 'rgba(253,250,246,0.5)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>02</div>
                        <div style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.6rem', color: '#FDFAF6', lineHeight: 1, marginBottom: '0.4rem', fontWeight: 'bold' }}>GROEI</div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(253,250,246,0.6)', fontStyle: 'italic', marginBottom: '1.5rem' }}>Bereik omzetten in klanten</div>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <span style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.4rem', color: '#FDFAF6', lineHeight: 1, fontWeight: 'bold' }}>€499</span>
                            <span style={{ fontSize: '0.8rem', color: 'rgba(253,250,246,0.55)' }}> / maand</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(253,250,246,0.4)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.8rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(253,250,246,0.1)' }}>Looptijd: 3 of 6 maanden</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> Reels & TikTok strategie</li>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> Actief community management</li>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> DM → gesprek → deal systeem</li>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> Maandelijkse rapportage</li>
                        </ul>
                        <Link href="/contact?plan=groei" style={{ display: 'block', textAlign: 'center', padding: '0.85rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', background: '#FDFAF6', color: '#7A2E12', border: '1.5px solid #FDFAF6' }}>Start nu →</Link>
                    </div>

                    {/* ALL-IN */}
                    <div style={{ backgroundColor: '#fff9f4', border: '1px solid rgba(122,46,18,0.12)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '4px solid #7A2E12', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.68rem', letterSpacing: '3px', color: '#C27A55', marginBottom: '0.5rem', textTransform: 'uppercase' }}>03</div>
                        <div style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.6rem', color: '#1A1110', lineHeight: 1, marginBottom: '0.4rem', fontWeight: 'bold' }}>ALL-IN</div>
                        <div style={{ fontSize: '0.85rem', color: '#8C7B6E', fontStyle: 'italic', marginBottom: '1.5rem' }}>Volledige overname</div>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <span style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.4rem', color: '#7A2E12', lineHeight: 1, fontWeight: 'bold' }}>€1.000</span>
                            <span style={{ fontSize: '0.8rem', color: '#8C7B6E' }}> / maand</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#8C7B6E', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.8rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(122,46,18,0.1)' }}>Minimaal 6 maanden</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Alles van START + GROEI</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Volledige contentplanning</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Lead kwalificatie & opvolging</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Prioriteit support & check-ins</li>
                        </ul>
                        <Link href="/contact?plan=all-in" style={{ display: 'block', textAlign: 'center', padding: '0.85rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', border: '1.5px solid #7A2E12', color: '#7A2E12', background: 'transparent' }}>Aanvragen</Link>
                    </div>

                </div>
            </div>
        </section>
    </main>
  );
}




