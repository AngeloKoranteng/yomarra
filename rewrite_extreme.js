const fs = require('fs');

const strategie = `import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Strategie() {
  return (
    <main style={{ backgroundColor: '#FDFAF6', color: '#1A1110', minHeight: '100vh', padding: '10vw 5vw', fontFamily: 'var(--font-montserrat)' }}>
      {/* Editorial / Whitepaper Style - Extremely Minimal */}
      
      <div style={{ borderBottom: '2px solid #1A1110', paddingBottom: '2rem', marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
         <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontFamily: 'var(--font-playfair-display)', lineHeight: '0.9', margin: 0, letterSpacing: '-2px' }}>
            01.<br/>Strategie.
         </h1>
         <div style={{ maxWidth: '400px', fontSize: '1.2rem', lineHeight: '1.6' }}>
            <p>Het fundament van elk succesvol merk. Geen aannames, maar een data-gedreven architectuur voor jouw online aanwezigheid.</p>
         </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
         <div>
            <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>De Kern</h2>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', fontSize: '1.1rem', color: '#7A2E12', textDecoration: 'none', fontWeight: 'bold' }}>
               Plan een consult <FaArrowRight />
            </Link>
         </div>
         <div style={{ fontSize: '1.5rem', lineHeight: '1.8', color: '#444' }}>
            <p style={{ marginBottom: '2rem' }}>We beginnen altijd met het ontleden van het DNA van jouw onderneming. Wie spreek je aan? Welke onbewuste drempels ervaren zij? En hoe kunnen we jouw expertise vertalen naar een onweerstaanbaar digitaal format?</p>
            <p>Vervolgens schrijven we een manifest. Een roadmap die de visuele stijl, de tone-of-voice en de exacte kanalen definieert waar we de nadruk op leggen. Alles strak, helder en gericht op rendement.</p>
         </div>
      </div>

      <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '2rem' }}>Werkwijze / Framework</h2>
      
      {/* High-end separator lists */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         <div style={{ borderTop: '1px solid #1A1110', padding: '3rem 0', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', minWidth: '100px' }}>I.</div>
            <div style={{ flex: 1, minWidth: '300px' }}>
               <h3 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>Audit & Analyse</h3>
               <p style={{ color: '#555', fontSize: '1.1rem' }}>We leggen je huidige kanalen onder de loep. Wat werkt? Wat kost alleen maar geld? We analyseren je concurrenten en vinden de gaten in de markt.</p>
            </div>
         </div>
         <div style={{ borderTop: '1px solid #1A1110', padding: '3rem 0', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', minWidth: '100px' }}>II.</div>
            <div style={{ flex: 1, minWidth: '300px' }}>
               <h3 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>Concept & Pijlers</h3>
               <p style={{ color: '#555', fontSize: '1.1rem' }}>We ontwerpen 3 tot 5 ijzersterke content pijlers. Rubrieken die zorgen voor herkenbaarheid en autoriteit, zodat je nooit meer hoeft te gissen wat je moet plaatsen.</p>
            </div>
         </div>
         <div style={{ borderTop: '1px solid #1A1110', borderBottom: '1px solid #1A1110', padding: '3rem 0', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', minWidth: '100px' }}>III.</div>
            <div style={{ flex: 1, minWidth: '300px' }}>
               <h3 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>Uitrol & Kalender</h3>
               <p style={{ color: '#555', fontSize: '1.1rem' }}>Een strategische contentkalender. Elke post heeft een doel. We plannen vooruit zodat jij je weer kunt focussen op ondernemen.</p>
            </div>
         </div>
      </div>
    </main>
  );
}`;

