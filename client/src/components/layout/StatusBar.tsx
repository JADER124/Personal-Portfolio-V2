import Logo from '../ui/Logo'
import styles from './StatusBar.module.css'

type Props = {
  granted: number
  total: number
}

const NAV_ITEMS = [
  { href: '#level-01', label: 'Identificación',  num: '01' },
  { href: '#level-02', label: 'Capacidades',     num: '02' },
  { href: '#level-03', label: 'Proyectos',        num: '03' },
  { href: '#level-04', label: 'Experiencia',      num: '04' },
  { href: '#level-05', label: 'Contacto',         num: '05' },
]

export default function StatusBar({ granted, total }: Props) {
  return (
    <header className={styles.statusbar}>

      {/* Logo */}
      <Logo />

      {/* Nav links — dimmed si el nivel está bloqueado */}
      <nav className={styles.nav} aria-label="Secciones del expediente">
        {NAV_ITEMS.map(({ href, label, num }, i) => {
          const locked = i >= granted
          return (
            <a
              key={href}
              href={locked ? undefined : href}
              className={`${styles.navLink} ${locked ? styles.navLocked : ''}`}
              aria-disabled={locked}
              tabIndex={locked ? -1 : 0}
            >
              <span className={styles.navNum}>{num}</span>
              <span className={styles.navLabel}>{label}</span>
            </a>
          )
        })}
      </nav>

      {/* REC + medidor */}
      <div className={styles.right}>
        <span className={styles.rec}>REC</span>
        <div className={styles.meter}>
          {Array.from({ length: total }).map((_, i) => (
            <i key={i} className={i < granted ? styles.segOn : styles.seg} />
          ))}
        </div>
        <span className={styles.clrnum}><b>{granted}</b>/{total}</span>
      </div>

    </header>
  )
}
