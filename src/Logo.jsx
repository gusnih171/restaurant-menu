import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LogoCow from './component/CowLogo.jpeg';
import './Logo.css'
import ReviewSlides from './ReviewSlides.jsx';

const Logo = () => {
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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <div class="container">
          <div class="box">
            <img className='logo' src={LogoCow} alt='logo'/> 
              <div class="content"> 
                <h1>Welcome to Burger Restaurant</h1> 
                  <p>In the heart of Burger Town, a small Southern city known for its charm and hospitality, there was a cozy little spot called Burger Restaurant. My father, a jolly man with a big beard and even bigger heart, had opened the restaurant with one mission: to create the best cheeseburger in Burger Town. His secret? Fresh, local ingredients and recipes passed down from his mother, who made the sauces by hand.</p>
                  <p>Every morning, My father would fire up the grill, seasoning the beef with a blend of spices that only he knew. The smell of sizzling burgers filled the air, drawing locals and travelers alike. Customers loved the classic cheeseburger, with juicy patties, Pepper Jack Cheese, crisp pickles, and Mamas signature BBQ sauces, all served on a toasted bun.</p>
                  <p>No matter how busy the restaurant got, we always had time to chat with customers, asking about their day and sharing our love for great food. For the people of Burger Town, Burger Restaurant wasn't just a restaurant; it was a place that felt like home. And that is our story.</p> 
              </div> 
          </div>
        </div>
        <ReviewSlides/>
    </div>
  );
};

export default Logo;
