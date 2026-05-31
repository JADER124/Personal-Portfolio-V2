import { identity } from '../../data/dossier'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.code}>{identity.archiveCode}</span>
          <span className={styles.copy}>
            © {new Date().getFullYear()} · {identity.fullName} · {identity.division}
          </span>
        </div>

        <div className={styles.center}>
          <div className={styles.segments}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={styles.seg} />
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.hint}>
            <span className={styles.hintKey}>abducir</span>
            <span className={styles.hintLabel}>protocolo oculto</span>
          </span>
        </div>
      </div>

      <div className={styles.scanline} aria-hidden />
    </footer>
  )
}
