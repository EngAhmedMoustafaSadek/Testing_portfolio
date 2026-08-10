// src/components/SkipLink.js

import React from 'react';
import { skipLinkLabel } from '../data/content';

const SkipLink = () => (
  <a className="skip-link" href="#main">
    {skipLinkLabel}
  </a>
);

export default SkipLink;
