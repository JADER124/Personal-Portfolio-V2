import { useEffect, useState, useRef } from 'react'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01XÆØ░▒▓'

type CharState = 'hidden' | 'scrambling' | 'revealed'
type Char = { display: string; state: CharState }

type Props = {
  text: string
  trigger: boolean
  delay?: number
  className?: string
}

export default function DecodeText({ text, trigger, delay = 0, className }: Props) {
  const [chars, setChars] = useState<Char[]>(() =>
    text.split('').map(c => ({ display: c, state: 'hidden' }))
  )
  const cancelRef = useRef(false)

  useEffect(() => {
    setChars(text.split('').map(c => ({ display: c, state: 'hidden' })))
  }, [text])

  useEffect(() => {
    if (!trigger) return
    cancelRef.current = false

    const startTimeout = setTimeout(() => {
      let idx = 0

      const revealNext = () => {
        if (cancelRef.current || idx >= text.length) return
        const currentIdx = idx
        let frames = 0

        const scramble = setInterval(() => {
          if (cancelRef.current) { clearInterval(scramble); return }
          frames++
          setChars(prev =>
            prev.map((c, i) =>
              i === currentIdx
                ? { display: GLYPHS[Math.floor(Math.random() * GLYPHS.length)], state: 'scrambling' }
                : c
            )
          )
          if (frames >= 5) {
            clearInterval(scramble)
            setChars(prev =>
              prev.map((c, i) =>
                i === currentIdx ? { display: text[currentIdx], state: 'revealed' } : c
              )
            )
            idx++
            setTimeout(revealNext, 15)
          }
        }, 35)
      }

      revealNext()
    }, delay)

    return () => {
      cancelRef.current = true
      clearTimeout(startTimeout)
    }
  }, [trigger, delay])

  if (!trigger) return <span className={className}>{text}</span>

  return (
    <span className={className}>
      {chars.map((c, i) => (
        <span
          key={i}
          style={
            c.state === 'scrambling'
              ? { color: 'var(--cyan)', fontFamily: 'var(--mono)' }
              : c.state === 'hidden'
              ? { visibility: 'hidden' }
              : undefined
          }
        >
          {c.display}
        </span>
      ))}
    </span>
  )
}
