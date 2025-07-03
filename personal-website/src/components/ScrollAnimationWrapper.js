import React, { useRef, useEffect, useState } from 'react';

const ScrollAnimationWrapper = ({ children, animationClass }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Capture ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${animationClass} ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
