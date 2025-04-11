// components/About.js
import React, { useEffect } from 'react';
import './About.css';
import profilePhoto from '../assets/profile-pic.jpeg';

const About = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        
        <div className="about-content">
          <div className="about-image scroll-animation">
            <div className="profile-image">
              <img src={profilePhoto} alt="Ahmed Moustafa Sadek"/>
            </div>
          </div>
          
          <div className="about-text scroll-animation">
            <h3>Software Testing Engineer</h3>
            <p>
              I'm Ahmed Moustafa Sadek, a Software Testing Engineer specializing in both automotive and web applications testing, with a focus on automation and quality assurance.
            </p>
            <p>
            At SEITech Solutions, I lead system testing and automation efforts for German automotive clients, leveraging both manual test strategies and scalable automation frameworks.
            </p>
            <p className="journey-paragraph">
              My journey into software testing began with a passion for ensuring quality in complex systems. As I transitioned from electrical engineering to software testing, I've developed a unique perspective that combines technical precision with creative problem-solving. With each project, I've expanded my skills in automation and validation techniques, becoming proficient in various tools and methodologies. My experience in the automotive sector has taught me the critical importance of quality assurance in safety-critical systems. This journey has shaped me into a detail-oriented engineer who values robust testing frameworks and continuous improvement in delivering reliable software solutions.
            </p>
            
            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Ahmed Moustafa Sadek</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">ahmed.moustafa9813@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Haram, Giza, Egypt</span>
              </div>
            </div>
            
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;