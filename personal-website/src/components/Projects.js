import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Unity3D Game Development',
      description: 'A project involving the development of a football game with powerups, AI opponents, and multiplayer functionality using Unity3D and C#.',
      image: 'https://via.placeholder.com/400x250/FF5733/FFFFFF?text=Project+1'
    },
    {
      title: 'Dynamic Web Application',
      description: 'A project in frontend development and interaction programming using React and JavaScript and a ChatGPT and Pokemon API integration.',
      image: 'https://via.placeholder.com/400x250/33FF57/FFFFFF?text=Project+2'
    },
    {
      title: 'Old and Current Website',
      description: 'This and the previous website made for fun and personal use.',
      image: 'https://via.placeholder.com/400x250/3357FF/FFFFFF?text=Project+3'
    },
    {
      title: 'Ecommerce Website',
      description: 'A project where I developed a full-stack ecommerce website using React, Node.js, and MongoDB, implementing features like user authentication, product management, and payment processing.',
      image: 'https://via.placeholder.com/400x250/F333FF/FFFFFF?text=Project+4'
    },
    {
      title: 'Bachelor Thesis Project',
      description: 'My bachelor thesis project focused on the comparative analysis of different quantization algorithms for image classification, where we implemented and tested various models to determine their effectiveness.',
      image: 'https://via.placeholder.com/400x250/FFC300/FFFFFF?text=Project+5'
    },
    {
      title: 'AI Model Creation',
      description: 'A hobby project where I created an AI model to generate images based on text prompts.',
      image: 'https://via.placeholder.com/400x250/C70039/FFFFFF?text=Project+6'
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-cards-grid">
        {projects.map((project, index) => (
          <ScrollAnimationWrapper key={index} animationClass="fade-in-up" delay={index * 0.1}>
            <div
              className="project-card"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-card-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}

export default Projects;
