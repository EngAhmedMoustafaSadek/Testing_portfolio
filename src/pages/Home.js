// src/pages/Home.js

import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { hero, meta, sections } from '../data/content';
import { featuredRoles } from '../data/experience';
import { skillGroups } from '../data/skills';

const Home = () => {
  useDocumentMeta(meta.home);

  return (
    <>
      <Hero content={hero.home} />

      <Section
        id="projects"
        number={sections.projects.number}
        title={sections.projects.title}
        intro={sections.projects.intro}
      >
        <Projects filterable />
      </Section>

      <Section
        id="experience"
        number={sections.experience.number}
        title={sections.experience.title}
      >
        <Experience roles={featuredRoles()} />
      </Section>

      <Section
        id="skills"
        number={sections.skills.number}
        title={sections.skills.title}
      >
        <Skills groups={skillGroups} />
      </Section>

      <Section
        id="certifications"
        number={sections.certifications.number}
        title={sections.certifications.title}
      >
        <Certifications />
      </Section>

      <Section
        id="contact"
        number={sections.contact.number}
        title={sections.contact.title}
        intro={sections.contact.intro}
      >
        <Contact />
      </Section>
    </>
  );
};

export default Home;
