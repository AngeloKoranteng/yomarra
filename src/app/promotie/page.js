export default function Page() {
  return (
    <main style={{overflowX: 'hidden'}}>
      <section style={{
            backgroundColor: '#F2E6D8', 
            paddingTop: 'clamp(6rem, 10vw, 8rem)',
            paddingBottom: 'clamp(4rem, 8vw, 6rem)',
            textAlign: 'center',
            position: 'relative'
        }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{fontFamily: 'var(--font-montserrat)', color: '#111', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', marginBottom: '1rem'}}>Promotie</h1>
            <p style={{color: '#666', fontSize: '1.1rem'}}>Home / Promotie</p>
        </div>
        <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                <path fill="#ffffff" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
            </svg>
        </div>
      </section>
      <section style={{backgroundColor: '#fff', padding: '4rem 0 6rem 0'}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.8'}}>
            Pagina in opbouw. Hier komt de uitgebreide informatie.
          </p>
        </div>
      </section>
    </main>
  );
}
