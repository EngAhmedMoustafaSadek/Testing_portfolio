// src/components/Analytics.js
// Sends one GoatCounter pageview per route. Renders nothing.
//
// The site uses HashRouter, so moving between / , /embedded and /web never
// triggers a page load and count.js would otherwise only ever record the
// homepage. useLocation gives the route path without the hash fragment, so
// the stats read as "/embedded" rather than "/#/embedded".
//
// count.js is loaded with no_onload, so it does not count the first pageview
// itself. This effect runs on mount as well as on every later route change,
// which counts the initial view exactly once.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { countPageview } from '../analytics/goatcounter';

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    countPageview(pathname);
  }, [pathname]);

  return null;
};

export default Analytics;
