/* Wedding Events — schedule */

function EventsPage() {
  return (
    <div className="page-transition">
      <section className="travel-hero reveal">
        <div className="container">
          <span className="eyebrow">The Celebration</span>
          <h1>Wedding Events</h1>
          <p className="travel-hero__lede">
            One evening, woven together — a Moroccan henna and our wedding,
            shared as one long, beautiful night.
          </p>
        </div>
      </section>

      <div className="container container--narrow">

        {/* Featured wedding card */}
        <article className="wedday reveal" style={{ marginTop: '2rem' }}>
          <div className="wedday__pattern">
            <ZelligePattern color="var(--gold)" opacity={0.04} />
          </div>
          <div className="wedday__inner">
            <span className="eyebrow">Thursday · May Seventh</span>
            <h2 className="wedday__title">The Wedding</h2>
            <HorizontalRule color="var(--gold)" width={240} />
            <div className="wedday__date">
              <span className="wedday__date-item">5 PM</span>
              <span className="wedday__date-glyph"><StarOrnament size={16} /></span>
              <span className="wedday__date-item">Until 5 AM</span>
            </div>
            <p style={{
              fontFamily: 'var(--f-display)',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              maxWidth: '34em',
              margin: '1rem auto 0',
              color: 'var(--cream-soft)',
              lineHeight: 1.55,
            }}>
              The henna ceremony opens the night, followed by our wedding —
              dinner, dance, and mint tea before sunrise. One continuous celebration,
              all in one place. Be ready to stay late.
            </p>
            <div className="wedday__venue" style={{ marginTop: '1.75rem' }}>Villa Azzaitoune</div>
            <div className="wedday__address">
              33° 49′ 40.5″ N &nbsp;·&nbsp; 6° 48′ 59.9″ W &nbsp;·&nbsp; El Menzeh, Rabat
            </div>
            <div style={{ marginTop: '1.75rem' }}>
              <a className="gold-link" href="https://www.google.com/maps?sca_esv=56fd93eb0b029777&rlz=1C5CHFA_enUS1095US1097&sxsrf=ANbL-n5hjo3aUbbW0QJ0PMPDwsDIvfjl9A:1777654137436&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiH3ZpbGxhIGF6emFpdG91bmUgZCBlc3BhY2UgcmFiYXQyCBAhGKABGMMEMggQIRigARjDBDIIECEYoAEYwwQyCBAhGKABGMMESKoRUL4CWLIQcAJ4AJABAJgBpQOgAf8KqgEJMS41LjAuMS4xuAEDyAEA-AEBmAIEoAL7AcICChAAGEcY1gQYsAOYAwCIBgGQBgOSBwMyLjKgB5kfsgcDMC4yuAfzAcIHBTAuMS4zyAcNgAgB&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KX0SWcenaacNMe11mo8pPXqU&daddr=33%C2%B049%2740.5%22N+6%C2%B048%2759.9%22W,+El+Menzeh" target="_blank" rel="noopener">
                See on the map <Icon.Arrow />
              </a>
            </div>
          </div>
        </article>

        {/* Inline programme of the evening */}
        <div className="reveal" style={{ marginTop: '5rem' }}>
          <div className="section-head" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Programme of the Evening</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>The shape of the night</h2>
          </div>

          <article className="event-card">
            <div className="event-card__time">
              <span className="day">5:00 PM</span>
              <span className="hour">Arrival</span>
            </div>
            <div>
              <h3 className="event-card__title">Henna Ceremony</h3>
              <div className="event-card__venue">Villa Azzaitoune · Courtyard</div>
              <p className="event-card__desc">
                A traditional Moroccan henna opens the evening — music, sweet tea, and
                blessings before the wedding begins.
              </p>
            </div>
            <div className="event-card__dress">
              <span className="label">Dress</span>
              Festive · Touch of color
            </div>
          </article>

          <article className="event-card">
            <div className="event-card__time">
              <span className="day">Through the night</span>
              <span className="hour">Ceremony · Dinner · Dance</span>
            </div>
            <div>
              <h3 className="event-card__title">The Wedding</h3>
              <div className="event-card__venue">Villa Azzaitoune · El Menzeh</div>
              <p className="event-card__desc">
                Our ceremony flows into a long Moroccan night of dinner, dancing, and
                mint tea — held together in one place, with all of you.
              </p>
            </div>
            <div className="event-card__dress">
              <span className="label">Dress</span>
              Formal · Elegant
            </div>
          </article>

          <article className="event-card">
            <div className="event-card__time">
              <span className="day">5:00 AM</span>
              <span className="hour">Closing</span>
            </div>
            <div>
              <h3 className="event-card__title">Until Sunrise</h3>
              <div className="event-card__venue">Villa Azzaitoune · Garden</div>
              <p className="event-card__desc">
                For the dancers who stay until the very end — a soft landing as
                the city begins to wake.
              </p>
            </div>
            <div className="event-card__dress">
              <span className="label">Dress</span>
              Whatever you danced in
            </div>
          </article>
        </div>

        <div style={{ textAlign: 'center', padding: '5rem 0 2rem' }} className="reveal">
          <StarOrnament size={26} style={{ color: 'var(--gold)' }} />
          <p style={{
            fontFamily: 'var(--f-display)',
            fontStyle: 'italic',
            fontSize: '1.4rem',
            marginTop: '1rem',
            color: 'var(--cream-soft)',
            maxWidth: '34em',
            margin: '1rem auto 0',
            lineHeight: 1.5,
          }}>
            Final details will be confirmed closer to the date. We'll send a
            printed programme with your welcome bag at the riad.
          </p>
        </div>
      </div>
    </div>
  );
}

window.EventsPage = EventsPage;
