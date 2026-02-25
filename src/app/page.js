import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { FaBullhorn, FaLayerGroup, FaInstagram, FaLinkedin, FaTiktok, FaSnapchatGhost, FaEnvelope, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
// Global styles are imported in layout.js

export default function Home() {
  return (
    <main style={{position: 'relative'}}>
        {/* Header is now in layout.js */}

        {/* Hero Section */}
        <section id="home" className="hero" style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 style={{color: '#fff', fontSize: '3.5rem', marginBottom: '1.5rem'}}>Social media hoeft niet ingewikkeld te zijn om impact te maken.</h1>
                    <p style={{color: '#eee', fontSize: '1.25rem', marginBottom: '2rem'}}>Wij helpen jouw bedrijf groeien met pakkende content en een duidelijke strategie.</p>
                    <a href="/contact" className="btn" style={{background: '#8B4513', color: '#fff', border: 'none'}}>Neem Contact Op</a>
                </div>
            </div>
            <div className="hero-wave" style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%'}}>
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', width: '100%', height: 'auto'}}>
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about" style={{position: 'relative'}}>
            {/* Quote Decoration */}
            <div style={{
                textAlign: 'center', 
                marginBottom: '3rem', 
                padding: '0 1rem'
            }}>
                <h3 style={{
                    fontFamily: 'var(--font-dancing-script), cursive', 
                    color: '#8B4513', 
                    fontSize: '2rem', 
                    fontWeight: '400',
                    lineHeight: '1.4'
                }}>
                    "Social media hoeft niet ingewikkeld te zijn om impact te maken."
                </h3>
            </div>

            <div className="container">
                <div className="triangle-grid">
                    {/* Block 1: Wat Yomarra doet */}
                    <div className="content-card" style={{fontFamily: 'var(--font-montserrat), sans-serif'}}>
                        <h3 className="card-title" style={{marginBottom: '1rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold'}}>Wat Yomarra doet</h3>
                        <div className="card-text" style={{lineHeight: '1.7', color: '#555'}}>
                            <p>Bij Yomarra zorgen we ervoor dat bedrijven niet langer worstelen met hun social media. Wij nemen het volledige proces uit handen: van strategie tot creatie en publicatie.</p>
                            <p style={{marginTop: '0.8rem'}}>Met pakkende, doordachte content en een duidelijke socialmedia-strategie helpen we jouw merk groeien en zichtbaar worden bij de juiste doelgroep. We vertalen jouw verhaal naar een consistente en herkenbare uitstraling die niet alleen opvalt, maar ook écht past bij de identiteit en waarden van jouw merk.</p> 
                            <p style={{marginTop: '0.8rem'}}>Zo wordt social media geen last meer, maar een krachtig middel om verbinding, vertrouwen en groei te realiseren.</p>
                        </div>
                    </div>

                    {/* Block 2: Mijn visie */}
                    <div className="content-card" style={{fontFamily: 'var(--font-montserrat), sans-serif'}}>
                        <h3 className="card-title" style={{marginBottom: '1rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold'}}>Mijn visie</h3>
                        <div className="card-text" style={{lineHeight: '1.7', color: '#555'}}>
                            <p>Mijn visie is een wereld waarin elk bedrijf zijn unieke verhaal niet alleen vertelt, maar ook laat voelen op social media. Een wereld waarin merken dominant zichtbaar zijn voor de juiste doelgroep, impact maken en uitgroeien tot sterke online autoriteiten.</p>
                            <p style={{marginTop: '0.8rem'}}>Met gedurfde, creatieve en strategisch slimme content wordt social media een motor voor groei, herkenning en blijvende invloed. Geen bijzaak, maar een essentieel onderdeel van succes.</p>
                        </div>
                    </div>

                    {/* Block 3: Wat klanten van mij krijgen */}
                    <div className="content-card" style={{fontFamily: 'var(--font-montserrat), sans-serif'}}>
                        <h3 className="card-title" style={{marginBottom: '1rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold'}}>Wat klanten van mij krijgen</h3>
                        <div className="card-text" style={{lineHeight: '1.7', color: '#555'}}>
                            <p>Als klant van Yomarra krijg je een social media strategie op maat, creatieve content die opvalt, en een consistente online aanwezigheid die je bedrijf laat groeien.</p>
                            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc'}}>
                                <li style={{marginBottom: '0.5rem'}}><strong>Persoonlijke aandacht:</strong> We kijken echt naar wat jouw merk uniek maakt.</li>
                                <li style={{marginBottom: '0.5rem'}}><strong>Creatieve concepten:</strong> Geen standaard posts, maar content die de aandacht trekt.</li>
                                <li style={{marginBottom: '0.5rem'}}><strong>Meetbare resultaten:</strong> We sturen op groei, engagement en conversie.</li>
                                <li><strong>Volledige ontzorging:</strong> Jij focust op je bedrijf, wij op je online succes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing / Packages Section */}
        <section id="pricing" className="section services">
            <div className="container">
                <div className="section-header">
                    <h2>Kies jouw pakket</h2>
                    <p>Transparante prijzen, maximale impact. Alle prijzen zijn exclusief btw.</p>
                </div>
                {/* Custom Grid for 3 Cards */}
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem'}}>
                    
                    {/* Card 1: Start */}
                    <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%', position: 'relative'}}>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80" alt="Start pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                        <div style={{marginBottom: '0.5rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold', fontSize: '0.9rem'}}>Start</div>
                        <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>€250</h3>
                        <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>Voor ondernemers die professioneel zichtbaar willen worden.</p>
                        
                        <div style={{fontSize: '0.95rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1}}>
                            Leg de volledige fundering voor jouw merk. We creëren een ijzersterke identiteit die jouw ideale klant direct aanspreekt.
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>De kern:</strong>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.9rem'}}>
                                <li style={{marginBottom: '0.4rem'}}>✓ Merkidentiteit & strategie</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Visuele & tekstuele basis</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Content toolkit</li>
                            </ul>
                        </div>
                         
                        <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Inclusief branding analyse.<br/>
                            <strong>Looptijd:</strong> 1 - 2 maanden
                        </div>
                        <a href="/contact?plan=start" className="btn" style={{width: '100%', textAlign: 'center', backgroundColor: '#333', marginTop: '1.5rem'}}>Aanvragen</a>
                    </div>

                    {/* Card 2: Groei */}
                    <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#8B4513', color: '#fff', padding: '2px 12px', fontSize: '0.75rem', borderRadius: '4px', textTransform: 'uppercase', zIndex: 10}}>Populair</div>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80" alt="Groei pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                        <div style={{marginBottom: '0.5rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold', fontSize: '0.9rem'}}>Groei</div>
                        <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>€499<span style={{fontSize: '1rem', color: '#666', fontWeight: 'normal'}}>/mnd</span></h3>
                        <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>Voor ondernemers die willen groeien in bereik, DM’s en omzet.</p>
                        
                        <div style={{fontSize: '0.95rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1}}>
                            Focus op resultaat. We domineren het algoritme met slimme Reels & TikTok strategieën en bouwen je community.
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>De kern:</strong>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.9rem'}}>
                                <li style={{marginBottom: '0.4rem'}}>✓ Focus op groei & trends</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Community & sales</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Data-gedreven resultaat</li>
                            </ul>
                        </div>
                        
                         <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Meer volgers & conversie.<br/>
                            <strong>Looptijd:</strong> 3 of 6 maanden
                        </div>
                        <a href="/contact?plan=groei" className="btn" style={{width: '100%', textAlign: 'center', marginTop: '1.5rem'}}>Aanvragen</a>
                    </div>

                    {/* Card 3: All-in */}
                     <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="All-in pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                        <div style={{marginBottom: '0.5rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold', fontSize: '0.9rem'}}>All-in</div>
                        <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>€1000<span style={{fontSize: '1rem', color: '#666', fontWeight: 'normal'}}>/mnd</span></h3>
                        <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>Voor ondernemers die social media volledig willen uitbesteden.</p>

                        <div style={{fontSize: '0.95rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1}}>
                            Geen zorgen meer over je online aanwezigheid. Wij nemen het stuur over voor maximale resultaten en business impact.
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>De kern:</strong>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.9rem'}}>
                                <li style={{marginBottom: '0.4rem'}}>✓ Full-service beheer</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Dominantie op video</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Actief community management</li>
                            </ul>
                        </div>
                        
                        <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Complete ontzorging.<br/>
                            <strong>Looptijd:</strong> Minimaal 6 maanden
                        </div>
                        <a href="/contact?plan=all-in" className="btn" style={{width: '100%', textAlign: 'center', backgroundColor: '#333', marginTop: '1.5rem'}}>Aanvragen</a>
                    </div>

                </div>
            </div>
        </section>
    </main>
  );
}
