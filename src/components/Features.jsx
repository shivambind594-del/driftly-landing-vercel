const features = [
  {
    title: 'Automatic session tracking',
    body: "Driftly notices when you're in flow — no manual timers, no forgetting to press start.",
    highlight: true,
  },
  {
    title: 'Interruption log',
    body: 'See exactly what pulled you out of focus today: a Slack ping, a tab switch, a meeting.',
  },
  {
    title: 'Weekly focus report',
    body: 'A short, honest summary of where your hours went — sent every Monday.',
  },
  {
    title: 'Team focus hours',
    body: 'Set shared no-meeting windows your whole team can actually protect.',
  },
]

export default function Features() {
  return (
    <section id="product">
      <div className="container">
        <div style={styles.head}>
          <p style={styles.eyebrow}>What it does</p>
          <h2 className="serif" style={styles.title}>
            Built around how deep work actually happens
          </h2>
        </div>

        <div className="features-grid" style={styles.grid}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                ...styles.card,
                ...(f.highlight ? styles.cardHighlight : {}),
              }}
            >
              <h3
                className="serif"
                style={{ ...styles.cardTitle, color: f.highlight ? '#FFFFFF' : 'var(--ink)' }}
              >
                {f.title}
              </h3>
              <p style={{ ...styles.cardBody, color: f.highlight ? '#DCEAE1' : 'var(--ink-soft)' }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  head: {
    maxWidth: 560,
    marginBottom: 48,
  },
  eyebrow: {
    color: 'var(--forest)',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 14,
  },
  title: {
    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 20,
  },
  card: {
    padding: 28,
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--line)',
    background: 'var(--bg-panel)',
  },
  cardHighlight: {
    background: 'var(--forest)',
    borderColor: 'var(--forest)',
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 15,
  },
}
