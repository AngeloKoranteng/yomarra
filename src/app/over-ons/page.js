import Link from 'next/link';

export default function OverOns() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Over ons</h1>
          <p>Home / Over ons</p>
        </div>
        <div className="hero-wave" style={{ bottom: '-1px' }}>
             <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '80px', display: 'block'}}>
                <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
            </svg>
        </div>
      </section>

      <section className="section about" style={{padding: '4rem 0'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', color: '#8B4513', marginBottom: '1rem'}}>Wie ben ik</h2>
            <p style={{fontSize: '1.2rem', color: '#555'}}>Hallo, ik ben <strong>Marvin Agyei</strong> en ik ben de oprichter van Yomarra.</p>
          </div>

          <div style={{lineHeight: '1.8', color: '#444', fontSize: '1.1rem', marginBottom: '3rem'}}>
            <p style={{marginBottom: '1.5rem'}}>
              Mijn visie is een wereld waarin elk bedrijf zijn unieke verhaal niet alleen vertelt, maar ook laat voelen op social media. Een wereld waarin merken dominant zichtbaar zijn voor de juiste doelgroep, impact maken en uitgroeien tot sterke online autoriteiten.
            </p>
            <p style={{marginBottom: '1.5rem'}}>
              Met gedurfde, creatieve en strategisch slimme content wordt social media een motor voor groei, herkenning en blijvende invloed. Geen bijzaak, maar een essentieel onderdeel van succes.
            </p>
            <p>
              Bij Yomarra zorgen we ervoor dat bedrijven niet langer worstelen met hun social media. Wij nemen het volledige proces uit handen: van strategie tot creatie en publicatie. Met pakkende, doordachte content en een duidelijke socialmedia-strategie helpen we jouw merk groeien en zichtbaar worden bij de juiste doelgroep.
            </p>
          </div>

          <div style={{textAlign: 'center'}}>
            <Link href="/contact" className="btn" style={{background: '#8B4513', color: '#fff', padding: '1rem 2rem', borderRadius: '50px', display: 'inline-block'}}>Neem contact op</Link>
          </div>
        </div>
      </section>
    </main>
  );
}