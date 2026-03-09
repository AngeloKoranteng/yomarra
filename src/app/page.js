// --- HOMEPAGE CODE ---
// Dit bestand bouwt de hele beginpagina van de website.
// We laden hier afbeeldingen, kaders en testjes in om deze te tonen.

﻿import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { FaArrowRight, FaStar, FaChartLine, FaCheckCircle, FaLaptop, FaBullseye, FaComments, FaBullhorn, FaMobileAlt, FaCamera, FaUserFriends } from 'react-icons/fa';
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
                        border: '6px solid #111',
                        borderRadius: '40px',
                        overflow: 'hidden',
                        position: 'relative',
                        aspectRatio: '1 / 1',
                        maxWidth: '400px',
                        width: '100%',
                        margin: '0 auto',
                        backgroundColor: '#F2E6D8',
                        boxShadow: '10px 10px 0px #8B4513',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* We use the custom drawing grid uploaded by the user */}
                        <img src="/Homepagina.jpeg" alt="Yomarra Social Media Agency illustratie van telefoon en likes" style={{width: '95%', height: '95%', objectFit: 'contain'}} />
                    </div>
                    
                    {/* Floating Stat Box */}
                    <div style={{
                        position: 'absolute',
                        bottom: 'clamp(-30px, -5%, -10px)',
                        left: 'clamp(-10px, -5%, 10px)',
                        backgroundColor: '#fff',
                        padding: 'clamp(1rem, 3vw, 1.5rem)',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(0.5rem, 2vw, 1rem)',
                        border: '1px solid #111',
                        maxWidth: '95%'
                    }}>
                        <div style={{width: 'clamp(40px, 10vw, 60px)', height: 'clamp(40px, 10vw, 60px)', backgroundColor: '#e8bbff', borderRadius: '15px', color: '#8b27cc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)'}}>
                            <FaChartLine />
                        </div>
                        <div>
                            <div style={{fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 'bold', color: '#111', marginBottom: '0.2rem'}}>Dominant</div>
                            <p style={{color: '#666', fontSize: '0.9rem', margin: 0}}>In jouw markt</p>
                        </div>
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
                    <p style={{color: '#555', maxWidth: '600px', margin: '0 auto'}}>Transparante prijzen, maximale impact. Alle prijzen zijn exclusief btw.</p>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center'}}>
                    
                    {/* Card 1: Start */}
                    <div className="price-card" style={{backgroundColor: '#fff', borderRadius: '30px', padding: '3rem 2rem', border: '2px solid transparent', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                        <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem'}}>Start Pakket</h3>
                        <p style={{color: '#666', fontSize: '0.9rem', marginBottom: '2rem', minHeight: '60px'}}>Voor ondernemers die professioneel zichtbaar willen worden.</p>
                        
                        <div style={{marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                            <span style={{fontSize: '3rem', fontWeight: 'bold', color: '#111'}}>â‚¬250</span>
                        </div>

                        <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#8ea6ff" /> Merkidentiteit & strategie</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#8ea6ff" /> Visuele & tekstuele basis</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#8ea6ff" /> Content toolkit</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#8ea6ff" /> Looptijd: 1-2 maanden</li>
                        </ul>

                        <Link href="/contact?plan=start" className="btn" style={{display: 'block', textAlign: 'center', backgroundColor: '#f0f0f0', color: '#111', padding: '1.2rem', borderRadius: '12px', fontWeight: 'bold', transition: 'all 0.3s', textDecoration: 'none'}}>Aanvragen</Link>
                    </div>

                    {/* Card 2: Groei (Popular) */}
                    <div className="price-card-popular price-card" style={{backgroundColor: '#fff', borderRadius: '30px', padding: '4rem 2rem 3rem 2rem', border: '2px solid transparent', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative'}}>
                        <div style={{position: 'absolute', top: 0, left: '0', right: '0', backgroundColor: '#FCD553', color: '#111', textAlign: 'center', padding: '1rem', fontWeight: 'bold', fontSize: '1rem', borderTopLeftRadius: '28px', borderTopRightRadius: '28px'}}>
                            Meest gekozen
                        </div>
                        <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem', marginTop: '1rem'}}>Groei Pakket</h3>
                        <p style={{color: '#666', fontSize: '0.9rem', marginBottom: '2rem', minHeight: '60px'}}>Voor ondernemers die willen groeien in bereik, DMâ€™s en omzet.</p>
                        
                        <div style={{marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                            <span style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#111'}}>â‚¬499</span>
                            <span style={{color: '#666'}}>/ mnd</span>
                        </div>

                        <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#FCD553" /> Focus op groei & trends</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#FCD553" /> Community & sales</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#FCD553" /> Data-gedreven resultaat</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#FCD553" /> Looptijd: 3 of 6 maanden</li>
                        </ul>

                        <Link href="/contact?plan=groei" className="btn" style={{display: 'block', textAlign: 'center', backgroundColor: '#111', color: '#fff', padding: '1.2rem', borderRadius: '12px', fontWeight: 'bold', transition: 'all 0.3s', textDecoration: 'none'}}>Aanvragen</Link>
                    </div>

                    {/* Card 3: All-in */}
                    <div className="price-card" style={{backgroundColor: '#fff', borderRadius: '30px', padding: '3rem 2rem', border: '2px solid transparent', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                        <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem'}}>All-in Pakket</h3>
                        <p style={{color: '#666', fontSize: '0.9rem', marginBottom: '2rem', minHeight: '60px'}}>Voor ondernemers die social media volledig willen uitbesteden.</p>
                        
                        <div style={{marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                            <span style={{fontSize: '3rem', fontWeight: 'bold', color: '#111'}}>â‚¬1000</span>
                            <span style={{color: '#666'}}>/ mnd</span>
                        </div>

                        <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#ff9a76" /> Full-service beheer</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#ff9a76" /> Dominantie op video</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#ff9a76" /> Actief community management</li>
                            <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#555'}}><FaCheckCircle color="#ff9a76" /> Looptijd: Minimaal 6 maanden</li>
                        </ul>

                        <Link href="/contact?plan=all-in" className="btn" style={{display: 'block', textAlign: 'center', backgroundColor: '#f0f0f0', color: '#111', padding: '1.2rem', borderRadius: '12px', fontWeight: 'bold', transition: 'all 0.3s', textDecoration: 'none'}}>Aanvragen</Link>
                    </div>

                </div>
            </div>
        </section>
    </main>
  );
}

