import { identity, education } from '../../data/dossier'
import DecodeText from '../ui/DecodeText'
import styles from './Level01.module.css'

type Props = { trigger: boolean }

const CELLS = [
  { label: 'Designación', value: identity.designation },
  { label: 'Forma',       value: 'Bípedo · carbono · silicio' },
  { label: 'Origen',      value: identity.origin },
  { label: 'Estado',      value: identity.status },
  { label: 'Rol',         value: identity.role },
  { label: 'División',    value: identity.division },
]

export default function Level01({ trigger }: Props) {
  return (
    <div className={styles.wrapper}>
      {/* Grid de identidad */}
      <div className={styles.grid}>
        {CELLS.map(({ label, value }, i) => (
          <div key={label} className={styles.cell}>
            <span className={styles.cellLabel}>{label}</span>
            <span className={styles.cellValue}>
              <DecodeText text={value} trigger={trigger} delay={i * 90} />
            </span>
          </div>
        ))}
      </div>

      {/* Formación académica */}
      <div className={styles.eduSection}>
        <div className={styles.eduHeader}>
          <span className={styles.eduEyebrow}>Registro de formación</span>
          <div className={styles.eduLine} />
        </div>
        <div className={styles.eduList}>
          {education.map((edu, i) => (
            <div key={edu.id} className={styles.eduRow}>
              <div className={styles.eduMain}>
                <span className={styles.eduDegree}>
                  <DecodeText
                    text={edu.degree}
                    trigger={trigger}
                    delay={CELLS.length * 90 + i * 110}
                  />
                </span>
                <span className={styles.eduInst}>{edu.institution}</span>
              </div>
              <span className={styles.eduPeriod}>{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
