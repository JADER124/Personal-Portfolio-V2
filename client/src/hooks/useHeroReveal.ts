import { useState, useEffect } from 'react'

export function useHeroReveal(delayMs = 120) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delayMs)
    return () => clearTimeout(t)
  }, [delayMs])

  return visible
}
