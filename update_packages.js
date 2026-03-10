const fs = require('fs');
let page = fs.readFileSync('src/app/page.js', 'utf8');

const packageGrid = `                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto', alignItems: 'stretch'}}>
                    
                    {/* START */}
                    <div style={{ backgroundColor: '#fff9f4', border: '1px solid rgba(122,46,18,0.12)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '4px solid #7A2E12', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.68rem', letterSpacing: '3px', color: '#C27A55', marginBottom: '0.5rem', textTransform: 'uppercase' }}>01</div>
                        <div style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.6rem', color: '#1A1110', lineHeight: 1, marginBottom: '0.4rem', fontWeight: 'bold' }}>START</div>
                        <div style={{ fontSize: '0.85rem', color: '#8C7B6E', fontStyle: 'italic', marginBottom: '1.5rem' }}>De fundering van een serieus merk</div>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <span style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.4rem', color: '#7A2E12', lineHeight: 1, fontWeight: 'bold' }}>€250</span>
                            <span style={{ fontSize: '0.8rem', color: '#8C7B6E' }}> eenmalig</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#8C7B6E', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.8rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(122,46,18,0.1)' }}>Looptijd: 1 – 2 maanden</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Branding analyse & positionering</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Merkidentiteit & tone of voice</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Contentstrategie & pilaren</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Hooks, captions & Canva templates</li>
                        </ul>
                        <Link href="/contact?plan=start" style={{ display: 'block', textAlign: 'center', padding: '0.85rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', border: '1.5px solid #7A2E12', color: '#7A2E12', background: 'transparent' }}>Aanvragen</Link>
                    </div>

                    {/* GROEI */}
                    <div style={{ backgroundColor: '#7A2E12', border: '1px solid #7A2E12', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '4px solid #C27A55', boxShadow: '0 20px 50px rgba(122,46,18,0.3)', borderRadius: '8px' }}>
                        <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: '#FDFAF6', color: '#7A2E12', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '0.25rem 0.7rem' }}>Meest gekozen</div>
                        <div style={{ fontSize: '0.68rem', letterSpacing: '3px', color: 'rgba(253,250,246,0.5)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>02</div>
                        <div style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.6rem', color: '#FDFAF6', lineHeight: 1, marginBottom: '0.4rem', fontWeight: 'bold' }}>GROEI</div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(253,250,246,0.6)', fontStyle: 'italic', marginBottom: '1.5rem' }}>Bereik omzetten in klanten</div>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <span style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.4rem', color: '#FDFAF6', lineHeight: 1, fontWeight: 'bold' }}>€499</span>
                            <span style={{ fontSize: '0.8rem', color: 'rgba(253,250,246,0.55)' }}> / maand</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(253,250,246,0.4)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.8rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(253,250,246,0.1)' }}>Looptijd: 3 of 6 maanden</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> Reels & TikTok strategie</li>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> Actief community management</li>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> DM → gesprek → deal systeem</li>
                            <li style={{ fontSize: '0.9rem', color: 'rgba(253,250,246,0.8)', display: 'flex', gap: '0.6rem' }}><span style={{ color: 'rgba(253,250,246,0.7)', fontWeight: 700 }}>✓</span> Maandelijkse rapportage</li>
                        </ul>
                        <Link href="/contact?plan=groei" style={{ display: 'block', textAlign: 'center', padding: '0.85rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', background: '#FDFAF6', color: '#7A2E12', border: '1.5px solid #FDFAF6' }}>Start nu →</Link>
                    </div>

                    {/* ALL-IN */}
                    <div style={{ backgroundColor: '#fff9f4', border: '1px solid rgba(122,46,18,0.12)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden', borderTop: '4px solid #7A2E12', borderRadius: '8px' }}>
                        <div style={{ fontSize: '0.68rem', letterSpacing: '3px', color: '#C27A55', marginBottom: '0.5rem', textTransform: 'uppercase' }}>03</div>
                        <div style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.6rem', color: '#1A1110', lineHeight: 1, marginBottom: '0.4rem', fontWeight: 'bold' }}>ALL-IN</div>
                        <div style={{ fontSize: '0.85rem', color: '#8C7B6E', fontStyle: 'italic', marginBottom: '1.5rem' }}>Volledige overname</div>
                        <div style={{ marginBottom: '0.3rem' }}>
                            <span style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '2.4rem', color: '#7A2E12', lineHeight: 1, fontWeight: 'bold' }}>€1.000</span>
                            <span style={{ fontSize: '0.8rem', color: '#8C7B6E' }}> / maand</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#8C7B6E', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.8rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(122,46,18,0.1)' }}>Minimaal 6 maanden</div>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Alles van START + GROEI</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Volledige contentplanning</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Lead kwalificatie & opvolging</li>
                            <li style={{ fontSize: '0.9rem', color: '#5a4035', display: 'flex', gap: '0.6rem' }}><span style={{ color: '#7A2E12', fontWeight: 700 }}>✓</span> Prioriteit support & check-ins</li>
                        </ul>
                        <Link href="/contact?plan=all-in" style={{ display: 'block', textAlign: 'center', padding: '0.85rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', border: '1.5px solid #7A2E12', color: '#7A2E12', background: 'transparent' }}>Aanvragen</Link>
                    </div>

                </div>`;

page = page.replace(
    /<div style={{display: 'grid', gridTemplateColumns: 'repeat\(auto-fit, minmax\(280px, 1fr\)\)', gap: '2rem', alignItems: 'center'}}>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
    packageGrid + '\n            </div>\n        </section>'
);

fs.writeFileSync('src/app/page.js', page, 'utf8');
console.log('Replaced successfully');