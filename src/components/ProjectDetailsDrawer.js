"use client";
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Rebranding & Content Strategie',
    client: 'De Smaakboutique',
    category: 'Content Creatie',
    price: '€250',
    description: 'Volledige rebranding en social media strategie voor een high-end delicatessezaak.',
  },
  {
    id: 2,
    title: 'TikTok Groeicampagne',
    client: 'FitLife Gym',
    category: 'Social Media Strategie',
    price: '€499/mnd',
    description: 'Van 0 naar 10k volgers in 3 maanden door community management en virale content.',
  },
  {
    id: 3,
    title: 'Influencer Marketing Launch',
    client: 'Glow Cosmetics',
    category: 'Branding',
    price: '€1000/mnd',
    description: 'Lancering van een influencer campagne voor een cosmeticamerk.',
  },
];

export default function ProjectDetailsDrawer() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <aside className="project-details-drawer" style={{background: '#fff', borderRadius: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', padding: '2rem', maxWidth: '400px', position: 'fixed', top: '80px', right: '40px', zIndex: 1200}}>
      <h2 style={{fontSize: '1.5rem', color: '#8B4513', marginBottom: '1.5rem'}}>Project Details</h2>
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        {projects.map((project) => (
          <li key={project.id} style={{marginBottom: '1.5rem'}}>
            <button
              style={{background: 'none', border: 'none', color: '#333', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textAlign: 'left'}}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </button>
            <div style={{fontSize: '0.9rem', color: '#888'}}>{project.client} - {project.category}</div>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <div style={{marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem'}}>
          <h3 style={{color: '#8B4513', fontSize: '1.2rem'}}>{selectedProject.title}</h3>
          <div style={{color: '#555', marginBottom: '0.5rem'}}>{selectedProject.description}</div>
          <div style={{color: '#333', fontWeight: 'bold', marginBottom: '1rem'}}>Prijs: {selectedProject.price}</div>
          <Link href="/#contact" className="btn" style={{background: '#8B4513', color: '#fff', borderRadius: '50px', padding: '0.7rem 1.5rem', display: 'inline-block'}}>Start Nu</Link>
        </div>
      )}
    </aside>
  );
}
