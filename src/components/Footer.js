// src/components/Footer.js

import React from 'react';
import { identity, footer } from '../data/content';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p className="footer__note u-mono">{footer.note}</p>
      <ul className="footer__links">
        <li>
          <a href={`mailto:${identity.email}`}>Email</a>
        </li>
        <li>
          <a
            href={identity.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={identity.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
