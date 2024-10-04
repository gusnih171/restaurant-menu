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
        <h1>Main Course</h1>
        <div className="menu-column">
          <p className="order-name">Classic Cheeseburger - 10€</p>
          <p className="order-desc">Beef Patty, Pepper Jack Cheese, Bun, Tomato, Pickles, Onions, Mamas Ketchup</p>
          <p className="order-name">BBQ Bacon Burger - 11€</p>
          <p className="order-desc">Beef Patty, Pepper Jack Cheese, Bun, Tomato, Pickles, Onions, Mamas BBQ-Sauce And Lots of Bacon</p>
          <p className="order-name">Veggie Burger - 8€</p>
          <p className="order-desc">This One Is For The Grass-Eaters. block of Cheese, Pepper Jack Cheese, Bun, Tomato, Pickles, Onions, Mamas Ketchup </p>
        </div>
        <div className="menu-column">
        <p className="order-name">Smoked Chicken Burger - 12€</p>
          <p className="order-desc">Smoked Chicken Patty, Pepper Jack Cheese, Bun, Tomato, Pickles, Onions, Mamas Smokey Ketchup</p>
          <p className="order-name">Beef Burger - 8€</p>
          <p className="order-desc">Beef Patty, Bun, Mamas Smokey Ketchup</p>
          <p className="order-name">Double Beef Burger - 12€</p>
          <p className="order-desc">2x Beef Patty, Bun, Mamas Smokey Ketchup. Double the meat, double the fun!</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainMenu;
