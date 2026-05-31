import styles from './SkillBar.module.css'

type Props = {
  label: string
  intensity: number
  trigger: boolean
  delay?: number
}

export default function SkillBar({ label, intensity, trigger, delay = 0 }: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{
            '--w': `${intensity}%`,
            transitionDelay: trigger ? `${delay}ms` : '0ms',
            transform: trigger ? 'scaleX(1)' : 'scaleX(0)',
          } as React.CSSProperties}
        />
      </div>
      <span className={styles.pct}>{intensity}</span>
    </div>
  )
}
