/* Travel Information page */

function TravelPage({ frameStyle }) {
  const sections = [
    { id: 'arrival', num: 'I', title: 'Arriving in Morocco', icon: <Icon.Plane size={32} /> },
    { id: 'driving', num: 'II', title: 'Driving & Car Rentals', icon: <Icon.Car size={32} /> },
    { id: 'connect', num: 'III', title: 'Getting Online', icon: <Icon.Wifi size={32} /> },
    { id: 'culture', num: 'IV', title: 'Small Courtesies', icon: <Icon.Tea size={32} /> },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page-transition">
      <section className="travel-hero reveal">
        <div className="container">
          <span className="eyebrow">Practical Notes</span>
          <h1>Travel Information</h1>
          <p className="travel-hero__lede">
            Everything you need to land softly, settle in and begin the weekend with ease.
            Read end-to-end, or jump to the section you need.
          </p>
          <nav className="toc" aria-label="Travel sections">
            {sections.map((s) => (
              <button key={s.id} className="toc__item" onClick={() => scrollTo(s.id)}>
                <span className="num">{s.num}.</span> {s.title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <div className="container">
        {/* I. ARRIVAL */}
        <section className="travel-section reveal" id="arrival">
          <div className="travel-section__head">
            <div className="travel-section__icon"><Icon.Plane size={36} /></div>
            <div className="travel-section__num">— I.</div>
            <h2 className="travel-section__title">Arriving in Morocco</h2>
          </div>
          <div className="travel-section__body">
            <p>
              When you arrive at the airport, we recommend taking out cash from an ATM
              before heading to your hotel or riad. Morocco uses Moroccan dirhams, and it
              is necessary to have cash on hand for taxis, tips, small shops, and local
              purchases.
            </p>
            <div className="travel-card">
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>Quick Tip · ATM</span>
              <h3 className="travel-card__heading">Always choose to be charged in dirhams</h3>
              <p className="travel-card__body">
                When the ATM screen offers to convert the amount into your home currency,
                politely decline. Choose to be charged in Moroccan dirhams instead — this
                avoids extra conversion fees from the ATM provider.
              </p>
            </div>
            <div className="travel-card travel-card--row">
              <div>
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>Airports</span>
                <h3 className="travel-card__heading" style={{ marginTop: '0.4rem' }}>RBA · Rabat-Salé · or CMN · Casablanca</h3>
                <p className="travel-card__body" style={{ marginTop: '0.5rem' }}>
                  Rabat-Salé is closest to the wedding venue. Casablanca is larger with more
                  international routes — it is a calm 1.5-hour drive or a 1-hour train ride.
                </p>
              </div>
              <Icon.Pin size={32} />
            </div>
          </div>
        </section>

        {/* II. DRIVING */}
        <section className="travel-section reveal" id="driving">
          <div className="travel-section__head">
            <div className="travel-section__icon"><Icon.Car size={36} /></div>
            <div className="travel-section__num">— II.</div>
            <h2 className="travel-section__title">Driving &amp; Car Rentals</h2>
          </div>
          <div className="travel-section__body">
            <p>
              If you plan to rent a car, please keep these quick tips in mind before
              hitting the road. Renting a car is also a wonderful way to explore Morocco
              beyond the wedding weekend.
            </p>

            <div className="tip-grid">
              <div className="tip-card">
                <span className="tip-card__num">— 01</span>
                <h4 className="tip-card__heading">Always buckle up</h4>
                <p className="tip-card__body">
                  Seatbelts are required, and police may stop drivers or passengers who are not wearing one.
                </p>
              </div>
              <div className="tip-card">
                <span className="tip-card__num">— 02</span>
                <h4 className="tip-card__heading">Yield at roundabouts</h4>
                <p className="tip-card__body">
                  Cars already in the roundabout have the right of way. Wait until you have clear space before entering.
                </p>
              </div>
              <div className="tip-card">
                <span className="tip-card__num">— 03</span>
                <h4 className="tip-card__heading">Give yourself extra time</h4>
                <p className="tip-card__body">
                  Rabat is a busy city and traffic can be heavy. Plan to leave a bit earlier than usual.
                </p>
              </div>
            </div>

            <div className="travel-card travel-card--row" style={{ marginTop: '2rem' }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>Recommended</span>
                <h3 className="travel-card__heading" style={{ marginTop: '0.4rem' }}>kayak.com / cars</h3>
                <p className="travel-card__body" style={{ marginTop: '0.5rem' }}>
                  We've had good luck comparing rates here. Helpful for day trips to Chefchaouen, Fez or Marrakech.
                </p>
              </div>
              <a className="gold-link" href="https://www.kayak.com/cars" target="_blank" rel="noopener">
                Compare cars <Icon.Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* III. ONLINE */}
        <section className="travel-section reveal" id="connect">
          <div className="travel-section__head">
            <div className="travel-section__icon"><Icon.Wifi size={36} /></div>
            <div className="travel-section__num">— III.</div>
            <h2 className="travel-section__title">Getting Online</h2>
          </div>
          <div className="travel-section__body">
            <p>
              We recommend setting up mobile data before you arrive so you can easily use
              maps, message other guests, and stay connected throughout the weekend.
            </p>
            <p>
              If your phone supports eSIMs, this is one of the easiest ways to have data
              ready as soon as you land in Morocco — making arrival day and getting around
              feel a little smoother.
            </p>
            <div className="travel-card travel-card--row">
              <div>
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>Recommended · eSIM</span>
                <h3 className="travel-card__heading" style={{ marginTop: '0.4rem' }}>esims.io / countries / morocco</h3>
                <p className="travel-card__body" style={{ marginTop: '0.5rem' }}>
                  Quick to set up, activates on landing, no SIM swap required.
                </p>
              </div>
              <a className="gold-link" href="https://esims.io/countries/morocco?srsltid=AfmBOorYSRRHE4PnUBjeixz5B_nNQtaOj7h4ZS1XhkjRfFb95kdOsJwX" target="_blank" rel="noopener">
                Set up <Icon.Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* IV. CULTURE */}
        <section className="travel-section reveal" id="culture">
          <div className="travel-section__head">
            <div className="travel-section__icon"><Icon.Tea size={36} /></div>
            <div className="travel-section__num">— IV.</div>
            <h2 className="travel-section__title">Small Courtesies</h2>
          </div>
          <div className="travel-section__body">
            <p>
              A few gentle notes that will make moving through the city feel more like
              home and less like a guidebook.
            </p>
            <div className="tip-grid">
              <div className="tip-card">
                <span className="tip-card__num">— 01</span>
                <h4 className="tip-card__heading">Greet warmly</h4>
                <p className="tip-card__body">
                  A simple <em>Salam</em> or <em>Bonjour</em> goes a long way. Right hand for greetings.
                </p>
              </div>
              <div className="tip-card">
                <span className="tip-card__num">— 02</span>
                <h4 className="tip-card__heading">Dress softly</h4>
                <p className="tip-card__body">
                  Knees and shoulders covered in religious sites; otherwise, the city is relaxed.
                </p>
              </div>
              <div className="tip-card">
                <span className="tip-card__num">— 03</span>
                <h4 className="tip-card__heading">Tip kindly</h4>
                <p className="tip-card__body">
                  10% in restaurants; small dirham coins for porters, parking attendants, and guides.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

window.TravelPage = TravelPage;
