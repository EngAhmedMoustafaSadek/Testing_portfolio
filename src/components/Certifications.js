// src/components/Certifications.js

import React from 'react';
import Reveal from './Reveal';
import { certifications, education } from '../data/certifications';
import './Certifications.css';

const Certifications = () => (
  <div className="credentials">
    <Reveal>
      <h3 className="credentials__title u-mono">Certifications</h3>
      <ul className="credentials__list">
        {certifications.map((item) => (
          <li className="credential" key={item.id}>
            <span className="credential__name">{item.title}</span>
            <span className="credential__date u-mono">{item.date}</span>
          </li>
        ))}
      </ul>
    </Reveal>

    <Reveal delay={80}>
      <h3 className="credentials__title u-mono">Education</h3>
      <ul className="credentials__list">
        {education.map((item) => (
          <li className="credential" key={item.id}>
            <span className="credential__name">
              {item.title}
              <span className="credential__institution">
                {item.institution}
              </span>
            </span>
            <span className="credential__date u-mono">{item.date}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  </div>
);

export default Certifications;
