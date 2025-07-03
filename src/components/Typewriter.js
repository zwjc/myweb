import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts, delay, eraseDelay = 50, newTextDelay = 1000, loop = true }) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        // Typing
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + texts[textIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, delay);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.substring(0, prev.length - 1));
          setCharIndex(prev => prev - 1);
        }, eraseDelay);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        // Done typing, start deleting after a delay, or stop if not looping
        if (loop || textIndex < texts.length - 1) {
          timeout = setTimeout(() => setIsDeleting(true), newTextDelay);
        } else {
          // If not looping and last text, just stay
          return;
        }
      } else if (isDeleting && charIndex === 0) {
        // Done deleting, move to next text
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % texts.length);
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? eraseDelay : delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, delay, eraseDelay, newTextDelay, loop]);

  return (
    <span>
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;