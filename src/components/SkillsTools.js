// components/SkillsTools.js
import React, { useEffect } from 'react';
import './SkillsTools.css';

const SkillsTools = () => {
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
  
  const technicalSkills = [
    { name: "System & Software Testing", level: 95 },
    { name: "Test Automation", level: 90 },
    { name: "Software Development", level: 80 },
    { name: "Data Structures & Algorithms", level: 70 },
    { name: "Object-Oriented Programming", level: 85 },
    { name: "Communication Protocols", level: 90 },
    { name: "Microcontroller Interfacing", level: 80 }
  ];
  
  const tools = [
    { name: "Python", icon: "python" },
    { name: "Pytest", icon: "pytest" },
    { name: "Playwright", icon: "playwright" },
    { name: "C/C++", icon: "c-cpp" },
    { name: "CAPL", icon: "vector" },
    { name: "Docker", icon: "docker" },
    { name: "Vector Toolchain", icon: "vector" },
    { name: "Rhapsody", icon: "rhapsody" },
    { name: "winIDEA", icon: "winidea" },
    { name: "DOORS", icon: "doors" },
    { name: "Git/GitLab", icon: "git" },
    { name: "MATLAB/Simulink", icon: "matlab" }
  ];
  
  const standards = [
    { name: "Automotive SPICE (ASPICE)", icon: "aspice" },
    { name: "Functional Safety (ISO 26262)", icon: "iso26262" },
    { name: "AUTOSAR", icon: "autosar" },
    { name: "Agile Methodology", icon: "agile" }
  ];
  
  const softSkills = [
    { name: "Attention to Detail", level: 95 },
    { name: "Teamwork", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Team Leadership", level: 80 },
    { name: "Adaptability", level: 90 },
    { name: "Documentation", level: 85 },
    { name: "Deadline-Oriented", level: 90 }
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Tools</h2>
        
        <div className="skills-content">
          <div className="skills-section technical-skills scroll-animation">
            <h3>Technical Skills</h3>
            <div className="skills-bars">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-section tools-section scroll-animation">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div className="tool-item" key={index}>
                  <div className="tool-icon">
                    {/* <div className={`icon ${tool.icon}`}></div> */
                      <img
                      src={`${process.env.PUBLIC_URL}/icons/${tool.icon}.png`}
                      alt={tool.name}
                      className="icon"
                    />
                    }
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-section standards-section scroll-animation">
            <h3>Standards</h3>
            <div className="standards-grid">
              {standards.map((standard, index) => (
                <div className="standard-item" key={index}>
                  <div className="standard-icon">
                    {/* <div className={`icon ${standard.icon}`}></div> */
                    <img
                    src={`${process.env.PUBLIC_URL}/icons/${standard.icon}.png`}
                    alt={standard.name}
                    className="icon"
                  />
                    }
                  </div>
                  <span className="standard-name">{standard.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-section soft-skills scroll-animation">
            <h3>Soft Skills</h3>
            <div className="skills-bars">
              {softSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;