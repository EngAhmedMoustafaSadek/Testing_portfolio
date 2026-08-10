// src/components/ProjectCard.js

import React from 'react';
import Reveal from './Reveal';
import { trackLabels, proprietaryLabel } from '../data/projects';

const ProjectCard = ({ project, delay = 0 }) => (
  <Reveal as="article" className="project" delay={delay}>
    <header className="project__head">
      <p className="project__number u-mono" aria-hidden="true">
        {project.number}
      </p>
      <p className="project__track u-mono">{trackLabels[project.track]}</p>
    </header>

    <h3 className="project__title">{project.title}</h3>

    <dl className="project__detail">
      <dt className="u-mono">Problem</dt>
      <dd>{project.problem}</dd>
      <dt className="u-mono">Solution</dt>
      <dd>{project.solution}</dd>
    </dl>

    <footer className="project__foot">
      <ul className="project__stack" aria-label="Stack">
        {project.stack.map((item) => (
          <li className="tag" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <p className="project__note u-mono">{proprietaryLabel}</p>
    </footer>
  </Reveal>
);

export default ProjectCard;
