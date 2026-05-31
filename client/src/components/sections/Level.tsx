import { useRef, useEffect } from 'react'
import LockBar from '../ui/LockBar'
import styles from './Level.module.css'

type Props = {
  number: string
  title: string
  tag: string
  description: string
  isLocked: boolean
  required: number
  total: number
  onUnlock: () => void
  children: React.ReactNode
}

export default function Level({
  number, title, tag, description,
  isLocked, required, total, onUnlock,
  children,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const wasLocked = useRef(isLocked)

  useEffect(() => {
    if (wasLocked.current && !isLocked) {
      // El primer nivel (required === 1) no hace scroll:
      // el usuario se queda en el hero viendo el color unlock y la foto revelar.
      // Los niveles 2–5 sí hacen scroll al desbloquearse.
      if (required > 1) {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 400)
      }
    }
    wasLocked.current = isLocked
  }, [isLocked, required])

  return (
    <section ref={sectionRef} id={`level-${number}`} className={styles.level}>
      <div className="wrap">
        <header className={styles.header}>
          <span className={styles.number}>{number}</span>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.tag}>{tag}</span>
        </header>
        <p className={styles.desc}>{description}</p>

        <div className={`${styles.content} ${isLocked ? styles.locked : ''}`}>
          {children}
        </div>

        {isLocked && (
          <LockBar levelNum={number} required={required} total={total} onUnlock={onUnlock} />
        )}
      </div>
    </section>
  )
}
