import { useScrollReveal } from '../../hooks/useScrollReveal'
import { academicTimeline, languages, certs } from '../../data/formacion'
import styles from './Formacion.module.css'

type Props = { trigger: boolean }

function HudCorners() {
  return (
    <>
      <span className={`${styles.cnr} ${styles.tl}`} aria-hidden />
      <span className={`${styles.cnr} ${styles.tr}`} aria-hidden />
      <span className={`${styles.cnr} ${styles.bl}`} aria-hidden />
      <span className={`${styles.cnr} ${styles.br}`} aria-hidden />
    </>
  )
}

export default function Formacion({ trigger }: Props) {
  const { ref: timelineRef, visible: timelineVis } = useScrollReveal(0.15)
  const { ref: langRef,     visible: langVis     } = useScrollReveal(0.2)
  const { ref: certRef,     visible: certVis     } = useScrollReveal(0.2)

  const showTimeline = trigger && timelineVis
  const showLang     = trigger && langVis
  const showCert     = trigger && certVis

  return (
    <div className={styles.grid}>

      {/* ── Columna izquierda — Timeline académico ── */}
      <div>
        <p className={styles.blockLabel}>// evolución académica</p>
        <div
          ref={timelineRef as React.RefObject<HTMLDivElement>}
          className={`${styles.timeline} ${showTimeline ? styles.revealed : ''}`}
        >
          {academicTimeline.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.tlItem} ${styles[`color_${item.color}`]}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.tlCard}>
                <div className={styles.tlTop}>
                  <span className={styles.tlTitle}>{item.title}</span>
                  <span className={styles.tlYears}>{item.years}</span>
                </div>
                <span className={styles.tlPlace}>{item.place}</span>
                <div className={styles.tlStatus}>
                  <i className={styles.tlDot} aria-hidden />
                  <span>{item.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Columna derecha — dos paneles HUD ── */}
      <div className={styles.rightCol}>

        {/* Panel 1 — Protocolos de comunicación */}
        <div>
          <p className={styles.blockLabel}>// protocolos de comunicación</p>
          <div
            ref={langRef as React.RefObject<HTMLDivElement>}
            className={`${styles.panel} ${showLang ? styles.panelIn : ''}`}
          >
            <HudCorners />
            <div className={styles.langs}>
              {languages.map(lang => (
                <div key={lang.name} className={styles.langRow}>
                  <div className={styles.langTop}>
                    <span className={styles.langName}>{lang.name}</span>
                    <span className={styles.langLevel}>{lang.level}</span>
                  </div>
                  <div className={styles.langBar}>
                    <i
                      className={styles.langFill}
                      style={{ '--w': `${lang.pct}%` } as React.CSSProperties}
                    />
                  </div>
                  <span className={styles.langMeta}>{lang.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 2 — Adaptaciones certificadas */}
        <div>
          <p className={styles.blockLabel}>// adaptaciones certificadas</p>
          <div
            ref={certRef as React.RefObject<HTMLDivElement>}
            className={`${styles.panel} ${showCert ? styles.revealed : ''}`}
          >
            <HudCorners />
            <div className={styles.certList}>
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className={`${styles.certRow} ${cert.placeholder ? styles.certPlaceholder : ''}`}
                >
                  <div className={styles.certIcon} aria-hidden>
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.13L8 10.5l-3.708 2.082L5 8.452 2 5.528l4.146-.772z" />
                    </svg>
                  </div>
                  <div className={styles.certInfo}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certOrg}>{cert.org}</span>
                  </div>
                  <span className={styles.certYear}>{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
