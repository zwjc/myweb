import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function About() {
  return (
    <div className="about-container">
      <ScrollAnimationWrapper animationClass="fade-in-up">
        <h1>About Me</h1>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationClass="fade-in-up delay-1">
        <section className="about-section">
          <h2>Contact Information</h2>
          <p>
            <div style={{ display: 'flex', gap: '1.5rem'}}>
            <a href="https://www.linkedin.com/in/zwjc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <i className="fab fa-linkedin" style={{ fontSize: '2rem', color: '#0077B5' }}></i>
            </a>
            <a href="https://www.github.com/zwjc" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <i className="fab fa-github" style={{ fontSize: '2rem', color: '#333' }}></i>
            </a>
            </div>
          </p>
        </section>
      </ScrollAnimationWrapper>


      <ScrollAnimationWrapper animationClass="fade-in-up delay-2">
        <section className="about-section">
          <h2>Education</h2>
          <h3>KTH - MSc Industrial Engineering and Management</h3>
          <p><em>Graduation Date: May 2026</em></p>
          <ul>
            <li>Relevant coursework: Leading People and Organisations, Project management, Production and Supply Chain, Finance and Control, Industrial Transformation and Technical Changes, Strategy and Industrial Marketing.</li>
          </ul>

          <h3>KTH - BScEng Information and Communication Technology</h3>
          <p><em>Graduation Date: May 2024</em></p>
          <ul>
            <li>Relevant coursework: Data Structures, Algorithms, Web Development, Computer Hardware Engineering, Single and Multi Variable Calculus, Operating Systems, Programming Project Courses.</li>
          </ul>
        </section>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default About;