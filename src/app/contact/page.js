import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Home / Contact</p>
        </div>
        <div className="hero-wave" style={{ bottom: '-1px' }}>
             <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '80px', display: 'block'}}>
                <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
            </svg>
        </div>
      </section>

      <section className="section contact" style={{padding: '4rem 0', backgroundColor: '#fff'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontFamily: 'var(--font-montserrat), sans-serif', color: '#333', marginBottom: '1rem'}}>Start jouw groei vandaag</h2>
            <p style={{color: '#666', fontSize: '1.1rem'}}>Vul het formulier in en we spreken elkaar snel.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}