const fs = require('fs');

const strategieContent = `import Link from 'next/link';
import { FaPhoneAlt, FaFilePdf, FaArrowRight } from 'react-icons/fa';

export default function Strategie() {
  return (
     <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', paddingBottom: '8rem', overflowX: 'hidden' }}>
        <section style={{ backgroundColor: '#7A2E12', padding: '10rem 2rem 6rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Social Media Strategie</h1>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 2, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Link href="/" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Home</Link> &bull; <Link href="/#diensten" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Diensten</Link> &bull; <span style={{ color: '#C27A55' }}>Strategie</span>
            </div>
        </section>

        <div className="container" style={{ marginTop: '4rem' }}>
            {/* CLASSIC GRID: Content Left, Sidebar Right */}
            <style dangerouslySetInnerHTML={{__html: \`
                .service-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
                @media (min-width: 992px) { .service-grid { grid-template-columns: 1fr 340px !important; } }
            \`}}></style>

            <div className="service-grid">
                {/* LEFT: CONTENT */}
                <div style={{ width: '100%' }}>
                    <div style={{ backgroundColor: '#e2d4be', height: '400px', borderRadius: '20px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b4513', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <div style={{ fontSize: '1.5rem', opacity: 0.5, fontFamily: 'var(--font-playfair-display)' }}>[ Visual: Strategie Plan ]</div>
                    </div>

                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110' }}>Een doordacht plan voor groei</h2>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Social media kan overweldigend lijken. Maar met een heldere strategie wordt het een voorspelbare motor. Wij analyseren je doelgroep en concurrentie om een plan te creëren.</p>
                    
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginTop: '3rem', marginBottom: '1.5rem', color: '#1A1110' }}>Onze werkwijze</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.05)' }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#7A2E12', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, fontWeight: 'bold' }}>1</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)' }}>Merk Analyse</strong>
                                <span style={{ color: '#555', lineHeight: '1.6' }}>We duiken diep in het DNA van jouw bedrijf en ideale klant.</span>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.05)' }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#7A2E12', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, fontWeight: 'bold' }}>2</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)' }}>Content Pijlers</strong>
                                <span style={{ color: '#555', lineHeight: '1.6' }}>Vaste rubrieken die zorgen voor structuur en herkenbaarheid.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* RIGHT: SIDEBAR */}
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem 2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid rgba(122,46,18,0.1)', color: '#111' }}>Diensten info</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><Link href="/strategie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: '#7A2E12', color: '#FDFAF6', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Social Media Strategie <FaArrowRight /></Link></li>
                            <li><Link href="/content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: '#F0E6D3', color: '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Content Creatie <FaArrowRight /></Link></li>
                            <li><Link href="/promotie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: '#F0E6D3', color: '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Promotie & Branding <FaArrowRight /></Link></li>
                        </ul>
                    </div>
                    
                    <div style={{ backgroundColor: '#1A1110', padding: '2.5rem', borderRadius: '15px', color: '#FDFAF6' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Brochure</h3>
                        <p style={{ fontSize: '0.95rem', color: 'rgba(253,250,246,0.7)', marginBottom: '2rem' }}>Download actuele prijzen in PDF.</p>
                        <a href="/yomarra-offerte-sectie.pdf" download style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#2a1f1e', padding: '1.2rem', borderRadius: '10px', color: '#FDFAF6', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <FaFilePdf style={{ fontSize: '2rem', color: '#C27A55' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Download Offerte</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(253,250,246,0.5)' }}>PDF Document</div>
                            </div>
                        </a>
                    </div>
                </aside>
            </div>
        </div>
     </main>
  );
}
`;


const contentContent = `import Link from 'next/link';
import { FaPhoneAlt, FaFilePdf, FaArrowRight, FaCamera, FaVideo } from 'react-icons/fa';

export default function Content() {
  return (
     <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', paddingBottom: '8rem', overflowX: 'hidden' }}>
        <section style={{ backgroundColor: '#7A2E12', padding: '10rem 2rem 6rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Content Creatie</h1>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 2, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Link href="/" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Home</Link> &bull; <Link href="/#diensten" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Diensten</Link> &bull; <span style={{ color: '#C27A55' }}>Content</span>
            </div>
        </section>

        <div className="container" style={{ marginTop: '4rem' }}>
            {/* INVERTED GRID: Sidebar on Left, Content on Right */}
            <style dangerouslySetInnerHTML={{__html: \`
                .content-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
                @media (min-width: 992px) { .content-grid { grid-template-columns: 340px 1fr !important; } }
            \`}}></style>

            <div className="content-grid">
                {/* LEFT: SIDEBAR */}
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem 2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid rgba(122,46,18,0.1)', color: '#111' }}>Diensten info</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><Link href="/strategie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: '#F0E6D3', color: '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Social Media Strategie <FaArrowRight /></Link></li>
                            <li><Link href="/content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: '#7A2E12', color: '#FDFAF6', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Content Creatie <FaArrowRight /></Link></li>
                            <li><Link href="/promotie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: '#F0E6D3', color: '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Promotie & Branding <FaArrowRight /></Link></li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#1A1110', padding: '2.5rem', borderRadius: '15px', color: '#FDFAF6' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Brochure</h3>
                        <p style={{ fontSize: '0.95rem', color: 'rgba(253,250,246,0.7)', marginBottom: '2rem' }}>Download actuele prijzen in PDF.</p>
                        <a href="/yomarra-offerte-sectie.pdf" download style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#2a1f1e', padding: '1.2rem', borderRadius: '10px', color: '#FDFAF6', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <FaFilePdf style={{ fontSize: '2rem', color: '#C27A55' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Download Offerte</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(253,250,246,0.5)' }}>PDF Document</div>
                            </div>
                        </a>
                    </div>
                </aside>

                {/* RIGHT: CONTENT */}
                <div style={{ width: '100%' }}>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110', lineHeight: 1.1 }}>Oogstrelende beelden</h2>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '3rem', fontSize: '1.1rem' }}>Mooie praatjes vullen geen gaatjes, maar sterke beelden wel. Wij schieten hoogwaardige foto's en creëren virale TikToks en Reels die perfect aansluiten bij jouw stijl.</p>
                    
                    {/* TWO VISUAL BLOCKS SIDE BY SIDE */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
                        <div style={{ backgroundColor: '#c5b19b', height: '280px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <span style={{ fontSize: '1.2rem', opacity: 0.8, color: '#7A2E12', fontFamily: 'var(--font-playfair-display)' }}>[ Foto Shoot ]</span>
                        </div>
                        <div style={{ backgroundColor: '#a98e72', height: '280px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <span style={{ fontSize: '1.2rem', opacity: 0.8, color: '#fff', fontFamily: 'var(--font-playfair-display)' }}>[ Video / Reels ]</span>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)', borderTop: '4px solid #7A2E12' }}>
                            <FaCamera style={{ fontSize: '2.5rem', color: '#7A2E12', marginBottom: '1.5rem' }} />
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair-display)' }}>Fotografie</h4>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>Professionele shoots op locatie. Haarscherp in beeld.</p>
                        </div>
                        <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)', borderTop: '4px solid #7A2E12' }}>
                            <FaVideo style={{ fontSize: '2.5rem', color: '#7A2E12', marginBottom: '1.5rem' }} />
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair-display)' }}>Video & Reels</h4>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>Snelle, pakkende short-form content voor maximaal bereik.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </main>
  );
}`;


