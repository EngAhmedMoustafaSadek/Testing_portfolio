// The module holds a pending queue at module scope, so each test gets a fresh
// copy via jest.resetModules rather than a test-only reset export.

const ANALYTICS_HOST = 'engahmedmoustafasadek.github.io';

let countPageview;

beforeEach(() => {
  jest.resetModules();
  countPageview = require('./goatcounter').countPageview;
});

// A stand-in for window, so these tests never depend on the jsdom URL.
const fakeWindow = ({ hostname = ANALYTICS_HOST, goatcounter, script } = {}) => ({
  location: { hostname },
  goatcounter,
  document: { querySelector: () => script || null },
});

// A stand-in for the count.js <script>, which only needs a load listener.
const fakeScript = () => {
  const listeners = [];
  return {
    addEventListener: (type, handler) => listeners.push({ type, handler }),
    fireLoad: () => listeners.filter((l) => l.type === 'load').forEach((l) => l.handler()),
  };
};

describe('countPageview', () => {
  it('sends the path on the deployed origin', () => {
    const count = jest.fn();
    const win = fakeWindow({ goatcounter: { count } });

    expect(countPageview('/embedded', win)).toBe(true);
    expect(count).toHaveBeenCalledTimes(1);
    expect(count).toHaveBeenCalledWith({ path: '/embedded' });
  });

  it('sends nothing but the path, so no titles or identifiers leak', () => {
    const count = jest.fn();
    countPageview('/web', fakeWindow({ goatcounter: { count } }));

    expect(Object.keys(count.mock.calls[0][0])).toEqual(['path']);
  });

  it('no-ops when window.goatcounter is absent', () => {
    const win = fakeWindow({ goatcounter: undefined });
    expect(() => countPageview('/', win)).not.toThrow();
    expect(countPageview('/', win)).toBe(false);
  });

  it('no-ops when count.js has loaded only partially', () => {
    // The global exists as a settings object before count.js defines count.
    const win = fakeWindow({ goatcounter: { no_onload: true } });
    expect(() => countPageview('/', win)).not.toThrow();
    expect(countPageview('/', win)).toBe(false);
  });

  it('no-ops off the deployed origin, so local development is never counted', () => {
    const count = jest.fn();

    ['localhost', '127.0.0.1', 'evil.example.com'].forEach((hostname) => {
      expect(
        countPageview('/', fakeWindow({ hostname, goatcounter: { count } }))
      ).toBe(false);
    });
    expect(count).not.toHaveBeenCalled();
  });

  it('swallows an error thrown by count.js', () => {
    const count = jest.fn(() => {
      throw new Error('blocked by extension');
    });
    const win = fakeWindow({ goatcounter: { count } });

    expect(() => countPageview('/', win)).not.toThrow();
    expect(countPageview('/', win)).toBe(false);
  });

  it('no-ops against the real test window, which has no goatcounter', () => {
    // Uses the default window argument, the path the app actually takes.
    expect(() => countPageview('/')).not.toThrow();
    expect(countPageview('/')).toBe(false);
  });

  describe('when count.js has not loaded yet', () => {
    it('queues the pageview and sends it once the script loads', () => {
      // This is the common case on a real visit: count.js is async, so the
      // first React effect runs before it arrives. Without the queue this
      // pageview would be lost.
      const script = fakeScript();
      const win = fakeWindow({ script });

      expect(countPageview('/', win)).toBe(false);

      const count = jest.fn();
      win.goatcounter = { count };
      script.fireLoad();

      expect(count).toHaveBeenCalledTimes(1);
      expect(count).toHaveBeenCalledWith({ path: '/' });
    });

    it('preserves the order of queued pageviews', () => {
      const script = fakeScript();
      const win = fakeWindow({ script });

      countPageview('/', win);
      countPageview('/embedded', win);

      const count = jest.fn();
      win.goatcounter = { count };
      script.fireLoad();

      expect(count.mock.calls.map(([arg]) => arg.path)).toEqual([
        '/',
        '/embedded',
      ]);
    });

    it('does not queue a pageview twice when the script loads late', () => {
      const script = fakeScript();
      const win = fakeWindow({ script });

      countPageview('/', win);

      const count = jest.fn();
      win.goatcounter = { count };
      script.fireLoad();
      // A later route change goes straight out, and the queue stays empty.
      countPageview('/web', win);

      expect(count.mock.calls.map(([arg]) => arg.path)).toEqual(['/', '/web']);
    });

    it('drops queued pageviews quietly when the script never loads', () => {
      const script = fakeScript();
      const win = fakeWindow({ script });

      expect(() => {
        countPageview('/', win);
        countPageview('/embedded', win);
      }).not.toThrow();
      // Nothing to assert beyond this: no script, no send, no error.
    });

    it('does not queue anything off the deployed origin', () => {
      const script = fakeScript();
      const win = fakeWindow({ hostname: 'localhost', script });

      countPageview('/', win);

      const count = jest.fn();
      win.goatcounter = { count };
      script.fireLoad();

      expect(count).not.toHaveBeenCalled();
    });
  });
});
