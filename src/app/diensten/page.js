// --- DIENSTEN PAGINA ---
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function Diensten() {
  return (
    <main style={{backgroundColor: '#F0E8DC', color: '#1A1A1A', paddingBottom: '6rem', overflowX: 'hidden', minHeight: '100vh'}}>
      <style dangerouslySetInnerHTML={{__html: `
        .service-card {
          background-color: #fff;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(139,58,15,0.05);
          border: 1px solid rgba(139,58,15,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(139,58,15,0.12);
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background-color: #8B3A0F;
          color: #fff;
          padding: 1.2rem 3rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(139, 58, 15, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(139, 58, 15, 0.35);
        }
        .bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
          flex-grow: 1;
        }
        .bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          color: #444;
          line-height: 1.5;
        }
        .bullet-icon {
          color: #8B3A0F;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
      `}} />

      {/* Header Section */}
      <section style={{
        backgroundColor: '#8B3A0F', 
        padding: '8rem 2rem 5rem', 
        textAlign: 'center', 
        color: '#FDFAF6',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-montserrat)', marginBottom: '2rem', fontWeight: 'bold' }}>
            Wat doet Yomarra?
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.95, margin: '0 auto', fontWeight: '400' }}>
            Yomarra biedt drie kerndiensten die samenwerken: strategie, content en promotie. 
            Afhankelijk van jouw situatie kiezen we het pakket dat het beste bij jou past.
          </p>
        </div>

        {/* Bottom Wave to Beige */}
        <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                <path fill="#F0E8DC" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
            </svg>
        </div>
      </section>

      {/* Diensten Cards */}
      <section style={{ padding: '5rem 2rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            
            {/* Service 1: Strategie */}
            <div className="service-card">
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-montserrat)', color: '#1A1A1A', marginBottom: '1rem', fontWeight: 'bold' }}>
                Strategie
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '2rem' }}>
                Een sterk merk begint bij een heldere strategie. We analyseren jouw doelgroep, positionering en 
                concurrenten. Daarna bouwen we een contentstrategie die past bij jouw doelen � niet bij die van iemand 
                anders.
              </p>
              <ul className="bullet-list">
                <li><FaCheckCircle className="bullet-icon" /> Branding analyse & positionering</li>
                <li><FaCheckCircle className="bullet-icon" /> Doelgroeponderzoek</li>
                <li><FaCheckCircle className="bullet-icon" /> Contentstrategie op maat</li>
                <li><FaCheckCircle className="bullet-icon" /> Tone of voice & merkidentiteit</li>
                <li><FaCheckCircle className="bullet-icon" /> Contentpilaren & planning</li>
              </ul>
              <Link href="/strategie" style={{ color: '#8B3A0F', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                Meer over strategie <FaArrowRight fontSize="0.9rem" />
              </Link>
            </div>

            {/* Service 2: Content Creatie */}
            <div className="service-card">
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-montserrat)', color: '#1A1A1A', marginBottom: '1rem', fontWeight: 'bold' }}>
                Content Creatie
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '2rem' }}>
                Content die stopt met scrollen. We produceren Reels, captions, hooks en visuals die passen bij jouw merk 
                en die je doelgroep aanspreken � consistent, creatief en gericht op groei.
              </p>
              <ul className="bullet-list">
                <li><FaCheckCircle className="bullet-icon" /> Reels & TikTok video strategie</li>
                <li><FaCheckCircle className="bullet-icon" /> Captions & hooks schrijven</li>
                <li><FaCheckCircle className="bullet-icon" /> Canva templates op maat</li>
                <li><FaCheckCircle className="bullet-icon" /> Contentkalender & planning</li>
                <li><FaCheckCircle className="bullet-icon" /> Publicatie & optimalisatie</li>
              </ul>
              <Link href="/content" style={{ color: '#8B3A0F', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                Meer over content <FaArrowRight fontSize="0.9rem" />
              </Link>
            </div>

            {/* Service 3: Promotie & Groei */}
            <div className="service-card">
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-montserrat)', color: '#1A1A1A', marginBottom: '1rem', fontWeight: 'bold' }}>
                Promotie & Groei
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '2rem' }}>
                Zichtbaarheid is pas waardevol als het ook klanten oplevert. We bouwen systemen voor community 
                management, DM-conversaties en lead opvolging zodat bereik omgezet wordt in echte resultaten.
              </p>
              <ul className="bullet-list">
                <li><FaCheckCircle className="bullet-icon" /> Actief community management</li>
                <li><FaCheckCircle className="bullet-icon" /> DM-strategie & lead opvolging</li>
                <li><FaCheckCircle className="bullet-icon" /> Algoritme-optimalisatie</li>
                <li><FaCheckCircle className="bullet-icon" /> Maandelijkse rapportages</li>
                <li><FaCheckCircle className="bullet-icon" /> Continue bijsturing op data</li>
              </ul>
              <Link href="/promotie" style={{ color: '#8B3A0F', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                Meer over promotie <FaArrowRight fontSize="0.9rem" />
              </Link>
            </div>

          </div>

          {/* Bottom CTA Block */}
          <div style={{ textAlign: 'center', marginTop: '6rem', backgroundColor: '#8B3A0F', padding: '4rem 2rem', borderRadius: '24px', color: '#fff' }}>
            <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-montserrat)', marginBottom: '1rem', fontWeight: 'bold' }}>
              Niet zeker welk pakket bij je past?
            </h2>
            <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              We kijken graag in een kort gesprek met je mee naar de diensten die jouw bedrijf op dit moment het hardst nodig heeft.
            </p>
            <Link href="/contact" className="cta-btn" style={{ backgroundColor: '#fff', color: '#8B3A0F' }}>
              Plan een gesprek <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
