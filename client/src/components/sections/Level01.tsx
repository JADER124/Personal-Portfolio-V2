import { identity } from '../../data/dossier'
import DecodeText from '../ui/DecodeText'
import styles from './Level01.module.css'

type Props = { trigger: boolean }

const CELLS = [
  { label: 'Designación', value: 'Jhon Jader López' },
  { label: 'Composición', value: 'Cafeína · código · nube' },
  { label: 'Origen',      value: identity.origin },
  { label: 'Estado',      value: identity.status },
  { label: 'Rol',         value: identity.role },
  { label: 'División',    value: 'ULTRA SECRETA', red: true },
]

export default function Level01({ trigger }: Props) {
  return (
    <div className={styles.grid}>
      {CELLS.map(({ label, value, red }, i) => (
        <div key={label} className={styles.cell}>
          <span className={styles.cellLabel}>{label}</span>
          <span className={`${styles.cellValue} ${red ? styles.red : ''}`}>
            <DecodeText text={value} trigger={trigger} delay={i * 90} />
          </span>
        </div>
      ))}
    </div>
  )
}
