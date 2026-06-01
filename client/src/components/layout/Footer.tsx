import Logo from '../ui/Logo'
import { contact } from '../../data/dossier'
import styles from './Footer.module.css'

const ICONS: Record<string, React.ReactElement> = {
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9.07 17.2 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
}

export default function Footer() {
  const handleTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.scanline} aria-hidden />

      <div className={styles.fwrap}>

        {/* Fila superior */}
        <div className={styles.frow}>
          <Logo />

          <div className={styles.fstatus}>
            <i className={styles.statusDot} aria-hidden />
            <span>espécimen activo · disponible</span>
          </div>

          <div className={styles.fchan}>
            {contact.map(c => (
              <a
                key={c.id}
                href={c.href}
                target={c.icon !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.chanLink}
                aria-label={c.channel}
              >
                {ICONS[c.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Fila inferior */}
        <div className={styles.fbase}>
          <div className={styles.fbaseLeft}>
            <span className={styles.transmission}>fin de transmisión</span>
            <span className={styles.sep}>·</span>
            <span className={styles.copy}>© {new Date().getFullYear()} Jader</span>
            <span className={styles.sep}>·</span>
            <span className={styles.coords}>Medellín · Tierra-04</span>
          </div>

          <button className={styles.topBtn} onClick={handleTop} aria-label="Volver al inicio">
            volver al inicio <span className={styles.arrow}>↑</span>
          </button>
        </div>

      </div>
    </footer>
  )
}
