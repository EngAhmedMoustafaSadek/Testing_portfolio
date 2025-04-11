// components/SocialLinks.js
import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/ahmedmoustafasadek"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <img src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="LinkedIn"/>
      </a>

      <a
        href="https://github.com/EngAhmedMoustafaSadek"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <img src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="GitHub"/>
      </a>

      <a
        href="mailto:ahmed.moustafa9813@gmail.com"
        className="social-link"
      >
        <img src={`${process.env.PUBLIC_URL}/icons/gmail-logo.png`} alt="Email"/>
      </a>
    </div>
  );
};

export default SocialLinks;

// const SocialLinks = () => {
//   return (
//     <div className="social-links">
//       <a
//         href="https://www.linkedin.com/in/ahmedmoustafasadek"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="social-link"
//       >
//         <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.5 18h-2v-8h2v8zm-1-9.25c-.69 0-1.25-.56-1.25-1.25S6.81 6.5 7.5 6.5s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm12.5 9.25h-2v-4.25c0-2-2.25-1.9-2.25 0v4.25h-2v-8h2v1.25c0-3.5 4.25-3.75 4.25 0v6.75z" />
//         </svg>
//       </a>

//       <a
//         href="https://github.com/EngAhmedMoustafaSadek"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="social-link"
//       >
//         <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 3.04 8.08 7.19 9.37.53.1.71-.23.71-.48V16.9c-2.88.63-3.48-1.38-3.48-1.38-.47-1.21-1.16-1.53-1.16-1.53-.95-.64.07-.63.07-.63 1.05.07 1.62 1.07 1.62 1.07.93 1.6 2.44 1.13 3.03.86.09-.67.36-1.13.67-1.38-2.29-.26-4.7-1.14-4.7-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-.79-.06-1.65 0 0 1.51-.48 4.94 1.85 1.43-.4 2.96-.6 4.47-.6 1.51 0 3.04.2 4.47.6 3.43-2.33 4.94-1.85 4.94-1.85.39.86.04 1.39-.06 1.65.64.71 1.03 1.62 1.03 2.73 0 3.89-2.41 4.77-4.7 5.03.31.25.58.74.58 1.49v3.73c0 .25.18.58.71.48 4.15-1.29 7.19-4.97 7.19-9.37 0-5.52-4.48-10-10-10z" />
//         </svg>
//       </a>

//       <a
//         href="mailto:ahmed.moustafa9813@gmail.com"
//         className="social-link"
//       >
//         <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm-1 17h-4v-5h4v5zm0-7h-4V7h4v3zm7 7h-5v-5h5v5zm0-7h-5V7h5v3z" />
//         </svg>
//       </a>
//     </div>
//   );
// };

// export default SocialLinks;
