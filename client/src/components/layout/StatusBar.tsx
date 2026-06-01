import Logo from '../ui/Logo'
import styles from './StatusBar.module.css'

type Props = {
  granted: number
  total: number
}

const NAV_ITEMS = [
  { id: 'level-01', label: 'ID.',        num: '01' },
  { id: 'level-02', label: 'Perfil',     num: '02' },
  { id: 'level-03', label: 'Skills',     num: '03' },
  { id: 'level-04', label: 'Formación',  num: '04' },
  { id: 'level-05', label: 'Exp.',       num: '05' },
  { id: 'level-06', label: 'Contacto',   num: '06' },
]

// Scroll suave manual: lleva la sección a la vista sin dejar el hash (#level-0X)
// pegado en la URL — la barra de direcciones se mantiene limpia (home).
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function StatusBar({ granted, total }: Props) {
  return (
    <header className={styles.statusbar}>

      {/* Logo */}
      <Logo />

      {/* Nav links — dimmed si el nivel está bloqueado */}
      <nav className={styles.nav} aria-label="Secciones del expediente">
        {NAV_ITEMS.map(({ id, label, num }, i) => {
          const locked = i >= granted
          return (
            <a
              key={id}
              href={locked ? undefined : `#${id}`}
              onClick={(e) => {
                if (locked) return
                e.preventDefault()
                scrollToSection(id)
              }}
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
