import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Unity3D Game Development',
      description: 'A project involving the development of a football game with powerups, AI opponents, and multiplayer functionality using Unity3D and C#.',
      image: '/pictures/project1.png',
      link: 'https://noahpe0.wixsite.com/klantboll/game'
    },
    {
      title: 'Dynamic Web Application',
      description: 'A project in frontend development and interaction programming using React and JavaScript and a ChatGPT and Pokemon API integration.',
      image: '/pictures/project2.png',
      link: 'https://pokeme-dh2642.web.app/'
    },
    {
      title: 'Old and Current Website',
      description: 'This and the previous website made for fun and personal use.',
      image: '/pictures/project3old.png',
      link: '#'
    },
    {
      title: 'E-Commerce Website',
      description: 'A project where I developed a full-stack e-commerce website using React, Node.js, and Supabase, implementing features like user authentication, product management, and payment processing.',
      image: '/pictures/project4.png',
      link: 'https://homeearths.com/'
    },
    {
      title: 'Bachelor Thesis Project',
      description: 'My bachelor thesis project focused on the comparative analysis of different quantization algorithms for image classification, where we implemented and tested various models to determine their effectiveness.',
      image: '/pictures/project5copy.jpeg',
      link: 'https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1887665&dswid=9194'
    },
    {
      title: 'Dinner Planner App',
      description: 'A hobby project where I created an app to help users plan their dinners, recipes and shopping lists, utilizing React Native for mobile development and MealDB API.',
      image: '/pictures/project6.PNG',
      link: 'https://github.com/zwjc/Expo'
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-cards-grid">
        {projects.map((project, index) => (
          <ScrollAnimationWrapper key={index} animationClass="fade-in-up" delay={index * 0.1}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div
                className="project-card"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-card-title">
                  <h3>{project.title}</h3>
                </div>
                <div className="project-card-overlay">
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}

export default Projects;
