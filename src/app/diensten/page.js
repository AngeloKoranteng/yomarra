"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaPlus } from 'react-icons/fa';

const serviceCards = [
  {
    id: 'strategie',
    number: '01',
    title: 'Strategie',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Helderheid eerst',
    intro: 'Zonder plan geen succes. We bepalen je positionering, doelgroep, contentpilaren en tone of voice.',
    detail: 'We starten met een scherp gesprek over je merk, je aanbod en je ideale klant. Daarna bouwen we een strategie die niet alleen mooi klinkt, maar ook echt richting geeft aan content, promotie en groei.',
    bullets: [
      'Positionering & doelgroep',
      'Contentpilaren & planning',
      'Tone of voice & merkverhaal',
      'Contentflow die past bij je doelen',
    ],
    href: '/strategie',
    cta: 'Meer over strategie',
  },
  {
    id: 'content',
    number: '02',
    title: 'Content creatie',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Opvallen in de feed',
    intro: 'Reels, TikToks, visuals en teksten die niet alleen mooi zijn, maar ook converteren.',
    detail: 'We maken content die past bij jouw merk en bij het platform. Van hooks en captions tot visuals en korte videoformats: alles is gebouwd om aandacht vast te houden en actie uit te lokken.',
    bullets: [
      'Reels & TikTok formats',
      'Captions, hooks & teksten',
      'Visuals en template-richtlijnen',
      'Publicatie en optimalisatie',
    ],
    href: '/content',
    cta: 'Meer over content',
  },
  {
    id: 'promotie',
    number: '03',
    title: 'Branding & promotie',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Zichtbaarheid die blijft hangen',
    intro: 'Doelgerichte promotie die jouw merk laat opvallen en klanten oplevert.',
    detail: 'Hier zorgen we voor de vertaalslag van bereik naar resultaat. Denk aan community management, DM-opvolging, maandelijkse sturing en een uitstraling die echt bij je bedrijf past.',
    bullets: [
      'Community management',
      'DM-opvolging & leadflow',
      'Maandelijkse rapportage',
      'Bijsturing op basis van data',
    ],
    href: '/promotie',
    cta: 'Meer over promotie',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Helderheid',
    text: 'We starten altijd met een gratis gesprek. Wie ben je, wat wil je bereiken en waar ligt de focus?',
  },
  {
    number: '02',
    title: 'Strategie',
    text: 'Op basis daarvan bouwen we een plan met positionering, contentpilaren en een duidelijke flow.',
  },
  {
    number: '03',
    title: 'Executie',
    text: 'We maken en publiceren content: Reels, TikTok, visuals en teksten die passen bij het algoritme.',
  },
  {
    number: '04',
    title: 'Bijsturing',
    text: 'Elke maand meten we wat werkt en sturen we bij op bereik, engagement en leads.',
  },
];

const faqs = [
  {
    question: 'Voor wie is Yomarra?',
    answer: 'Voor ondernemers die social media serieus willen inzetten zonder zelf alles te moeten bedenken of uitvoeren.',
  },
  {
    question: 'Op welke platformen zijn jullie actief?',
    answer: 'We richten ons vooral op Instagram, TikTok en LinkedIn, afhankelijk van wat jouw bedrijf het meeste oplevert.',
  },
  {
    question: 'Hoe snel zie ik resultaat?',
    answer: 'Dat hangt af van je startpunt, maar we richten ons op een duidelijke basis en meetbare groei vanaf de eerste weken.',
  },
  {
    question: 'Zit ik vast aan een lang contract?',
    answer: 'Nee, we werken met duidelijke afspraken per pakket en kijken altijd wat passend is voor jouw situatie.',
  },
  {
    question: 'Wat heb je van mij nodig om te starten?',
    answer: 'Vooral jouw verhaal, je doelen en toegang tot de belangrijkste kanalen. De rest bouwen wij samen met je op.',
  },
];

