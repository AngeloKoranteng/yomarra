// --- DIENSTEN PAGINA ---
// Dit bestand toont alle diensten die Yomarra aanbiedt.

﻿import Link from 'next/link';

// Deze functie bouwt en tekent de complete Diensten-pagina
export default function Diensten() {
  
  // Hieronder begint de weergave (hoe het eruit ziet op je beeldscherm)
  return (
    <main style={{overflowX: 'hidden'}}>
      <style dangerouslySetInnerHTML={{__html: `
        .service-container {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
      `}} />

      {/* Hero / Header Section */}
      <section style={{
            backgroundColor: '#F2E6D8', 
            paddingTop: 'clamp(6rem, 10vw, 8rem)',
            paddingBottom: 'clamp(4rem, 8vw, 6rem)',
            textAlign: 'center',
            position: 'relative'
        }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{fontFamily: 'var(--font-montserrat)', color: '#111', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', marginBottom: '1rem'}}>Onze Diensten</h1>
            <p style={{color: '#666', fontSize: '1.1rem'}}>Home / Diensten</p>
        </div>

        {/* Bottom Wave to White */}
        <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                <path fill="#ffffff" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
            </svg>
        </div>
      </section>

      {/* Diensten Content */}
      <section style={{backgroundColor: '#fff', padding: '4rem 0 6rem 0'}}>
        <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem'}}>
            
            {/* Dienst 1 */}
            <div className="service-container" id="promotie" style={{backgroundColor: '#fff', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
              <h2 style={{fontSize: '1.8rem', color: '#111', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold', marginBottom: '1rem'}}>Promotie</h2>
              <p style={{color: '#555', lineHeight: '1.7', marginBottom: '1.5rem'}}>
                Met doelgerichte promotie zorgen we ervoor dat jouw merk opvalt. Van pakkende advertentiecampagnes tot strategische samenwerkingen, we trekken de aandacht van jouw ideale doelgroep en vergroten je bereik.
              </p>
              <Link href="/promotie" style={{color: '#8B4513', fontWeight: 'bold', textDecoration: 'none'}}>Meer informatie &rarr;</Link>
            </div>

            {/* Dienst 2 */}
            <div className="service-container" id="strategie" style={{backgroundColor: '#fff', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
              <h2 style={{fontSize: '1.8rem', color: '#111', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold', marginBottom: '1rem'}}>Strategie</h2>
              <p style={{color: '#555', lineHeight: '1.7', marginBottom: '1.5rem'}}>
                Zonder plan geen succes. Wij ontwikkelen een datagedreven social media strategie die naadloos aansluit bij jouw bedrijfsdoelen. We bepalen de juiste platformen, de tone-of-voice en de contentpilaren voor maximale impact.
              </p>
              <Link href="/strategie" style={{color: '#8B4513', fontWeight: 'bold', textDecoration: 'none'}}>Meer informatie &rarr;</Link>
            </div>

            {/* Dienst 3 */}
            <div className="service-container" id="content" style={{backgroundColor: '#fff', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
              <h2 style={{fontSize: '1.8rem', color: '#111', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold', marginBottom: '1rem'}}>Content Creatie</h2>
              <p style={{color: '#555', lineHeight: '1.7', marginBottom: '1.5rem'}}>
                Van opvallende visuals tot boeiende video's en overtuigende teksten. Wij creëren content die niet alleen mooi is, maar ook converteert. Content die het verhaal van jouw merk vertelt en interactie uitlokt.
              </p>
              <Link href="/content" style={{color: '#8B4513', fontWeight: 'bold', textDecoration: 'none'}}>Meer informatie &rarr;</Link>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}