const fs = require('fs');

const strategie = import Link from 'next/link';
import { FaChessKnight, FaSearch, FaMapSigns, FaRoute, FaArrowRight } from 'react-icons/fa';

export default function Strategie() {
  return (
    <main style={{ backgroundColor: '#FDFAF6', color: '#1A1110', overflowX: 'hidden' }}>
      {/* Minimal Centered Hero */}
      <section style={{ backgroundColor: '#F2E6D8', padding: '12rem 2rem 8rem', textAlign: 'center' }}>
        <FaChessKnight style={{ fontSize: '4rem', color: '#7A2E12', marginBottom: '2rem' }} />
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontFamily: 'var(--font-playfair-display)', marginBottom: '1.5rem', color: '#111' }}>Social Media Strategie</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
          Stop met gissen. Wij bouwen een data-gedreven fundament voor jouw merk. Een heldere koers die niet alleen views oplevert, maar daadwerkelijke groei.
        </p>
      </section>

      {/* Alternating Z-Pattern Layout */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#C27A55', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Analyseren</span>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', margin: '1rem 0', color: '#1A1110' }}>Waar sta je nu?</h2>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>Voordat we creëren, onderzoeken we. Wie is je doelgroep? Wat doen je concurrenten? We brengen de online positie in kaart zodat elke post straks doel treft.</p>
            </div>
            <div style={{ flex: '1 1 400px', backgroundColor: '#e2d4be', height: '400px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(122,46,18,0.1)' }}>
               <span style={{fontFamily: 'var(--font-playfair-display)', fontSize: '1.5rem', color: '#7A2E12', opacity: 0.6}}>[ Data Analyse Visual ]</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '4rem' }}>
            <div style={{ flex: '1 1 400px', backgroundColor: '#d0ba9f', height: '400px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(122,46,18,0.1)' }}>
               <span style={{fontFamily: 'var(--font-playfair-display)', fontSize: '1.5rem', color: '#7A2E12', opacity: 0.6}}>[ Pijlers & Plan Visual ]</span>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#C27A55', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Positioneren</span>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', margin: '1rem 0', color: '#1A1110' }}>Focus & Identiteit</h2>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>Gewoon 'betrokken' zijn is niet genoeg. We bepalen sterke content pijlers en een eigen tone-of-voice die jouw merk onweerstaanbaar en herkenbaar maken voor de volgers.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Horizontal Roadmap - No Sidebar */}
      <section style={{ backgroundColor: '#1A1110', padding: '8rem 2rem', color: '#F2E6D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)' }}>De Roadmap</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
             <div style={{ borderTop: '2px solid #C27A55', paddingTop: '2rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#C27A55', marginBottom: '1.5rem' }}><FaSearch /></div>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>01. Ontdekking</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6' }}>Diepe duik in huidige kanalen, pijnpunten en kansen binnen de markt.</p>
             </div>
             <div style={{ borderTop: '2px solid #C27A55', paddingTop: '2rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#C27A55', marginBottom: '1.5rem' }}><FaMapSigns /></div>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>02. Blauwdruk</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6' }}>Het bepalen van de visuele koers, thema's, formats en frequentie.</p>
             </div>
             <div style={{ borderTop: '2px solid #C27A55', paddingTop: '2rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#C27A55', marginBottom: '1.5rem' }}><FaRoute /></div>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>03. Kalender</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6' }}>Een strakke, werkbare content kalender die we direct kunnen uitvoeren.</p>
             </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
             <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', backgroundColor: '#C27A55', color: '#fff', padding: '1.2rem 3rem', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', transition: 'transform 0.3s' }}>
                Start met strategie <FaArrowRight />
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const content = import Link from 'next/link';
import { FaPlay, FaPencilAlt, FaArrowRight, FaCamera } from 'react-icons/fa';

