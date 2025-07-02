import React from 'react';
import { Link } from 'react-router-dom';
import './CV.css';

function CV() {
  return (
    <div className="cv-container">
      <header>
        <h1>Curriculum Vitae</h1>
        <p>Engineering Student @ KTH Royal Institute of Technology</p>
        <i className="fa-brands fa-linkedin" style={{ color: '#3c00b3' }}></i>
        <a href="https://www.linkedin.com/in/zwjc" target="_blank" className="socials" aria-label="LinkedIn profile" rel="noopener noreferrer"> LinkedIn</a>
        <i className="fa-brands fa-square-github" style={{ color: '#3c00b3' }}></i> 
        <a href="https://www.github.com/zwjc" target="_blank" className="socials" aria-label="GitHub profile" rel="noopener noreferrer"> GitHub</a>
      </header>

      <section>
        <h2>Experience</h2>
        <ul>
          <li className="experience">Project Manager - THS Armada, 2024</li>
              <ul className="point">THS Armada is Scandinavia's largest career fair. Arranged yearly by 200+ student volunteers, visited by 14,000+ students and 140+ companies across two days.</ul>
              <ul className="point">By working with the Project Group of 22 people, the team works for one year to be an essential part of the Student Union's economy by bringing in a revenue of 7MSEK</ul>

          <li className="experience">Head of Logistics and Fair, Head of Career Fair - THS Armada, 2022, 2023</li>
              <ul className="point">Led and managed 150+ volunteers, planned, organised and coordinated with the project group to create the fair</ul>
          <li className="experience">THS Union Board, THS Nomination Committee - Tekniska H&ouml;gskolans Studentk&aring;r, 2022, 2023</li>
              <ul className="point">Tekniska H&ouml;gskolans Studentk&aring;r is the student union of KTH Royal Institute of Technology.</ul>
              <ul className="point">Being a member of the THS Union Board entailed strategic organisational and operational work, being the official employer of 20+ full-time workers at the union and being responsible for elections and political views of the union.</ul>
          <li className="experience">Project Manager - Technical Preparatory Year's Reception, 2022</li>
              <ul className="point">Led and coordinated one of the first receptions for 800+ incoming students together with two other Project Managers</ul>
          <li className="experience">Project Team - Financial Manager, Marketing Manager, Spring 2023, Fall 2023</li>
              <ul className="point">Responsibility and management over the budget and marketing for a reception welcoming 2000+ new international students and coordinating 200+ volunteers</ul>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>Civ.ing. <a href="https://www.kth.se/utbildning/civilingenjor/informationsteknik/informationsteknik-civilingenjor-300-hp-1.4120" className="socials" target="_blank" rel="noopener noreferrer"> Informationsteknik</a> KTH, 2020-2026</li>
          <li>MScEng <a href="https://www.kth.se/student/kurser/program/TINEM/20242/mal?l=en" className="socials" target="_blank" rel="noopener noreferrer"> Industrial Engineering and Management</a> KTH, 2024-2026</li>
          <li>BSc <a href="https://www.kth.se/utbildning/kandidatutbildning/informations-och-kommunikationsteknik" className="socials" target="_blank" rel="noopener noreferrer"> Information and Communication Technology</a> KTH, 2020-2023</li>
          <li><a href="https://www.ibo.org/about-the-ib/" className="socials" target="_blank" rel="noopener noreferrer">International Baccalaureate</a>IEGS, 2018-2020</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li><b>Technical Competencies:</b> Java, C, C#, React, Javascript, TypeScript, Python, Git, HTML, Elixir, Supabase, VSCode, Node.js, NestJS, PostgreSQL</li>
          <li><b>Interpersonal Strengths:</b> Project Management, Leadership, Communication, Conflict resolution, Problem-solving, Teamwork</li>
        </ul>
      </section>

      <section>
        <h2>Courses</h2>
        <ul>
          <li>ID1019, ID1020, ID1021, ID1206: Programming I, Programming II, Algorithms and Data Structures, Operating Systems</li>
          <li>IV1303, II1305, IC1007, IK1203: Modern Software Development, Project in ICT, Human-Computer Interaction, Networks and Communication</li>
          <li>DH2642, DM2350, DM2601: Dynamic Web and Interaction Programming, Human Perception for Information Technology, Media Technology and Interaction Design</li>
          <li>ME2016, ME2163, ME1003: Project Management: Leadership and Control, Leading People and Organisations in Different Contexts, Industrial Management</li>
          <li>SF1624, SF1625, SF1686, SF1610, DD1351: Algebra & Geometry, One Variable Calculus, Multivariable Calculus, Discreet Mathematics, Logic for Computer Scientists</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
            <li>Game development using Unity3D enginge, Blender and Git</li>
            <li>Website and frontend development</li>
            <li>Dynamic Website Development with React</li>
            <li>Snake game on PIC32</li>
            <li>Personal website, this one!</li>
            <div style={{ marginTop: '1.0em' }}>
                <Link to="/projects" className="pr-button"> See Projects</Link>
            </div>
        </ul>
      </section>
      <Link to="/" className="button">Back to Start</Link>
    </div>
  );
}

export default CV;
