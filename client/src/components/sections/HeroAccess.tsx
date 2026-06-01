import { identity } from '../../data/dossier'
import { useHeroReveal } from '../../hooks/useHeroReveal'
import DecodeText from '../ui/DecodeText'
import styles from './HeroAccess.module.css'

type Props = {
  granted: number
  scanning: boolean
  scanMsg: string
  onAuthorize: () => void
  isMaxed: boolean
  photoSrc?: string
}

type Field = {
  key: string
  cipher: string
  real: string
  green: boolean
}

const FIELDS: Field[] = [
  { key: 'Designación', cipher: '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', real: identity.fullName,          green: true  },
  { key: 'Composición', cipher: '▓▓▓▓▓▓▓▓  ·  ▓▓▓▓▓▓  ·  ▓▓▓▓▓', real: 'Cafeína · código · nube', green: false },
  { key: 'Origen',      cipher: '▓▓▓▓▓▓▓▓,  ▓▓▓▓▓▓▓▓',          real: identity.origin,          green: false },
  { key: 'Estado',      cipher: '▓▓▓▓▓▓  ·  ▓▓▓▓▓▓▓▓▓▓',         real: identity.status,          green: true  },
]

export default function HeroAccess({ granted, scanning, scanMsg, onAuthorize, isMaxed, photoSrc }: Props) {
  const ready = useHeroReveal(80)
  const unlocked = granted >= 1

  return (
    <section className={`${styles.hero} ${ready ? 'reveal-ready' : ''}`}>

      {/* ── Columna izquierda ── */}
      <div className={styles.left}>

        <p className={`${styles.eyebrow} reveal-item`}>
          <span className={styles.eyebrowXeno}>EXPEDIENTE-DEV</span>
          {' '}// SECTOR TIERRA
        </p>

        <h1 className={`${styles.h1} reveal-item`}>
          <span className={styles.lnA}>Espécimen</span>
          <span className={`${styles.lnB} ${unlocked ? styles.lnBUnlocked : ''}`}>
            No identificado
          </span>
        </h1>

        <p className={`${styles.sub} reveal-item`}>
          Registro clasificado de una entidad anómala detectada construyendo software a <b>velocidad no humana</b>.<br className={styles.brDesktop} />
          {' '}Designación interna: <b>JADER</b> · División <span className={styles.subXeno}>Ultra Secreta</span>.<br className={styles.brDesktop} />
          {' '}Acceso restringido — autorización requerida para revelar los datos.
        </p>

        {/* Ficha / dossier card */}
        <div className={`${styles.file} ${scanning ? styles.scanning : ''} reveal-item`}>
          <div className={styles.fhd}>
            <span>expediente preliminar</span>
            <span className={styles.cls}>clasificado</span>
          </div>

          <div className={styles.rows}>
            {FIELDS.map(({ key, cipher, real, green }, i) => (
              <>
                <span key={`k-${key}`} className={styles.k}>{key}</span>
                <span key={`v-${key}`} className={`${styles.v} ${green ? styles.vGreen : ''}`}>
                  {unlocked
                    ? <DecodeText text={real} trigger={unlocked} delay={i * 100} />
                    : <span className={styles.cipher}>{cipher}</span>
                  }
                </span>
              </>
            ))}
          </div>

          <div className={styles.scanbtnwrap}>
            <button
              className={styles.accessbtn}
              onClick={onAuthorize}
              disabled={scanning || isMaxed}
              aria-pressed={isMaxed}
            >
              <svg className={styles.fp} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 11v3M7 13a5 5 0 0 1 10 0M4 13a8 8 0 0 1 16 0M9.5 16.5c.3 1 .5 2 .5 3M14.5 15c.3 1.5.3 3 0 4.5" />
              </svg>
              {isMaxed ? '✓ autorización máxima' : 'Autorizar acceso'}
            </button>
            <p className={styles.scanmsg}>{scanMsg}</p>
          </div>
        </div>

        {!isMaxed && (
          <div className={`${styles.cue} reveal-item`} aria-hidden>
            <span className={styles.ar}>↓</span>
            <span>
              {unlocked
                ? 'desplázate para explorar el expediente completo'
                : 'autoriza el acceso para revelar el expediente'}
            </span>
          </div>
        )}
      </div>

      {/* ── Columna derecha ── */}
      <div className={`${styles.right} reveal-item`}>

        <div className={styles.polaroid}>
          <span className={styles.tape} aria-hidden />

          <div className={styles.photo}>
            {photoSrc && (
              <img src={photoSrc} alt="Espécimen JD" className={styles.photoImg} />
            )}
            <div
              className={styles.photoLock}
              aria-hidden
              style={{ opacity: unlocked ? 0 : 1, pointerEvents: unlocked ? 'none' : 'auto' }}
            >
              <div className={styles.sil}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
              <div className={styles.qm}>?</div>
              <div className={styles.lockLabel}>sujeto clasificado</div>
            </div>

          </div>

          <p className={styles.pcap}>
            Espécimen &ldquo;JD&rdquo;
            <small>captado en su hábitat · 2026</small>
          </p>

          {/* Sello TOP SECRET — esquina inferior derecha, sobre el papel del polaroid */}
          <div className={`${styles.stampGranted} ${unlocked ? styles.stampVisible : ''}`} aria-hidden>
            TOP SECRET
          </div>
        </div>

        <svg className={styles.seal} viewBox="0 0 200 200">
          <defs>
            <path id="sealArc" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" fill="none" />
          </defs>
          <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <text fontSize="11" letterSpacing="3" fontWeight="600" fill="currentColor" fontFamily="Space Grotesk, sans-serif">
            <textPath href="#sealArc" startOffset="2%">★ DIVISIÓN DE CONTACTO XENO ★ ARCHIVO PROFUNDO ★</textPath>
          </text>
          <ellipse cx="100" cy="104" rx="34" ry="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M82,100 q18,-20 36,0" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="92" r="2.4" fill="currentColor" />
          <path d="M78,118 l-6,8 M100,120 v10 M122,118 l6,8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>

      </div>
    </section>
  )
}
