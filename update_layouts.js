const fs = require('fs');

const strategieContent = import Link from 'next/link';
import { FaPhoneAlt, FaFilePdf, FaArrowRight } from 'react-icons/fa';

export default function ServiceDetail() {
  const pathName = '/strategie';
  return (
     <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', paddingBottom: '8rem', overflowX: 'hidden' }}>
        <section style={{ backgroundColor: '#7A2E12', padding: '10rem 2rem 6rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Social Media Strategie</h1>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 2, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Link href="/" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Home</Link> &bull; <Link href="/#diensten" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Diensten</Link> &bull; <span style={{ color: '#C27A55' }}>Strategie</span>
            </div>
        </section>

        <div className="container" style={{ marginTop: '4rem' }}>
            <style dangerouslySetInnerHTML={{__html: \\\
                .service-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
                @media (min-width: 992px) { .service-grid { grid-template-columns: 1fr 340px !important; } }
            \\\}}></style>

            <div className="service-grid">
                <div style={{ width: '100%' }}>
                    {/* Intro text FIRST */}
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110', lineHeight: 1.2 }}>Een doordacht plan voor online succes</h2>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Social media kan overweldigend lijken. Maar met een heldere strategie wordt het een voorspelbare motor voor groei. Wij analyseren je doelgroep, doelstellingen en concurrentie om een waterdicht plan te creëren.</p>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '3rem', fontSize: '1.05rem' }}>Geen losse flodders, maar consistente, doelgerichte en meetbare stappen die jouw merk op de kaart zetten. Wij geloven dat data en creativiteit hand in hand gaan.</p>
                    
                    {/* Image SECOND */}
                    <div style={{ backgroundColor: '#e2d4be', height: '350px', borderRadius: '20px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b4513', overflow: 'hidden', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <div style={{ fontSize: '1.5rem', opacity: 0.5, fontFamily: 'var(--font-playfair-display)' }}>[ Visual van: Planboard Analyse ]</div>
                    </div>

                    {/* Werkwijze moved ABOVE Waarom kiezen */}
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110' }}>Hoe we te werk gaan</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.05)' }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#7A2E12', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, fontWeight: 'bold' }}>1</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)' }}>Merk & Doelgroep Analyse</strong>
                                <span style={{ color: '#555', lineHeight: '1.6' }}>We duiken diep in het DNA van jouw bedrijf. Wie zijn je ideale klanten en op welke drempels stuiten zij?</span>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.05)' }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#7A2E12', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, fontWeight: 'bold' }}>2</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)' }}>Content Pijlers Bepalen</strong>
                                <span style={{ color: '#555', lineHeight: '1.6' }}>Vaste rubrieken en thema's zorgen voor structuur en herkenbaarheid op jouw kanalen.</span>
                            </div>
                        </li>
                    </ul>

                    {/* Features in horizontal row */}
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '2rem', color: '#1A1110' }}>Waarom een strategie?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)', borderTop: '4px solid #7A2E12', transition: 'transform 0.3s' }}>
                            <div style={{ fontSize: '2.5rem', color: '#7A2E12', marginBottom: '1.5rem' }}>ðŸ’¡</div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair-display)' }}>Meer Overzicht</h4>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>Je bespaart tijd omdat iedereen precies weet wat er wanneer gepost moet worden.</p>
                        </div>
                        <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)', borderTop: '4px solid #7A2E12', transition: 'transform 0.3s' }}>
                            <div style={{ fontSize: '2.5rem', color: '#7A2E12', marginBottom: '1.5rem' }}>ðŸ“ˆ</div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair-display)' }}>Hogere Conversie</h4>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>De juiste boodschap bij de juiste doelgroep leidt automatisch tot sterkere leads.</p>
                        </div>
                    </div>
                </div>

                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem 2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid rgba(122,46,18,0.1)', color: '#111' }}>Diensten info</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <Link href="/strategie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: pathName === '/strategie' ? '#7A2E12' : '#F0E6D3', color: pathName === '/strategie' ? '#FDFAF6' : '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
                                    Social Media Strategie <FaArrowRight />
                                </Link>
                            </li>
                            <li>
                                <Link href="/content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: pathName === '/content' ? '#7A2E12' : '#F0E6D3', color: pathName === '/content' ? '#FDFAF6' : '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold', transition: 'all 0.3s' }}>
                                    Content Creatie <FaArrowRight />
                                </Link>
                            </li>
                            <li>
                                <Link href="/promotie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: pathName === '/promotie' ? '#7A2E12' : '#F0E6D3', color: pathName === '/promotie' ? '#FDFAF6' : '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold', transition: 'all 0.3s' }}>
                                    Promotie & Branding <FaArrowRight />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#7A2E12', padding: '3rem 2rem', borderRadius: '15px', color: '#FDFAF6', textAlign: 'center', border: '4px solid #C27A55' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ backgroundColor: '#FDFAF6', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FaPhoneAlt style={{ color: '#7A2E12', fontSize: '2rem' }} />
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Samen Groeien?</h3>
                        <p style={{ fontSize: '1rem', color: 'rgba(253,250,246,0.8)', marginBottom: '2rem', lineHeight: '1.6' }}>Laten we samen kijken waar jouw kansen liggen in de markt.</p>
                        <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#FDFAF6', color: '#7A2E12', padding: '1.2rem 2rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1.5px', width: '100%', border: '2px solid transparent', transition: '0.3s' }}>
                            Neem contact op
                        </Link>
                    </div>

                    {/* Download brochure */}
                    <div style={{ backgroundColor: '#1A1110', padding: '2.5rem', borderRadius: '15px', color: '#FDFAF6' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Bedrijfsbrochure</h3>
                        <p style={{ fontSize: '0.95rem', color: 'rgba(253,250,246,0.7)', marginBottom: '2rem', lineHeight: '1.6' }}>Download actuele specificaties in PDF / PPTX.</p>
                        <a href="/Yomarra_Offerte.pptx" download style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#2a1f1e', padding: '1.2rem', borderRadius: '10px', color: '#FDFAF6', textDecoration: 'none', transition: '0.3s', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <FaFilePdf style={{ fontSize: '2rem', color: '#C27A55' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#FDFAF6' }}>Download Offerte</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(253,250,246,0.5)', marginTop: '0.2rem' }}>PPTX Document</div>
                            </div>
                        </a>
                    </div>
                </aside>
            </div>
        </div>
     </main>
  );
};

