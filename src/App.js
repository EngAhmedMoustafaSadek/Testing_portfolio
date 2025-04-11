// App.js - Main React component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import SkillsTools from './components/SkillsTools';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
          current = section.getAttribute('id');
        }
      });
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <SocialLinks />
      <main>
        <Home />
        <About />
        <SkillsTools />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;