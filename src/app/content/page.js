import Link from 'next/link';
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
            <style dangerouslySetInnerHTML={{__html: `
                .content-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
                @media (min-width: 992px) { .content-grid { grid-template-columns: 340px 1fr !important; } }
            `}}></style>

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
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '3rem', fontSize: '1.1rem' }}>Mooie praatjes vullen geen gaatjes, maar sterke beelden wel. Wij schieten hoogwaardige foto's en cre�ren virale TikToks en Reels die perfect aansluiten bij jouw stijl.</p>
                    
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
}