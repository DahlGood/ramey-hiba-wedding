/* Places to Eat — restaurant guide */

function EatPage({ frameStyle }) {
  const styleFor = (i) => {
    if (frameStyle !== 'mixed') return frameStyle;
    return ['horseshoe', 'keyhole', 'multifoil', 'lancet', 'star'][i % 5];
  };

  const base = (typeof window !== 'undefined' && window.__ASSETS__) || 'assets';

  const places = [
    {
      id: 'hera',
      tag: 'Brunch · Modern',
      title: 'Hera Brunch',
      meta: ['Rabat', 'Morning'],
      body: `An airy, light-filled spot that's become the city's favorite slow morning. Fresh juices, French-Moroccan plates and beautifully composed brunch platters — perfect for jet-lagged arrivals or a leisurely Friday before the wedding events begin.`,
      img: `${base}/eat-hera.webp`,
      caption: 'Hera — bright Rabat brunch',
      map: 'https://www.google.com/maps?rlz=1C5CHFA_enUS1095US1097&gs_lcrp=EgZjaHJvbWUqCggAEEUYFhgeGDsyCggAEEUYFhgeGDsyBggBECMYJzISCAIQLhgUGK8BGMcBGIcCGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMggIBhAAGBYYHjIGCAcQRRg80gEIMTY2NGowajSoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KRfqz6UmE6cNMcs54_1iX5VM&daddr=12,+Rabat+10100',
    },
    {
      id: 'frederic-cassel',
      tag: 'Patisserie · Brunch',
      title: 'Frédéric Cassel',
      meta: ['Rabat', 'Morning · Afternoon'],
      body: `The Rabat outpost of the celebrated French pâtissier — a calm, sunlit room for viennoiseries, beautifully dressed brunch plates, and the kind of espresso and pastry stop that quietly becomes a daily habit. A favorite for a slow start to the day or an elegant afternoon pause.`,
      img: `${base}/eat-frederic-cassel.webp`,
      caption: 'Frédéric Cassel — French patisserie',
      map: 'https://www.google.com/maps?rlz=1C5CHFA_enUS1095US1097&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KcnugX4AFacNMUJ3Jpn6OnDj&daddr=W5X8%2BMPW,+Av.+du+10+Mars+1982,+Rabat',
    },
    {
      id: 'beyt',
      tag: 'Turkish · Romantic',
      title: 'Beyt Istanbul Rabat',
      meta: ['Rabat', 'Dinner'],
      body: `Candlelit Turkish dining in a softly-lit room of lanterns and velvet — kebabs, mezze, fresh-pulled bread and a long pour of mint tea to finish. A romantic option for an early-arrival evening, far from the noise of the medina.`,
      img: `${base}/eat-beyt.webp`,
      caption: 'Beyt Istanbul — Turkish in Rabat',
      map: 'https://www.google.com/maps?sca_esv=461cceef532bce02&rlz=1CDGOYI_enUS1135US1135&hl=en-US&sxsrf=ANbL-n70-xEwdJD2F4zFCS4BMTZNO0T01g:1777321336689&kgmid=/g/11yw1kps0f&shem=rimspwouoe&shndl=30&kgs=55dbb98257bd7b18&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=Ka8OF2-abacNMTELWimyUioU&daddr=Av.+des+Nations+Unies,+Rabat+10080',
    },
    {
      id: 'yamal',
      tag: 'Levantine · Casual',
      title: 'Yamal Acham',
      meta: ['Rabat', 'Lunch · Dinner'],
      body: `A Damascene table in the heart of Rabat — fattoush, hummus, kibbeh and grilled meats served generously and warmly. A casual, family-style place to gather a small group of friends and order more than you should.`,
      img: `${base}/eat-yamal.webp`,
      caption: 'Yamal Acham — Damascene comfort',
      map: 'https://www.google.com/maps?vet=10CAAQoqAOahcKEwjQ46HuxJiUAxUAAAAAHQAAAAAQCQ..i&rlz=1C5CHFA_enUS1095US1097&pvq=Cg0vZy8xMWZscXhqejVnIhEKC3lhbWFsIGFjaGFtEAIYAw&lqi=ChF5YW1hbCBhY2hhbSByYWJhdEiu8aHuyq2AgAhaIRAAEAEYABgBGAIiEXlhbWFsIGFjaGFtIHJhYmF0MgJmcpIBEXN5cmlhbl9yZXN0YXVyYW50&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=Kc-JLW_kbacNMUHWUHk7sYFa&daddr=Angle+Rue+Zallagh%D8%8C,+Av.+Fal+Ould+Oumeir,+Rabat',
    },
    {
      id: 'le-marrakchi',
      tag: 'Moroccan · Dinner',
      title: 'Le Marrakchi',
      meta: ['Rabat', 'Dinner'],
      body: `A polished room for classic Moroccan dinner — slow-cooked tagines, couscous, and warm bread, served in a setting dressed in zellige and carved wood. The kind of meal that holds the whole flavor of Morocco in one evening.`,
      img: `${base}/eat-le-marrakchi.png`,
      caption: 'Le Marrakchi — Moroccan classics',
      map: 'https://www.google.com/maps?rlz=1C5CHFA_enUS1095US1097&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KdMmLDMAE6cNMel-l5Qw9QVH&daddr=num%C3%A9ro+5,+All%C3%A9e+safsaf,+rue+asarina,+magasin,+Rabat+10000',
    },
    {
      id: 'yoka-sushi',
      tag: 'Japanese · Late Dinner',
      title: 'Yoka Sushi',
      meta: ['Inside Le Marrakchi', 'Dinner'],
      body: `Tucked inside Le Marrakchi, Yoka Sushi is a small, lantern-lit sushi room — a surprising and delightful counterpoint to a week of Moroccan flavors. Sushi rolls, sashimi, and a quiet bar for a late dinner among palms and warm wood.`,
      img: `${base}/eat-yoka-sushi.png`,
      caption: 'Yoka Sushi — inside Le Marrakchi',
      map: 'https://www.google.com/maps?vet=10CAAQoqAOahcKEwig46b8xJiUAxUAAAAAHQAAAAAQCQ..i&rlz=1C5CHFA_enUS1095US1097&pvq=CgsvZy8xdGxfbjFyeSIQCgp5b2thIHN1c2hpEAIYAw&lqi=ChB5b2thIHN1c2hpIHJhYmF0IgOIAQFI_Y3or-aAgIAIWiYQABABGAAYASIQeW9rYSBzdXNoaSByYWJhdCoGCAIQABABMgJmcpIBEHN1c2hpX3Jlc3RhdXJhbnQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KRGSOvUrE6cNMWrAoqGHLJIn&daddr=Rue+Al+Maouz,+Av.+Annakhil,+Rabat+10100',
    },
    {
      id: 'arribat',
      tag: 'Shopping · Mall',
      title: 'Arribat Center',
      meta: ['Av. Omar Ibn Al Khattab, Rabat', 'All Day'],
      body: `Rabat's largest contemporary shopping mall — international brands, cafés, and a comfortable space to spend a few hours out of the sun. A practical stop for anything you forgot to pack, or for a relaxed afternoon between sightseeing.`,
      img: `${base}/eat-arribat.png`,
      caption: 'Arribat Center — Rabat',
      map: 'https://www.google.com/maps?rlz=1C5CHFA_enUS1095US1097&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyDAgCEC4YQxiABBiKBTIGCAMQRRg5Mg0IBBAAGJECGIAEGIoFMgwIBRAAGEMYgAQYigUyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQgxNTkwajBqNKgCALACAA&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KclSd9iJbKcNMSu61GSigB36&daddr=Carrefour+des+Avenues+Nations-Unies,+Al+Abtal,+Inaouin+et,+Av.+Omar+Ibn+Al+Khattab,+Rabat',
    },
    {
      id: 'marche-dar-essalam',
      tag: 'Shopping · Boutique',
      title: 'Le Marché Dar Essalam',
      meta: ['Av. du 10 Mars 1982, Rabat', 'Afternoon'],
      body: `A small, beautifully designed shopping plaza under a glass canopy — curated boutiques, lifestyle shops, and quiet corners for coffee. The kind of place to wander slowly and bring home something you didn't know you needed.`,
      img: `${base}/eat-marche-dar-essalam.png`,
      caption: 'Le Marché Dar Essalam',
      map: 'https://www.google.com/maps?rlz=1C5CHFA_enUS1095US1097&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzEzMWowajSoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KfMFiVcAFacNMaFyX-yi7tdM&daddr=Angle+rue+Sahel,+Av.+du+10+Mars+1982,+Rabat',
    },
    {
      id: 'm-wellness',
      tag: 'Spa · Hammam',
      title: 'M Wellness Center',
      meta: ['33 Av. Mehdi Ben Barka, Rabat', 'Half Day'],
      body: `A serene wellness center for a traditional Moroccan hammam, a long soak, and a massage to ease travel out of your shoulders. Vaulted rooms, blue-tiled walls, and a gentle, unhurried rhythm — the perfect way to begin or end the wedding weekend.`,
      img: `${base}/eat-m-wellness.png`,
      caption: 'M Wellness Center — Rabat hammam',
      map: 'https://www.google.com/maps/place/m+wellness+center/@33.9782599,-6.8364505,17z/data=!3m1!4b1!4m6!3m5!1s0xda76caf5df2603f:0x1855d3c2b24059a1!8m2!3d33.9782599!4d-6.8364505!16s%2Fg%2F11g6j82h_1?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <div className="page-transition">
      <section className="travel-hero reveal">
        <div className="container">
          <span className="eyebrow">A Small Black Book</span>
          <h1>Places to Eat &amp; Wander</h1>
          <p className="travel-hero__lede">
            A handful of tables, shops, and quiet rooms we keep returning to — from
            slow brunches to candlelit dinners, an afternoon of shopping, or a long
            hammam to slow the weekend down.
          </p>
        </div>
      </section>

      <section className="container">
        {places.map((p, i) => (
          <article
            key={p.id}
            className={`editorial-row reveal ${i % 2 === 1 ? 'alt' : ''}`}
            id={p.id}
          >
            <div className="editorial-row__media">
              <Frame
                variant={styleFor(i)}
                src={p.img}
                alt={p.title}
                aspect={i % 3 === 0 ? 0.78 : 0.72}
                tone="gold"
                caption={p.caption}
                placeholder={<PlaceholderArt label={p.title.toLowerCase()} />}
              />
            </div>
            <div className="editorial-row__copy">
              <div className="editorial-row__num">— {String(i + 1).padStart(2, '0')}</div>
              <span className="editorial-row__tag">{p.tag}</span>
              <h2 className="editorial-row__title">{p.title}</h2>
              <div className="editorial-row__meta">
                {p.meta.map((m, j) => (
                  <span key={j}>
                    {j === 0 ? <Icon.Pin size={14} /> : <Icon.Clock size={14} />} {m}
                  </span>
                ))}
              </div>
              <div className="editorial-row__body">
                <p>{p.body}</p>
              </div>
              <div style={{ marginTop: '1.75rem' }}>
                <a className="gold-link" href={p.map} target="_blank" rel="noopener">
                  See on the map <Icon.Arrow />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

window.EatPage = EatPage;
