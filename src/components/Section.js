// src/components/Section.js
// Shared section shell: monospace numeral, heading, optional intro.

import React from 'react';
import Reveal from './Reveal';
import './Section.css';

const Section = ({ id, number, title, intro, children }) => {
  const headingId = `${id}-heading`;

  return (
    <section className="section" id={id} aria-labelledby={headingId}>
      <div className="container">
        <Reveal className="section__head">
          <p className="section__number u-mono" aria-hidden="true">
            {number}
          </p>
          <h2 className="section__title" id={headingId}>
            {title}
          </h2>
          {intro ? <p className="section__intro">{intro}</p> : null}
        </Reveal>

        {children}
      </div>
    </section>
  );
};

export default Section;
