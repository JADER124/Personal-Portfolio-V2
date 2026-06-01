import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './SobreMi.module.css'

type Props = { trigger: boolean }

const NOTES = [
  {
    label: 'naturaleza del sujeto',
    text: 'Entidad apasionada por la tecnología y el desarrollo de software. Formada en sistemas e ingeniería de software con experiencia real en soporte técnico, desarrollo web y automatización de procesos. Tendencia documentada a invertir en los cimientos: código limpio, estructuras escalables, decisiones que no exigen ser rehechas más adelante.',
  },
  {
    label: 'comportamiento técnico',
    text: 'Opera con fluidez en JavaScript, React, Python y SQL. Despliega y gestiona entornos con Git, Docker, AWS y Google Cloud. Capacidad de moverse entre capas: desde la primera línea de código hasta la interfaz final.',
  },
  {
    label: 'objetivo declarado',
    text: '"Crear soluciones útiles que hagan la diferencia." El espécimen muestra orientación al crecimiento profesional y exploración activa de nube, innovación y colaboración en equipo.',
  },
]

const MODULES = [
  { title: 'Frontend',       sub: 'interfaz & experiencia', accent: 'xeno' },
  { title: 'Backend',        sub: 'lógica & datos',         accent: 'cyan' },
  { title: 'Cloud · AWS',    sub: 'infraestructura',        accent: 'cyan' },
  { title: 'Automatización', sub: 'procesos & ETL',         accent: 'xeno' },
]

export default function SobreMi({ trigger }: Props) {
  const { ref: leftRef,  visible: leftVis  } = useScrollReveal(0.15)
  const { ref: rightRef, visible: rightVis } = useScrollReveal(0.15)

  const showLeft  = trigger && leftVis
  const showRight = trigger && rightVis

  return (
    <div className={styles.grid}>

      {/* ── Columna izquierda — Bitácora ── */}
      <div
        ref={leftRef as React.RefObject<HTMLDivElement>}
        className={`${styles.logCard} ${showLeft ? styles.revealed : ''}`}
      >
        <div className={styles.logHead}>
          <span className={styles.logTitle}>// bitácora del observador</span>
          <span className={styles.recording}>
            <i className={styles.dot} aria-hidden />
            grabando
          </span>
        </div>

        <div className={styles.notes}>
          {NOTES.map(({ label, text }) => (
            <div key={label} className={styles.note}>
              <span className={styles.noteLabel}>{label}</span>
              <p className={styles.noteText}>{text}</p>
            </div>
          ))}
        </div>

        <div className={styles.logFoot}>
          <span className={styles.firma}>— Div. JJ-Dev</span>
          <span className={styles.meta}>observador: ████ · sector tierra-04 · 2026</span>
        </div>
      </div>

      {/* ── Columna derecha — Panel HUD ── */}
      <div
        ref={rightRef as React.RefObject<HTMLDivElement>}
        className={`${styles.rightCol} ${showRight ? styles.revealed : ''}`}
      >
        {/* Marco HUD con esquinas */}
        <div className={styles.frame}>
          <span className={`${styles.cnr} ${styles.tl}`} aria-hidden />
          <span className={`${styles.cnr} ${styles.tr}`} aria-hidden />
          <span className={`${styles.cnr} ${styles.bl}`} aria-hidden />
          <span className={`${styles.cnr} ${styles.br}`} aria-hidden />

          <div className={styles.modules}>
            {MODULES.map(({ title, sub, accent }) => (
              <div key={title} className={`${styles.mod} ${accent === 'cyan' ? styles.accentCyan : ''}`}>
                <div className={styles.modTitle}>{title}</div>
                <div className={styles.modSub}>{sub}</div>
              </div>
            ))}
          </div>

          <div className={styles.frameFoot}>
            <span className={styles.frameFootLabel}>// enfoque del espécimen</span>
            <p className={styles.frameFootText}>
              <b>Arquitectura, automatización y trazabilidad</b>, con el objetivo
              de entregar algo que genere valor — no solo código que funcione,
              sino soluciones que se usen.
            </p>
          </div>
        </div>

        {/* Transmisión interceptada */}
        <div className={styles.transmission}>
          <span className={styles.txLabel}>fragmento de transmisión interceptada · exp. xeno-7</span>
          <blockquote className={styles.txQuote}>
            "El sujeto no teme a lo desconocido —{' '}
            <span className={styles.txAccent}>lo trata como un problema más por resolver.</span>"
          </blockquote>
        </div>
      </div>

    </div>
  )
}
