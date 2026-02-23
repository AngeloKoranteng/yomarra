import Link from 'next/link';

export default function Pricing() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Investering</h1>
          <p>Home / Pricing</p>
        </div>
        <div className="hero-wave" style={{ bottom: '-1px' }}>
             <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '80px', display: 'block'}}>
                <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
            </svg>
        </div>
      </section>

      <section className="section pricing-page">
        <div className="container">
            <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h2>Kies jouw Pakket</h2>
                <p>Transparante prijzen, maximale impact. Alle prijzen zijn exclusief btw.</p>
            </div>
            
             <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
                    
                    {/* Card 1: Start */}
                    <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%', position: 'relative'}}>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80" alt="Start Pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                        <div style={{marginBottom: '0.5rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold', fontSize: '0.9rem'}}>Start</div>
                        <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>€250</h3>
                        <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>Voor ondernemers die professioneel zichtbaar willen worden.</p>
                        
                        <div style={{fontSize: '0.95rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1}}>
                            Leg de volledige fundering voor jouw merk. We creëren een ijzersterke identiteit die jouw ideale klant direct aanspreekt.
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>De kern:</strong>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.9rem'}}>
                                <li style={{marginBottom: '0.4rem'}}>✓ Merkidentiteit & Strategie</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Visuele & Tekstuele Basis</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Content Toolkit</li>
                            </ul>
                        </div>
                         
                        <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Inclusief branding analyse.<br/>
                            <strong>Looptijd:</strong> 1 - 2 maanden
                        </div>
                        <Link href="/?plan=start#contact" className="btn" style={{width: '100%', textAlign: 'center', backgroundColor: '#333', marginTop: '1.5rem', display: 'block', textDecoration: 'none'}}>Aanvragen</Link>
                    </div>

                    {/* Card 2: Groei */}
                    <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%', border: '2px solid #8B4513', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#8B4513', color: '#fff', padding: '2px 12px', fontSize: '0.75rem', borderRadius: '4px', textTransform: 'uppercase', zIndex: 10}}>Populair</div>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80" alt="Groei Pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                        <div style={{marginBottom: '0.5rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold', fontSize: '0.9rem'}}>Groei</div>
                        <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>€499<span style={{fontSize: '1rem', color: '#666', fontWeight: 'normal'}}>/mnd</span></h3>
                        <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>Voor ondernemers die willen groeien in bereik, DM’s en omzet.</p>
                        
                        <div style={{fontSize: '0.95rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1}}>
                            Focus op resultaat. We domineren het algoritme met slimme Reels & TikTok strategieën en bouwen je community.
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>De kern:</strong>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.9rem'}}>
                                <li style={{marginBottom: '0.4rem'}}>✓ Focus op Groei & Trends</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Community & Sales</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Data-gedreven Resultaat</li>
                            </ul>
                        </div>
                        
                         <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Meer volgers & conversie.<br/>
                            <strong>Looptijd:</strong> 3 of 6 maanden
                        </div>
                        <Link href="/?plan=groei#contact" className="btn" style={{width: '100%', textAlign: 'center', marginTop: '1.5rem', display: 'block', textDecoration: 'none'}}>Aanvragen</Link>
                    </div>

                    {/* Card 3: All-in */}
                     <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="All-in Pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                        <div style={{marginBottom: '0.5rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold', fontSize: '0.9rem'}}>All-in</div>
                        <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>€1000<span style={{fontSize: '1rem', color: '#666', fontWeight: 'normal'}}>/mnd</span></h3>
                        <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>Voor ondernemers die social media volledig willen uitbesteden.</p>

                        <div style={{fontSize: '0.95rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1}}>
                            Geen zorgen meer over je online aanwezigheid. Wij nemen het stuur over voor maximale resultaten en business impact.
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>De kern:</strong>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.9rem'}}>
                                <li style={{marginBottom: '0.4rem'}}>✓ Full-Service Beheer</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Dominantie op Video</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Actief Community Management</li>
                            </ul>
                        </div>
                        
                        <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Complete ontzorging.<br/>
                            <strong>Looptijd:</strong> Minimaal 6 maanden
                        </div>
                        <Link href="/?plan=all-in#contact" className="btn" style={{width: '100%', textAlign: 'center', backgroundColor: '#333', marginTop: '1.5rem', display: 'block', textDecoration: 'none'}}>Aanvragen</Link>
                    </div>

                </div>

            <div className="pricing-note" style={{marginTop: '3rem', textAlign: 'center'}}>
                <p>Op zoek naar maatwerk? <Link href="/#contact" style={{color: '#8B4513', fontWeight: 'bold'}}>Neem contact op</Link> voor een offerte op maat.</p>
            </div>
        </div>
      </section>
    </main>
  );
}
