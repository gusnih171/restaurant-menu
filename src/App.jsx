import Scroll from './SidewaysScroll.jsx';
import Video from './BackgroundVideo.jsx';
import Navbar from './Navbar.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bites from './Bites';
import MainMenu from './MainMenu';
import Sweets from './Sweets';
import Contact from './Contact.jsx';
import Drinks from './Drinks.jsx';

const App = () => {
  
  return (
    <div>
     <Scroll />
     <Video />
     <Router>
      <Navbar />
      <Routes>
        <Route path="/bites" element={<Bites />} />
        <Route path="/drink" element={<Drinks />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/sweets" element={<Sweets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
