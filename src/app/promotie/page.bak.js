import Link from 'next/link';
import { FaPhoneAlt, FaFilePdf, FaArrowRight } from 'react-icons/fa';

export default function ServiceDetail() {
  const pathName = '/promotie';
  return (
     <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', paddingBottom: '8rem', overflowX: 'hidden' }}>
        <section style={{ backgroundColor: '#7A2E12', padding: '10rem 2rem 6rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
           <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>Promotie & Branding</h1>
           <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 2, letterSpacing: '2px', textTransform: 'uppercase' }}>
               <Link href="/" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Home</Link> &bull; <Link href="/#diensten" style={{ color: '#FDFAF6', textDecoration: 'none' }}>Diensten</Link> &bull; <span style={{ color: '#C27A55' }}>Promotie & Branding</span>
           </div>
        </section>

        <div className="container" style={{ marginTop: '4rem' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .service-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; } 
                @media (min-width: 992px) { .service-grid { grid-template-columns: 1fr 340px !important; } }
            `}}></style>
            
            <div className="service-grid">
                <div style={{ width: '100%' }}>
                    <div style={{ backgroundColor: '#e2d4be', height: '450px', borderRadius: '20px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b4513', overflow: 'hidden', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <div style={{ fontSize: '2rem', opacity: 0.5, fontFamily: 'var(--font-playfair-display)' }}>[ Visual van: Promotie & Branding ]</div>
                    </div>
                    
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110', lineHeight: 1.2 }}>Lorem ipsum dolor sit amet consectetur</h2>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '3rem', fontSize: '1.05rem' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '2rem', color: '#1A1110' }}>Waarom deze dienst kiezen?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)', borderTop: '4px solid #7A2E12', transition: 'transform 0.3s' }}>
                            <div style={{ fontSize: '2.5rem', color: '#7A2E12', marginBottom: '1.5rem' }}>💡</div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair-display)' }}>Innovatieve Aanpak</h4>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                        </div>
                        <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)', borderTop: '4px solid #7A2E12', transition: 'transform 0.3s' }}>
                            <div style={{ fontSize: '2.5rem', color: '#7A2E12', marginBottom: '1.5rem' }}>📈</div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair-display)' }}>Meetbare Groei</h4>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus, nullam ac tortor vitae purus faucibus.</p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#1A1110' }}>Onze werkwijze</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.05)' }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#7A2E12', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, fontWeight: 'bold' }}>1</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)' }}>Onderzoek & Analyse</strong>
                                <span style={{ color: '#555', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at erat in purus.</span>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.05)' }}>
                            <div style={{ width: '40px', height: '40px', backgroundColor: '#7A2E12', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, fontWeight: 'bold' }}>2</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-playfair-display)' }}>Creatie & Uitvoering</strong>
                                <span style={{ color: '#555', lineHeight: '1.6' }}>Suspendisse potenti. Nunc in turpis ac justo fringilla blandit. Nulla facilisi.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div style={{ backgroundColor: '#fff9f4', padding: '2.5rem 2rem', borderRadius: '15px', border: '1px solid rgba(122,46,18,0.1)' }}>
                        <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid rgba(122,46,18,0.1)', color: '#111' }}>Diensten info</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <Link href="/strategie" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', backgroundColor: pathName === '/strategie' ? '#7A2E12' : '#F0E6D3', color: pathName === '/strategie' ? '#FDFAF6' : '#1A1110', textDecoration: 'none', borderRadius: '10px', fontWeight: 'bold', transition: 'all 0.3s' }}>
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
                        <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Meer weten?</h3>
                        <p style={{ fontSize: '1rem', color: 'rgba(253,250,246,0.8)', marginBottom: '2rem', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur elit. Neem vandaag nog contact op.</p>
                        
                        <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#FDFAF6', color: '#7A2E12', padding: '1.2rem 2rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1.5px', width: '100%', border: '2px solid transparent', transition: '0.3s' }}>
                            Neem contact op
                        </Link>
                    </div>

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
}
