import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <section className="about-section">
        <h2>Contact Information</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://www.github.com/yourprofile" target="_blank" rel="noopener noreferrer">github.com/yourprofile</a></p>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <h3>University Name - Degree Name</h3>
        <p><em>Graduation Date: May 20XX</em></p>
        <ul>
          <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
          <li>GPA: X.X/4.0</li>
        </ul>

        <h3>Another University/College - Another Degree/Program</h3>
        <p><em>Graduation Date: Year</em></p>
        <ul>
          <li>Details about your studies</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
