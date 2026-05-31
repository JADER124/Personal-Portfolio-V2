import styles from './LockBar.module.css'

type Props = {
  levelNum: string
  required: number
  total: number
  onUnlock: () => void
}

export default function LockBar({ levelNum, required, total, onUnlock }: Props) {
  return (
    <div className={styles.lockbar} onClick={onUnlock} role="button" aria-label="Autorizar acceso">
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      <span className={styles.label}>nivel {levelNum} · bloqueado</span>
      <span className={styles.sub}>requiere autorización {required}/{total}</span>
    </div>
  )
}
