import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. This project showcases my skills in X, Y, and Z.',
      image: 'https://via.placeholder.com/400x250/FF5733/FFFFFF?text=Project+1'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project involved building A, B, and C.',
      image: 'https://via.placeholder.com/400x250/33FF57/FFFFFF?text=Project+2'
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three. I learned about D, E, and F while working on this.',
      image: 'https://via.placeholder.com/400x250/3357FF/FFFFFF?text=Project+3'
    },
    {
      title: 'Project Four',
      description: 'A brief description of Project Four. This was a challenging project that taught me G, H, and I.',
      image: 'https://via.placeholder.com/400x250/F333FF/FFFFFF?text=Project+4'
    },
    {
      title: 'Project Five',
      description: 'A brief description of Project Five. I enjoyed developing J, K, and L for this project.',
      image: 'https://via.placeholder.com/400x250/FFC300/FFFFFF?text=Project+5'
    },
    {
      title: 'Project Six',
      description: 'A brief description of Project Six. This project demonstrates my proficiency in M, N, and O.',
      image: 'https://via.placeholder.com/400x250/C70039/FFFFFF?text=Project+6'
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-cards-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-card-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;