import { skills, type Skill } from '../../data/dossier'
import SkillBar from '../ui/SkillBar'
import styles from './Level02.module.css'

type Props = { trigger: boolean }

const CATEGORIES: { id: Skill['category']; label: string }[] = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend',  label: 'Backend / Data' },
  { id: 'data',     label: 'Cloud & Data Eng.' },
  { id: 'tools',    label: 'Herramientas' },
]

export default function Level02({ trigger }: Props) {
  let globalIdx = 0

  return (
    <div className={styles.groups}>
      {CATEGORIES.map(({ id, label }) => {
        const group = skills.filter(s => s.category === id)
        return (
          <div key={id} className={styles.group}>
            <h3 className={styles.groupLabel}>{label}</h3>
            <div className={styles.bars}>
              {group.map(skill => {
                const delay = globalIdx++ * 80
                return (
                  <SkillBar
                    key={skill.label}
                    label={skill.label}
                    intensity={skill.intensity}
                    trigger={trigger}
                    delay={delay}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
