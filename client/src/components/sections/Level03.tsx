import { projects } from '../../data/dossier'
import DecodeText from '../ui/DecodeText'
import styles from './Level03.module.css'

type Props = { trigger: boolean }

export default function Level03({ trigger }: Props) {
  return (
    <div className={styles.grid}>
      {projects.map((p, i) => (
        <article key={p.id} className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.cls}>{p.classification}</span>
          </div>
          <h3 className={styles.title}>
            <DecodeText text={p.title} trigger={trigger} delay={i * 120} />
          </h3>
          <p className={styles.desc}>{p.description}</p>
          <div className={styles.tags}>
            {p.tags.map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <div className={styles.links}>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Ver proyecto ↗
              </a>
            )}
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Repositorio ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