export default function Diensten() {
  const [activeService, setActiveService] = useState(serviceCards[0]);

  return (
    <main style={{ backgroundColor: '#F2E8DA', color: '#1A1A1A', paddingBottom: '6rem', overflowX: 'hidden', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .section-shell {
          width: min(1120px, calc(100% - 3rem));
          margin: 0 auto;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
        }
        .service-card {
          border: 0;
          padding: 0;
          border-radius: 24px;
          overflow: hidden;
          background: #FFFDF8;
          box-shadow: 0 12px 30px rgba(26, 17, 16, 0.08);
          text-align: left;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, outline-color 0.25s ease;
          outline: 1px solid rgba(122, 46, 18, 0.08);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(26, 17, 16, 0.12);
        }
        .service-card.active {
          outline-color: rgba(122, 46, 18, 0.35);
          box-shadow: 0 18px 36px rgba(122, 46, 18, 0.14);
        }
        .service-card-image {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #E7D7C4;
        }
        .service-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .service-card-body {
          padding: 1.5rem 1.5rem 1.75rem;
        }
        .service-card-number {
          display: inline-block;
          color: #A85A31;
          font-size: 0.85rem;
          letter-spacing: 2px;
          margin-bottom: 0.75rem;
        }
        .service-card-body h2,
        .panel-copy h2,
        .process-title,
        .faq-title {
          font-family: var(--font-montserrat);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #191513;
        }
        .service-card-body h2 {
          font-size: 1.55rem;
          margin-bottom: 0.8rem;
        }
        .service-card-body p,
        .panel-copy p,
        .process-grid p,
        .faq-answer {
          color: #5B544E;
          line-height: 1.75;
        }
        .detail-panel {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 0;
          border-radius: 28px;
          overflow: hidden;
          background: #FFFDF8;
          box-shadow: 0 12px 30px rgba(26, 17, 16, 0.08);
          border: 1px solid rgba(122, 46, 18, 0.08);
        }
        .panel-copy {
          padding: 2.5rem;
        }
        .panel-copy h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1rem;
        }
        .panel-media {
          min-height: 320px;
          background: #D9C4AE;
        }
        .panel-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .service-list {
          list-style: none;
          margin: 1.5rem 0 2rem;
          padding: 0;
          display: grid;
          gap: 0.8rem;
        }
        .service-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          color: #2F2A26;
          line-height: 1.5;
        }
        .service-list svg,
        .faq-toggle svg {
          color: #A85A31;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: #8F431C;
          color: #fff;
          padding: 1rem 1.5rem;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 22px rgba(143, 67, 28, 0.22);
        }
        .step-card {
          background: #FFFDF8;
          border-radius: 22px;
          padding: 1.75rem;
          box-shadow: 0 10px 24px rgba(26, 17, 16, 0.06);
          border: 1px solid rgba(122, 46, 18, 0.08);
        }
        .step-number {
          font-family: var(--font-montserrat);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: transparent;
          -webkit-text-stroke: 1px #A85A31;
          line-height: 1;
          margin-bottom: 0.8rem;
        }
        .faq-item {
          background: #FFFDF8;
          border-radius: 18px;
          border: 1px solid rgba(122, 46, 18, 0.08);
          box-shadow: 0 10px 24px rgba(26, 17, 16, 0.05);
          overflow: hidden;
        }
        .faq-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.1rem 1.25rem;
          border: 0;
          background: transparent;
          color: #1B1715;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          text-align: left;
        }
        .faq-answer {
          padding: 0 1.25rem 1.25rem;
          margin: 0;
        }
        .cta-box {
          background: #1A1615;
          color: #F6EEE2;
          border-radius: 28px;
          padding: 3rem 2rem;
          text-align: center;
        }
        .cta-box h2 {
          color: #F6EEE2;
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin-bottom: 1rem;
        }
        .cta-box p {
          color: rgba(246, 238, 226, 0.72);
          max-width: 650px;
          margin: 0 auto 2rem;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: #F7EFE4;
          color: #8F431C;
          padding: 1rem 1.5rem;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .panel-copy,
          .cta-box {
            padding: 1.5rem;
          }
        }
      `}} />

      <section style={{ backgroundColor: '#F3E7D9', padding: '8rem 2rem 5rem', textAlign: 'center', color: '#FDFAF6', position: 'relative' }}>
        <div className="section-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ color: '#8F431C', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>
            Wat we doen
          </p>
          <h1 style={{ fontSize: 'clamp(2.7rem, 6vw, 4.8rem)', lineHeight: 1.05, fontFamily: 'var(--font-montserrat)', fontWeight: '800', color: '#191513', marginBottom: '1.5rem' }}>
            Eén partner voor je <em style={{ fontFamily: 'var(--font-dancing-script)', fontStyle: 'normal', color: '#8F431C' }}>volledige</em> social media.
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#5B544E', maxWidth: '760px', margin: '0 auto' }}>
            Geen losse posts, geen copy-paste strategie. Alles wat je merk nodig heeft om zichtbaar te zijn voor de juiste doelgroep, zit in één duidelijke aanpak.
          </p>
        </div>

        <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
            <path fill="#F2E8DA" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      <section style={{ padding: '4.5rem 0 2.5rem' }}>
        <div className="section-shell">
          <div className="service-grid">
            {serviceCards.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`service-card ${activeService.id === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service)}
              >
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card-body">
                  <span className="service-card-number">— {service.number}</span>
                  <h2>{service.title}</h2>
                  <p>{service.intro}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: '#8F431C', fontWeight: 700 }}>
                    Bekijk details <FaArrowRight fontSize="0.85rem" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '1.5rem 0 4rem' }}>
        <div className="section-shell">
          <div className="detail-panel">
            <div className="panel-copy">
              <p style={{ color: '#8F431C', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>
                {activeService.eyebrow}
              </p>
              <h2>{activeService.title}</h2>
              <p style={{ marginBottom: '1.5rem' }}>{activeService.detail}</p>
              <ul className="service-list">
                {activeService.bullets.map((bullet) => (
                  <li key={bullet}>
                    <FaCheckCircle />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link href={activeService.href} className="action-link">
                {activeService.cta} <FaArrowRight />
              </Link>
            </div>
            <div className="panel-media">
              <img src={activeService.image} alt={activeService.title} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="section-shell">
          <p style={{ color: '#8F431C', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>
            Zo werken we
          </p>
          <h2 className="process-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', marginBottom: '2rem' }}>
            Van helderheid naar groei, in vier stappen.
          </h2>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {processSteps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontFamily: 'var(--font-montserrat)' }}>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="section-shell">
          <p style={{ color: '#8F431C', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>
            Veelgestelde vragen
          </p>
          <h2 className="faq-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '2rem' }}>
            Goed om te weten.
          </h2>
          <div style={{ display: 'grid', gap: '1rem', maxWidth: '760px' }}>
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary className="faq-toggle">
                  <span>{faq.question}</span>
                  <FaPlus />
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 2rem' }}>
        <div className="section-shell">
          <div className="cta-box">
            <h2>Jij blijft ondernemen. Wij zorgen voor de groei.</h2>
            <p>Plan een gratis gesprek en ontdek binnen 30 minuten wat Yomarra voor jouw bedrijf kan betekenen.</p>
            <Link href="/contact" className="cta-button">
              Plan een gratis gesprek <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