const contentPage = `import Link from 'next/link';
import { FaPlayCircle, FaArrowDown } from 'react-icons/fa';

export default function Content() {
  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#FDFAF6', overflowX: 'hidden' }}>
      {/* Visual / Portfolio / Creator Style - Highly asymmetrical and media-focused */}
      
      {/* Full screen cinematic header */}
      <section style={{ height: '90vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '5vw' }}>
         <h1 style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontFamily: 'var(--font-playfair-display)', fontStyle: 'italic', margin: 0, position: 'relative', zIndex: 10, mixBlendMode: 'difference' }}>
            Creatie.
         </h1>
         <p style={{ fontSize: '1.5rem', maxWidth: '500px', color: '#ccc', zIndex: 10, marginTop: '2rem' }}>
            Esthetiek ontmoet psychologie. Wij schieten de beelden die jouw doelgroep doet stoppen met scrollen.
         </p>
         
         {/* Background collage of empty "media" blocks to look like an editing suite */}
         <div style={{ position: 'absolute', top: '10%', right: '5%', width: '40vw', height: '60vh', backgroundColor: '#1A1110', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333', overflow: 'hidden' }}>
             <FaPlayCircle style={{ fontSize: '4rem', color: '#C27A55', opacity: 0.5 }} />
         </div>
         <div style={{ position: 'absolute', top: '40%', left: '40%', width: '25vw', height: '30vh', backgroundColor: '#221513', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #C27A55', zIndex: 5, transform: 'rotate(-5deg)' }}>
             <span style={{ fontFamily: 'var(--font-playfair-display)', color: '#C27A55', fontSize: '1.5rem' }}>[ Fotografie ]</span>
         </div>
      </section>

      {/* Scattered overlapping sections */}
      <section style={{ padding: '10vw 5vw', display: 'flex', flexDirection: 'column', gap: '20vh' }}>
         
         {/* Feature 1 */}
         <div style={{ display: 'flex', gap: '5vw', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', height: '60vh', backgroundColor: '#e2d4be', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#111', fontSize: '2rem', fontFamily: 'var(--font-playfair-display)' }}>[ Studio Set ]</span>
            </div>
            <div style={{ flex: '1 1 400px' }}>
               <span style={{ color: '#C27A55', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}>01 / Video Productie</span>
               <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)', margin: '1rem 0' }}>Reels & TikToks</h2>
               <p style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: '1.8' }}>Snelle, virale content die perfect aansluit bij de algoritmes van nu. We schieten, we monteren, we color-graden en optimaliseren de audio tot iedere seconde impact maakt.</p>
            </div>
         </div>

         {/* Feature 2: Reversed */}
         <div style={{ display: 'flex', gap: '5vw', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
            <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
               <span style={{ color: '#C27A55', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}>02 / Fotografie</span>
               <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)', margin: '1rem 0' }}>Brand Shoots</h2>
               <p style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: '1.8' }}>Of het nu in onze studio is of op locatie, wij verzorgen de complete styling en fotografie. Haarscherp, sfeervol en direct klaar om je webshop of feed te sieren.</p>
            </div>
            <div style={{ flex: '1 1 300px', height: '60vh', backgroundColor: '#7A2E12', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#FDFAF6', fontSize: '2rem', fontFamily: 'var(--font-playfair-display)' }}>[ Camera Shot ]</span>
            </div>
         </div>

      </section>

      {/* Massive Dark Footer CTA */}
      <div style={{ padding: '10vw 5vw', textAlign: 'center', borderTop: '1px solid #333' }}>
         <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '2rem' }}>Klaar om te schieten?</h2>
         <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#FDFAF6', color: '#000', padding: '1.5rem 4rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '100px' }}>
            Boek een Studio Sessie
         </Link>
      </div>

    </main>
  );
}`;

