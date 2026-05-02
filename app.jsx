/* Main app shell — routing, topbar, footer, tweaks, scroll reveal. */

const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest",
  "frameStyle": "mixed",
  "showOrnaments": true,
  "scriptAccent": true
}/*EDITMODE-END*/;

const PAGES = [
  { id: 'home',   label: 'Home' },
  { id: 'travel', label: 'Travel Information' },
  { id: 'todo',   label: 'Things to Do' },
  { id: 'eat',    label: 'Places to Eat & Wander' },
  { id: 'events', label: 'Wedding Events' },
];

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState('home');
  const mainRef = useRef(null);

  // Apply palette to root
  useEffect(() => {
    document.documentElement.setAttribute('data-palette', tweaks.palette);
  }, [tweaks.palette]);

  // Scroll-to-top + scroll-reveal observer on each page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [page]);

  const go = (id) => setPage(id);

  return (
    <div className="app" data-screen-label={`${page}`}>
      {FRAME_DEFS}

      {/* TOPBAR */}
      <header className="topbar">
        <div className="topbar__inner">
          <a className="topbar__brand" onClick={() => go('home')} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
            <span>RAMEY</span>
            <span className="ampersand">&amp;</span>
            <span>HIBA</span>
          </a>
          <nav className="topbar__nav" aria-label="Primary">
            {PAGES.map((p) => (
              <a
                key={p.id}
                className={`topbar__link ${page === p.id ? 'is-active' : ''}`}
                onClick={() => go(p.id)}
                role="button"
                tabIndex="0"
                style={{ cursor: 'pointer' }}
              >
                {p.label}
              </a>
            ))}
          </nav>
          <div className="topbar__date">07 · 05 · 2026 &nbsp;·&nbsp; RABAT</div>
        </div>
      </header>

      {/* PAGE */}
      <main className="page-wrap" ref={mainRef} key={page}>
        {page === 'home'   && <HomePage   go={go} frameStyle={tweaks.frameStyle} />}
        {page === 'travel' && <TravelPage frameStyle={tweaks.frameStyle} />}
        {page === 'todo'   && <ThingsToDoPage frameStyle={tweaks.frameStyle} />}
        {page === 'eat'    && <EatPage frameStyle={tweaks.frameStyle} />}
        {page === 'events' && <EventsPage />}
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <p className="site-footer__monogram">R&amp;H</p>
        <p className="site-footer__date">May · Seven · MMXXVI</p>
        <div className="site-footer__rule">
          <HorizontalRule width={260} color="var(--gold)" />
        </div>
        <p className="site-footer__credit">Rabat · Morocco · A Family Celebration</p>
      </footer>

      {/* TWEAKS */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakRadio
            label="Color theme"
            value={tweaks.palette}
            options={[
              { value: 'forest',     label: 'Forest' },
              { value: 'midnight',   label: 'Midnight' },
              { value: 'terracotta', label: 'Terra' },
              { value: 'sand',       label: 'Sand' },
            ]}
            onChange={(v) => setTweak('palette', v)}
          />
        </TweakSection>
        <TweakSection title="Photo Frames">
          <TweakSelect
            label="Frame style"
            value={tweaks.frameStyle}
            options={[
              { value: 'mixed',      label: 'Mixed (varies by section)' },
              { value: 'keyhole',    label: 'Keyhole arch' },
              { value: 'horseshoe',  label: 'Horseshoe arch' },
              { value: 'multifoil',  label: 'Multifoil arch' },
              { value: 'lancet',     label: 'Lancet arch' },
              { value: 'star',       label: 'Eight-point star' },
              { value: 'soft',       label: 'Soft rounded' },
            ]}
            onChange={(v) => setTweak('frameStyle', v)}
          />
        </TweakSection>
        <TweakSection title="Navigation">
          <TweakRadio
            label="Jump to page"
            value={page}
            options={PAGES.map(p => ({ value: p.id, label: p.label.split(' ')[0] }))}
            onChange={go}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
