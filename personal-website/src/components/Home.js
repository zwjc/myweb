import React from 'react';
import Typewriter from './Typewriter';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import FloatingPokemon from './FloatingPokemon';
import './Home.css';

function Home() {
  const humorousTexts = [
    "I'm a software developer who occasionally talks to rubber ducks.",
    "I'm a software developer who believes semicolons are optional... sometimes.",
    "I'm a software developer who spends more time debugging than coding.",
    "I'm a software developer who runs on coffee and Stack Overflow.",
    "I'm a software developer who considers 'Googling error messages' a legitimate job skill.",
    "I'm a software developer whose code has more //TODO comments than actual documentation.",
    "I'm a software developer who celebrates when undefined finally becomes defined.",
    "I'm a software developer who can debug complex algorithms but struggles with printer drivers.",
    "I'm a software developer who treats Ctrl+S like a nervous tic.",
    "I'm a software developer whose IDE has more plugins than functionality.",
    "I'm a software developer who believes 'It works on my machine' is a valid excuse.",
    "I'm a software developer who spends 4 hours automating a 5-minute manual task.",
    "I'm a software developer who thinks 'Hello World' is a major milestone.",
    "I'm a software developer who dreams in curly braces and parentheses."
  ];

  return (
    <div className="home-container">
      <FloatingPokemon />
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
            <p>See what I have worked on, my CV or play a fun game!</p>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}

export default Home;