export default function Content() {
  return (
    <main style={{ backgroundColor: '#111', color: '#fff', overflowX: 'hidden' }}>
      {/* Dark Bold Hero, Left Aligned */}
      <section style={{ padding: '10rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
         <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontFamily: 'var(--font-playfair-display)', lineHeight: '1.1', marginBottom: '2rem' }}>
               Visuals that <br/><span style={{ color: '#C27A55', fontStyle: 'italic' }}>stop the scroll.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '600px', lineHeight: '1.8', marginBottom: '3rem' }}>
               TikToks, flitsende Reels, high-end fotografie en loeistrakke copy. Wij produceren rauwe, authentieke content waar je publiek niet omheen kan en op blíjft plakken.
            </p>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link href="/contact" style={{ backgroundColor: '#C27A55', padding: '1rem 2rem', borderRadius: '30px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
                   Start een shoot
                </Link>
                <a href="/yomarra-offerte-sectie.pdf" download style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', borderBottom: '1px solid #fff', paddingBottom: '0.2rem' }}>
                   Prijzen Offerte <FaArrowRight style={{ fontSize: '0.8rem' }} />
                </a>
            </div>
         </div>
         {/* Abstract background gradient to simulate studio lighting */}
         <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '60%', height: '120%', background: 'radial-gradient(circle, rgba(122, 46, 18, 0.4) 0%, rgba(17, 17, 17, 0) 70%)', zIndex: 1 }} />
      </section>

      {/* Bento Grid / Masonry Layout (Completely unique) */}
      <section style={{ padding: '4rem 2rem', position: 'relative', zIndex: 2 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', gridAutoRows: 'minmax(250px, auto)' }}>
           
           {/* Block 1 */}
           <div style={{ backgroundColor: '#1A1110', borderRadius: '24px', gridColumn: 'span 1', gridRow: 'span 2', display: 'flex', flexDirection: 'column', padding: '3rem 2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <FaPlay style={{ fontSize: '3rem', color: '#C27A55', marginBottom: 'auto' }} />
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginTop: '3rem', marginBottom: '1rem' }}>Short Video <br/>(Reels & TikTok)</h3>
              <p style={{ color: '#888', lineHeight: '1.6' }}>Short-form video's die perfect inspelen op algoritmes en trends. Vlotte edits, sterke hooks en naadloze audiosyncing.</p>
           </div>
           
           {/* Block 2 (Visual Focus) */}
           <div style={{ backgroundColor: '#C27A55', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111', overflow: 'hidden', position: 'relative' }}>
               <FaCamera style={{ fontSize: '8rem', opacity: 0.1, position: 'absolute', right: '-10px', bottom: '-20px' }} />
               <span style={{fontFamily: 'var(--font-playfair-display)', fontSize: '1.5rem', fontWeight: 'bold'}}>[ Lifestyle Shot ]</span>
           </div>

           {/* Block 3 */}
           <div style={{ backgroundColor: '#1A1110', borderRadius: '24px', display: 'flex', flexDirection: 'column', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', justifyContent: 'center' }}>
              <FaPencilAlt style={{ fontSize: '2rem', color: '#C27A55', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '0.5rem' }}>Scherpe Copywriting</h3>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>Prikkelende teksten en actiegerichte captions. Geen ongeïnspireerde AI-copy, maar woorden met karakter.</p>
           </div>

           {/* Block 4 (Full Width Banner inside grid) */}
           <div style={{ backgroundColor: '#7A2E12', borderRadius: '24px', gridColumn: '1 / -1', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: '4rem 3rem' }}>
               <div style={{ maxWidth: '600px' }}>
                   <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Samen de set op?</h2>
                   <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '1.1rem' }}>Of het nu in onze studio is of op jouw werkvloer. In één productiedag schieten we soepel en professioneel al het materiaal voor de komende maand(en).</p>
               </div>
               <div style={{ marginTop: '2rem' }}>
                    <Link href="/contact" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: '#111', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold' }}>Plan een Productiedag</Link>
               </div>
           </div>
        </div>
      </section>
    </main>
  );
};

const promotie = import Link from 'next/link';
import { FaBullseye, FaChartArea, FaRocket, FaFileDownload } from 'react-icons/fa';

export default function Promotie() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#111', overflowX: 'hidden' }}>
      
      {/* 50/50 Split Screen Layout */}
      <section style={{ display: 'flex', flexWrap: 'wrap', minHeight: '85vh', backgroundColor: '#F2E6D8' }}>
        {/* Left Side Text */}
        <div style={{ flex: '1 1 500px', backgroundColor: '#7A2E12', padding: '10rem 4rem 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
           <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontFamily: 'var(--font-playfair-display)', color: '#FDFAF6', lineHeight: 1.1, marginBottom: '2rem' }}>
              Bereik de  <br/>massa. <br/><span style={{ color: '#C27A55', fontStyle: 'italic' }}>Echt gericht.</span>
           </h1>
           <p style={{ color: 'rgba(253, 250, 246, 0.8)', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '500px', marginBottom: '3rem' }}>
             Laat algoritmes niet voor je beslissen, pak de regie. Wij combineren krachtige promotiecampagnes (Ads) en merkstrategieën om te zorgen dat jij altijd top-of-mind bent bij je ideale klant.
           </p>
           <div>
             <Link href="#stats" style={{ color: '#FDFAF6', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #C27A55', paddingBottom: '5px' }}>Ontdek de aanpak</Link>
           </div>
        </div>
        {/* Right Side Visual Block */}
        <div style={{ flex: '1 1 500px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', position: 'relative' }}>
           {/* Floating abstract blocks simulating Ads visuals */}
           <div style={{ position: 'absolute', width: '300px', height: '350px', backgroundColor: '#e2d4be', borderRadius: '15px', rotate: '-5deg', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-playfair-display)', color: '#7A2E12', opacity: 0.6 }}>[ Groei Grafiek ]</span>
           </div>
           <div style={{ position: 'absolute', width: '250px', height: '280px', backgroundColor: '#fff', borderRadius: '15px', rotate: '10deg', transform: 'translateX(60px) translateY(40px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee' }}>
              <FaRocket style={{ fontSize: '4rem', color: '#C27A55', opacity: 0.8 }} />
           </div>
        </div>
      </section>

      {/* Huge Stats/Impact Section */}
      <section id="stats" style={{ backgroundColor: '#1A1110', padding: '6rem 2rem', color: '#FDFAF6' }}>
         <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', textAlign: 'center' }}>
            <div>
               <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#C27A55' }}><FaBullseye /></div>
               <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Laser Focus</h3>
               <p style={{ color: '#aaa', lineHeight: '1.6' }}>Geen 'pray and spray', we targetten alleen op de specifieke demografie en interesses van jouw kopers.</p>
            </div>
            <div>
               <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#C27A55' }}><FaChartArea /></div>
               <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Maximale ROI</h3>
               <p style={{ color: '#aaa', lineHeight: '1.6' }}>We sturen non-stop op data. Loopt een advertentie goed? Dan schalen we direct op voor meer resultaat.</p>
            </div>
            <div>
               <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#C27A55', marginBottom: '1rem' }}>A/B</div>
               <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem' }}>Splittesten</h3>
               <p style={{ color: '#aaa', lineHeight: '1.6' }}>We testen voortdurend verschillend beeldmateriaal en copy tegen elkaar af voor de hoogste click-through-rates.</p>
            </div>
         </div>
      </section>

      {/* Dashboard/Card Layout for Platforms */}
      <section style={{ padding: '8rem 2rem' }}>
         <div className="container">
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)', textAlign: 'center', marginBottom: '1rem', color: '#111' }}>Onze Advertentie Kanalen</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '4rem', fontSize: '1.1rem' }}>Wij bouwen campagnes op de platforms waar jouw doelgroep zich begeeft.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{ backgroundColor: '#F2E6D8', padding: '3.5rem', borderRadius: '20px', textAlign: 'center', transition: 'transform 0.3s' }}>
                    <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', color: '#7A2E12' }}>Meta Ads</h4>
                    <p style={{ color: '#555', lineHeight: '1.6' }}>Facebook & Instagram blijven oppermachtig voor merkbekendheid en directe B2C conversies. Volledige inzet van dynamische catalogi mogelijk.</p>
                </div>
                <div style={{ backgroundColor: '#fff', border: '2px solid #F2E6D8', padding: '3.5rem', borderRadius: '20px', textAlign: 'center', transition: 'transform 0.3s' }}>
                    <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', color: '#111' }}>TikTok Ads</h4>
                    <p style={{ color: '#555', lineHeight: '1.6' }}>Gen-Z en Millennials bereik je met authentieke, user-generated (UGC) achtige advertenties. De hoogste engagement van alle netwerken.</p>
                </div>
                <div style={{ backgroundColor: '#F2E6D8', padding: '3.5rem', borderRadius: '20px', textAlign: 'center', transition: 'transform 0.3s' }}>
                    <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '1rem', color: '#7A2E12' }}>LinkedIn Ads</h4>
                    <p style={{ color: '#555', lineHeight: '1.6' }}>Ideaal voor zakelijke dienstverlening. Scherp targetten op functietitels, bedrijven en industrieën om perfecte B2B leads te scoren.</p>
                </div>
            </div>
         </div>
      </section>

      {/* Massive Call to action */}
      <section style={{ backgroundColor: '#111', padding: '6rem 2rem', textAlign: 'center', color: '#fff', margin: '2rem', borderRadius: '30px' }}>
         <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair-display)', marginBottom: '2rem' }}>Tijd om serieuze impact te maken?</h2>
         <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: '#aaa', fontSize: '1.1rem' }}>Download ons aanbod of neem direct contact op om de mogelijkheden voor Adverteren en Promotie te verkennen.</p>
         <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <Link href="/contact" style={{ padding: '1.2rem 3rem', backgroundColor: '#C27A55', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>Campagne Starten</Link>
             <a href="/yomarra-offerte-sectie.pdf" download style={{ padding: '1.2rem 3rem', backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}><FaFileDownload /> Direct Offerte Downloaden</a>
         </div>
      </section>

    </main>
  );
}
;

fs.writeFileSync('src/app/strategie/page.js', strategie);
fs.writeFileSync('src/app/content/page.js', content);
fs.writeFileSync('src/app/promotie/page.js', promotie);

console.log('Successfully rewrote pages with entirely new structural paradigms.');
