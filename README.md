# Ahmed Moustafa Sadek, portfolio

Personal portfolio site positioning me as a System Test Engineer (SDET),
covering both safety-critical embedded systems and web platforms.

Live: https://engahmedmoustafasadek.github.io/Testing_portfolio/

## Stack

Create React App (react-scripts 5) with React 19, plain CSS, and
react-router-dom for routing. Deployed to GitHub Pages with `gh-pages`.

Runtime dependencies are React, React DOM, and react-router-dom. Nothing else.

## Routes

`HashRouter` is used deliberately. The site is served from a GitHub Pages
project subpath (`/Testing_portfolio/`), and hash routing works there with no
`404.html` redirect and no `basename` handling.

| Route       | Purpose                                                     |
| ----------- | ----------------------------------------------------------- |
| `/`         | Full portfolio                                              |
| `/embedded` | Embedded and systems track: HIL and SIL, protocols, ISO 26262 |
| `/web`      | Web and API track: Playwright, Pytest, CI/CD                |

Both track pages are driven by `src/pages/TrackPage.js`, which narrows the
shared data by track. There is one set of components and one set of content.

## Project layout

```
src/
  data/         all site copy, no strings live in JSX
  components/   presentational components, one CSS file each
  pages/        Home and the shared TrackPage
  hooks/        reveal-on-scroll observer, per-route document metadata
  fonts/        self-hosted latin-subset variable fonts
  index.css     design tokens, reset, base typography, motion
```

### Editing content

All copy lives in `src/data/`. To change what appears on the site, edit those
files rather than the components.

- `content.js`: identity, navigation, per-route metadata, section headings
- `projects.js`: the three featured project cards
- `experience.js`: roles and achievements, tagged by track
- `skills.js`: skill groups, tagged by track
- `certifications.js`: certifications and education

Achievements and skill groups carry a `tracks` array. That is what decides
whether an item shows on `/embedded`, on `/web`, or on both. Achievements also
carry `featured`, which selects the shorter set shown on the home page.

## Design system

Tokens are defined once in `src/index.css`. Surfaces, text colours, the single
accent, the type scale and an 8px spacing scale are all variables. Components
do not hardcode colours or spacing.

- Background `#0B0D10`, with three layered surfaces above it
- One accent, `#F2A65A`, used only for links, focus rings, active markers and
  section numerals
- Space Grotesk for headings, Inter for body, JetBrains Mono for labels and
  numerals, all self-hosted, no third-party font requests
- Motion is a single fade and rise on first reveal, disabled entirely under
  `prefers-reduced-motion`

## Accessibility

Verified in Chromium at 375px, 768px and 1440px:

- Every text colour meets WCAG AA against the surface it sits on, measured
  with alpha compositing rather than assumed
- Visible focus ring on every interactive element
- Skip link, single `main` landmark, semantic headings
- Menu toggle is a real button with `aria-expanded`
- Project filter is a tablist with a roving tabindex and arrow key support
- No horizontal scroll at any tested width

## Local development

```bash
npm install
npm start        # dev server
npm test         # test suite
npm run build    # production build
npm run deploy   # build and publish to GitHub Pages
```

`npm run deploy` publishes the `build` folder to the `gh-pages` branch. The
`homepage` field in `package.json` controls the base path and must stay in step
with the repository name.

## Environment

The site needs no environment variables. `.env.production` was removed along
with the contact form that used it.

If one is ever added back: anything prefixed `REACT_APP_` is inlined into the
JavaScript bundle at build time and is therefore public. Never put a secret
in it.
