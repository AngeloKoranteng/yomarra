const fs = require('fs');
let file = 'src/app/page.js';
let content = fs.readFileSync(file, 'utf8');

// Replace Hero Section
const heroRegex = /\{\/\*\s*Hero Section\s*\*\/\}.*?<\/section>/s;
const newHero = `{/* Hero Section */}
        <section id="home" className="hero" style={{ position: 'relative', background: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat", minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '4rem' }}>
            <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.55)' }}></div>
            <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto', padding: '40px 24px', color: '#fff', textAlign: 'center' }}>
                <span className="badge" style={{ display: 'inline-block', background: '#8B3A0F', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>? 5/5 — Altijd impact</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1.2', marginBottom: '20px', fontFamily: 'var(--font-montserrat)', fontWeight: 'bold' }}>Social media hoeft niet<br/>ingewikkeld te zijn.</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '32px', lineHeight: '1.6' }}>Yomarra helpt jouw bedrijf groeien met pakkende content, een duidelijke strategie en meetbare impact.</p>
                <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <Link href="/contact" className="btn-primary" style={{ background: '#8B3A0F', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', transition: 'opacity 0.3s' }}>Neem contact op &rarr;</Link>
                    <Link href="/diensten" className="btn-secondary" style={{ border: '2px solid #fff', color: '#fff', padding: '12px 26px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', backgroundColor: 'transparent', transition: 'background 0.3s' }}>Bekijk onze diensten</Link>
                </div>
            </div>

            {/* Bottom Wave to White */}
            <div style={{position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 1}}>
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '80px'}}>
                    <path fill="#ffffff" d="M0,50 L1440,0 L1440,100 L0,100 Z"></path>
                </svg>
            </div>
        </section>`;

content = content.replace(heroRegex, newHero);

// Replace Card 1
content = content.replace(
    /Wat Yomarra doet<\/h3>.*?<\/p>/s,
    `Alles uit handen</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                                Van strategie tot publicatie — wij regelen het. Jij focust op je bedrijf, wij zorgen voor de content en de groei.
                            </p>`
).replace(
    /<Link href="\/over-ons".*?Check it Out/s,
    `<Link href="/over-ons" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                                Over Yomarra`
);

// Replace Card 2
content = content.replace(
    /Mijn visie<\/h3>.*?<\/p>/s,
    `Jouw verhaal telt</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                                Elk bedrijf heeft een uniek verhaal. Wij zorgen dat jouw merk zichtbaar is voor de juiste mensen, op het juiste moment.
                            </p>`
).replace(
    /<Link href="\/over-ons".*?Check it Out/s, // We'll just replace the second 'Check it Out' safely by chaining or using match and slice. Actually regex is tricky since the first is replaced. Wait, let me replace it by catching the whole block.
    // I will write a safer regex for links.
    `<Link href="/over-ons" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                                Onze visie`
);

// Better to replace the whole Solutions section. Let's do that for safety.
const solutionsRegex = /\{\/\*\s*Over Ons \/ Solutions Section\s*\/\}.*?\{\/\*\s*Pricing \/ Packages Section\s*\*\/\}/s;
const newSolutions = `{/* Over Ons / Solutions Section */}
        <section id="about" style={{backgroundColor: '#fff', padding: '6rem 0'}}>
            <div className="container">
                <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                    <h2 style={{fontFamily: 'var(--font-montserrat)', color: '#111', fontSize: '3rem', fontWeight: 'bold'}}>Wat we doen</h2>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
                    {/* Card 1 */}
                    <div className="floating-card" style={{borderRadius: '24px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{height: '180px', backgroundColor: '#FCD553', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <FaLaptop style={{fontSize: '5rem', color: '#fff'}} />
                        </div>
                        <div style={{padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111'}}>Alles uit handen</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1}}>
                                Van strategie tot publicatie — wij regelen het. Jij focust op je bedrijf, wij zorgen voor de content en de groei.
                            </p>
                            <Link href="/over-ons" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginTop: 'auto'}}>
                                Over Yomarra <FaArrowRight fontSize="0.8rem" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="floating-card" style={{borderRadius: '24px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{height: '180px', backgroundColor: '#8ea6ff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <FaBullseye style={{fontSize: '5rem', color: '#fff'}} />
                        </div>
                        <div style={{padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111'}}>Jouw verhaal telt</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1}}>
                                Elk bedrijf heeft een uniek verhaal. Wij zorgen dat jouw merk zichtbaar is voor de juiste mensen, op het juiste moment.
                            </p>
                            <Link href="/over-ons" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginTop: 'auto'}}>
                                Onze visie <FaArrowRight fontSize="0.8rem" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="floating-card" style={{borderRadius: '24px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <div style={{height: '180px', backgroundColor: '#ff9a76', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <FaComments style={{fontSize: '5rem', color: '#fff'}} />
                        </div>
                        <div style={{padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111'}}>Resultaten die tellen</h3>
                            <p style={{color: '#555', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1}}>
                                Geen vage beloftes. Maandelijkse rapportages, meetbare groei en content die bezoekers omzet in klanten.
                            </p>
                            <Link href="/diensten" style={{color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginTop: 'auto'}}>
                                Bekijk diensten <FaArrowRight fontSize="0.8rem" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Pricing / Packages Section */}`;

// read it fresh just in case
let freshContent = fs.readFileSync(file, 'utf8');
freshContent = freshContent.replace(heroRegex, newHero);
freshContent = freshContent.replace(solutionsRegex, newSolutions);

fs.writeFileSync(file, freshContent);
console.log("Success updating home");
