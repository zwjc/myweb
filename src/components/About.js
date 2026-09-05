import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  return (
    <div className="about-container">
      <ScrollAnimationWrapper animationClass="fade-in-up" delay={0}>
        <div className="about-header">
          <h1>About Me</h1>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/zwjc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/zwjc" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="about-content">
        <ScrollAnimationWrapper animationClass="fade-in-up" delay={0.1}>
          <section className="about-card">
            <h2>Experience</h2>
            
            <div className="timeline-item">
              <h3>Cybersecurity Consultant @ EY FSO</h3>
              <p className="timeline-date">August 2026 - Present</p>
              <ul>
                <li>Provide cybersecurity consulting and risk management services across multiple industries.</li>
                <li>Conduct security assessments, vulnerability testing, and threat analysis.</li>
                <li>Develop and implement tailored security strategies to enhance the operational resilience of financial institutions.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h3>Project Manager @ THS Armada</h3>
              <p className="timeline-date">January 2024 - January 2025</p>
              <ul>
                <li>Directed organizational strategy and coordinated over 200 volunteers and 140 companies with a 7MSEK budget.</li>
                <li>Served as the primary liaison for external corporate representatives, state agencies, and universities.</li>
              </ul>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationClass="fade-in-up" delay={0.2}>
          <section className="about-card">
            <h2>Education</h2>
            <div className="timeline-item">
                <div className="timeline-header">
                <h3>Karolinska Institutet</h3>
                <p className="timeline-subtitle">Candidate for Doctor of Medicine (M.D.)</p>
                  <span className="timeline-date">VT 2026</span>
                </div>
                <ul>
                  <li>Undertaken foundational medical studies.</li>
                </ul>
              </div>

            <div className="timeline-item">
              <h3>Kungliga Tekniska Högskolan</h3>
              <p className="timeline-subtitle">Master of Science in Engineering (Civilingenjör)</p>
              <p className="timeline-date">Graduation Date: May 2026</p>
              <ul>
                <li>Relevant coursework: Leading People & Organisations, Project Management, Production & Supply Chain, Finance & Control, Industrial Transformation, and Strategy.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h3>Kungliga Tekniska Högskolan</h3>
              <p className="timeline-subtitle">Bachelor of Science in Engineering</p>
              <p className="timeline-date">Graduation Date: May 2024</p>
              <ul>
                <li>Relevant coursework: Data Structures, Algorithms, Probability Theory & Statistics, Computer Engineering, Single & Multi-Variable Calculus, Linear Algebra, and Operating Systems.</li>
              </ul>
            </div>
          </section>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}

export default About;