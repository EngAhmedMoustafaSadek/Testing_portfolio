// Wiring test: does a route change actually produce a pageview, with the
// clean path rather than something containing the hash fragment.
//
// countPageview is mocked here so the assertions are about the routing, not
// about the guards. The guards are covered in goatcounter.test.js.

import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';
import { countPageview } from './goatcounter';

jest.mock('./goatcounter', () => ({
  __esModule: true,
  ANALYTICS_HOST: 'engahmedmoustafasadek.github.io',
  countPageview: jest.fn(),
}));

const paths = () => countPageview.mock.calls.map(([path]) => path);

describe('route tracking', () => {
  beforeEach(() => {
    window.location.hash = '#/';
    countPageview.mockClear();
  });

  afterAll(() => {
    window.location.hash = '#/';
  });

  it('counts the initial pageview exactly once', () => {
    render(<App />);

    // count.js runs with no_onload, so this is the only count for the first
    // view. Two calls here would mean the homepage is counted twice.
    expect(countPageview).toHaveBeenCalledTimes(1);
    expect(countPageview).toHaveBeenCalledWith('/');
  });

  it('counts a route change with the clean path', () => {
    render(<App />);
    countPageview.mockClear();

    fireEvent.click(screen.getByRole('link', { name: /^embedded$/i }));

    expect(countPageview).toHaveBeenCalledTimes(1);
    expect(countPageview).toHaveBeenCalledWith('/embedded');
  });

  it('counts each route once as the visitor moves through the site', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('link', { name: /^embedded$/i }));
    fireEvent.click(screen.getByRole('link', { name: /^web$/i }));

    expect(paths()).toEqual(['/', '/embedded', '/web']);
  });

  it('never sends a path containing the hash fragment', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: /^embedded$/i }));

    paths().forEach((path) => {
      expect(path).not.toContain('#');
      expect(path).toMatch(/^\//);
    });
  });

  it('does not re-count when the section links scroll within a route', () => {
    render(<App />);
    countPageview.mockClear();

    // These cancel the default hash navigation and only scroll, so they must
    // not look like a route change to analytics.
    act(() => {
      fireEvent.click(screen.getByRole('link', { name: /^projects$/i }));
      fireEvent.click(screen.getByRole('link', { name: /^skills$/i }));
    });

    expect(countPageview).not.toHaveBeenCalled();
  });
});
