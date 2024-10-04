import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Menu.css';
const Sweets = () => {
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
        <h1>Sweets</h1>
        <div className="menu-column">
          <p className="order-name">Honey Bacon - 5€</p>
          <p className="order-desc">Bacon Smoked Snd Dipped In Honey</p>
          <p className="order-name">Raspberry Cake - 6€</p>
          <p className="order-desc">Contains Raspberries</p>
          <p className="order-name">Beef Jerky - 1€</p>
          <p className="order-desc">Contains meat</p>
          <p className="order-name">Chocolate Special - 6€</p>
          <p className="order-desc">Chocolate, Strawberries, Whipped Cream</p>
        </div>
        <div className="menu-column">
        <p className="order-name">Cactus Ice Cream -3€</p>
        <p className="order-name">Smoked Vanilla Ice Cream -3€</p>
        <p className="order-name">Carrot Cake - 4€</p>
        <p className="order-desc">Contains Carrot</p>
        <p className="order-name">Lemon Slush - 2€</p>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sweets;
