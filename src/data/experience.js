// src/data/experience.js
// Achievements are tagged by track so the home page can show a balanced selection
// while /embedded and /web each show only what their audience cares about.
// `featured: true` marks the subset shown on the home page.

import { TRACKS } from './projects';

export const roles = [
  {
    id: 'ts-system-test-engineer',
    title: 'System Test Engineer',
    company: 'T&S (Technology & Strategy), Engineering & Software Solutions',
    period: 'Dec 2023 to Present',
    location: 'Giza, Egypt',
    clients: [
      'Bosch (eBike Systems)',
      'CARIAD / Volkswagen (ADAS & Infotainment)',
      'Forvia Hella (Connected IoT)',
      'Daimler (Radar Systems)',
    ],
    achievements: [
      {
        id: 'hella-playwright',
        tracks: [TRACKS.WEB],
        featured: true,
        text: 'Designed and built a web test automation framework from scratch for a connected IoT platform, using Playwright, Pytest and the Page Object Model to cover end-to-end flows across UI, backend services and hardware. Automated 80% of test cases and cut regression cycle time by 85%.',
        client: 'Forvia Hella',
      },
      {
        id: 'bosch-nightly',
        tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
        featured: true,
        text: 'Built a Linux-based Python and Pytest system test environment from the ground up for an embedded eBike platform: fully unattended nightly regression, real-time data validation, structured logging, automatic HTML reporting and remote execution over SSH on distributed hardware.',
        client: 'Bosch, current project',
      },
      {
        id: 'daimler-radar',
        tracks: [TRACKS.EMBEDDED],
        featured: true,
        text: 'Achieved 100% test automation on a safety-critical radar integration project under ISO 26262. CAPL scripts covered 200+ software requirements across sender-receiver and client-server interfaces, with timing constraint validation and full requirement-to-test traceability documented for audit.',
        client: 'Daimler',
      },
      {
        id: 'cariad-hil',
        tracks: [TRACKS.EMBEDDED],
        featured: true,
        text: 'Executed and managed 200+ system-level HIL test cases for ADAS and infotainment ECUs using Vector CANoe and CANape. Automated 80+ manual test cases for hardware benches with EXAM and custom Python utilities, cutting regression execution time by 30%.',
        client: 'CARIAD / Volkswagen',
      },
      {
        id: 'iso-tp-suites',
        tracks: [TRACKS.EMBEDDED],
        featured: false,
        text: 'Built ISO-TP (ISO 15765-2) conformance test suites for ECU validation, covering single-frame, multi-frame and flow-control scenarios, with boundary testing for buffer overflows, timing violations and transport-layer error handling.',
        client: null,
      },
      {
        id: 'cicd',
        tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
        featured: true,
        text: 'Integrated test suites into CI/CD with Jenkins, GitLab CI and Docker. Automated nightly regression contributed to a 90% drop in client-reported bugs and up to 60% faster test cycles.',
        client: null,
      },
      {
        id: 'api-testing',
        tracks: [TRACKS.WEB],
        featured: false,
        text: 'Ran REST API testing with Postman, validating payloads, status codes and data consistency between UI, backend and connected devices.',
        client: null,
      },
      {
        id: 'grafana',
        tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
        featured: false,
        text: 'Built Grafana dashboards for test health and system stability.',
        client: null,
      },
      {
        id: 'triage',
        tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
        featured: false,
        text: 'Led bug triage and root cause analysis with development teams, managed the defect lifecycle in Jira, and reviewed requirements for testability.',
        client: null,
      },
      {
        id: 'shared-library',
        tracks: [TRACKS.EMBEDDED, TRACKS.WEB],
        featured: false,
        text: 'Wrote reusable Python helper modules that were adopted as the standard shared library across subsequent team projects, and mentored newer engineers through peer reviews.',
        client: null,
      },
    ],
  },
  {
    id: 'seitech-software-test-intern',
    title: 'Software Test Intern',
    company: 'SEITech Solutions',
    period: 'Sep 2023 to Dec 2023',
    location: 'Giza, Egypt',
    clients: [],
    achievements: [
      {
        id: 'intern-uds',
        tracks: [TRACKS.EMBEDDED],
        featured: true,
        text: 'Analysed 100+ requirements for testability and designed 300+ UDS diagnostic test cases covering DTCs, DIDs and routines across SIL and HIL environments.',
        client: null,
      },
    ],
  },
];

// Returns roles with achievements narrowed to a track, dropping roles left empty.
export const rolesForTrack = (track) =>
  roles
    .map((role) => ({
      ...role,
      achievements: role.achievements.filter((item) =>
        item.tracks.includes(track)
      ),
    }))
    .filter((role) => role.achievements.length > 0);

// Returns roles with only the home page selection.
export const featuredRoles = () =>
  roles
    .map((role) => ({
      ...role,
      achievements: role.achievements.filter((item) => item.featured),
    }))
    .filter((role) => role.achievements.length > 0);