const promotiePage = `import Link from 'next/link';

export default function Promotie() {
  return (
    <main style={{ backgroundColor: '#F0E6D3', color: '#1A1110', overflowX: 'hidden' }}>
      {/* SaaS / Dashboard Vibe - Very structured, colorful blocks, floating elements */}
      
      {/* Super rounded massive header */}
      <section style={{ backgroundColor: '#7A2E12', color: '#fff', paddingTop: '12rem', paddingBottom: '15rem', textAlign: 'center', borderBottomLeftRadius: '100px', borderBottomRightRadius: '100px', position: 'relative' }}>
         <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', letterSpacing: '1px' }}>
            PERFORMANCE MARKETING
         </div>
         <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontFamily: 'var(--font-montserrat)', fontWeight: '900', margin: '0 auto 1.5rem', maxWidth: '800px', lineHeight: '1.1' }}>
            Schaal op commando met gerichte <span style={{ color: '#C27A55' }}>Ad-Campagnes</span>.
         </h1>
         <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Wij transformeren clicks in klanten. Geen nattevingerwerk, maar strak ingerichte funnels en keiharde data op Meta, TikTok & LinkedIn.
         </p>
         <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 3rem', backgroundColor: '#F0E6D3', color: '#7A2E12', borderRadius: '12px', fontWeight: '900', fontSize: '1.2rem', textDecoration: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            Groei Realiseren
         </Link>
      </section>

      {/* Floating UI Cards bridging the section gap */}
      <section style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', padding: '0 2rem', marginTop: '-8rem', position: 'relative', zIndex: 10 }}>
         
         <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '24px', flex: '1 1 300px', maxWidth: '400px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', border: '1px solid #e0d5c1' }}>
             <div style={{ width: '60px', height: '60px', backgroundColor: '#e2d4be', borderRadius: '15px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7A2E12', fontWeight: 'bold' }}>01</div>
             <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Meta Ads</h3>
             <p style={{ color: '#666', lineHeight: '1.7' }}>Domineer Facebook en Instagram. Wij bouwen campagnes met retargeting funnels die twijfelende bezoekers over de streep trekken.</p>
         </div>

         <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '24px', flex: '1 1 300px', maxWidth: '400px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', border: '1px solid #e0d5c1', transform: 'translateY(2rem)' }}>
             <div style={{ width: '60px', height: '60px', backgroundColor: '#C27A55', borderRadius: '15px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>02</div>
             <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>LinkedIn Ads</h3>
             <p style={{ color: '#666', lineHeight: '1.7' }}>Het ultieme B2B wapen. Target specifieke functietitels of industrieën en vul je funnel met uiterst gekwalificeerde leads en DM's.</p>
         </div>

         <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '24px', flex: '1 1 300px', maxWidth: '400px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', border: '1px solid #e0d5c1' }}>
             <div style={{ width: '60px', height: '60px', backgroundColor: '#1A1110', borderRadius: '15px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>03</div>
             <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>TikTok Ads</h3>
             <p style={{ color: '#666', lineHeight: '1.7' }}>Bereik de jongere generatie op een authentieke manier via UGC-stijl ads die niet aanvoelen als reclame, maar als content.</p>
         </div>

      </section>

      {/* Metrics / Tracker Board (Fake UI Element) */}
      <section style={{ padding: '8rem 2rem 6rem' }}>
         <div className="container" style={{ maxWidth: '1000px', backgroundColor: '#fff', borderRadius: '30px', padding: '4rem', boxShadow: '0 10px 40px rgba(122,46,18,0.05)' }}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', fontWeight: '800', marginBottom: '3rem' }}>Waarom Ads via Yomarra?</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', borderTop: '2px dashed #f0e6d3', paddingTop: '3rem' }}>
               <div>
                  <div style={{ fontSize: '4rem', fontWeight: '900', color: '#7A2E12', lineHeight: 1 }}>ROAS</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Focus op Rendement</h4>
                  <p style={{ color: '#777', marginTop: '0.5rem' }}>We sturen op keiharde Return On Ad Spend.</p>
               </div>
               <div>
                  <div style={{ fontSize: '4rem', fontWeight: '900', color: '#C27A55', lineHeight: 1 }}>A/B</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Data Gedreven</h4>
                  <p style={{ color: '#777', marginTop: '0.5rem' }}>Elke ad wordt getest, verbeterd en opgeschaald.</p>
               </div>
               <div>
                  <div style={{ fontSize: '4rem', fontWeight: '900', color: '#1A1110', lineHeight: 1 }}>Pixel</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Tracking & Funnels</h4>
                  <p style={{ color: '#777', marginTop: '0.5rem' }}>Bezoekers die niet kopen vangen we weer op.</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
`;

fs.writeFileSync('src/app/strategie/page.js', strategie);
fs.writeFileSync('src/app/content/page.js', contentPage);
fs.writeFileSync('src/app/promotie/page.js', promotiePage);

console.log('Done mapping unique layouts without powershell stripping my backticks!!!');
