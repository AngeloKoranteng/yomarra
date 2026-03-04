import ContactForm from '../../components/ContactForm';
import Image from 'next/image';
import { FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <main style={{ backgroundColor: '#F2E6D8' }}>
      {/* Top Section: Title & Form */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#8B4513', lineHeight: '1.2', marginBottom: '1.5rem', fontFamily: 'var(--font-montserrat)' }}>
              Neem contact<br/>met ons op
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '3rem', maxWidth: '400px' }}>
              Heb je vragen over onze diensten of wil je direct een intakegesprek inplannen? Laat een bericht achter, we denken graag met je mee!
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#555', marginBottom: '0.2rem' }}>Email adres</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#111' }}>infoyomarra@gmail.com</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#555', marginBottom: '0.2rem' }}>KVK Nummer</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#111' }}>95333550</p>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', color: '#555', marginBottom: '0.8rem' }}>Volg ons op</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://www.instagram.com/yomarra.co" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', backgroundColor: '#8B4513', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}><FaInstagram /></a>
                <a href="https://www.tiktok.com/@yomarra.co" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', backgroundColor: '#8B4513', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}><FaTiktok /></a>
                <a href="#" style={{ width: '35px', height: '35px', backgroundColor: '#8B4513', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Middle Section: Team / Locations */}
      <section style={{ backgroundColor: '#fff', padding: '6rem 0', borderRadius: '60px 60px 0 0', marginTop: '-40px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', color: '#111', marginBottom: '4rem', fontFamily: 'var(--font-montserrat)' }}>
            Het team achter Yomarra
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Card 1 */}
            <div>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#F2E6D8', borderRadius: '24px', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <img src="/logo-transparent.png" alt="Marvin Agyei - Yomarra Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>Marvin Agyei</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Oprichter & Social Media Strateeg<br/>Meer over mijn visie vind je op de over ons pagina.</p>
            </div>

            {/* Card 2 */}
            <div>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#eee', borderRadius: '24px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Yomarra Studio Laptop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>Yomarra Studio</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>De plek waar strategie,<br/>creativiteit en data samenkomen.</p>
            </div>

            {/* Card 3 (Brand Color) */}
            <div style={{ backgroundColor: '#8B4513', borderRadius: '24px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-montserrat)' }}>Klaar om te groeien?</h3>
              <p style={{ color: '#eee', marginBottom: '2rem' }}>Laat je gegevens achter of plan direct een online kennismaking in om de mogelijkheden te bespreken.</p>
              <a href="#name" style={{ backgroundColor: '#fff', color: '#8B4513', border: 'none', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none' }}>Start Nu</a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#F2E6D8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B4513', marginBottom: '1rem', borderLeft: '4px solid #fff', paddingLeft: '1rem' }}>Hoe lang duurt een traject?</h3>
              <p style={{ color: '#333', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B4513', marginBottom: '1rem', borderLeft: '4px solid #fff', paddingLeft: '1rem' }}>Maak je ook de content zelf?</h3>
              <p style={{ color: '#333', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B4513', marginBottom: '1rem', borderLeft: '4px solid #fff', paddingLeft: '1rem' }}>Wanneer zie ik resultaat?</h3>
              <p style={{ color: '#333', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B4513', marginBottom: '1rem', borderLeft: '4px solid #fff', paddingLeft: '1rem' }}>Hebben jullie pakketten op maat?</h3>
              <p style={{ color: '#333', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}