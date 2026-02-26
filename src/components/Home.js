import React from 'react';
import Typewriter from './Typewriter';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import FloatingPokemon from './FloatingPokemon';
import './Home.css';

function Home() {
  const humorousTexts = [
    " ",
    " who considers 'Googling error messages' a legitimate job skill.",
    " who believes 'It works on my machine' is a valid excuse.",
    " who spends 4 hours automating a 5-minute manual task.",
    " who thinks 'Hello World' is a major milestone.",
    " who dreams in curly braces and parentheses."
  ];

  return (
    <div className="home-container">
      <FloatingPokemon />
      <div className="home-content">
        <ScrollAnimationWrapper animationClass="fade-in-up">
          <img src="/pictures/i.jpg" alt="This is me :D" className="home-image" />
        </ScrollAnimationWrapper>
        <div className="home-text-content">
          <ScrollAnimationWrapper animationClass="fade-in-up delay-1">
            <h1>Jeffrey Chang</h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-2">
            <h2>Welcome to my personal website!</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-3">
            <p>I'm a software engineer <Typewriter texts= {humorousTexts} delay={30} eraseDelay={15} newTextDelay={1000} /></p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationClass="fade-in-up delay-4">
            <p>See what I have worked on, a bit more about me or play a fun game!</p>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}

export default Home;
