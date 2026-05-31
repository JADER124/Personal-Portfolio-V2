import { useEffect } from 'react'
import StarField from './components/effects/StarField'
import StatusBar from './components/layout/StatusBar'
import Footer from './components/layout/Footer'
import HeroAccess from './components/sections/HeroAccess'
import Level from './components/sections/Level'
import Level01 from './components/sections/Level01'
import Level02 from './components/sections/Level02'
import Level03 from './components/sections/Level03'
import Level04 from './components/sections/Level04'
import Level05 from './components/sections/Level05'
import { useAuthorization } from './hooks/useAuthorization'

const TOTAL = 5

function useChromatiUnlock(granted: number) {
  useEffect(() => {
    document.body.classList.toggle('unlocked', granted >= 1)
  }, [granted])
}

function useEasterEggs() {
  useEffect(() => {
    console.log(
      '%cXENO-7 // ARCHIVO CLASIFICADO',
      'color:#4dffb0;font-family:monospace;font-size:16px;font-weight:bold;',
    )
    console.log(
      '%c¿Cómo llegaste aquí? Esto es nivel Ω.',
      'color:#36e6ff;font-family:monospace;',
    )

    const seq = 'abducir'
    let buf = ''
    const onKey = (e: KeyboardEvent) => {
      buf = (buf + e.key).slice(-seq.length)
      if (buf === seq) {
        document.body.style.transition = 'filter 0.3s'
        document.body.style.filter = 'invert(1) hue-rotate(120deg)'
        console.log('%c🛸 protocolo de abducción iniciado', 'color:#4dffb0;font-size:14px;')
        setTimeout(() => { document.body.style.filter = ''; buf = '' }, 1400)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}

export default function App() {
  const { granted, scanning, scanMsg, authorize, isMaxed } = useAuthorization(TOTAL)

  useChromatiUnlock(granted)
  useEasterEggs()

  return (
    <>
      <StarField />
      <div className="nebula" aria-hidden />
      <div className="nebula-color" aria-hidden />
      <div className="scanlines" aria-hidden />
      <div className="vignette" aria-hidden />

      <StatusBar granted={granted} total={TOTAL} />

      <main className="site-main">
        <HeroAccess
          granted={granted}
          scanning={scanning}
          scanMsg={scanMsg}
          onAuthorize={authorize}
          isMaxed={isMaxed}
        />

        <Level
          number="01" title="Identificación" tag="ID · CLASIFICADO"
          description="Datos de identificación del espécimen recuperados del archivo central. Clasificación: nivel máximo."
          isLocked={granted < 1} required={1} total={TOTAL} onUnlock={authorize}
        >
          <Level01 trigger={granted >= 1} />
        </Level>

        <Level
          number="02" title="Capacidades Anómalas" tag="SKILLS · NIVEL Ω"
          description="Registro de habilidades no convencionales detectadas en el espécimen durante observación en campo."
          isLocked={granted < 2} required={2} total={TOTAL} onUnlock={authorize}
        >
          <Level02 trigger={granted >= 2} />
        </Level>

        <Level
          number="03" title="Artefactos Recuperados" tag="PROYECTOS"
          description="Objetos de origen desconocido atribuidos al espécimen. Capacidades tecnológicas avanzadas confirmadas."
          isLocked={granted < 3} required={3} total={TOTAL} onUnlock={authorize}
        >
          <Level03 trigger={granted >= 3} />
        </Level>

        <Level
          number="04" title="Registro de Avistamientos" tag="EXPERIENCIA"
          description="Cronología de avistamientos confirmados y actividad documentada del espécimen en territorio terrestre."
          isLocked={granted < 4} required={4} total={TOTAL} onUnlock={authorize}
        >
          <Level04 trigger={granted >= 4} />
        </Level>

        <Level
          number="05" title="Protocolo de Contacto" tag="CONTACTO"
          description="Canal de comunicación oficial con el espécimen. Transmisión cifrada. Respuesta garantizada."
          isLocked={granted < 5} required={5} total={TOTAL} onUnlock={authorize}
        >
          <Level05 trigger={granted >= 5} />
        </Level>
      </main>

      <Footer />
    </>
  )
}
