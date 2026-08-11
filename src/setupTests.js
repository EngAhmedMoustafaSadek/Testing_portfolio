// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement scrollIntoView, which the section nav links use.
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = function scrollIntoView() {};
}

// jsdom does define window.scrollTo, but it throws "Not implemented" and logs
// to console.error. The route change handler calls it, so stub it outright
// rather than guarding on its presence.
window.scrollTo = function scrollTo() {};
