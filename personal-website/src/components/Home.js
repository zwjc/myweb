import React from 'react';
import Typewriter from './Typewriter';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <ScrollAnimationWrapper animationClass="fade-in-up">
          <img src="/pictures/i.jpg" alt="Developer Image" className="home-image" />
        </ScrollAnimationWrapper>
        <div className="home-text-content">
          <ScrollAnimationWrapper animationClass="fade-in-up delay-1">
            <h1><Typewriter text="Welcome to my personal website!" delay={100} /></h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-2">
            <p><Typewriter text="I'm a software developer with a passion for creating cool things." delay={50} /></p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-3">
            <p>Explore my projects, check out my CV, or play a fun game!</p>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}

export default Home;
