// src/components/Nav.js
// Site header. The menu toggle is a real <button> with aria-expanded, and the
// panel closes on Escape and on route change.

import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/content';
import './Nav.css';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // Close the panel whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link className="nav__brand" to="/">
          {nav.brand}
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
          ref={toggleRef}
        >
          <span className="u-visually-hidden">
            {open ? 'Close menu' : 'Open menu'}
          </span>
          <span className={`nav__bars ${open ? 'is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <nav
          className={`nav__panel ${open ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary"
        >
          <ul className="nav__list">
            {/* In-page anchors only make sense on the home page. */}
            {isHome
              ? nav.sections.map((item) => (
                  <li key={item.id}>
                    <a className="nav__link" href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                ))
              : null}

            <li className="nav__divider" aria-hidden="true" />

            {nav.tracks.map((track) => (
              <li key={track.to}>
                <NavLink
                  className={({ isActive }) =>
                    `nav__link nav__link--track ${isActive ? 'is-active' : ''}`
                  }
                  to={track.to}
                >
                  {track.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
