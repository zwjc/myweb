import React from 'react';
import './CV.css';

function CV() {
  return (
    <div className="cv-container">
      <h1>My Curriculum Vitae</h1>

      <div className="cv-section">
        <h2>Summary</h2>
        <p>Highly motivated and detail-oriented software developer with a passion for creating innovative and efficient solutions. Proficient in various programming languages and frameworks, with a strong understanding of software development life cycle and agile methodologies. Eager to contribute to challenging projects and continuously learn new technologies.</p>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        <h3>University Name - Degree Name</h3>
        <p><em>Graduation Date: May 20XX</em></p>
        <ul>
          <li>Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Web Development, Database Systems</li>
          <li>GPA: X.X/4.0</li>
        </ul>
      </div>

      <div className="cv-section">
        <h2>Experience</h2>
        <h3>Software Developer - Company Name</h3>
        <p><em>Start Date - End Date</em></p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Collaborated with cross-functional teams to design and implement new features.</li>
          <li>Participated in code reviews and ensured code quality and best practices.</li>
          <li>Debugged and resolved software defects, improving application stability.</li>
        </ul>

        <h3>Intern Software Engineer - Another Company</h3>
        <p><em>Start Date - End Date</em></p>
        <ul>
          <li>Assisted in the development of a mobile application using Flutter.</li>
          <li>Wrote unit tests and integration tests to ensure code reliability.</li>
          <li>Gained experience with version control systems (Git) and agile development.</li>
        </ul>
      </div>

      <div className="cv-section">
        <h2>Skills</h2>
        <p>
          <strong>Programming Languages:</strong> JavaScript, Python, Java, C++
        </p>
        <p>
          <strong>Web Technologies:</strong> React, Node.js, HTML5, CSS3, RESTful APIs
        </p>
        <p>
          <strong>Databases:</strong> MongoDB, PostgreSQL
        </p>
        <p>
          <strong>Tools & Platforms:</strong> Git, Docker, AWS, VS Code
        </p>
      </div>

      <div className="cv-section">
        <h2>Projects</h2>
        <p>See my <a href="/projects">Projects</a> page for more details.</p>
      </div>
    </div>
  );
}

export default CV;