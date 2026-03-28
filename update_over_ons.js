const fs = require('fs');

const content = `"use client"; // --- toegevoegd voor button interactie ---
// --- OVER ONS ---
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function OverOns() {
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
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-montserrat)', marginBottom: '2rem', fontWeight: 'bold' }}>
            Wie is Yomarra?
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: 0.95, margin: '0 auto', fontWeight: '400' }}>
            Yomarra is een social media agency opgericht door Marvin Agyei vanuit Venray. 
            Geen groot bureau, geen tussenpersonen — gewoon directe, persoonlijke aanpak 
            die werkt. Ik geloof dat elk bedrijf een sterk verhaal heeft. Mijn missie is om dat 
            verhaal zichtbaar te maken voor de mensen die er écht op zitten te wachten.
          </p>
        </div>

        {/* Bottom Wave to Beige (\`#F0E8DC\`) */}
        <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                <path fill="#F0E8DC" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
            </svg>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ padding: '6rem 2rem 2rem' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Waarom Yomarra */}
          <div style={{ backgroundColor: '#fff', padding: '4rem 3rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(139,58,15,0.05)', border: '1px solid rgba(139,58,15,0.1)' }}>
            <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-montserrat)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 'bold' }}>
              Waarom Yomarra?
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
              Veel ondernemers weten dat social media belangrijk is — maar hebben geen tijd, 
              geen idee hoe, of geen consistentie om het vol te houden. Dat is precies waar 
              Yomarra voor is. Ik neem het volledig uit handen: van de strategie en de content 
              tot de community en de rapportages. Jij blijft ondernemen. Ik zorg voor de groei.
            </p>
          </div>

          {/* Mijn aanpak */}
          <div style={{ backgroundColor: '#fff', padding: '4rem 3rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(139,58,15,0.05)', border: '1px solid rgba(139,58,15,0.1)' }}>
            <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-montserrat)', color: '#1A1A1A', marginBottom: '1.5rem', fontWeight: 'bold' }}>
              Mijn aanpak
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
              Geen generieke content, geen copy-paste strategie. Elke klant krijgt een aanpak 
              op maat — gebaseerd op zijn doelgroep, zijn merk en zijn doelen. We starten altijd 
              met een helderheidsgesprek. Dan volgt een strategie. Dan executie. En elke 
              maand meten we wat werkt en wat beter kan.
            </p>
          </div>

          {/* Slotquote & CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem' }}>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-dancing-script)', color: '#8B3A0F', marginBottom: '3rem', fontStyle: 'italic' }}>
              "Social media hoeft niet ingewikkeld te zijn."
            </h3>
            
            <Link href="/contact" style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '0.8rem',
                backgroundColor: '#8B3A0F', 
                color: '#fff', 
                padding: '1.2rem 3rem', 
                borderRadius: '12px', 
                fontSize: '1.1rem', 
                fontWeight: 'bold', 
                textDecoration: 'none', 
                boxShadow: '0 8px 20px rgba(139, 58, 15, 0.25)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(139, 58, 15, 0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 58, 15, 0.25)'; }}
            >
              Plan een gesprek <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
`;

fs.writeFileSync('src/app/over-ons/page.js', content, 'utf8');
console.log('Over Ons Page successfully overwritten!');
