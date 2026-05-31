import { experience } from '../../data/dossier'
import DecodeText from '../ui/DecodeText'
import styles from './Level04.module.css'

type Props = { trigger: boolean }

export default function Level04({ trigger }: Props) {
  return (
    <div className={styles.timeline}>
      {experience.map((exp, i) => (
        <div key={exp.id} className={styles.row}>
          <div className={styles.left}>
            <span className={styles.period}>{exp.period}</span>
          </div>
          <div className={styles.dot} />
          <div className={styles.right}>
            <h3 className={styles.role}>
              <DecodeText text={exp.role} trigger={trigger} delay={i * 150} />
            </h3>
            <span className={styles.company}>{exp.company}</span>
            <p className={styles.desc}>{exp.description}</p>
            <div className={styles.tags}>
              {exp.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
