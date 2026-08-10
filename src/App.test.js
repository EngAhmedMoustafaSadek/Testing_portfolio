import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

// The default CRA test asserted a "learn react" link that never existed here,
// so `npm test` failed on every run. These cover what the site actually promises.

describe('portfolio shell', () => {
  it('leads with the name and the positioning line', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /ahmed moustafa sadek/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/system test engineer \(sdet\)/i)).toBeInTheDocument();
  });

  it('exposes a skip link and a single main landmark', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: /skip to main content/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('main')).toHaveLength(1);
  });

  it('offers email and LinkedIn but never publishes a phone number', () => {
    const { container } = render(<App />);

    expect(
      screen.getAllByRole('link', { name: /ahmed\.moustafa9813@gmail\.com/i }).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole('link', { name: /linkedin/i }).length
    ).toBeGreaterThan(0);

    // Guards the explicit requirement that the phone number stays off the site.
    expect(container.textContent).not.toMatch(/1091145763/);
    expect(container.textContent).not.toMatch(/\+20/);
    expect(container.querySelector('a[href^="tel:"]')).toBeNull();
  });

  it('has no contact form', () => {
    render(<App />);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /send message/i })
    ).not.toBeInTheDocument();
  });
});

describe('project filter', () => {
  const getPanel = () => screen.getByRole('tabpanel');

  it('shows every project by default', () => {
    render(<App />);
    const headings = within(getPanel()).getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3);
  });

  it('narrows to a single track when a filter is selected', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('tab', { name: /web and api/i }));

    const headings = within(getPanel()).getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(/playwright e2e framework/i);
  });

  it('moves between filters with the arrow keys', () => {
    render(<App />);
    const tabs = screen.getAllByRole('tab');

    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tabs[0], { key: 'ArrowRight' });
    expect(screen.getAllByRole('tab')[1]).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });
});

describe('section navigation', () => {
  // Regression: these links were plain "#projects" anchors. Under HashRouter
  // the hash is the route, so clicking one navigated to /projects, fell
  // through to the catch-all, and made the section links vanish until the
  // brand link reset the route.
  const sectionNames = [/^projects$/i, /^experience$/i, /^skills$/i, /^contact$/i];

  it('cancels the default hash navigation so the route survives', () => {
    render(<App />);

    // dispatchEvent returns false when preventDefault was called. Without
    // that, the browser rewrites the hash and HashRouter changes route.
    const notCancelled = fireEvent.click(
      screen.getByRole('link', { name: /^projects$/i })
    );
    expect(notCancelled).toBe(false);

    sectionNames.forEach((name) => {
      expect(screen.getByRole('link', { name })).toBeInTheDocument();
    });
  });

  it('scrolls to the section instead of changing the route', () => {
    const spy = jest.spyOn(Element.prototype, 'scrollIntoView');
    render(<App />);

    fireEvent.click(screen.getByRole('link', { name: /^skills$/i }));

    expect(spy).toHaveBeenCalled();
    // Still on the home route, so the track links are not marked active.
    expect(screen.getByRole('link', { name: /^embedded$/i })).not.toHaveClass(
      'is-active'
    );
    spy.mockRestore();
  });

  it.each([
    ['#/embedded', /system and integration testing/i],
    ['#/web', /web and api test automation/i],
  ])('shows the section links on %s', (hash, heading) => {
    window.location.hash = hash;
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: heading })
    ).toBeInTheDocument();
    sectionNames.forEach((name) => {
      expect(screen.getByRole('link', { name })).toBeInTheDocument();
    });

    window.location.hash = '#/';
  });
});

describe('navigation', () => {
  it('gives the menu toggle an accessible expanded state', () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: /open menu/i });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    expect(
      screen.getByRole('button', { name: /close menu/i })
    ).toHaveAttribute('aria-expanded', 'true');
  });

  it('links to both track pages', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /^embedded$/i })).toHaveAttribute(
      'href',
      '#/embedded'
    );
    expect(screen.getByRole('link', { name: /^web$/i })).toHaveAttribute(
      'href',
      '#/web'
    );
  });
});
