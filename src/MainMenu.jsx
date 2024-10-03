import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Menu.css';

const MainMenu = () => {
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
    <div className="menu-container">
      <div className="menu">
        <h1>Main Course</h1>
        <div className="menu-column">
          <p>Smashed Kangaroo Burger</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
        <div className="menu-column">
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainMenu;
