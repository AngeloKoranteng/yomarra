import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function OverOns() {
  return (
    <main style={{ backgroundColor: '#F0E8DC', color: '#211611', overflowX: 'hidden' }}>
      <section style={{ padding: '6.5rem 0 4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{
              width: '100%',
              aspectRatio: '4 / 5',
              borderRadius: '220px 220px 20px 20px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px -18px rgba(33,22,17,.22)',
              border: '1px solid rgba(139,58,15,.18)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop"
                alt="Marvin Agyei, oprichter van Yomarra"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '.74rem',
              fontWeight: 700,
              letterSpacing: '.26em',
              textTransform: 'uppercase',
              color: '#8B3A0F',
              marginBottom: '1.25rem'
            }}>
              <span style={{ width: '34px', height: '1.5px', background: '#8B3A0F' }} />
              Over ons
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.02, marginBottom: '1.4rem', fontFamily: 'var(--font-montserrat)' }}>
              Wie is <em style={{ fontFamily: 'var(--font-dancing-script)', fontStyle: 'italic', color: '#8B3A0F' }}>Yomarra?</em>
            </h1>

            <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: '#6B6258', marginBottom: '1.4rem', maxWidth: '700px' }}>
              <strong style={{ color: '#211611' }}>Yomarra is het social media agency van Marvin Agyei, opgericht vanuit Venray.</strong> Geen groot bureau, geen tussenpersonen, geen accountmanagers - je werkt direct samen met de persoon die jouw merk laat groeien.
            </p>

            <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: '#6B6258', marginBottom: '1.4rem', maxWidth: '700px' }}>
              Ik geloof dat elk bedrijf een sterk verhaal heeft. Mijn missie is om dat verhaal zichtbaar te maken voor de mensen die er echt op zitten te wachten. Niet met generieke content, maar met een aanpak op maat: jouw doelgroep, jouw merk, jouw doelen.
            </p>

            <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: '#6B6258', marginBottom: '2rem', maxWidth: '700px' }}>
              Veel ondernemers weten dat social media belangrijk is, maar hebben geen tijd, geen richting of geen consistentie om het vol te houden. Dat is precies waar Yomarra voor is. Ik neem het volledig uit handen: van strategie en content tot community en rapportages. <strong style={{ color: '#211611' }}>Jij blijft ondernemen. Ik zorg voor de groei.</strong>
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#8B3A0F',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '999px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 10px 24px -10px rgba(139,58,15,.55)'
              }}>
                Plan een gesprek <FaArrowRight />
              </Link>
              <Link href="/diensten" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1.5px solid #211611',
                color: '#211611',
                padding: '16px 32px',
                borderRadius: '999px',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Bekijk de diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#FBF7F0', borderTop: '1px solid rgba(33,22,17,.12)', borderBottom: '1px solid rgba(33,22,17,.12)' }}>
        <div className="container" style={{ padding: '5.5rem 0' }}>
          <div style={{ maxWidth: '760px', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '.74rem',
              fontWeight: 700,
              letterSpacing: '.26em',
              textTransform: 'uppercase',
              color: '#8B3A0F',
              marginBottom: '1.25rem'
            }}>
              <span style={{ width: '34px', height: '1.5px', background: '#8B3A0F' }} />
              Mijn aanpak
            </div>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)', lineHeight: 1.05, marginBottom: '1rem' }}>
              Waarom ondernemers voor <em style={{ fontFamily: 'var(--font-dancing-script)', fontStyle: 'italic', color: '#8B3A0F' }}>Yomarra</em> kiezen.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(33,22,17,.12)', borderRadius: '20px', overflow: 'hidden' }}>
            {[
              {
                nr: '— 01',
                title: 'Direct & persoonlijk',
                text: 'Korte lijnen, snelle reacties en één vast aanspreekpunt. Je praat met de maker, niet met een tussenlaag.'
              },
              {
                nr: '— 02',
                title: 'Op maat, nooit copy-paste',
                text: 'Elke klant krijgt een eigen strategie. We starten met een helderheidsgesprek, dan strategie, dan executie.'
              },
              {
                nr: '— 03',
                title: 'Meetbaar resultaat',
                text: 'Elke maand meten we wat werkt en wat beter kan: bereik, engagement en leads. Geen vage beloftes, maar cijfers.'
              }
            ].map((item) => (
              <div key={item.nr} style={{ background: '#FBF7F0', padding: '2.5rem 2rem' }}>
                <div style={{ fontFamily: 'var(--font-dancing-script)', fontStyle: 'italic', fontSize: '1rem', color: '#D9A06B', marginBottom: '14px' }}>
                  {item.nr}
                </div>
                <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.2rem', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#6B6258', fontSize: '.97rem', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5.5rem 0 6rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-dancing-script)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontStyle: 'italic', color: '#8B3A0F', marginBottom: '1rem' }}>
            "Social media hoeft niet ingewikkeld te zijn."
          </h2>
          <p style={{ color: '#6B6258', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Benieuwd wat dat voor jouw bedrijf betekent? Het eerste gesprek is altijd gratis.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#FBF7F0',
            color: '#8B3A0F',
            border: '1.5px solid #8B3A0F',
            padding: '16px 32px',
            borderRadius: '999px',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Plan een gesprek <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
