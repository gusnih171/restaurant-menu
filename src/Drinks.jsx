import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Menu.css';

const Drinks = () => {
    const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
            });
          } else {
            
            gsap.to(element, {
              opacity: 0,
              y: 20, 
              duration: 1,
              ease: 'power2.out',
            });
          }
        });
      },
      { threshold: 0.1 } 
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
      style={{ opacity: 0, transform: 'translateY(20px)' }} 
    >
    <div className="menu-container">
      <div className="menu">
        <h1>Drinks</h1>
        <div className="menu-column">
        <p className="order-name">Local Pilsner - 3€</p>
        <p className="order-name">Local IPA (India Pale Ale) - 3€</p>
        <p className="order-name">Local Lager - 3€</p>
        <p className="order-name">Strawberry Milkshake - 7€</p>
        </div>
        <div className="menu-column">
        <p className="order-name">Soda - 1€</p>
        <p className="order-name">Margarita - 3€</p>
        <p className="order-name">Whiskey Sour - 3€</p>
        <p className="order-name">Coffee - 2€</p>
        <p className="order-name">Water - Free</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Drinks;
