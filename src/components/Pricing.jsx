import { useState } from 'react'

const plans = [
  {
    name: 'Solo',
    monthly: 0,
    yearly: 0,
    tagline: 'For freelancers tracking their own time',
    features: ['Unlimited focus sessions', 'Weekly focus report', 'Interruption log', '1 person'],
  },
  {
    name: 'Team',
    monthly: 8,
    yearly: 6,
    tagline: 'For small remote teams',
    features: ['Everything in Solo', 'Shared focus hours', 'Team weekly digest', 'Up to 15 people'],
    featured: true,
  },
  {
    name: 'Studio',
    monthly: 16,
    yearly: 13,
    tagline: 'For agencies billing client time',
    features: ['Everything in Team', 'Client-tagged sessions', 'Exportable reports', 'Unlimited people'],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing">
      <div className="container">
        <div style={styles.head}>
          <p style={styles.eyebrow}>Pricing</p>
          <h2 className="serif" style={styles.title}>
            Simple pricing, no seat-count games
          </h2>

          <div style={styles.toggleRow}>
            <span style={{ fontWeight: !yearly ? 600 : 400, color: !yearly ? 'var(--ink)' : 'var(--ink-soft)' }}>
              Monthly
            </span>
            <button
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly pricing"
              onClick={() => setYearly(!yearly)}
              style={styles.switch}
            >
              <span
                style={{
                  ...styles.switchDot,
                  transform: yearly ? 'translateX(20px)' : 'translateX(2px)',
                }}
              />
            </button>
            <span style={{ fontWeight: yearly ? 600 : 400, color: yearly ? 'var(--ink)' : 'var(--ink-soft)' }}>
              Yearly <span style={styles.savePill}>save 25%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid" style={styles.grid}>
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly
            return (
              <div
                key={plan.name}
                style={{
                  ...styles.card,
                  ...(plan.featured ? styles.cardFeatured : {}),
                }}
              >
                {plan.featured && <span style={styles.badge}>Most teams pick this</span>}
                <h3 className="serif" style={styles.planName}>
                  {plan.name}
                </h3>
                <p style={styles.tagline}>{plan.tagline}</p>

                <div style={styles.priceRow}>
                  <span className="serif" style={styles.price}>
                    ${price}
                  </span>
                  <span style={styles.priceUnit}>{price === 0 ? 'forever' : '/ seat / mo'}</span>
                </div>

                <a
                  href="#signup"
                  className={plan.featured ? 'btn btn-primary' : 'btn btn-ghost'}
                  style={{ width: '100%', marginTop: 20, marginBottom: 24 }}
                >
                  {price === 0 ? 'Start free' : 'Start 14-day trial'}
                </a>

                <ul style={styles.list}>
                  {plan.features.map((feat) => (
                    <li key={feat} style={styles.listItem}>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const styles = {
  head: {
    maxWidth: 560,
    marginBottom: 40,
  },
  eyebrow: {
    color: 'var(--forest)',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 14,
  },
  title: {
    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
    marginBottom: 28,
  },
  toggleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    fontSize: 15,
  },
  switch: {
    position: 'relative',
    width: 44,
    height: 24,
    borderRadius: 999,
    background: 'var(--forest)',
    border: 'none',
    flexShrink: 0,
  },
  switchDot: {
    position: 'absolute',
    top: 2,
    left: 0,
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: '#fff',
    transition: 'transform 0.18s ease',
  },
  savePill: {
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--forest)',
    background: 'var(--forest-soft)',
    padding: '2px 8px',
    borderRadius: 999,
    marginLeft: 4,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
  },
  card: {
    position: 'relative',
    padding: 28,
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--line)',
    background: 'var(--bg-panel)',
  },
  cardFeatured: {
    borderColor: 'var(--ink)',
    borderWidth: 2,
  },
  badge: {
    position: 'absolute',
    top: -12,
    left: 28,
    background: 'var(--ink)',
    color: 'var(--bg)',
    fontSize: 12,
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: 999,
  },
  planName: {
    fontSize: 22,
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    minHeight: 36,
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 6,
    marginTop: 18,
  },
  price: {
    fontSize: 40,
  },
  priceUnit: {
    fontSize: 13,
    color: 'var(--ink-soft)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  listItem: {
    fontSize: 14,
    color: 'var(--ink-soft)',
    paddingLeft: 20,
    position: 'relative',
  },
}
