import React, { useState } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

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

            <div className="timeline-item">
              <h3>International Baccalaureate</h3>
              <p className="timeline-subtitle">Diploma Programme</p>
              <p className="timeline-date">Graduation Date: May 2020</p>
              <ul>
                <li>Higher Level: Mathematics, Physics, Chemistry</li>
                <li>Standard Level: English, Spanish, History</li>
              </ul>
            </div>

            {/* Trigger Button for the Terminal */}
            <div className="telemetry-trigger-wrapper">
              <button className="telemetry-trigger" onClick={toggleTerminal}>
                <span className="prompt">&gt;</span> VIEW_TELEMETRY.LOG
              </button>
            </div>
          </section>
        </ScrollAnimationWrapper>
      </div>

      {/* Terminal Modal Overlay */}
      {isTerminalOpen && (
        <div className="terminal-overlay" onClick={toggleTerminal}>
          <div className="terminal-widget" onClick={(e) => e.stopPropagation()}>
            <div className="terminal-bar">
              <span>telemetry.log</span>
              <div className="terminal-controls">
                <span className="terminal-status">ONLINE</span>
                <button className="terminal-close" onClick={toggleTerminal}>[X]</button>
              </div>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">&gt;</span> CS2_PEAK: FACEIT LVL 8 / 21,566</p>
              <p><span className="prompt">&gt;</span> CS_PEAK: LEM</p>
              <p><span className="prompt">&gt;</span> OW2_PEAK: DIAMOND 1 [SUPPORT], EMERALD 5 [DPS]</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;