import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { FaBullhorn, FaLayerGroup, FaInstagram, FaLinkedin, FaTiktok, FaSnapchatGhost, FaEnvelope, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
// Global styles are imported in layout.js

export default function Home() {
  return (
    <main style={{position: 'relative'}}>
        {/* Header is now in layout.js */}

        {/* Hero Section */}
        <section id="home" className="hero">
            <div className="container hero-grid">
                <div className="hero-text">
                    <h1>Social media hoeft niet ingewikkeld te zijn om impact te maken.</h1>
                    <p>Wij helpen jouw bedrijf groeien met pakkende content en een duidelijke strategie.</p>
                    <a href="#contact" className="btn">Neem Contact Op</a>
                </div>
                <div className="hero-visuals">
                    <div className="collage-wrapper">
                         {/* Social Media App Cards - Real Images as requested */}
                         
                         {/* Main Card: TikTok */}
                         <div className="collage-card card-large">
                            {/* Standard TikTok Phone Screen Image */}
                            <img src="/tiktok-logo.jpg" alt="TikTok 3D Logo" style={{objectFit: 'cover'}} />
                         </div>

                         {/* Small Card 1: Instagram */}
                         <div className="collage-card card-small-1">
                            <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=400&q=80" alt="Instagram Feed" />
                         </div>

                         {/* Small Card 2: Snapchat */}
                         <div className="collage-card card-small-2">
                             <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=400&q=80" alt="Snapchat" />
                         </div>
                    </div>
                </div>
            </div>
            <div className="hero-wave">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
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
                    {/* Block 1: Wat Yomarra Doet */}
                    <div className="content-card" style={{padding: '2rem', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                        <h3 style={{fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold'}}>Wat Yomarra Doet</h3>
                        <div style={{fontSize: '0.9rem', lineHeight: '1.7', color: '#555'}}>
                            <p>Bij Yomarra zorgen we ervoor dat bedrijven niet langer worstelen met hun social media. Wij nemen het volledige proces uit handen: van strategie tot creatie en publicatie.</p>
                            <p style={{marginTop: '0.8rem'}}>Met pakkende, doordachte content en een duidelijke socialmedia-strategie helpen we jouw merk groeien en zichtbaar worden bij de juiste doelgroep. We vertalen jouw verhaal naar een consistente en herkenbare uitstraling die niet alleen opvalt, maar ook écht past bij de identiteit en waarden van jouw merk.</p> 
                            <p style={{marginTop: '0.8rem'}}>Zo wordt social media geen last meer, maar een krachtig middel om verbinding, vertrouwen en groei te realiseren.</p>
                        </div>
                    </div>

                    {/* Block 2: Mijn Visie */}
                    <div className="content-card" style={{padding: '2rem', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                        <h3 style={{fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold'}}>Mijn Visie</h3>
                        <div style={{fontSize: '0.9rem', lineHeight: '1.7', color: '#555'}}>
                            <p>Mijn visie is een wereld waarin elk bedrijf zijn unieke verhaal niet alleen vertelt, maar ook laat voelen op social media. Een wereld waarin merken dominant zichtbaar zijn voor de juiste doelgroep, impact maken en uitgroeien tot sterke online autoriteiten.</p>
                            <p style={{marginTop: '0.8rem'}}>Met gedurfde, creatieve en strategisch slimme content wordt social media een motor voor groei, herkenning en blijvende invloed. Geen bijzaak, maar een essentieel onderdeel van succes.</p>
                        </div>
                    </div>

                    {/* Block 3: Wat Klanten Krijgen */}
                    <div className="content-card" style={{padding: '2rem', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                        <h3 style={{fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', color: '#8B4513', fontWeight: 'bold'}}>Wat Klanten Van Mij Krijgen</h3>
                        <div style={{fontSize: '0.9rem', lineHeight: '1.7', color: '#555'}}>
                            <p>Als klant van Yomarra krijg je een social media strategie op maat, creatieve content die opvalt, en een consistente online aanwezigheid die je bedrijf laat groeien.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing / Packages Section */}
        <section id="pricing" className="section services">
            <div className="container">
                <div className="section-header">
                    <h2>Kies jouw Pakket</h2>
                    <p>Transparante prijzen, maximale impact. Alle prijzen zijn exclusief btw.</p>
                </div>
                {/* Custom Grid for 3 Cards */}
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
                    
                    {/* Card 1: Start */}
                    <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%', position: 'relative'}}>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80" alt="Start Pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
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
                                <li style={{marginBottom: '0.4rem'}}>✓ Merkidentiteit & Strategie</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Visuele & Tekstuele Basis</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Content Toolkit</li>
                            </ul>
                        </div>
                         
                        <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Inclusief branding analyse.<br/>
                            <strong>Looptijd:</strong> 1 - 2 maanden
                        </div>
                        <a href="/?plan=start#contact" className="btn" style={{width: '100%', textAlign: 'center', backgroundColor: '#333', marginTop: '1.5rem'}}>Aanvragen</a>
                    </div>

                    {/* Card 2: Groei */}
                    <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%', border: '2px solid #8B4513', position: 'relative'}}>
                        <div style={{position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#8B4513', color: '#fff', padding: '2px 12px', fontSize: '0.75rem', borderRadius: '4px', textTransform: 'uppercase', zIndex: 10}}>Populair</div>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80" alt="Groei Pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
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
                                <li style={{marginBottom: '0.4rem'}}>✓ Focus op Groei & Trends</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Community & Sales</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Data-gedreven Resultaat</li>
                            </ul>
                        </div>
                        
                         <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Meer volgers & conversie.<br/>
                            <strong>Looptijd:</strong> 3 of 6 maanden
                        </div>
                        <a href="/?plan=groei#contact" className="btn" style={{width: '100%', textAlign: 'center', marginTop: '1.5rem'}}>Aanvragen</a>
                    </div>

                    {/* Card 3: All-in */}
                     <div className="service-card" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{width: '100%', height: '180px', position: 'relative', marginBottom: '1.5rem'}}>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="All-in Pakket" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
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
                                <li style={{marginBottom: '0.4rem'}}>✓ Full-Service Beheer</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Dominantie op Video</li>
                                <li style={{marginBottom: '0.4rem'}}>✓ Actief Community Management</li>
                            </ul>
                        </div>
                        
                        <div style={{borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.85rem', color: '#888'}}>
                            Complete ontzorging.<br/>
                            <strong>Looptijd:</strong> Minimaal 6 maanden
                        </div>
                        <a href="/?plan=all-in#contact" className="btn" style={{width: '100%', textAlign: 'center', backgroundColor: '#333', marginTop: '1.5rem'}}>Aanvragen</a>
                    </div>

                </div>
            </div>
        </section>

        {/* Contact Section Restored - Simplified */}
        <section id="contact" style={{padding: '5rem 0', backgroundColor: '#fff'}}>
            <div className="container" style={{maxWidth: '800px'}}>
                 <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h2 style={{fontFamily: 'var(--font-montserrat), sans-serif', color: '#333', marginBottom: '1rem'}}>Start jouw groei vandaag</h2>
                    <p style={{color: '#666', fontSize: '1.1rem'}}>Vul het formulier in en we spreken elkaar snel.</p>
                 </div>
                 <ContactForm />
            </div>
        </section>

        {/* Footer Dark Theme - Matching User Image */}
        <footer style={{backgroundColor: '#111', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem', fontSize: '0.9rem'}}>
            <div className="container">
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem'}}>
                    
                    {/* Col 1: Logo & Slogan */}
                    <div>
                        <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '1px', color: '#D2B48C'}}>YOMARRA</h3>
                        <p style={{color: '#888', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px'}}>Social Media Agency</p>
                    </div>

                    {/* Col 2: Services */}
                    <div>
                        <h4 style={{fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px', color: '#D2B48C'}}>Diensten</h4>
                        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                            <li><a href="#services" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Social Media Strategie</a></li>
                            <li><a href="#services" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Content Creatie</a></li>
                            <li><a href="#services" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Branding</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Informatie */}
                    <div>
                        <h4 style={{fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px', color: '#D2B48C'}}>Informatie</h4>
                        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                            <li><a href="#about" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Over Ons</a></li>
                            <li><span style={{color: '#aaa'}}>KVK: 90645561</span></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h4 style={{fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px', color: '#D2B48C'}}>Contact</h4>
                         <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                            <li><a href="mailto:infoyomarra@gmail.com" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>infoyomarra@gmail.com</a></li>
                            <li><span style={{color: '#aaa'}}>Venray, Nederland</span></li>
                        </ul>
                    </div>
                </div>

                {/* Divider Line */}
                <div style={{borderTop: '1px solid #333', margin: '3rem 0'}}></div>

                {/* Bottom Row: Socials & Copyright */}
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem'}}>
                    
                    {/* Social Icons (Circles) */}
                    <div style={{display: 'flex', gap: '1rem'}}>
                         <a href="https://www.instagram.com/yomarra.co?igsh=MWplOG81eGhsczNh&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s'}}>
                            <FaInstagram size={18} />
                         </a>
                         <a href="https://www.tiktok.com/@yomarra.co?_r=1&_t=ZG-93BQ7kPSGDA" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s'}}>
                            <FaTiktok size={16} />
                         </a>
                    </div>
                    
                    <div style={{color: '#555', fontSize: '0.8rem'}}>
                        &copy; 2026 Yomarra. Alle rechten voorbehouden.
                    </div>
                </div>
            </div>
        </footer>
    </main>
  );
}
