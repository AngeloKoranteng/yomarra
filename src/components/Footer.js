import { FaInstagram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#111', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem', fontSize: '0.9rem'}}>
        <div className="container">
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem'}}>
                
                {/* Col 1: Logo & Slogan */}
                <div>
                    <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '1px', color: '#D2B48C'}}>YOMARRA</h3>
                    <p style={{color: '#888', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px'}}>Social media agency</p>
                </div>

                {/* Col 2: Diensten */}
                <div>
                    <h4 style={{fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px', color: '#D2B48C'}}>Diensten</h4>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                        <li><Link href="/diensten" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Social media strategie</Link></li>
                        <li><Link href="/diensten" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Content creatie</Link></li>
                        <li><Link href="/diensten" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Branding</Link></li>
                    </ul>
                </div>

                {/* Col 3: Informatie */}
                <div>
                    <h4 style={{fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px', color: '#D2B48C'}}>Informatie</h4>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                        <li><Link href="/over-ons" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Over ons</Link></li>
                        <li><Link href="/projects" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s'}}>Projecten</Link></li>
                    </ul>
                </div>
            </div>

            {/* Divider Line */}
            <div style={{borderTop: '1px solid #333', margin: '3rem 0'}}></div>

            {/* Bottom Row: Socials, Info & Copyright */}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem'}}>
                
                {/* Social Icons */}
                <div style={{display: 'flex', gap: '1rem'}}>
                     <a href="https://www.instagram.com/yomarra.co?igsh=MWplOG81eGhsczNh&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s'}}>
                        <FaInstagram size={18} />
                     </a>
                     <a href="https://www.tiktok.com/@yomarra.co?_r=1&_t=ZG-93BQ7kPSGDA" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s'}}>
                        <FaTiktok size={16} />
                     </a>
                </div>
                
                {/* Personal Info & Copyright */}
                <div style={{color: '#888', fontSize: '0.85rem', textAlign: 'center', lineHeight: '1.6'}}>
                    <p>Email: <a href="mailto:infoyomarra@gmail.com" style={{color: '#aaa', textDecoration: 'none'}}>infoyomarra@gmail.com</a> | KVK: 90645561 | Venray, Nederland</p>
                    <p style={{marginTop: '0.5rem'}}>&copy; 2026 Yomarra. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </div>
    </footer>
  );
}