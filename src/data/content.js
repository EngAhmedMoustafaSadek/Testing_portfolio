// src/data/content.js
// Single source of truth for identity, navigation, page metadata and section copy.
// No copy is hardcoded in JSX. Never use an em dash in any string in this file.

export const identity = {
  name: 'Ahmed Moustafa Sadek',
  role: 'System Test Engineer (SDET)',
  tagline:
    'Test automation for safety-critical embedded systems and web platforms.',
  location: 'Giza, Egypt',
  relocation: 'Open to relocation, UK and EU',
  email: 'ahmed.moustafa9813@gmail.com',
  github: {
    label: 'github.com/EngAhmedMoustafaSadek',
    url: 'https://github.com/EngAhmedMoustafaSadek',
  },
  linkedin: {
    label: 'linkedin.com/in/ahmedmoustafasadek',
    url: 'https://www.linkedin.com/in/ahmedmoustafasadek',
  },
};

export const nav = {
  brand: 'Ahmed Sadek',
  sections: [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  tracks: [
    { to: '/embedded', label: 'Embedded' },
    { to: '/web', label: 'Web' },
  ],
};

// Per-route document metadata. Description strings stay under 160 characters.
export const meta = {
  home: {
    title: 'Ahmed Moustafa Sadek - System Test Engineer (SDET)',
    description:
      'System test engineer building test automation for safety-critical embedded systems and web platforms, from HIL environments to Playwright and Pytest.',
  },
  embedded: {
    title: 'System and Integration Testing - Ahmed Moustafa Sadek',
    description:
      'System and integration testing for embedded platforms: HIL and SIL environments, protocol conformance, ISO 26262 and A-SPICE, with full requirement traceability.',
  },
  web: {
    title: 'Web and API Test Automation - Ahmed Moustafa Sadek',
    description:
      'Web and API test automation: Playwright and Pytest frameworks, the Page Object Model, REST API testing and CI/CD pipelines that run regression unattended.',
  },
};

export const hero = {
  home: {
    eyebrow: 'System Test Engineer (SDET)',
    heading: identity.name,
    lead: identity.tagline,
    body: [
      'I have spent 3+ years owning the full quality lifecycle for safety-critical software: test strategy, framework architecture, automated execution and reporting.',
      'I build automation for web applications with Playwright and Pytest, and for embedded systems in HIL environments. I work as the single dedicated quality owner across concurrent projects, with minimal supervision.',
      'My work sits inside regulated, standards-driven development under ISO 26262 and A-SPICE, with full requirement-to-test traceability. The Python frameworks I built were adopted as the team standard.',
    ],
  },
  embedded: {
    eyebrow: 'Track: Embedded and Systems',
    heading: 'System and Integration Testing',
    lead: 'Protocol conformance, HIL and SIL validation, and requirement traceability for safety-critical ECUs.',
    body: [
      'I test embedded systems the way the standards expect: every requirement traced to a test, every result reproducible, every failure diagnosable.',
      'That covers HIL and SIL environments, CAN and CAN FD bus validation, UDS diagnostics and ISO-TP transport conformance, executed under ISO 26262 and A-SPICE with documentation that survives an audit.',
    ],
  },
  web: {
    eyebrow: 'Track: Web and API',
    heading: 'Web and API Test Automation',
    lead: 'Playwright and Pytest frameworks, built to be maintained by a team rather than by their author.',
    body: [
      'I build web test automation the way I build embedded test automation: as a framework with an architecture, not as a pile of scripts.',
      'That means the Page Object Model, reusable helper layers, REST API coverage alongside the UI, and pipelines that run the whole regression suite unattended and report on it.',
    ],
  },
};

// Section headings. The numeral is rendered in monospace as a console-style marker.
export const sections = {
  projects: {
    number: '01',
    title: 'Featured projects',
    intro:
      'Three pieces of work that show how I approach test architecture. All three are client engagements, so the code is not public.',
  },
  experience: {
    number: '02',
    title: 'Experience',
    intro: null,
  },
  skills: {
    number: '03',
    title: 'Skills',
    intro: null,
  },
  certifications: {
    number: '04',
    title: 'Certifications and education',
    intro: null,
  },
  contact: {
    number: '05',
    title: 'Contact',
    intro:
      'I am open to System Test Engineer and SDET roles in the UK and EU, across web platforms, medical devices and robotics.',
  },
};

export const contact = {
  heading: 'Get in touch',
  body: 'The fastest way to reach me is email. I read every message and reply to all of them.',
  links: [
    { label: 'Email', value: identity.email, href: `mailto:${identity.email}` },
    {
      label: 'LinkedIn',
      value: identity.linkedin.label,
      href: identity.linkedin.url,
    },
  ],
};

export const footer = {
  note: 'Built with React. Designed and coded by me.',
};

export const skipLinkLabel = 'Skip to main content';
