import React from 'react';
import Typewriter from './Typewriter';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import FloatingPokemon from './FloatingPokemon'; // Import the new component
import './Home.css';

function Home() {
  const humorousTexts = [
    "I'm a software developer who occasionally talks to rubber ducks.",
    "I'm a software developer who believes semicolons are optional... sometimes.",
    "I'm a software developer who spends more time debugging than coding.",
    "I'm a software developer who runs on coffee and Stack Overflow."
  ];

  return (
    <div className="home-container">
      <FloatingPokemon /> {/* Add the floating Pokémon here */}
      <div className="home-content">
        <ScrollAnimationWrapper animationClass="fade-in-up">
          <img src="/pictures/i.jpg" alt="Developer Image" className="home-image" />
        </ScrollAnimationWrapper>
        <div className="home-text-content">
          <ScrollAnimationWrapper animationClass="fade-in-up delay-1">
            <h1><Typewriter texts={["Welcome to my personal website!"]} delay={100} loop={false} /></h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-2">
            <p><Typewriter texts={humorousTexts} delay={30} eraseDelay={15} newTextDelay={1000} /></p>
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
