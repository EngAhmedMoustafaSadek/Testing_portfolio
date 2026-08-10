// src/data/skills.js
// Plain text tags only. No bars, no percentages, no self-assessed ratings.

import { TRACKS } from './projects';

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
    items: ['Python (primary)', 'C / C++', 'CAPL', 'SQL basics'],
  },
  {
    id: 'testing',
    title: 'Testing',
    tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
    items: [
      'Pytest',
      'Playwright',
      'PyKiso',
      'API testing (Postman)',
      'E2E and system testing',
      'HIL / SIL',
      'Performance testing',
      'Exploratory testing',
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded and protocols',
    tracks: [TRACKS.EMBEDDED],
    items: [
      'CAN / CAN FD',
      'Ethernet',
      'UDS diagnostics',
      'ISO-TP (ISO 15765-2)',
      'Vector CANoe / CANape',
      'dSPACE',
      'EXAM',
      'winIDEA',
      'ODIS',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
    items: [
      'Jenkins',
      'GitLab CI',
      'Docker',
      'Git',
      'Linux (SSH, scripting, log analysis)',
      'Grafana',
    ],
  },
  {
    id: 'process',
    title: 'Process and standards',
    tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
    items: [
      'ISO 26262',
      'A-SPICE',
      'AUTOSAR',
      'Requirement traceability (IBM DOORS, PTC Integrity)',
      'Agile / Scrum',
      'Jira',
    ],
  },
];

export const skillGroupsForTrack = (track) =>
  skillGroups.filter((group) => group.tracks.includes(track));
