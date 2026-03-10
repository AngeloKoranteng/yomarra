import Link from 'next/link';
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
                    <p style={{ color: '#666', lineHeight: '1.6' }}>Naamsbekendheid opbouwen die blijft hangen. Zodat als ze klaar zijn om te kopen, ze direct aan j�uw merk denken.</p>
                </div>
            </div>

            {/* Horizontal Download/Contact Balk to replace sidebar functions */}
            <div style={{ backgroundColor: '#1A1110', padding: '4rem', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', color: '#FDFAF6', marginBottom: '4rem' }}>
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

            {/* Andere Diensten (Navigation) */}
            <div>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '2rem', color: '#1A1110', textAlign: 'center' }}>Ontdek onze andere diensten</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <Link href="/strategie" style={{ backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', textDecoration: 'none', color: '#1A1110', border: '1px solid rgba(122,46,18,0.2)', transition: 'transform 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <span style={{ fontSize: '0.9rem', color: '#C27A55', textTransform: 'uppercase', letterSpacing: '1px' }}>Dienst</span>
                            <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-playfair-display)', margin: '0.5rem 0 0 0' }}>Strategie</h4>
                        </div>
                        <span style={{ fontSize: '1.5rem', color: '#7A2E12' }}>&rarr;</span>
                    </Link>
                    <Link href="/content" style={{ backgroundColor: '#fff9f4', padding: '2rem', borderRadius: '15px', textDecoration: 'none', color: '#1A1110', border: '1px solid rgba(122,46,18,0.2)', transition: 'transform 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <span style={{ fontSize: '0.9rem', color: '#C27A55', textTransform: 'uppercase', letterSpacing: '1px' }}>Dienst</span>
                            <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-playfair-display)', margin: '0.5rem 0 0 0' }}>Content Creatie</h4>
                        </div>
                        <span style={{ fontSize: '1.5rem', color: '#7A2E12' }}>&rarr;</span>
                    </Link>
                </div>
            </div>

        </div>
     </main>
  );
}