const contentContent = import Link from 'next/link';
import { FaPhoneAlt, FaFilePdf, FaArrowRight, FaCamera, FaPen, FaVideo } from 'react-icons/fa';

export default function Content() {
  const pathName = '/content';
  return (
     <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', paddingBottom: '8rem', overflowX: 'hidden' }}>
        <section style={{ backgroundColor: '#1A1110', padding: '10rem 2rem 6rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Content Creatie</h1>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 2, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Link href="/" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Home</Link> &bull; <Link href="/#diensten" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Diensten</Link> &bull; <span style={{ color: '#C27A55' }}>Content Creatie</span>
            </div>
        </section>

        <div className="container" style={{ marginTop: '4rem' }}>
            {/* INVERTED GRID: Sidebar on Left, Content on Right */}
            <style dangerouslySetInnerHTML={{__html: \\\
                .service-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
                @media (min-width: 992px) { .service-grid { grid-template-columns: 340px 1fr !important; } }
            \\\}}></style>

            <div className="service-grid">
                
                {/* SIDEBAR NOW ON LEFT */}
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem 2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid rgba(122,46,18,0.1)', color: '#111' }}>Onze Diensten</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <Link href="/strategie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: pathName === '/strategie' ? '#7A2E12' : '#F0E6D3', color: pathName === '/strategie' ? '#FDFAF6' : '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
                                    Social Media Strategie <FaArrowRight />
                                </Link>
                            </li>
                            <li>
                                <Link href="/content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: pathName === '/content' ? '#7A2E12' : '#F0E6D3', color: pathName === '/content' ? '#FDFAF6' : '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold', transition: 'all 0.3s' }}>
                                    Content Creatie <FaArrowRight />
                                </Link>
                            </li>
                            <li>
                                <Link href="/promotie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: pathName === '/promotie' ? '#7A2E12' : '#F0E6D3', color: pathName === '/promotie' ? '#FDFAF6' : '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold', transition: 'all 0.3s' }}>
                                    Promotie & Branding <FaArrowRight />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#7A2E12', padding: '2.5rem', borderRadius: '15px', color: '#FDFAF6' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Tarieven bekijken?</h3>
                        <p style={{ fontSize: '0.95rem', color: 'rgba(253,250,246,0.7)', marginBottom: '2rem', lineHeight: '1.6' }}>Transparante pakketten afgestemd op jouw bedrijf.</p>
                        <a href="/Yomarra_Offerte.pptx" download style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#5A1F0D', padding: '1.2rem', borderRadius: '10px', color: '#FDFAF6', textDecoration: 'none', transition: '0.3s', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <FaFilePdf style={{ fontSize: '2rem', color: '#e2d4be' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#FDFAF6' }}>Download Offerte</div>
                            </div>
                        </a>
                    </div>
                </aside>

                {/* CONTENT AREA RIGHT */}
                <div style={{ width: '100%' }}>
                    {/* Visual is now 2 blocks next to each other */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
                        <div style={{ backgroundColor: '#c5b19b', height: '250px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                           <span style={{ fontSize: '1rem', opacity: 0.8 }}>[ Foto Studio Shoot ]</span>
                        </div>
                        <div style={{ backgroundColor: '#a98e72', height: '250px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                           <span style={{ fontSize: '1rem', opacity: 0.8, color: '#fff' }}>[ Korte Video / Reels ]</span>
                        </div>
                    </div>

                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110', lineHeight: 1.1 }}>Oogstrelende beelden die spreken</h2>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Mooie praatjes vullen geen gaatjes, maar sterke beelden wel. Wij schieten hoogwaardige foto's, creëren virale TikToks en Reels, en maken dynamische graphics die perfect aansluiten bij jouw huisstijl.</p>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '3rem', fontSize: '1.1rem' }}>Elke post die wij ontwerpen is een visueel visitekaartje voor je merk. Alles om de scrol te stoppen en jouw publiek aan je te binden.</p>
                    
                    {/* Creative specific features container */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem', padding: '2rem', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <FaCamera style={{ fontSize: '3rem', color: '#7A2E12', marginBottom: '1rem' }} />
                            <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '0.5rem' }}>Fotografie</h4>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>Professionele shoots voor op locatie of in de studio. Haarscherp in beeld.</p>
                        </div>
                        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid #eee', borderRight: '1px solid #eee', padding: '0 1rem' }}>
                            <FaVideo style={{ fontSize: '3rem', color: '#7A2E12', marginBottom: '1rem' }} />
                            <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '0.5rem' }}>Video & Reels</h4>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>Snelle, pakkende short-form content die resoneert met de huidige trends.</p>
                        </div>
                        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <FaPen style={{ fontSize: '3rem', color: '#7A2E12', marginBottom: '1rem' }} />
                            <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '0.5rem' }}>Copywriting</h4>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>Prikkelende captions en heldere call-to-actions. Geen AI-clichés.</p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110' }}>Creatief Proces</h3>
                    <div style={{ borderLeft: '3px solid #7A2E12', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem', color: '#7A2E12' }}>01. Brainstorm & Concepting</strong>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>We verzamelen moodboards, trends en inspiratie om jouw visie tot leven te wekken.</p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem', color: '#7A2E12' }}>02. Productiedag</strong>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>De mouwen worden opgestroopt! We plannen een shoot en schieten de content in één ruk of spreiden het per maand.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </main>
  );
};

const promotieContent = import Link from 'next/link';
import { FaPhoneAlt, FaFilePdf, FaArrowRight, FaBullhorn, FaChartLine } from 'react-icons/fa';

export default function Promotie() {
  return (
     <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', paddingBottom: '0', overflowX: 'hidden' }}>
        {/* Full width header with image behind it */}
        <section style={{ backgroundColor: '#7A2E12', paddingTop: '10rem', paddingBottom: '6rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Promotie & Branding</h1>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 2, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Link href="/" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Home</Link> &bull; <Link href="/#diensten" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Diensten</Link> &bull; <span style={{ color: '#C27A55' }}>Promotie</span>
            </div>
        </section>

        {/* FULL WIDTH LAYOUT - NO SIDEBAR */}
        <div className="container" style={{ marginTop: '5rem', maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110', lineHeight: 1.2 }}>Maak lawaai in de juiste vijver</h2>
                <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.15rem' }}>Organische groei is prachtig, maar soms heb je een megaphone nodig. Wij combineren gerichte advertentiecampagnes (Ads) met indrukwekkende merkopbouw. Want zichtbaar zijn is één ding, onvergetelijk worden is een tweede.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                <div style={{ backgroundColor: '#fff', padding: '3rem 2rem', borderRadius: '15px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', borderBottom: '6px solid #7A2E12' }}>
                    <FaBullhorn style={{ fontSize: '3rem', color: '#C27A55', marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Targeted Ads</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Meta, LinkedIn, TikTok. Wij zetten campagnes op die de juiste mensen bereiken, optimaliseren voor conversie en je budget verstandig inzetten.</p>
                </div>
                <div style={{ backgroundColor: '#7A2E12', color: '#fff', padding: '3rem 2rem', borderRadius: '15px', textAlign: 'center', boxShadow: '0 20px 40px rgba(122,46,18,0.2)' }}>
                    <FaChartLine style={{ fontSize: '3rem', color: '#F0E6D3', marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', color: '#fff' }}>Brand Awareness</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>Naamsbekendheid opbouwen die blijft hangen. Zodat als ze klaar zijn om te kopen, ze direct aan jóuw merk denken.</p>
                </div>
            </div>
            
            <div style={{ backgroundColor: '#e2d4be', height: '400px', borderRadius: '20px', marginBottom: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b4513', overflow: 'hidden', border: '1px solid rgba(122,46,18,0.1)' }}>
                <div style={{ fontSize: '2rem', opacity: 0.5, fontFamily: 'var(--font-playfair-display)' }}>[ Visual: Ad Dashboard / Groei Grafiek ]</div>
            </div>
        </div>

        {/* Full width Call To Action at bottom */}
        <section style={{ backgroundColor: '#1A1110', padding: '6rem 2rem', textAlign: 'center', color: '#FDFAF6' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem' }}>Klaar om flink op te schalen?</h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: '1.6' }}>Ontdek onze tarieven of neem direct contact op met Yomarra om de mogelijkheden voor adverteren & branding te bespreken.</p>
                
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ backgroundColor: '#C27A55', color: '#FDFAF6', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', transition: '0.3s' }}>
                        Start een Campagne
                    </Link>
                    <a href="/Yomarra_Offerte.pptx" download style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', padding: '1rem 2.5rem', borderRadius: '8px', color: '#FDFAF6', textDecoration: 'none', transition: '0.3s', border: '1px solid rgba(255,255,255,0.3)' }}>
                        <FaFilePdf /> Download Offerte
                    </a>
                </div>
            </div>
        </section>
     </main>
  );
};

fs.writeFileSync('src/app/strategie/page.js', strategieContent);
fs.writeFileSync('src/app/content/page.js', contentContent);
fs.writeFileSync('src/app/promotie/page.js', promotieContent);
console.log('Done mapping unique layouts.');