const promotieContent = `import Link from 'next/link';
import { FaPhoneAlt, FaFilePdf, FaBullhorn, FaChartLine } from 'react-icons/fa';

export default function Promotie() {
  return (
     <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', paddingBottom: '8rem', overflowX: 'hidden' }}>
        <section style={{ backgroundColor: '#7A2E12', padding: '10rem 2rem 6rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Promotie & Branding</h1>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 2, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <Link href="/" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Home</Link> &bull; <Link href="/#diensten" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Diensten</Link> &bull; <span style={{ color: '#C27A55' }}>Promotie</span>
            </div>
        </section>

        {/* FULL WIDTH - NO SIDEBAR */}
        <div className="container" style={{ marginTop: '4rem', maxWidth: '1000px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110' }}>Maak lawaai in de juiste vijver</h2>
                <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>Organische groei is prachtig, maar soms heb je een megaphone nodig. Wij combineren gerichte advertentiecampagnes (Ads) met indrukwekkende merkopbouw.</p>
            </div>

            <div style={{ backgroundColor: '#e2d4be', height: '400px', borderRadius: '20px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b4513', border: '1px solid rgba(122,46,18,0.1)' }}>
                <div style={{ fontSize: '1.5rem', opacity: 0.5, fontFamily: 'var(--font-playfair-display)' }}>[ Visual: Ad Dashboard & Groei ]</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                <div style={{ backgroundColor: '#fff9f4', padding: '3rem 2rem', borderRadius: '15px', textAlign: 'center', border: '1px solid rgba(122,46,18,0.1)' }}>
                    <FaBullhorn style={{ fontSize: '3rem', color: '#7A2E12', marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Targeted Ads</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Meta, LinkedIn, TikTok. Wij zetten campagnes op die de juiste mensen bereiken en budget verstandig inzetten.</p>
                </div>
                <div style={{ backgroundColor: '#fff9f4', padding: '3rem 2rem', borderRadius: '15px', textAlign: 'center', border: '1px solid rgba(122,46,18,0.1)' }}>
                    <FaChartLine style={{ fontSize: '3rem', color: '#7A2E12', marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Brand Awareness</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Naamsbekendheid opbouwen die blijft hangen. Zodat als ze klaar zijn om te kopen, ze direct aan jóuw merk denken.</p>
                </div>
            </div>

            {/* Horizontal Download/Contact Balk to replace sidebar functions */}
            <div style={{ backgroundColor: '#1A1110', padding: '4rem', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', color: '#FDFAF6' }}>
                <div>
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '0.5rem' }}>Tarieven bekijken?</h3>
                    <p style={{ color: 'rgba(253,250,246,0.7)', fontSize: '1.1rem' }}>Transparante pakketten afgestemd op jouw bedrijf.</p>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ backgroundColor: '#7A2E12', color: '#FDFAF6', padding: '1rem 2rem', borderRadius: '10px', fontWeight: 'bold', textDecoration: 'none' }}>
                        Neem contact op
                    </Link>
                    <a href="/yomarra-offerte-sectie.pdf" download style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', backgroundColor: '#2a1f1e', padding: '1rem 2rem', borderRadius: '10px', color: '#FDFAF6', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <FaFilePdf style={{ fontSize: '1.2rem', color: '#C27A55' }} /> Download Offerte
                    </a>
                </div>
            </div>

        </div>
     </main>
  );
}
`;

fs.writeFileSync('src/app/strategie/page.js', strategieContent);
fs.writeFileSync('src/app/content/page.js', contentContent);
fs.writeFileSync('src/app/promotie/page.js', promotieContent);

console.log('Restored base style but uniquely mapped per page');
