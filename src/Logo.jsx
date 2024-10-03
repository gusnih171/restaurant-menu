import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LogoCow from './component/CowLogo.jpeg';

const Logo = () => {
    const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fade in when the element is in view
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
            });
          } else {
            // Fade out when the element leaves the view
            gsap.to(element, {
              opacity: 0,
              y: 20, // Move it slightly down when fading out
              duration: 1,
              ease: 'power2.out',
            });
          }
        });
      },
      { threshold: 0.1 } // Trigger at 10% visibility
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial hidden state
    >
    <img className='logo' src={LogoCow}/>
    </div>
  );
};

export default Logo;
