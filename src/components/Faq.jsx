import { useState } from 'react'

const items = [
  {
    q: 'How does Driftly know when I\u2019m in deep work?',
    a: 'It watches for sustained, uninterrupted activity in the apps you tell it count as focus work \u2014 your editor, design tool, or writing app \u2014 and starts a session automatically once you\u2019ve been in flow for a couple of minutes.',
  },
  {
    q: 'Does it track everything I do on my computer?',
    a: 'No. Driftly only logs the app category and duration, never screenshots, keystrokes, or content. You choose which apps count toward focus time.',
  },
  {
    q: 'Can I use it if I bill clients hourly?',
    a: 'Yes \u2014 the Studio plan lets you tag sessions to a client or project, so your weekly report doubles as a time record you can hand off.',
  },
  {
    q: 'What happens after the free trial on paid plans?',
    a: 'You\u2019ll get a reminder three days before it ends. If you don\u2019t upgrade, your account simply drops to the free Solo plan \u2014 nothing is deleted.',
  },
  {
    q: 'Is there a desktop app, or just the browser?',
    a: 'Driftly runs as a lightweight desktop app on macOS and Windows. A browser extension is available for tracking time in web-based tools.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq">
      <div className="container" style={{ maxWidth: 760 }}>
        <p style={styles.eyebrow}>Questions</p>
        <h2 className="serif" style={styles.title}>
          Before you start
        </h2>

        <div style={styles.list}>
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} style={styles.item}>
                <button
                  style={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span style={{ fontWeight: 500 }}>{item.q}</span>
                  <span style={{ ...styles.icon, transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {isOpen && <p style={styles.answer}>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const styles = {
  eyebrow: {
    color: 'var(--forest)',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 14,
  },
  title: {
    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
    marginBottom: 32,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    borderBottom: '1px solid var(--line)',
  },
  question: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    padding: '20px 0',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    fontSize: 16,
    color: 'var(--ink)',
  },
  icon: {
    fontSize: 20,
    color: 'var(--accent)',
    transition: 'transform 0.18s ease',
    flexShrink: 0,
  },
  answer: {
    fontSize: 15,
    paddingBottom: 20,
    maxWidth: 620,
  },
}
