import Link from 'next/link';

export default function OverOns() {
  return (
    <main style={{overflowX: 'hidden', backgroundColor: '#fff', paddingBottom: '4rem'}}>
      {/* Hero / Header Section */}
      <section style={{
            backgroundColor: '#F2E6D8', 
            paddingTop: 'clamp(6rem, 10vw, 8rem)',
            paddingBottom: 'clamp(4rem, 8vw, 6rem)',
            textAlign: 'center',
            position: 'relative'
        }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{fontFamily: 'var(--font-montserrat)', color: '#111', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', marginBottom: '1rem'}}>Laten we kennismaken</h1>
            <p style={{color: '#666', fontSize: '1.1rem'}}>Home / Over ons</p>
        </div>

        {/* Bottom Wave to White */}
        <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                <path fill="#ffffff" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
            </svg>
        </div>
      </section>

      {/* Intro Section - Single Column */}
      <section style={{backgroundColor: '#fff', paddingTop: '4rem'}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          
          <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 3rem)', color: '#111', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold'}}>
              Wie ben ik?
          </h2>
          <p style={{fontSize: '1.2rem', color: '#8B4513', fontWeight: 'bold', marginBottom: '2.5rem'}}>
              Hallo, ik ben Marvin Agyei en ik ben de oprichter van Yomarra.
          </p>
          
          <div style={{lineHeight: '1.8', color: '#555', fontSize: '1.1rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.5rem', color: '#111', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold', textTransform: 'uppercase'}}>Wat Yomarra doet</h3>
              <p style={{marginBottom: '1.5rem'}}>
                Bij Yomarra zorgen we ervoor dat bedrijven niet langer worstelen met hun social media. Wij nemen het werk uit handen en helpen je groeien met pakkende content, een duidelijke strategie en een uitstraling die écht bij jouw merk past.
              </p>

              <h3 style={{fontSize: '1.5rem', color: '#111', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold', textTransform: 'uppercase'}}>Mijn visie</h3>
              <p style={{marginBottom: '1.5rem'}}>
                Mijn visie is een wereld waarin elk bedrijf zijn unieke verhaal kan vertellen op social media, zichtbaar is voor de juiste doelgroep en online groeit met impactvolle en creatieve content.
              </p>

              <h3 style={{fontSize: '1.5rem', color: '#111', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold', textTransform: 'uppercase'}}>Wat klanten van mij krijgen</h3>
              <p style={{marginBottom: '2rem'}}>
                Als klant van Yomarra krijg je een social media strategie op maat, creatieve content die opvalt, en een consistente online aanwezigheid die je bedrijf laat groeien.
              </p>

              <div style={{textAlign: 'center', marginTop: '4rem', fontStyle: 'italic', fontFamily: 'var(--font-dancing-script), serif', fontSize: '1.8rem', color: '#8B4513'}}>
                "Social media hoeft niet ingewikkeld te zijn om impact te maken."
              </div>
          </div>

          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <Link href="/contact" className="btn" style={{
                background: '#111', 
                color: '#fff', 
                border: 'none', 
                padding: '1.2rem 2.8rem', 
                borderRadius: '12px',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'background 0.3s'
            }}>
                Neem contact op
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}