import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

// Mock Data for Projects
const projectsData = {
    'fashion-brand': {
        title: "Fashion Brand X",
        category: "Rebranding & Content",
        description: "Volledige rebranding en social media strategie voor een opkomend modemerk. We hebben de visuele identiteit opnieuw gedefinieerd om een jongere doelgroep aan te spreken.",
        fullText: `
            Dit project draaide volledig om het herpositioneren van het merk in een overvolle markt. 
            Onze aanpak begon met een diepgaande analyse van de doelgroep en concurrentie. 
            
            Vervolgens hebben we een nieuwe visuele stijl ontwikkeld die krachtiger en moderner oogt.
            De resultaten waren direct zichtbaar: een stijging van 40% in engagement en een verdubbeling van de website traffic via social channels.
        `,
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Groei in volgers", value: "+2.5k" },
            { label: "Engagement Rate", value: "4.8%" },
            { label: "Website Clicks", value: "+120%" }
        ]
    },
    'tech-startup': {
        title: "Tech Startup Y",
        category: "Groei & Community",
        description: "Van 0 naar 10k volgers in 3 maanden. Door focus op community management en virale content formats.",
        fullText: `
            Voor Tech Startup Y was de uitdaging duidelijk: snel zichtbaarheid creëren voor hun nieuwe app.
            We kozen voor een 'community-first' aanpak, waarbij we niet alleen zonden, maar vooral het gesprek aangingen.
            
            Door gebruik te maken van trending audio op TikTok en educatieve Reels op Instagram, wisten we een loyale schare fans op te bouwen nog voor de lancering.
        `,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Bereik", value: "1.2M+" },
            { label: "Nieuwe Gebruikers", value: "5000+" },
            { label: "Community", value: "Zeer Actief" }
        ]
    }
};

export default async function ProjectPage({ params }) {
    // In Next.js 15+, params is a promise
    const { id } = await params; 
    const project = projectsData[id];

    if (!project) {
        return (
            <div style={{padding: '5rem 2rem', textAlign: 'center'}}>
                <h1>Project niet gevonden</h1>
                <Link href="/" style={{marginTop: '2rem', display: 'inline-block', textDecoration: 'underline'}}>Terug naar home</Link>
            </div>
        );
    }

    return (
        <main style={{backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '5rem'}}>
            
            {/* Navigation */}
            <nav style={{padding: '2rem', borderBottom: '1px solid #eee'}}>
                <div className="container">
                    <Link href="/#projects" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#333', fontWeight: 'bold'}}>
                        <FaArrowLeft /> Terug naar overzicht
                    </Link>
                </div>
            </nav>

            {/* Hero Image */}
            <div style={{height: '60vh', width: '100%', position: 'relative', backgroundColor: '#f0f0f0'}}>
                 <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                 <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'}}></div>
                 
                 <div className="container" style={{position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', width: '100%', color: '#fff'}}>
                    <h1 style={{fontSize: '3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>{project.title}</h1>
                    <p style={{fontSize: '1.2rem', opacity: 0.9}}>{project.category}</p>
                 </div>
            </div>

            {/* Content */}
            <div className="container" style={{marginTop: '4rem', maxWidth: '800px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap'}}>
                    {project.stats.map((stat, index) => (
                        <div key={index} style={{textAlign: 'center', flex: 1, padding: '1.5rem', backgroundColor: '#fafafa', borderRadius: '8px'}}>
                            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#8B4513', marginBottom: '0.5rem'}}>{stat.value}</div>
                            <div style={{fontSize: '0.9rem', color: '#666', textTransform: 'uppercase'}}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', whiteSpace: 'pre-line'}}>
                    {project.fullText}
                </div>

                 <div style={{marginTop: '4rem', textAlign: 'center'}}>
                    <h3 style={{marginBottom: '1.5rem'}}>Overtuigd?</h3>
                    <Link href="/#contact" className="btn" style={{display: 'inline-block'}}>Start nu jouw project</Link>
                 </div>
            </div>

        </main>
    );
}
