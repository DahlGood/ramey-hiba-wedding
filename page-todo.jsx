/* Things to Do — editorial scroll experience */

function ThingsToDoPage({ frameStyle }) {
  // Each activity gets a distinct frame style when frameStyle === 'mixed'
  const styleFor = (i) => {
    if (frameStyle !== 'mixed') return frameStyle;
    return ['keyhole', 'horseshoe', 'multifoil', 'lancet', 'star'][i % 5];
  };

  const base = (typeof window !== 'undefined' && window.__ASSETS__) || 'assets';

  const activities = [
    {
      id: 'medina',
      tag: 'Culture · Souks',
      title: 'The Ancient Medina',
      meta: ['Old City', 'Half Day'],
      body: `Rabat's historic medina invites you into the rhythm and texture of authentic Moroccan life. Winding through a labyrinth of covered souks and open-air stalls, visitors discover an abundance of handcrafted goods — embroidered textiles, hand-painted ceramics, aromatic spices, and ornate lanterns. Whether seeking a memento of Morocco or simply wishing to absorb the color and energy of a living marketplace, the medina is an experience that lingers long after you depart.`,
      img: `${base}/medina-illustration.png`,
      caption: 'The medina at golden hour — illustration',
      objectFit: 'contain',
      map: 'https://share.google/9MDWvz0EWdW7FsWXV',
    },
    {
      id: 'chellah',
      tag: 'Day Trip · History',
      title: 'Chellah Castle',
      meta: ['254H+HVC, Mohammed VI Ave.', '06 93 24 18 56'],
      body: `Nestled within ancient walls draped in bougainvillea, the Chellah is one of Morocco's most hauntingly beautiful historical sites. This walled necropolis encompasses Roman ruins dating to the first century alongside a medieval Islamic sanctuary, where minarets rise above lush, overgrown gardens and resident white storks keep a silent watch. A walk through the Chellah is a walk through centuries.`,
      img: `${base}/chellah.png`,
      caption: 'Chellah — walled gardens and ramparts',
      map: 'https://share.google/stKsKUngfkF9f0SRu',
    },
    {
      id: 'hassan',
      tag: 'Culture · Architecture',
      title: 'Hassan Mosque & Tower',
      meta: ['25J6+5R8, Rabat', 'Sunset Recommended'],
      body: `Rising at the heart of Rabat, the Hassan Tower is the unfinished minaret of a 12th-century mosque that was meant to be the largest in the world. The vast esplanade of marble columns at its feet, and the Mausoleum of Mohammed V across the way, form one of the city's most majestic open spaces. Visit at sunset, when the sandstone glows amber and the call to prayer drifts over the river — a moment that holds the whole of Morocco in it.`,
      img: `${base}/hassan-mosque.png`,
      caption: 'Hassan Tower at sunset',
      map: 'https://share.google/7SCClQA6v5gfSFEjd',
    },
    {
      id: 'botanical',
      tag: 'Nature · Garden',
      title: 'Test Botanical Garden',
      meta: ['Avenue de la Victoire, Rabat', '1–2 Hours'],
      body: `Tucked just outside the medina walls, the Jardins d'Essais Botaniques are a quiet, fragrant counterpoint to the city's stone and noise. Long reflecting pools mirror date palms and bougainvillea; gravel paths thread through Andalusian, Moroccan, and tropical gardens designed in the early 20th century. It is the perfect slow morning — a place to read, to drift, to find the city's softer rhythm before the wedding weekend begins.`,
      img: `${base}/botanical.png`,
      caption: 'Reflecting pools at the Jardins d\u2019Essais',
      map: 'https://share.google/kQg4hHGR0MHxThoXG',
    },
    {
      id: 'marina',
      tag: 'Adventure · Water',
      title: 'La Marina Salé',
      meta: ['25HG+RP9, Salé'],
      body: `For those drawn to the water, the Salé Marina presents a spectacular vantage point from which to experience Rabat's coastal beauty. Embark on a scenic boat tour along the Bou Regreg River, gliding past the medina walls and the Kasbah of the Udayas as the Atlantic horizon stretches beyond. For the more adventurous, jet skiing offers an exhilarating rush — a thrilling contrast to the city's ancient calm.`,
      img: `${base}/marina.png`,
      caption: 'Salé Marina, river light',
      map: 'https://share.google/xD41j5aEmRKpCz4H7',
    },
  ];

  return (
    <div className="page-transition">
      <section className="container">
        <div className="todo-hero reveal">
          <div className="todo-hero__copy">
            <span className="eyebrow">A Boutique Guide</span>
            <h1 style={{ marginTop: '1rem' }}>Things to Do<br/>in &amp; around Rabat</h1>
            <p className="todo-hero__lede">
              Five favorite places for a stretched-out afternoon, an early-morning wander
              or a quiet evening on the water — chosen with love for the people we are
              about to host.
            </p>
            <HorizontalRule color="var(--gold)" width={200} style={{ marginTop: '2rem' }} />
          </div>
          <div className="todo-hero__media">
            <Frame
              variant="multifoil"
              src="assets/things to do .jpeg"
              alt="Things to do in Rabat"
              aspect={0.85}
              tone="gold"
              eager
            />
          </div>
        </div>

        {activities.map((a, i) => (
          <article
            key={a.id}
            className={`editorial-row reveal ${i % 2 === 1 ? 'alt' : ''}`}
            id={a.id}
          >
            <div className="editorial-row__media">
              <Frame
                variant={styleFor(i)}
                src={a.img}
                alt={a.title}
                aspect={i % 3 === 0 ? 0.78 : 0.72}
                tone="gold"
                caption={a.caption}
                placeholder={<PlaceholderArt label={a.title.toLowerCase()} />}
              />
            </div>
            <div className="editorial-row__copy">
              <div className="editorial-row__num">— {String(i + 1).padStart(2, '0')}</div>
              <span className="editorial-row__tag">{a.tag}</span>
              <h2 className="editorial-row__title">{a.title}</h2>
              <div className="editorial-row__meta">
                {a.meta.map((m, j) => (
                  <span key={j}>
                    {j === 0 ? <Icon.Pin size={14} /> : <Icon.Clock size={14} />} {m}
                  </span>
                ))}
              </div>
              <div className="editorial-row__body">
                <p>{a.body}</p>
              </div>
              <div style={{ marginTop: '1.75rem' }}>
                <a className="gold-link" href={a.map} target="_blank" rel="noopener">
                  See on the map <Icon.Arrow />
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Day trips closing card */}
        <section className="reveal" style={{ margin: '4rem 0 6rem' }}>
          <div className="wedday" style={{ padding: '4rem 2.5rem' }}>
            <div className="wedday__pattern">
              <ZelligePattern color="var(--gold)" opacity={0.04} />
            </div>
            <div className="wedday__inner" style={{ maxWidth: '38em' }}>
              <span className="eyebrow">Going Further</span>
              <h2 style={{
                fontFamily: 'var(--f-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                margin: '0.5rem 0 1rem',
                color: 'var(--cream)',
                lineHeight: 1.05,
              }}>
                A day trip, if you have an extra one
              </h2>
              <HorizontalRule color="var(--gold)" width={220} />
              <p style={{
                fontFamily: 'var(--f-display)',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: 'var(--cream-soft)',
                lineHeight: 1.6,
                maxWidth: '32em',
                marginTop: '1.25rem',
              }}>
                If you are staying a little longer, our two favorite places to send you are
                <strong style={{ color: 'var(--gold)', fontWeight: 500, fontStyle: 'normal' }}> Casablanca </strong>
                — for the great Hassan II Mosque on the Atlantic and a long lunch by the corniche —
                and
                <strong style={{ color: 'var(--gold)', fontWeight: 500, fontStyle: 'normal' }}> Tangier </strong>
                — for the white-washed medina, the strait, and that particular northern light.
                Both are easy from Rabat by train or car, and either makes for a beautiful
                day away.
              </p>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '1.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a className="gold-link" href="https://www.google.com/maps/search/Casablanca+Morocco" target="_blank" rel="noopener">
                  Casablanca <Icon.Arrow />
                </a>
                <a className="gold-link" href="https://www.google.com/maps/search/Tangier+Morocco" target="_blank" rel="noopener">
                  Tangier <Icon.Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

window.ThingsToDoPage = ThingsToDoPage;
