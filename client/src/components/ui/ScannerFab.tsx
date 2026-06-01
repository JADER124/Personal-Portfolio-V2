import { useEffect, useRef, useState } from 'react'
import styles from './ScannerFab.module.css'

type Props = {
  granted: number
  total: number
  scanning: boolean
  isMaxed: boolean
  onAuthorize: () => void
}

const CIRC = 2 * Math.PI * 33

export default function ScannerFab({ granted, total, scanning, isMaxed, onAuthorize }: Props) {
  const [fabVisible,    setFabVisible]    = useState(false)
  const [showMaxLabel,  setShowMaxLabel]  = useState(false)
  const maxLabelTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  // Mostrar FAB al scrollear más allá del hero
  useEffect(() => {
    const onScroll = () => setFabVisible(window.scrollY > window.innerHeight * 0.55)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mostrar la etiqueta "Acceso total" unos segundos al llegar al máximo
  useEffect(() => {
    if (!isMaxed) return
    setShowMaxLabel(true)
    maxLabelTimer.current = setTimeout(() => setShowMaxLabel(false), 3200)
    return () => clearTimeout(maxLabelTimer.current)
  }, [isMaxed])

  const dashOffset = CIRC * (1 - granted / total)

  const label = scanning
    ? 'escaneando…'
    : `Autorizar nivel ${String(granted + 1).padStart(2, '0')}`

  return (
    <div className={`${styles.wrap} ${isMaxed ? styles.max : ''} ${fabVisible ? styles.visible : ''}`}>
      <span className={`${styles.label} ${showMaxLabel ? styles.labelVisible : ''}`}>
        {isMaxed ? <b>Acceso total</b> : label}
      </span>

      <button
        className={styles.fab}
        onClick={onAuthorize}
        disabled={scanning || isMaxed}
        aria-label="Autorizar siguiente nivel"
      >
        <span className={`${styles.ring} ${styles.r1}`} aria-hidden />
        <span className={`${styles.ring} ${styles.r2}`} aria-hidden />

        <svg className={styles.prog} viewBox="0 0 72 72" aria-hidden>
          <circle className={styles.progBg} cx="36" cy="36" r="33" />
          <circle
            className={styles.progFg}
            cx="36" cy="36" r="33"
            style={{ strokeDasharray: CIRC, strokeDashoffset: dashOffset }}
          />
        </svg>

        <span className={styles.sweep} aria-hidden />

        <span className={styles.core}>
          <svg className={`${styles.ico} ${styles.fp}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 11v3M7 13a5 5 0 0 1 10 0M4 13a8 8 0 0 1 16 0M9.5 16.5c.3 1 .5 2 .5 3M14.5 15c.3 1.5.3 3 0 4.5" />
          </svg>
          <svg className={`${styles.ico} ${styles.ok}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>

        <span className={styles.badge}>{granted}/{total}</span>
      </button>
    </div>
  )
}
