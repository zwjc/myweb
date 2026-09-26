import React from 'react';
import Typewriter from './Typewriter';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './Home.css';

function Home() {
  const humorousTexts = [
    " ",
    " who spends more time in PowerPoint than in the code editor.",
    " who is slightly scared of smart refrigerators.",
    " who spends 4 hours automating a 5-minute manual task.",
    " who believes 'turning it off and on again' is a valid incident response.",
    " who runs on billable hours.",
    " who gets paid to overthink everything."
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="home-container">
      <div className="home-content">
        <ScrollAnimationWrapper animationClass="fade-in-up home-image-wrapper">
          <img src="/pictures/i.webp" alt="Jeffrey Chang" className="home-image" />
        </ScrollAnimationWrapper>
        
        <div className="home-text-content">
          <ScrollAnimationWrapper animationClass="fade-in-up delay-1">
            <h1>Jeffrey Chang</h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-2">
            <h2>Welcome to my website!</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-3">
            <p>
              <span className="consultant-intro">I'm a Cybersecurity Consultant</span>
              <Typewriter texts={humorousTexts} delay={30} eraseDelay={15} newTextDelay={1000} />
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className="home-footer">
        <span className="footer-text">© {currentYear} JEFFREY CHANG // ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
}

export default Home;