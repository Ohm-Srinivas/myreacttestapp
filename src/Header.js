import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      {/* Top Header Section with Logo */}
      <div className="header-logo">
        <h1><center>Welcome to my World!!! 😂 🤪 😜 </center></h1>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
        </div>
      </div>

      {/* Navigation Section (separate) */}
      <nav className={isMobileMenuOpen ? 'nav-links mobile' : 'nav-links'}>
        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/Registration" onClick={closeMenu}>Registration</Link>
        <Link to="/IDCard" onClick={closeMenu}>IDCard</Link>
          <div className="dropdown">
   
 <button className="dropbtn">
  Test2
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" 
       viewBox="0 0 24 24" fill="none" stroke="currentColor" 
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
       style={{ marginLeft: "6px" }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
</button>


    <div className="dropdown-content">
      <Link to="/test2/option1" onClick={closeMenu}>Option 1</Link>
      <Link to="/test2/option2" onClick={closeMenu}>Option 2</Link>
      <Link to="/test2/option3" onClick={closeMenu}>Option 3</Link>
      <Link to="/test2/option4" onClick={closeMenu}>Option 4</Link>
      <Link to="/test2/option5" onClick={closeMenu}>Option 5</Link>
      <Link to="/test2/option6" onClick={closeMenu}>Option 6</Link>
    </div>
  </div>
         <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/support" onClick={closeMenu}>Support</Link>
        <Link to="/settings" onClick={closeMenu}>Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
