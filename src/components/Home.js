// components/Home.js
import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const text = "Software Testing Engineer";
    let index = 0;
    let timeoutId;

    const type = () => {
      if (index < text.length) {
        if (typingRef.current) {
          typingRef.current.textContent += text.charAt(index);
        }
        index++;
        timeoutId = setTimeout(type, 100);
      } else {
        timeoutId = setTimeout(() => {
          if (typingRef.current) {
            typingRef.current.textContent = '';
          }
          index = 0;
          type();
        }, 3000);
      }
    };

    type();

    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="home">
      <div className="container home-container">
        <div className="home-content">
          <h1 className="animate-fadeIn">Ahmed Moustafa Sadek</h1>
          <div className="typing-container">
            <span className="title-prefix">I'm a  </span>
            <span ref={typingRef} className="typing-text"></span>
            <span className="cursor">|</span>
          </div>
          <p className="home-description animate-fadeIn">
            Specializing in Automotive and Web Software Testing with expertise in automation and quality assurance
          </p>
          <div className="home-buttons animate-fadeIn">
            <a href="#contact" className="btn contact-btn">Get In Touch</a>
            <a href="#experience" className="btn secondary">View My Work</a>
          </div>
        </div>
        <div className="home-image animate-slideIn">
          <div className="shape"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Home;
