/* Home page — hero, welcome, at-a-glance, quick links, wedding day */

function HomePage({ go, frameStyle }) {
  return (
    <div className="page-transition">
      {/* HERO */}
      <section className="hero bg-pattern">
        <div className="hero__pattern">
          <ZelligePattern color="var(--gold)" opacity={0.05} />
        </div>
        <div className="hero__inner">
          <div className="hero__copy reveal">
            <div className="hero__eyebrow">
              <span className="eyebrow">A Moroccan Celebration</span>
            </div>
            <h1 className="hero__name">
              <span className="row">Ramey</span>
              <span className="row dim">
                <span className="amp">&amp;</span> Hiba
              </span>
            </h1>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-eyebrow">The Date</span>
                <span className="hero__meta-value">07 · 05 · 26</span>
              </div>
              <div className="hero__meta-divider" />
              <div className="hero__meta-item">
                <span className="hero__meta-eyebrow">The City</span>
                <span className="hero__meta-value">Rabat</span>
              </div>
              <div className="hero__meta-divider" />
              <div className="hero__meta-item">
                <span className="hero__meta-eyebrow">The Country</span>
                <span className="hero__meta-value">Morocco</span>
              </div>
            </div>
            <p className="hero__lede">
                Two souls, one celebration—bringing together cultures in a city our family has cherished for generations.            
            </p>
            <div className="hero__cta-row">
              <a className="gold-link" onClick={() => go('travel')} role="button" tabIndex="0">
                Plan your journey <Icon.Arrow />
              </a>
              <a className="gold-link" onClick={() => go('events')} role="button" tabIndex="0">
                Wedding events <Icon.Arrow />
              </a>
            </div>
          </div>

          <div className="hero__couple reveal">
            <CornerOrnament size={68} className="hero__couple-corner tl" style={{ position: 'absolute', top: '-14px', left: '-14px', color: 'var(--gold)', opacity: 0.6, zIndex: 1 }} />
            <CornerOrnament size={68} style={{ position: 'absolute', top: '-14px', right: '-14px', color: 'var(--gold)', opacity: 0.6, zIndex: 1, transform: 'scaleX(-1)' }} />
            <CornerOrnament size={68} style={{ position: 'absolute', bottom: '34px', left: '-14px', color: 'var(--gold)', opacity: 0.6, zIndex: 1, transform: 'scaleY(-1)' }} />
            <CornerOrnament size={68} style={{ position: 'absolute', bottom: '34px', right: '-14px', color: 'var(--gold)', opacity: 0.6, zIndex: 1, transform: 'scale(-1, -1)' }} />
            <div className="hero__couple-frame">
              <Frame
                variant={frameStyle === 'mixed' ? 'keyhole' : frameStyle}
                src="assets/couple.jpg"
                alt="Ramey and Hiba"
                aspect={0.72}
                eager
                tone="gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section-block">
        <div className="container">
          <div className="welcome reveal">
            <div className="welcome__media">
              <Frame
                variant="square"
                src="assets/morocco-flag.svg"
                alt="Flag of Morocco"
                aspect={1}
                tone="gold"
              />
            </div>
            <div className="welcome__copy">
              <span className="eyebrow">A Note From Us</span>
              <h2 style={{ marginTop: '1rem' }}>Welcome to Rabat</h2>
              <HorizontalRule color="var(--gold)" width={180} style={{ margin: '0.5rem 0 1.5rem', opacity: 0.7 }} />
              <p>
                We are so excited to celebrate our wedding with you in Morocco. Having our
                favorite people together in such a beautiful place means the world to us.
              </p>
              <p>
                This site holds everything you need to plan your trip — from arrival tips
                and local travel notes, to the details of the wedding weekend itself.
              </p>
              <p style={{ marginTop: '2rem', fontFamily: 'var(--f-script)', fontSize: '1.6rem', color: 'var(--gold)', lineHeight: 1 }}>
                With love,<br/>
                <span style={{ fontSize: '1.2em' }}>Ramey &amp; Hiba</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section-block section-block--tight section-block--elev">
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">The Trip at a Glance</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>One glance, the whole journey</h2>
          </div>
          <div className="glance reveal">
            <div className="glance__item">
              <div className="glance__icon"><Icon.Calendar size={28} /></div>
              <span className="glance__eyebrow">When</span>
              <h3 className="glance__title">May 5–9, 2026</h3>
              <span className="glance__sub">Plan to arrive May 5 · Depart May 9 or after</span>
            </div>
            <div className="glance__item">
              <div className="glance__icon"><Icon.Plane size={28} /></div>
              <span className="glance__eyebrow">Fly To</span>
              <h3 className="glance__title">RBA · Rabat</h3>
              <span className="glance__sub">Or Casablanca (CMN), 1.5 hr drive</span>
            </div>
            <div className="glance__item">
              <div className="glance__icon"><Icon.Coin size={28} /></div>
              <span className="glance__eyebrow">Currency</span>
              <h3 className="glance__title">Dirham (MAD)</h3>
              <span className="glance__sub">Bring cash · ATMs widely available</span>
            </div>
            <div className="glance__item">
              <div className="glance__icon"><Icon.Sun size={28} /></div>
              <span className="glance__eyebrow">Climate</span>
              <h3 className="glance__title">Warm &amp; Mild</h3>
              <span className="glance__sub">Mid-70s°F, light layers, breezy nights</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="section-block">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Where to Begin</span>
            <h2>Choose your way in</h2>
            <p>Three doorways into the weekend, each with everything you need to feel oriented before you arrive.</p>
          </div>
          <div className="quicklinks reveal">
            <button className="quicklink" onClick={() => go('travel')}>
              <span className="quicklink__num">— I.</span>
              <h3 className="quicklink__title">Travel Information</h3>
              <p className="quicklink__desc">
                Arrival, currency, getting online, driving notes and small cultural courtesies for a smooth landing.
              </p>
              <span className="quicklink__arrow">View Guide <Icon.Arrow size={14} /></span>
            </button>
            <button className="quicklink" onClick={() => go('todo')}>
              <span className="quicklink__num">— II.</span>
              <h3 className="quicklink__title">Things to Do</h3>
              <p className="quicklink__desc">
                A small editorial guide to the medina, the Kasbah, the Chellah and an afternoon on the water.
              </p>
              <span className="quicklink__arrow">Open Guide <Icon.Arrow size={14} /></span>
            </button>
            <button className="quicklink" onClick={() => go('events')}>
              <span className="quicklink__num">— III.</span>
              <h3 className="quicklink__title">Wedding Events</h3>
              <p className="quicklink__desc">
                The henna, the ceremony, the long Moroccan night at Villa Azzaitoune — schedule and dress.
              </p>
              <span className="quicklink__arrow">See Schedule <Icon.Arrow size={14} /></span>
            </button>
          </div>
        </div>
      </section>

      {/* WEDDING DAY */}
      <section className="section-block">
        <div className="container container--narrow">
          <div className="wedday reveal">
            <div className="wedday__pattern">
              <ZelligePattern color="var(--gold)" opacity={0.04} />
            </div>
            <div className="wedday__inner">
              <span className="eyebrow">The Wedding Day</span>
              <h2 className="wedday__title">Save the Date</h2>
              <HorizontalRule color="var(--gold)" width={220} />
              <div className="wedday__date">
                <span className="wedday__date-item">May Seven</span>
                <span className="wedday__date-glyph">
                  <StarOrnament size={16} />
                </span>
                <span className="wedday__date-item">5 PM – 5 AM</span>
              </div>
              <div className="wedday__venue">Villa Azzaitoune</div>
              <div className="wedday__address">
                33° 49′ 40.5″ N &nbsp;·&nbsp; 6° 48′ 59.9″ W &nbsp;·&nbsp; El Menzeh, Rabat
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.HomePage = HomePage;
