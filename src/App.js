// src/App.js
// HashRouter is deliberate: it works on GitHub Pages under the /Testing_portfolio
// project path with no 404.html redirect and no basename handling.

import React, { useEffect, useRef } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import Home from './pages/Home';
import TrackPage from './pages/TrackPage';
import './App.css';

// On route change, reset scroll and move focus to <main> so keyboard and screen
// reader users land on the new page rather than staying where they were.
const RouteChangeHandler = ({ mainRef }) => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus();
  }, [pathname, mainRef]);

  return null;
};

const App = () => {
  const mainRef = useRef(null);

  return (
    <HashRouter>
      <div className="app">
        <SkipLink />
        <Nav />
        <RouteChangeHandler mainRef={mainRef} />
        <main id="main" ref={mainRef} tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/embedded" element={<TrackPage track="embedded" />} />
            <Route path="/web" element={<TrackPage track="web" />} />
            {/* Anything unrecognised falls back to the home page. */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
