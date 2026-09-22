import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Product', 'Pricing', 'FAQ']

  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <a href="#top" style={styles.logo} className="serif">
          Driftly
        </a>

        <nav className="nav-desktop" style={styles.desktopNav}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} style={styles.link}>
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions" style={styles.desktopActions}>
          <a href="#signup" className="btn btn-ghost" style={{ fontSize: 14, padding: '9px 16px' }}>
            Log in
          </a>
          <a href="#signup" className="btn btn-primary" style={{ fontSize: 14, padding: '9px 16px' }}>
            Start free
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="nav-menu-btn"
          style={styles.menuBtn}
        >
          <span style={{ ...styles.bar, transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span style={{ ...styles.bar, opacity: open ? 0 : 1 }} />
          <span style={{ ...styles.bar, transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div style={styles.mobileNav}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#signup" className="btn btn-primary" style={{ marginTop: 8 }} onClick={() => setOpen(false)}>
            Start free
          </a>
        </div>
      )}
    </header>
  )
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: 'rgba(238, 240, 234, 0.92)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--line)',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 68,
  },
  logo: {
    fontSize: 22,
    textDecoration: 'none',
    color: 'var(--ink)',
  },
  desktopNav: {
    display: 'flex',
    gap: 32,
  },
  link: {
    textDecoration: 'none',
    color: 'var(--ink-soft)',
    fontSize: 15,
    fontWeight: 500,
  },
  desktopActions: {
    display: 'flex',
    gap: 10,
  },
  menuBtn: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
    width: 32,
    height: 32,
    background: 'none',
    border: 'none',
    padding: 0,
  },
  bar: {
    width: 22,
    height: 2,
    background: 'var(--ink)',
    transition: 'all 0.2s ease',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: '8px 24px 20px',
    borderTop: '1px solid var(--line)',
  },
  mobileLink: {
    padding: '10px 0',
    textDecoration: 'none',
    color: 'var(--ink)',
    fontSize: 16,
    fontWeight: 500,
    borderBottom: '1px solid var(--line)',
  },
}
