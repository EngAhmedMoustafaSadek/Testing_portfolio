// components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo">Ahmed Sadek</a>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu}>Skills & Tools</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={closeMenu}>Experience</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;