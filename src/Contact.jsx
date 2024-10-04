import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Menu.css';
const Contact = () => {
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
        <h1>Contact</h1>
        <div className="menu-contact">
        <p className='p-bold'>Burger Restaurant</p>
          <p className='p-underline'>Location</p>
          <p>Burger Street 123, Burger Town</p>
          <p>555 55</p>
          <p className='p-underline'>Phone</p>
          <p>+46755555555</p>
          <p className='p-underline'>Email</p>
          <p>resturantburger@burgers.com</p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Contact;
