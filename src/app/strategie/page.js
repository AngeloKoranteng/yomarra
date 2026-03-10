import Link from 'next/link';
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
            <style dangerouslySetInnerHTML={{__html: `
                .service-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
                @media (min-width: 992px) { .service-grid { grid-template-columns: 1fr 340px !important; } }
            `}}></style>

            <div className="service-grid">
                {/* LEFT: CONTENT */}
                <div style={{ width: '100%' }}>
                    <div style={{ backgroundColor: '#e2d4be', height: '400px', borderRadius: '20px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b4513', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <div style={{ fontSize: '1.5rem', opacity: 0.5, fontFamily: 'var(--font-playfair-display)' }}>[ Visual: Strategie Plan ]</div>
                    </div>

                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110' }}>Een doordacht plan voor groei</h2>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Social media kan overweldigend lijken. Maar met een heldere strategie wordt het een voorspelbare motor. Wij analyseren je doelgroep en concurrentie om een plan te cre�ren.</p>
                    
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
