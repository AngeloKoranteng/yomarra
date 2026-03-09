const fs = require('fs');
let c = fs.readFileSync('src/app/layout.js', 'utf8');
c = c.replace(/<body className=\{.*?\}>/, '<body className={`\${montserrat.variable} \${openSans.variable} \${luckiestGuy.variable} \${dancingScript.variable}`}>');
fs.writeFileSync('src/app/layout.js', c, 'utf8');

c = fs.readFileSync('src/app/projecten/[id]/page.js', 'utf8');
c = c.replace(/fullText:\s+Dit project draaide(.*\n.*?)+?social channels.\s+,/g, "fullText: `\n            Dit project draaide volledig om het herpositioneren van het merk in een overvolle markt.\n            Onze aanpak begon met een diepgaande analyse van de doelgroep en concurrentie.\n            Vervolgens hebben we een nieuwe visuele stijl ontwikkeld die krachtiger en moderner oogt.\n            De resultaten waren direct zichtbaar: een stijging van 40% in engagement en een verdubbeling van de website traffic via social channels.\n        `,");
c = c.replace(/fullText:\s+Voor Tech Startup Y was de uitdaging(.*\n.*?)+?voor de lancering.\s+,/g, "fullText: `\n            Voor Tech Startup Y was de uitdaging duidelijk: snel zichtbaarheid creëren voor hun nieuwe app.\n            We kozen voor een 'community-first' aanpak, waarbij we niet alleen zonden, maar vooral het gesprek aangingen.\n            Door gebruik te maken van trending audio op TikTok en educatieve Reels op Instagram, wisten we een loyale schare fans op te bouwen nog voor de lancering.\n        `,");

// Since the whole structure in `projecten/[id]/page.js` might be messed up due to lack of backticks and broken templating strings, let's just write the whole thing
const fullProject = `// --- PROJECT DETAIL PAGINA ---
// Dit bestand laadt de details van specifieke projecten in (bijvoorbeeld 'fashion-brand' of 'tech-startup').
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Dit importeert het 'terug' pijltje

// Hier bewaren we tijdelijk de verhalen en statistieken van de projecten (ons 'nep' databaseje)
const projectsData = {
    'fashion-brand': {
        title: "Fashion Brand X",
        category: "Rebranding & Content",
        description: "Volledige rebranding en social media strategie voor een opkomend modemerk. We hebben de visuele identiteit opnieuw gedefinieerd om een jongere doelgroep aan te spreken.",
        fullText: \\\`
            Dit project draaide volledig om het herpositioneren van het merk in een overvolle markt.
            Onze aanpak begon met een diepgaande analyse van de doelgroep en concurrentie.
            Vervolgens hebben we een nieuwe visuele stijl ontwikkeld die krachtiger en moderner oogt.
            De resultaten waren direct zichtbaar: een stijging van 40% in engagement en een verdubbeling van de website traffic via social channels.
        \\\`,
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
        fullText: \\\`
            Voor Tech Startup Y was de uitdaging duidelijk: snel zichtbaarheid creëren voor hun nieuwe app.
            We kozen voor een 'community-first' aanpak, waarbij we niet alleen zonden, maar vooral het gesprek aangingen.
            Door gebruik te maken van trending audio op TikTok en educatieve Reels op Instagram, wisten we een loyale schare fans op te bouwen nog voor de lancering.
        \\\`,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Bereik", value: "1.2M+" },
            { label: "Nieuwe Gebruikers", value: "5000+" },
            { label: "Community", value: "Zeer Actief" }
        ]
    }
};

// Dit is de hoofd-functie voor deze pagina. De '[id]' uit de link vertelt ons welk project we precies moeten tonen!
export default async function ProjectPage({ params }) {
    // We wachten even tot Next.js weet welk project er is aangeklikt
    const { id } = await params;
    const project = projectsData[id];

    // Wat als iemand zelf een rare link intypt (zoals /projecten/dikke-duim)? Dan tonen we een foutmelding.
    if (!project) {
        return (
            <div style={{padding: '5rem 2rem', textAlign: 'center'}}>
                <h1>Project niet gevonden</h1>
                <Link href="/" style={{marginTop: '2rem', display: 'inline-block', textDecoration: 'underline'}}>Terug naar home</Link>
            </div>
        );
    }

    // Is het project wel gevonden? Dan tekenen we de rest van de pagina!
    return (
        <main style={{backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '5rem'}}>
            
            {/* Dit is de bovenste menubalk met het linkje om weer terug te gaan */}
            <nav style={{padding: '2rem', borderBottom: '1px solid #eee'}}>
                <div className="container">
                    <Link href="/#projects" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#333', fontWeight: 'bold'}}>
                        <FaArrowLeft /> Terug naar overzicht
                    </Link>
                </div>
            </nav>

            {/* Hier tonen we de grote omslagfoto bovenaan de pagina, plus de titel en de naam van het project */}
            <div style={{height: '60vh', width: '100%', position: 'relative', backgroundColor: '#f0f0f0'}}>
                <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                {/* Het verloopkleurtje (gradient) zorgt ervoor dat de witte letters beter leesbaar zijn op de foto */}
                <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'}}></div>
                
                <div className="container" style={{position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', width: '100%', color: '#fff'}}>
                    <h1 style={{fontSize: '3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-montserrat)'}}>{project.title}</h1>
                    <p style={{fontSize: '1.2rem', opacity: 0.9}}>{project.category}</p>
                </div>
            </div>

            {/* Dit is het gedeelte met de tekst, statistieken en de knop onderaan */}
            <div className="container" style={{marginTop: '4rem', maxWidth: '800px'}}>
                
                {/* De drie blokjes met resultaten, zoals aantal volgers of bereik */}
                <div style={{display: 'flex', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap'}}>
                    {/* We 'mappen' door de stats: voor elke stat wordt automatisch een blokje getekend */}
                    {project.stats.map((stat, index) => (
                        <div key={index} style={{textAlign: 'center', flex: 1, padding: '1.5rem', backgroundColor: '#fafafa', borderRadius: '8px'}}>
                            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#8B4513', marginBottom: '0.5rem'}}>{stat.value}</div>
                            <div style={{fontSize: '0.9rem', color: '#666', textTransform: 'uppercase'}}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* De lange verhalende text over hoe we dit doel behaald hebben */}
                <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#333', whiteSpace: 'pre-line'}}>
                    {project.fullText}
                </div>

                 {/* Wil de lezer dit ook? Dan tonen we een knop om contact op te nemen */}
                 <div style={{marginTop: '4rem', textAlign: 'center'}}>
                    <h3 style={{marginBottom: '1.5rem'}}>Overtuigd?</h3>
                    <Link href="/#contact" className="btn" style={{display: 'inline-block'}}>Start nu jouw project</Link>
                </div>
            </div>

        </main>
    );
}`;

fs.writeFileSync('src/app/projecten/[id]/page.js', fullProject.replace(/\\`/g, "`"), 'utf8');

