import Link from 'next/link';

export default function Diensten() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Diensten</h1>
          <p>Home / Diensten</p>
        </div>
        <div className="hero-wave" style={{ bottom: '-1px' }}>
             <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '80px', display: 'block'}}>
                <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
            </svg>
        </div>
      </section>

      <section className="section services" style={{padding: '4rem 0'}}>
        <div className="container" style={{maxWidth: '1000px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            <div style={{padding: '2rem', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center'}}>
              <h3 style={{color: '#8B4513', fontSize: '1.5rem', marginBottom: '1rem'}}>Social media strategie</h3>
              <p style={{color: '#555', marginBottom: '1.5rem'}}>Een slimme strategie die jouw merk laat groeien en zichtbaar maakt bij de juiste doelgroep. We analyseren je markt en bepalen de beste aanpak.</p>
              <Link href="/contact" style={{color: '#8B4513', fontWeight: 'bold', textDecoration: 'underline'}}>Meer info</Link>
            </div>

            <div style={{padding: '2rem', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center'}}>
              <h3 style={{color: '#8B4513', fontSize: '1.5rem', marginBottom: '1rem'}}>Content creatie</h3>
              <p style={{color: '#555', marginBottom: '1.5rem'}}>Creatieve posts, video’s en visuals die opvallen en jouw verhaal vertellen. Wij zorgen voor hoogwaardige content die converteert.</p>
              <Link href="/contact" style={{color: '#8B4513', fontWeight: 'bold', textDecoration: 'underline'}}>Meer info</Link>
            </div>

            <div style={{padding: '2rem', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center'}}>
              <h3 style={{color: '#8B4513', fontSize: '1.5rem', marginBottom: '1rem'}}>Branding</h3>
              <p style={{color: '#555', marginBottom: '1.5rem'}}>Een sterke, herkenbare uitstraling die past bij jouw bedrijf. Van logo tot complete visuele identiteit op al je kanalen.</p>
              <Link href="/contact" style={{color: '#8B4513', fontWeight: 'bold', textDecoration: 'underline'}}>Meer info</Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}