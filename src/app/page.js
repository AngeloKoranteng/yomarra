import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaPlus, FaLaptop, FaBullseye, FaComments } from 'react-icons/fa';

const services = [
  {
    number: '01',
    title: 'Wat Yomarra doet',
    description: 'Wij nemen het volledige proces uit handen: van strategie tot creatie en publicatie. We helpen jouw merk groeien met doordachte content.',
    href: '/over-ons',
    icon: FaLaptop,
    accent: '#F7CF4D',
  },
  {
    number: '02',
    title: 'Mijn visie',
    description: 'Elk bedrijf moet zijn unieke verhaal laten voelen. Merken moeten dominant zichtbaar zijn voor de juiste doelgroep en impact maken.',
    href: '/over-ons',
    icon: FaBullseye,
    accent: '#8EA0FF',
  },
  {
    number: '03',
    title: 'Wat krijg je?',
    description: 'Persoonlijke aandacht, creatieve concepten die opvallen, en meetbare resultaten gericht op conversie en constante groei.',
    href: '/diensten',
    icon: FaComments,
    accent: '#FF9A75',
  },
];

const packages = [
  {
    number: '01',
    title: 'START',
    price: '€250',
    priceMeta: 'eenmalig',
    period: 'Looptijd: 1 - 2 maanden',
    image: '/IMG_2836.png',
    summary: 'De fundering van een serieus merk',
    details: ['Branding analyse & positionering', 'Merkidentiteit & tone of voice', 'Contentstrategie & pilaren', 'Hooks, captions & Canva templates'],
    href: '/contact?plan=start',
  },
  {
    number: '02',
    title: 'GROEI',
    price: '€499',
    priceMeta: '/ maand',
    period: 'Looptijd: 3 of 6 maanden',
    image: '/Homepagina.jpeg',
    summary: 'Bereik omzetten in klanten',
    details: ['Reels & TikTok strategie', 'Actief community management', 'DM → gesprek → deal systeem', 'Maandelijkse rapportage'],
    href: '/contact?plan=groei',
    popular: true,
  },
  {
    number: '03',
    title: 'ALL-IN',
    price: '€1.000',
    priceMeta: '/ maand',
    period: 'Minimaal 6 maanden',
    image: '/IMG_2836.png',
    summary: 'Volledige overname',
    details: ['Alles van START + GROEI', 'Volledige contentplanning', 'Lead kwalificatie & opvolging', 'Prioriteit support & check-ins'],
    href: '/contact?plan=all-in',
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .home-page {
          background: #F2E8DA;
          color: #191513;
          overflow-x: hidden;
        }
        .shell {
          width: min(1120px, calc(100% - 3rem));
          margin: 0 auto;
        }
        .eyebrow {
          display: inline-block;
          color: #8F431C;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .headline {
          font-family: var(--font-montserrat);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 0.98;
          color: #191513;
          margin: 0 0 1.2rem;
          font-size: clamp(3rem, 7vw, 5rem);
        }
        .sub {
          color: #5B544E;
          line-height: 1.9;
          font-size: 1.1rem;
          margin: 0;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          border-radius: 999px;
          padding: 1rem 1.4rem;
          font-weight: 700;
          text-decoration: none;
        }
        .btn-vol {
          background: #8F431C;
          color: #fff;
          box-shadow: 0 10px 22px rgba(143, 67, 28, 0.22);
        }
        .btn-lijn {
          border: 1.5px solid rgba(25, 21, 19, 0.18);
          color: #191513;
          background: rgba(255,255,255,0.25);
        }
        .btn-wit {
          background: #F7EFE4;
          color: #8F431C;
        }
        .section-head {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-head h2 {
          font-family: var(--font-montserrat);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          line-height: 1.05;
          margin: 0 0 1rem;
        }
        .section-head p {
          max-width: 760px;
          margin: 0 auto;
          color: #5B544E;
          line-height: 1.8;
        }
        .hero {
          padding: 2rem 0 0;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          align-items: center;
          padding: 4rem 0 3rem;
        }
        .hero h1 em,
        .section-head h2 em,
        .quote-band em,
        .cta-band em {
          font-family: var(--font-dancing-script);
          font-style: normal;
          color: #8F431C;
        }
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
        .hero-visual {
          position: relative;
          border-radius: 32px 32px 0 0;
          overflow: hidden;
          min-height: 520px;
          box-shadow: 0 18px 40px rgba(26, 17, 16, 0.12);
        }
        .hero-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-badge {
          position: absolute;
          left: 1.25rem;
          bottom: 1.25rem;
          background: rgba(255,255,255,0.9);
          padding: 0.9rem 1.1rem;
          border-radius: 16px;
          box-shadow: 0 10px 24px rgba(26, 17, 16, 0.14);
          display: inline-flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }
        .trust-item {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(122, 46, 18, 0.08);
          border-radius: 18px;
          padding: 1rem 1.1rem;
          color: #5B544E;
          box-shadow: 0 10px 24px rgba(26, 17, 16, 0.04);
        }
        .trust-item b {
          display: block;
          color: #191513;
          margin-bottom: 0.25rem;
        }
        .marquee {
          overflow: hidden;
          border-top: 1px solid rgba(122, 46, 18, 0.08);
          border-bottom: 1px solid rgba(122, 46, 18, 0.08);
          background: rgba(255,255,255,0.45);
        }
        .marquee-track {
          display: flex;
          gap: 1rem;
          white-space: nowrap;
          padding: 0.95rem 0;
          animation: slide 28s linear infinite;
          color: #8F431C;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 0.82rem;
        }
        .punt { opacity: 0.4; }
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .service-grid,
        .steps-grid,
        .package-grid {
          display: grid;
          gap: 1.5rem;
        }
        .service-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .steps-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
        .package-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .service-card,
        .step,
        .package,
        .faq-item {
          background: #FFFDF8;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 18px 34px rgba(26, 17, 16, 0.08);
          border: 1px solid rgba(122, 46, 18, 0.08);
        }
        .service-card .visual {
          aspect-ratio: 16 / 10;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 3.2rem;
        }
        .service-card .inhoud,
        .package-summary { padding: 1.6rem 1.6rem 1.7rem; }
        .service-card .nr,
        .step .nr,
        .package .nummer {
          display: inline-block;
          color: #A85A31;
          letter-spacing: 2px;
          font-size: 0.82rem;
          margin-bottom: 0.8rem;
        }
        .service-card h3,
        .step h3,
        .package h3,
        .faq-item summary,
        .quote-band blockquote,
        .cta-band h2 {
          font-family: var(--font-montserrat);
          letter-spacing: -0.04em;
        }
        .service-card h3,
        .package h3 { font-size: 1.45rem; margin: 0 0 0.7rem; }
        .service-card p { color: #6B6258; line-height: 1.7; margin: 0; }
        .link {
          color: #8F431C;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1rem;
        }
        .step { padding: 1.6rem; }
        .step .nr {
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: transparent;
          -webkit-text-stroke: 1px #A85A31;
          line-height: 1;
        }
        .step p,
        .package p,
        .faq-item p,
        .quote-band cite,
        .cta-band p { color: #5B544E; line-height: 1.75; }
        .package { padding: 1.25rem 1.25rem 1.5rem; }
        .package.popular { border-top: 4px solid #8F431C; transform: translateY(-6px); }
        .popular-badge {
          display: inline-flex;
          margin-bottom: 1rem;
          background: #8F431C;
          color: #fff;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          font-size: 0.68rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
        }
        .package .price {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          color: #7A2E12;
          margin-bottom: 0.35rem;
          font-weight: 800;
          font-family: var(--font-montserrat);
        }
        .package .price small { font-size: 0.8rem; color: #8C7B6E; font-weight: 600; }
        .package .period {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(122, 46, 18, 0.1);
          color: #8C7B6E;
        }
        .package details { display: block; }
        .package ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
          display: grid;
          gap: 0.65rem;
        }
        .package li { display: flex; gap: 0.6rem; align-items: flex-start; line-height: 1.5; }
        .package li svg { color: #7A2E12; margin-top: 0.2rem; flex-shrink: 0; }
        .package summary,
        .faq-item summary {
          list-style: none;
          cursor: pointer;
        }
        .package summary::-webkit-details-marker,
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-list {
          display: grid;
          gap: 1rem;
          max-width: 760px;
          margin: 0 auto;
        }
        .faq-item summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.25rem;
          font-weight: 700;
        }
        .faq-item p { margin: 0; padding: 0 1.25rem 1.25rem; }
        .quote-band {
          background: #1A1615;
          text-align: center;
          padding: 5rem 0;
          margin: 5rem 0;
        }
        .quote-band blockquote {
          color: #F6EEE2;
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.05;
          margin: 0 auto 1rem;
          max-width: 900px;
        }
        .cta-band { text-align: center; padding: 0 0 5rem; }
        .cta-band .box {
          background: #191513;
          color: #F6EEE2;
          border-radius: 28px;
          padding: 3rem 2rem;
        }
        .cta-band h2 {
          color: #F6EEE2;
          margin-bottom: 1rem;
          font-size: clamp(2rem, 4vw, 3.2rem);
        }
        .cta-band p { color: rgba(246, 238, 226, 0.72); max-width: 700px; margin: 0 auto 1.75rem; }
        @media (max-width: 768px) {
          .hero { padding-top: 1rem; }
          .hero-visual { min-height: 360px; }
          .package.popular { transform: none; }
        }
      ` }} />

      <section className="hero" id="main">
        <div className="shell">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Social media agency · Venray</span>
              <h1 className="headline">Social media hoeft niet <em>ingewikkeld</em> te zijn.</h1>
              <p className="sub">Yomarra neemt het volledige proces uit handen - van strategie tot content en community. Jij blijft ondernemen. Wij zorgen voor de groei.</p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-vol">Plan een gratis gesprek <FaArrowRight /></Link>
                <Link href="/diensten" className="btn btn-lijn">Bekijk onze diensten</Link>
              </div>
            </div>
            <div className="hero-visual">
              <img src="/hero-social-illustration.svg" alt="Yomarra social media illustratie" />
              <div className="hero-badge"><b>★ 5/5</b><span>Altijd impact</span></div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className="trust-grid">
              <div className="trust-item"><b>&lt; 24u</b> reactie op elke aanvraag</div>
              <div className="trust-item"><b>1</b> vast aanspreekpunt, geen tussenlaag</div>
              <div className="trust-item"><b>Reels first</b> gebouwd voor het algoritme</div>
              <div className="trust-item"><b>Maandelijks</b> rapportage &amp; bijsturing</div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Strategie</span><span className="punt">◆</span><span>Content creatie</span><span className="punt">◆</span><span>Reels &amp; TikTok</span><span className="punt">◆</span><span>Community management</span><span className="punt">◆</span><span>Branding</span><span className="punt">◆</span><span>Meetbare groei</span><span className="punt">◆</span>
          <span>Strategie</span><span className="punt">◆</span><span>Content creatie</span><span className="punt">◆</span><span>Reels &amp; TikTok</span><span className="punt">◆</span><span>Community management</span><span className="punt">◆</span><span>Branding</span><span className="punt">◆</span><span>Meetbare groei</span><span className="punt">◆</span>
        </div>
      </div>

      <section id="diensten" style={{ padding: '5rem 0' }}>
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">Wat we doen</span>
            <h2>Wat Yomarra <em>doet</em></h2>
            <p>Wij nemen het volledige proces uit handen: van strategie tot creatie en publicatie. We helpen jouw merk groeien met doordachte content.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="visual" style={{ background: service.accent }}>
                  <service.icon aria-hidden="true" />
                </div>
                <div className="inhoud">
                  <span className="nr">— {service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link className="link" href={service.href}>Check it out <FaArrowRight style={{ fontSize: '0.85rem' }} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pakketten" style={{ padding: '4rem 0', background: '#F3E7D9' }}>
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">Kies jouw pakket</span>
            <h2>Kies jouw <em>pakket</em></h2>
            <p>Transparante prijzen, maximale impact. Alle prijzen zijn exclusief btw.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <a href="/yomarra-offerte-sectie.pdf" download className="btn btn-vol">Download Offerte <FaArrowRight /></a>
          </div>
          <div className="package-grid">
            {packages.map((pkg) => (
              <details key={pkg.title} className={`package ${pkg.popular ? 'popular' : ''}`} open={pkg.popular}>
                {pkg.popular && <span className="popular-badge">Meest gekozen</span>}
                <summary>
                  <span className="nummer">— {pkg.number}</span>
                  <h3>{pkg.title}</h3>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: pkg.popular ? '#F6EEE2' : '#8C7B6E' }}>{pkg.summary}</p>
                  <div className="price">{pkg.price} <small>{pkg.priceMeta}</small></div>
                  <div className="period">{pkg.period}</div>
                  <span className="link" style={{ color: pkg.popular ? '#F7EFE4' : '#8F431C' }}>Bekijk details <FaPlus style={{ fontSize: '0.85rem' }} /></span>
                </summary>
                <div className="package-summary">
                  <ul>
                    {pkg.details.map((item) => (
                      <li key={item}><FaCheckCircle /> <span>{item}</span></li>
                    ))}
                  </ul>
                  <Link href={pkg.href} className={`btn ${pkg.popular ? 'btn-wit' : 'btn-lijn'}`} style={{ width: '100%', justifyContent: 'center' }}>{pkg.popular ? 'START NU →' : 'AANVRAGEN'}</Link>
                </div>
              </details>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', color: '#5B544E' }}>Twijfel je welk pakket past? <Link href="/contact" style={{ color: '#8F431C', fontWeight: 700 }}>Plan een gratis gesprek</Link> - dan kijken we samen wat logisch is voor jouw fase.</p>
        </div>
      </section>

      <section className="quote-band">
        <div className="shell">
          <blockquote>"Yomarra helpt jouw bedrijf groeien met pakkende content, een duidelijke <em>strategie</em> en meetbare impact."</blockquote>
          <cite>Marvin Agyei - Oprichter Yomarra</cite>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <div className="box">
            <h2>Neem contact op of bekijk <em>onze diensten.</em></h2>
            <p>Plan een gratis gesprek en ontdek wat Yomarra voor jouw bedrijf kan betekenen.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link href="/contact" className="btn btn-wit">Neem contact op <FaArrowRight /></Link>
              <Link href="/diensten" className="btn btn-lijn" style={{ borderColor: 'rgba(246,238,226,.3)', color: '#F6EEE2' }}>Bekijk onze diensten</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
