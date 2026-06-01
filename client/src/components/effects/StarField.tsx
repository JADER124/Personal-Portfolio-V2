import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Star = { x: number; y: number; r: number; speed: number; phase: number }
    let stars: Star[] = []
    let raf: number

    function init() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const count = Math.floor(canvas.width / 8)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        r: Math.random() * 1.2 + 0.2,
        speed: Math.random() * 0.18 + 0.04,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function draw(t: number) {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Lee el estado del DOM una sola vez por frame (no por estrella):
      // tono verde suave al desbloquear, blanco neutro en B&N.
      const rgb = document.body.classList.contains('unlocked')
        ? '207,233,223'
        : '200,200,198'
      for (const s of stars) {
        s.y += s.speed
        if (s.y > canvas.height) s.y = 0
        const alpha = 0.35 + 0.55 * Math.abs(Math.sin(t * 0.0008 + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb},${alpha})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    init()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', init)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      aria-hidden
    />
  )
}
