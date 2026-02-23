import Link from 'next/link';

const services = [
  {
    title: 'Social Media Strategie',
    description: 'Een slimme strategie die jouw merk laat groeien en zichtbaar maakt bij de juiste doelgroep.'
  },
  {
    title: 'Content Creatie',
    description: 'Creatieve posts, video’s en visuals die opvallen en jouw verhaal vertellen.'
  },
  {
    title: 'Branding',
    description: 'Een sterke, herkenbare uitstraling die past bij jouw bedrijf.'
  }
];

export default function ServicesList() {
  return (
    <section className="section services-list" style={{padding: '4rem 0', background: '#fff'}}>
      <div className="container">
        <h2 style={{fontSize: '2rem', color: '#8B4513', marginBottom: '2rem', textAlign: 'center'}}>Diensten</h2>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          {services.map((service, idx) => (
            <li key={idx} style={{background: 'none', border: 'none', padding: 0}}>
              <h3 style={{color: '#333', fontSize: '1.3rem', marginBottom: '0.5rem'}}>{service.title}</h3>
              <p style={{color: '#666', fontSize: '1rem'}}>{service.description}</p>
            </li>
          ))}
        </ul>
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link href="/#contact" className="btn" style={{background: '#8B4513', color: '#fff', borderRadius: '50px', padding: '1rem 2rem', display: 'inline-block'}}>Start Nu</Link>
        </div>
      </div>
    </section>
  );
}