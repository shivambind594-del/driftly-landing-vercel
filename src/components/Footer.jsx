import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <>
      <section id="signup" style={styles.cta}>
        <div className="container" style={styles.ctaInner}>
          <h2 className="serif" style={styles.ctaTitle}>
            Start protecting your focus hours today
          </h2>
          <p style={styles.ctaSub}>Free for solo use. Set up takes under two minutes.</p>

          {submitted ? (
            <p style={styles.confirm}>You're on the list — check {email} for a setup link.</p>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="email"
                required
                placeholder="you@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '13px 24px' }}>
                Start free
              </button>
            </form>
          )}
        </div>
      </section>

      <footer style={styles.footer}>
        <div className="container" style={styles.footerInner}>
          <span className="serif" style={{ fontSize: 18 }}>
            Driftly
          </span>
          <div style={styles.footerLinks}>
            <a href="#product" style={styles.footerLink}>Product</a>
            <a href="#pricing" style={styles.footerLink}>Pricing</a>
            <a href="#faq" style={styles.footerLink}>FAQ</a>
          </div>
          <span style={styles.copyright}>Sample project — built for portfolio demonstration.</span>
        </div>
      </footer>
    </>
  )
}

const styles = {
  cta: {
    background: 'var(--forest)',
    color: '#fff',
  },
  ctaInner: {
    textAlign: 'center',
    maxWidth: 560,
    margin: '0 auto',
  },
  ctaTitle: {
    color: '#fff',
    fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
    marginBottom: 14,
  },
  ctaSub: {
    color: '#D3E3DA',
    fontSize: 16,
    marginBottom: 32,
  },
  form: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    flex: '1 1 260px',
    padding: '13px 16px',
    borderRadius: 6,
    border: 'none',
    fontSize: 15,
    fontFamily: 'inherit',
  },
  confirm: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },
  footer: {
    borderTop: '1px solid var(--line)',
    padding: '32px 0',
  },
  footerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
  footerLinks: {
    display: 'flex',
    gap: 24,
  },
  footerLink: {
    textDecoration: 'none',
    color: 'var(--ink-soft)',
    fontSize: 14,
  },
  copyright: {
    fontSize: 13,
    color: 'var(--ink-soft)',
  },
}