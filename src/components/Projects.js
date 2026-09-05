import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Smart City Strategy: Digital Twins',
      description: 'A 2050 strategic framework exploring the integration of IoT and Digital Twins for data-driven urban planning and cross-departmental governance.',
      tags: ['Strategy', 'IoT', 'Digital Twins'],
      image: '/pictures/smartcity.jpeg',
      link: 'https://kth-presentation.netlify.app/',
      bentoClass: 'bento-large' // Top-left anchor (2x2)
    },
    {
      title: 'Dynamic Web Application',
      description: 'Frontend development and interaction programming with React, integrating the ChatGPT and Pokémon APIs.',
      tags: ['React', 'APIs'],
      image: '/pictures/project2.png',
      link: 'https://pokeme-dh2642.web.app/',
      bentoClass: 'bento-standard' // Fills the top-right gap
    },
    {
      title: 'Unity3D Game Development',
      description: 'A football game with powerups, AI opponents and multiplayer functionality, built in Unity3D and C#.',
      tags: ['Unity3D', 'C#'],
      image: '/pictures/project1.png',
      link: 'https://noahpe0.wixsite.com/klantboll/game',
      bentoClass: 'bento-tall' // Spans down the right edge
    },
    {
      title: 'Dinner Planner App',
      description: 'A hobby app for planning dinners, recipes and shopping lists, built with React Native and the MealDB API.',
      tags: ['React Native', 'Expo'],
      image: '/pictures/project6.PNG',
      link: 'https://github.com/zwjc/Expo',
      bentoClass: 'bento-standard' // Tucks in next to the Unity game
    },
    {
      title: 'Bachelor Thesis Project',
      description: 'Comparative analysis of quantization algorithms for image classification, implementing and testing several models.',
      tags: ['ML', 'Research'],
      image: '/pictures/project5copy.jpeg',
      link: 'https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1887665&dswid=9194',
      bentoClass: 'bento-wide' // Stretches across the middle-left
    },
    {
      title: 'E-Commerce Website',
      description: 'A full-stack store with authentication, product management and payment processing using React, Node.js and Supabase.',
      tags: ['Full-stack', 'Payments'],
      image: '/pictures/project4.png',
      link: 'https://homeearths.com/',
      bentoClass: 'bento-large' // Bottom-right anchor (2x2)
    },
    {
      title: 'Old and Current Website',
      description: 'This site and its predecessor, made for fun and personal use.',
      tags: ['React', 'Design'],
      image: '/pictures/project3old.png',
      link: '#',
      bentoClass: 'bento-wide' // Fills the remaining bottom-left gap perfectly
    }
  ];

  return (
    <div className="projects-container">
      <ScrollAnimationWrapper animationClass="fade-in-up" delay={0}>
        <div className="projects-header">
          <h1>My Projects</h1>
        </div>
      </ScrollAnimationWrapper>

      <div className="project-cards-grid">
        {projects.map((project, index) => (
          <div key={index} className={`bento-item ${project.bentoClass}`}>
            <ScrollAnimationWrapper animationClass="fade-in-up" delay={index * 0.1}>
              <a 
                href={project.link} 
                target={project.link === '#' ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </ScrollAnimationWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;