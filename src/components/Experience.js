// components/Experience.js
import React, { useEffect, useState } from 'react';
import './Experience.css';

// Import images for projects
import radarSystemImg from '../assets/radar-system.jpg';
import platformImg from '../assets/platform.png';
import smartLEDImg from '../assets/smart-led.png';
import testSummaryToolImg from '../assets/test-summary-tool.webp';
import istqbIcon from '../assets/ISTQB.png'
import embeddedPhoto from '../assets/embedded.jpg'

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  
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
  
  const workExperience = [
    {
      title: "System Testing Engineer",
      company: "SEITech Solutions - Leading German Automotive Tier 1 Supplier",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Developed automated test cases using Playwright and Pytest within a Linux environment, ensuring robust test coverage",
        "Leveraged Object-Oriented Programming (OOP) and Page Object Model (POM) for maintainable and scalable test automation",
        "Conducted manual testing of web-based user interfaces, ensuring compliance with functional requirements",
        "Designed Python-based test scripts to validate system functionalities and improve debugging efficiency",
        "Gained hands-on DevOps experience by configuring Docker images and containers, optimizing CI/CD pipelines"
      ]
    },
    {
      title: "Software Integration Testing Engineer",
      company: "SEITech Solutions - German automotive OEM",
      period: "Dec 2023 - Aug 2024",
      responsibilities: [
        "Software Integration Testing Engineer (SWE5) for a radar system project",
        "Developed and executed test scripts for sender-receiver and client-server interfaces, reducing execution time by 60%",
        "Analyzed over 100 software requirements, including Functional Safety standards, ensuring complete test coverage",
        "Achieved 100% test automation by designing CAPL-based automated test cases",
        "Utilized winIDEA for debugging and Rhapsody for architectural analysis, with knowledge of UDS diagnostic protocols",
        "Adhered to ASPICE standards, actively contributing to peer reviews and technical discussions",
        "Proficient in tools including Vector CANoe, Rhapsody, IBM Rational DOORS, and PTC Integrity (Windchill)"
      ]
    },
    {
      title: "Software Testing Qualifying for Employment Program",
      company: "SEITech Solutions",
      period: "Sep 2023 - Dec 2023",
      responsibilities: [
        "Gained expertise in analyzing system and software requirements to ensure testability",
        "Designed test cases for UDS diagnostics, covering DTCs, DIDs, and routines",
        "Worked with various testing environments, including SIL and HIL"
      ]
    }
  ];
  
  const projects = [
    {
      title: "Vehicle Test Platform",
      description: "Led comprehensive System testing activities for automotive Testing Platform, ensuring compliance with functional safety standards and optimizing test execution efficiency. Developed automated test scripts for web based application using Playwright and pytest in DevOps environment.",
      image: platformImg,
      technologies: ["Python", "Playwright", "Pytest", "Docker", "Gitlab", "Linux"]
    },
    {
      title: "Radar System",
      description: "Led comprehensive integration testing for automotive radar system, ensuring compliance with functional safety standards and optimizing test execution efficiency. Developed automated test scripts for sender-receiver interfaces.",
      image: radarSystemImg,
      technologies: ["CAPL", "Vector CANoe", "Rhapsody", "winIDEA"]
    },
    {
      title: "Test Summary Automation Tool",
      description: "Developed a Java automation tool to extract XML data and generate Excel summaries with pie charts, enhancing test case reporting accuracy and efficiency. The tool significantly reduced manual effort in creating test reports.",
      image: testSummaryToolImg,
      technologies: ["Java", "XML", "Excel API", "Data Visualization"]
    },
    {
      title: "Integrated Smart LED Driver for Street Lighting",
      description: "Graduation Project: Designed and manufactured an intelligent LED driver system for street lighting poles with remote monitoring capabilities, energy optimization features, and fault detection systems.",
      image: smartLEDImg,
      technologies: ["Embedded C", "SIMetrix/SIMPLIS", "MATLAB", "Simulink", "Altium"]
    }
  ];
  
  const certifications = [
    {
      title: "ISTQB – Certified Automotive Software Tester (CT-AuT)",
      date: "Dec 2023",
      icon: istqbIcon
    },
    {
      title: "ISTQB – CTFL (Certified Tester Foundation Level) v4.0",
      date: "Nov 2023",
      icon: istqbIcon
    },
    {
      title: "Embedded Software Development Course",
      date: "Jan 2023",
      icon: embeddedPhoto
    }
  ];
  
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience & Projects</h2>
        
        <div className="experience-tabs">
          <button 
            className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'work' && (
            <div className="work-experience">
              <div className="timeline">
                {workExperience.map((exp, index) => (
                  <div className="timeline-item scroll-animation" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.title}</h3>
                        <span className="company">{exp.company}</span>
                        <span className="period">{exp.period}</span>
                      </div>
                      <ul className="responsibilities">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'projects' && (
            <div className="projects">
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div className="project-card scroll-animation" key={index}>
                    <div className="project-image-container">
                      <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech, idx) => (
                          <span className="tech-tag" key={idx}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'certifications' && (
            <div className="certifications">
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div className="certification-card scroll-animation" key={index}>
                    <div className="certification-content">
                      <div className="certification-icon">
                        {/* <i className="certificate-icon"></i> */
                          cert.icon ? (
                            <img src={cert.icon} alt={cert.title} className="certificate-icon"/>
                          ) : (
                            <span className="certificate-icon">🎓</span> // Fallback for missing images
                          )
                        }

                      </div>
                      <h3>{cert.title}</h3>
                      <p className="cert-date">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;