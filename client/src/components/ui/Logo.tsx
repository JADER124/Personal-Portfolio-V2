import styles from './Logo.module.css'

type Props = {
  className?: string
}

export default function Logo({ className }: Props) {
  return (
    <a href="#" className={`${styles.logo} ${className ?? ''}`} aria-label="Use JJ Dev — inicio">
      <span className={styles.w}>Use</span>
      <span className={styles.brk}>
        <span className={styles.br}>{`{`}</span>
        <span className={styles.jj}>JJ</span>
        <span className={styles.br}>{`}`}</span>
      </span>
      <span className={styles.w}>Dev</span>
    </a>
  )
}
