// src/analytics/goatcounter.js
// Thin wrapper around the GoatCounter count.js API.
//
// Everything here is defensive. count.js is loaded async from a third party
// and is frequently blocked by ad blockers, absent in tests, and irrelevant in
// local development, so no caller should ever have to think about whether it
// is there. Nothing in this module throws.
//
// Only page paths are sent. No events, no identifiers, no titles, no referrer.
//
// count.js is loaded with no_onload, so it never counts a view by itself and
// every pageview comes from here. It is also loaded async, which means the
// first React effect usually runs before the script has arrived. A pageview
// sent in that window would be lost, so pageviews are queued until count.js
// is ready and flushed when its script fires load.

// Pageviews are only counted on the deployed site. Local development, preview
// builds and test runs all resolve to a different hostname and send nothing.
export const ANALYTICS_HOST = 'engahmedmoustafasadek.github.io';

const pending = [];
let listening = false;

const isReady = (target) => {
  const goatcounter = target.goatcounter;
  return Boolean(goatcounter && typeof goatcounter.count === 'function');
};

const send = (target, path) => {
  try {
    target.goatcounter.count({ path });
    return true;
  } catch (error) {
    // Analytics must never break the page.
    return false;
  }
};

const flush = (target) => {
  while (pending.length > 0 && isReady(target)) {
    send(target, pending.shift());
  }
};

// Waits for count.js to finish loading, once. If the script has already run
// then isReady is true and this is never reached, so there is no race.
const waitForScript = (target) => {
  if (listening) return;

  const script =
    target.document &&
    typeof target.document.querySelector === 'function' &&
    target.document.querySelector('script[data-goatcounter]');

  if (!script || typeof script.addEventListener !== 'function') return;

  listening = true;
  script.addEventListener('load', () => flush(target), { once: true });
};

/**
 * Send one pageview, or queue it if count.js has not loaded yet.
 *
 * @param {string} path Clean route path, for example "/" or "/embedded".
 * @param {Window} [win] Injectable window, used by the tests.
 * @return {boolean} true when a pageview was sent immediately.
 */
export function countPageview(path, win) {
  const target = win || (typeof window === 'undefined' ? undefined : window);

  // No window at all, for example a server side render.
  if (!target) return false;

  // Never count anywhere but the deployed origin.
  if (!target.location || target.location.hostname !== ANALYTICS_HOST) {
    return false;
  }

  if (isReady(target)) {
    flush(target);
    return send(target, path);
  }

  // count.js is missing, still in flight, or blocked. Hold the view: it is
  // sent if the script arrives, and quietly dropped if it never does.
  pending.push(path);
  waitForScript(target);
  return false;
}

export default countPageview;
