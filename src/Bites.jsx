import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Menu.css';
const Bites = () => {
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
        <h1>Bites</h1>
        <div className="menu-column">
          <p className="order-name">Dirty Fries - 5€</p>
          <p className="order-desc">Fries, Chopped onions, Mamas smokey ketchup, Pepper jack cheese</p>
          <p className="order-name">Fries - 3€</p>
          <p className="order-name">Pickled Cucumber - 3€</p>
        </div>
        <div className="menu-column">
        <p className="order-name">Chicken Wings - 6€</p>
          <p className="order-desc">Chicken Wings, Mamas Smokey Ketchup, celery</p>
          <p className="order-name">Smoked Peppers -3€</p>
          <p className="order-name">Deep fried onion rings -3€</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Bites;
