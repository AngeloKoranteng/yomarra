// --- CONTACT PAGINA ---
import ContactForm from '../../components/ContactForm';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <main style={{backgroundColor: '#F0E8DC', color: '#1A1A1A', paddingBottom: '6rem', overflowX: 'hidden', minHeight: '100vh'}}>
      {/* Header Section */}
      <section style={{
            backgroundColor: '#8B3A0F',
            padding: '8rem 2rem 5rem',
            textAlign: 'center',
            color: '#FDFAF6',
            position: 'relative'
        }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}> 
            <h1 style={{fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                Klaar om te groeien?
            </h1>
            <p style={{fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.95}}>
                Plan een gratis gesprek en ontdek wat Yomarra voor jouw bedrijf kan doen.
            </p>
        </div>

        {/* Bottom Wave to Beige */}
        <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                <path fill="#F0E8DC" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
            </svg>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: '4rem' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Info (Links) */}
            <div style={{ padding: '2rem 0' }}>
                <h2 style={{fontSize: '2rem', fontFamily: 'var(--font-montserrat)', color: '#1A1A1A', marginBottom: '2rem', fontWeight: 'bold'}}>
                    Direct contact opnemen?
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '50%', color: '#8B3A0F', fontSize: '1.5rem', boxShadow: '0 8px 16px rgba(139,58,15,0.08)' }}>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>E-mail</h3>
                            <a href="mailto:infoyomarra@gmail.com" style={{ color: '#555', textDecoration: 'none' }}>infoyomarra@gmail.com</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '50%', color: '#8B3A0F', fontSize: '1.5rem', boxShadow: '0 8px 16px rgba(139,58,15,0.08)' }}>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Locatie</h3>
                            <p style={{ color: '#555', margin: 0 }}>Venray, Nederland</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '50%', color: '#8B3A0F', fontSize: '1.5rem', boxShadow: '0 8px 16px rgba(139,58,15,0.08)' }}>
                            <FaClock />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Responstijd</h3>
                            <p style={{ color: '#555', margin: 0 }}>binnen 24 uur</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Formulier (Rechts) */}
            <div style={{ 
                backgroundColor: '#fff', 
                borderRadius: '24px', 
                padding: '3rem', 
                boxShadow: '0 10px 40px rgba(139,58,15,0.08)',
                border: '1px solid rgba(139,58,15,0.1)'
            }}>
                <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
