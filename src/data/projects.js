// src/data/projects.js
// Featured project cards. Every project is client work, so none carry repo links.

export const TRACKS = {
  EMBEDDED: 'embedded',
  WEB: 'web',
};

export const trackLabels = {
  [TRACKS.EMBEDDED]: 'Embedded and Systems',
  [TRACKS.WEB]: 'Web and API',
};

export const proprietaryLabel = 'Client engagement, code proprietary';

export const projects = [
  {
    id: 'iso-tp-library',
    number: '01',
    title: 'Layered ISO-TP conformance test library',
    track: TRACKS.EMBEDDED,
    problem: 'Test logic was duplicated across protocol conformance suites.',
    solution:
      'I built a layered architecture that separates frame construction, collection and injection, so adding a new conformance scenario became a configuration change rather than new code. It covers single-frame, multi-frame, flow control, and boundary and error cases.',
    stack: ['Python', 'Pytest', 'CAN / CAN FD'],
  },
  {
    id: 'hil-snapshot',
    number: '02',
    title: 'HIL failure snapshot module',
    track: TRACKS.EMBEDDED,
    problem: 'Intermittent HIL failures took multi-day investigations.',
    solution:
      'I wrote a module that automatically captures the full system state at the moment of failure: logs, bus traffic and environment data. Multi-day investigations became same-day diagnoses.',
    stack: ['Python', 'Pytest', 'HIL tooling'],
  },
  {
    id: 'playwright-iot',
    number: '03',
    title: 'Playwright E2E framework for a connected IoT platform',
    track: TRACKS.WEB,
    problem: 'Regression across UI, backend and hardware was entirely manual.',
    solution:
      'I designed and built a Playwright and Pytest framework from scratch, using the Page Object Model to cover end-to-end user flows. It automated 80% of test cases and cut regression cycle time by 85%.',
    stack: ['Python', 'Playwright', 'Pytest', 'Postman', 'GitLab CI'],
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: TRACKS.EMBEDDED, label: trackLabels[TRACKS.EMBEDDED] },
  { id: TRACKS.WEB, label: trackLabels[TRACKS.WEB] },
];

export const projectsByTrack = (track) =>
  track ? projects.filter((project) => project.track === track) : projects;
