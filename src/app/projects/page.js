import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Rebranding & Content Strategie",
      client: "De Smaakboutique",
      category: "Content Creatie",
      imageColor: "#e6d2c4",
      link: "/project-details"
    },
    {
      id: 2,
      title: "TikTok Groeicampagne",
      client: "FitLife Gym",
      category: "Social Media Strategie",
      imageColor: "#d8e2dc",
      link: "/project-details"
    },
    {
      id: 3,
      title: "Influencer Marketing Launch",
      client: "Glow Cosmetics",
      category: "Branding",
      imageColor: "#f4acb7",
      link: "/project-details"
    },
    {
      id: 4,
      title: "Corporate LinkedIn Beheer",
      client: "TechSolutions BV",
      category: "B2B Marketing",
      imageColor: "#9d8189",
      link: "/project-details"
    },
    {
      id: 5,
      title: "Event Promotie Campagne",
      client: "Summer Vibes Festival",
      category: "Adverteren",
      imageColor: "#ffe5d9",
      link: "/project-details"
    },
    {
      id: 6,
      title: "Visuele Identiteit Refresh",
      client: "Urban Coffee",
      category: "Design",
      imageColor: "#d6ccc2",
      link: "/project-details"
    }
  ];

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Onze Projecten</h1>
          <p>Home / Projecten</p>
        </div>
        <div className="hero-wave" style={{ bottom: '-1px' }}>
             <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '80px', display: 'block'}}>
                <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
            </svg>
        </div>
      </section>

      <section className="section projects-listing">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <Link href={project.link} key={project.id} className="project-card-link">
                <div className="project-card">
                  <div className="project-image" style={{ backgroundColor: project.imageColor }}>
                    {/* Placeholder for real image */}
                    <span style={{color: '#fff', fontWeight: 'bold'}}>Project {project.id}</span>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <span className="project-client">{project.client}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
