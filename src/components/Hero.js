// src/components/Hero.js

import React from 'react';
import Reveal from './Reveal';
import { identity } from '../data/content';
import portrait from '../assets/profile-pic.jpeg';
import './Hero.css';

const Hero = ({
  content,
  headingLevel: Heading = 'h1',
  showMeta = true,
  showPortrait = false,
}) => (
  <div className="hero">
    <div className="container hero__inner">
      {showPortrait ? (
        <Reveal className="hero__portrait">
          <img
            src={portrait}
            alt={`Portrait of ${identity.name}`}
            width="88"
            height="88"
            loading="eager"
          />
        </Reveal>
      ) : null}

      <Reveal className="hero__eyebrow u-mono" as="p">
        {content.eyebrow}
      </Reveal>

      <Reveal delay={60}>
        <Heading className="hero__heading">{content.heading}</Heading>
      </Reveal>

      <Reveal delay={120}>
        <p className="hero__lead">{content.lead}</p>
      </Reveal>

      <Reveal delay={180} className="hero__body">
        {content.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </Reveal>

      {showMeta ? (
        <Reveal delay={240} className="hero__meta">
          <p className="hero__location">
            <span className="u-mono hero__label">Based in</span>
            <span>
              {identity.location}. {identity.relocation}.
            </span>
          </p>

          <ul className="hero__links">
            <li>
              <a href={`mailto:${identity.email}`}>{identity.email}</a>
            </li>
            <li>
              <a
                href={identity.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {identity.linkedin.label}
              </a>
            </li>
            <li>
              <a
                href={identity.github.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {identity.github.label}
              </a>
            </li>
          </ul>
        </Reveal>
      ) : null}
    </div>
  </div>
);

export default Hero;
