import React from 'react';

import './Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#drinks">Drinks</a>
        <a href="#bites">Bites</a>
        <a href="#main-menu">Main Menu</a>
        <a href="#sweets">Sweets</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
