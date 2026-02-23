export default function ProjectDetails() {
  return (
    <main>
      {/* Page Header / Hero - Simplified for now or matching theme */}
      <section className="page-header">
        <div className="container">
          <h1>Rebranding & Content Strategie</h1>
          <p>Home / Project Details</p>
        </div>
        <div className="hero-wave" style={{ bottom: '-1px' }}>
             <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '80px', display: 'block'}}>
                <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
            </svg>
        </div>
      </section>

      <section className="section project-details">
        <div className="container">
          {/* Main big image */}
          <div className="project-banner-image">
             {/* Placeholder for project image */}
             <div style={{width: '100%', height: '400px', backgroundColor: '#e6d2c4', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b3a2b', fontWeight: 'bold', fontSize: '1.5rem'}}>
                Campagne Visual
             </div>
          </div>

          <div className="project-content-grid">
            {/* Sidebar / Info */}
            <aside className="project-sidebar">
              <div className="info-box">
                <h3>Project Info</h3>
                <ul className="info-list">
                  <li>
                    <strong>Klant:</strong>
                    <span>De Smaakboutique</span>
                  </li>
                  <li>
                    <strong>Datum:</strong>
                    <span>Maart 2024</span>
                  </li>
                  <li>
                    <strong>Diensten:</strong>
                    <span>Social Media Strategie, Content Creatie</span>
                  </li>
                  <li>
                    <strong>Resultaat:</strong>
                    <span>+200% Engagement</span>
                  </li>
                </ul>
              </div>
              
              <div className="info-box help-box">
                 <h3>Hulp Nodig?</h3>
                 <p>Laat ons je helpen om jouw bedrijf online te laten groeien met impact.</p>
                 <a href="/#contact" className="btn-small">Neem Contact Op</a>
              </div>
            </aside>

            {/* Main Details */}
            <div className="project-description">
              <h2>Van Onzichtbaar naar Onmisbaar</h2>
              <p>
                Voor De Smaakboutique, een high-end delicatessezaak, was de uitdaging duidelijk: ze hadden prachtige producten, maar hun online aanwezigheid weerspiegelde niet de kwaliteit die ze in de winkel boden.
                Yomarra is aan de slag gegaan om het merkverhaal te vertalen naar een visueel aantrekkelijke social media feed die de zintuigen prikkelt.
              </p>
              <p>
                Onze aanpak bestond uit een volledige visuele rebranding van hun Instagram en TikTok kanalen, gericht op 'food aesthetics' en storytelling. 
                We hebben niet alleen posts gemaakt, maar een community opgebouwd rondom de passie voor goed eten.
              </p>

              <blockquote>
                "Social media is meer dan alleen plaatjes posten; het is het vertalen van passie naar een digitaal podium."
              </blockquote>

              <h3>De Uitdaging & Oplossing</h3>
              <p>
                Het grootste obstakel was het gebrek aan consistentie en een duidelijke contentkalender. Klanten wisten niet wanneer ze nieuwe producten konden verwachten.
                Door een strategische contentplanning te implementeren en samen te werken met micro-influencers in de food-branche, hebben we het bereik organisch laten groeien.
              </p>
              <p>
                Het resultaat was verbluffend: binnen drie maanden verdubbelde de engagement rate en zagen we een directe toename in webshop-bestellingen vanuit social media kanalen.
              </p>
              
              <div className="project-gallery-grid">
                 <div className="gallery-item" style={{height: '250px', background: '#f9f3f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbaa9e'}}>Visual 1</div>
                 <div className="gallery-item" style={{height: '250px', background: '#f9f3f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbaa9e'}}>Visual 2</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
