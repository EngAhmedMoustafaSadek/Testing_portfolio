// src/pages/TrackPage.js
// Backs both /embedded and /web. Same design system, same components, and the
// same underlying data, narrowed to one track.

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { hero, meta, sections } from '../data/content';
import { projectsByTrack } from '../data/projects';
import { rolesForTrack } from '../data/experience';
import { skillGroupsForTrack } from '../data/skills';

const TrackPage = ({ track }) => {
  useDocumentMeta(meta[track]);

  return (
    <>
      <Hero content={hero[track]} showMeta={false} />

      <Section id="projects" number="01" title={sections.projects.title}>
        <Projects items={projectsByTrack(track)} />
      </Section>

      <Section id="experience" number="02" title={sections.experience.title}>
        <Experience roles={rolesForTrack(track)} />
      </Section>

      <Section id="skills" number="03" title={sections.skills.title}>
        <Skills groups={skillGroupsForTrack(track)} />
      </Section>

      <Section
        id="contact"
        number="04"
        title={sections.contact.title}
        intro={sections.contact.intro}
      >
        <Contact />
        <p className="track-back">
          <Link to="/">See the full portfolio</Link>
        </p>
      </Section>
    </>
  );
};

export default TrackPage;
