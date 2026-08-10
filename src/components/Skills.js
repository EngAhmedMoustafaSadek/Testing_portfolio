// src/components/Skills.js
// Plain tags. No bars, no percentages, no ratings.

import React from 'react';
import Reveal from './Reveal';
import './Skills.css';

const Skills = ({ groups }) => (
  <div className="skills">
    {groups.map((group, index) => (
      <Reveal className="skill-group" key={group.id} delay={index * 70}>
        <h3 className="skill-group__title u-mono">{group.title}</h3>
        <ul className="skill-group__list">
          {group.items.map((item) => (
            <li className="tag" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    ))}
  </div>
);

export default Skills;
