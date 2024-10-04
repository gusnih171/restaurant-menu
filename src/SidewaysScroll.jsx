import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './Logo.jsx';  
import MainMenu from './MainMenu.jsx';
import './SidewaysScroll.css';
import Bites from './Bites.jsx';
import Sweets from './Sweets.jsx';
import Contact from './Contact.jsx';
import Drinks from './Drinks.jsx';
gsap.registerPlugin(ScrollTrigger);

const SidewaysScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      console.log('Scroll container found:', scrollContainer);

      
      gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - scrollContainer.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top top',
          end: () => `+=${scrollContainer.scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          horizontal: true,
          onUpdate: (self) => {
            console.log('ScrollTrigger update:', self.progress);
          },
        },
      });

     
      const handleWheel = (event) => {
        event.preventDefault();
        const scrollAmount = event.deltaY; // This could be adjusted for sensitivity
        scrollContainer.scrollLeft += scrollAmount; // Scrolls horizontally
      };

      scrollContainer.addEventListener('wheel', handleWheel);

     
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('wheel', handleWheel);
        }
      };
    } else {
      console.error('Scroll container not found');
    }
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div id="home" className="scroll-item"><Logo /></div>
      <div id="drinks" className="scroll-item"><Drinks /></div>
      <div id="bites" className="scroll-item"><Bites /></div>
      <div id="main-menu" className="scroll-item"><MainMenu /></div>
      <div id="sweets" className="scroll-item"><Sweets /></div>
      <div id="contact" className="scroll-item"><Contact /></div>
    </div>
  );
};

export default SidewaysScroll;
