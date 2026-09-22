export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 64 }}>
      <div className="container hero-grid" style={styles.grid}>
        <div>
          <p style={styles.eyebrow}>For freelancers & small remote teams</p>
          <h1 className="serif" style={styles.headline}>
            Protect the hours where real work happens.
          </h1>
          <p style={styles.sub}>
            Driftly tracks your deep-work sessions automatically, shows you
            where the day actually went, and helps you say no to the
            interruptions that don't deserve your attention.
          </p>
          <div style={styles.actions}>
            <a href="#signup" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 26px' }}>
              Start free — no card needed
            </a>
            <a href="#product" className="btn btn-ghost" style={{ fontSize: 16, padding: '14px 26px' }}>
              See how it works
            </a>
          </div>
          <p style={styles.microcopy}>Free for solo use. Team plans start at $8/seat.</p>
        </div>

        <div style={styles.artWrap} aria-hidden="true">
          <FocusGraphic />
        </div>
      </div>
    </section>
  )
}

function FocusGraphic() {
  return (
    <svg viewBox="0 0 420 420" width="100%" height="100%" role="img">
      <rect x="0" y="0" width="420" height="420" rx="16" fill="var(--bg-panel)" stroke="var(--line)" />
      <circle cx="210" cy="180" r="120" fill="none" stroke="var(--line)" strokeWidth="1" />
      <circle cx="210" cy="180" r="86" fill="none" stroke="var(--line)" strokeWidth="1" />
      <circle cx="210" cy="180" r="52" fill="var(--forest-soft)" stroke="var(--forest)" strokeWidth="1.5" />
      <circle cx="210" cy="180" r="8" fill="var(--accent)" />

      <path
        d="M 210 60 A 120 120 0 0 1 320 190"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <g fontFamily="Inter, sans-serif" fontSize="12" fill="var(--ink-soft)">
        <text x="30" y="330">Today</text>
        <text x="30" y="350" fontFamily="Fraunces, serif" fontSize="22" fill="var(--ink)">4h 12m</text>
        <text x="30" y="368">in deep work</text>

        <text x="330" y="330" textAnchor="end">Streak</text>
        <text x="330" y="350" textAnchor="end" fontFamily="Fraunces, serif" fontSize="22" fill="var(--ink)">
          6 days
        </text>
        <text x="330" y="368" textAnchor="end">protected</text>
      </g>

      <line x1="30" y1="300" x2="390" y2="300" stroke="var(--line)" />
    </svg>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: 56,
    alignItems: 'center',
    paddingBottom: 40,
  },
  eyebrow: {
    color: 'var(--forest)',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 18,
  },
  headline: {
    fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
    marginBottom: 22,
    maxWidth: 560,
  },
  sub: {
    fontSize: 18,
    maxWidth: 460,
    marginBottom: 32,
  },
  actions: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  microcopy: {
    marginTop: 16,
    fontSize: 13,
    color: 'var(--ink-soft)',
  },
  artWrap: {
    width: '100%',
  },
}
