import { useState, useCallback } from 'react'

const SCAN_MESSAGES = [
  'leyendo huella…',
  'verificando ADN…',
  'desencriptando…',
  'acceso concedido ✓',
]

export function useAuthorization(total: number) {
  const [granted, setGranted] = useState(0)
  const [scanning, setScanning] = useState(false)
  const [scanMsg, setScanMsg] = useState('huella biométrica requerida')

  const authorize = useCallback(() => {
    if (scanning || granted >= total) return

    setScanning(true)
    let i = 0

    const interval = setInterval(() => {
      setScanMsg(SCAN_MESSAGES[i])
      i++
      if (i >= SCAN_MESSAGES.length) {
        clearInterval(interval)
        setTimeout(() => {
          setGranted(g => g + 1)
          setScanning(false)
          setScanMsg('huella biométrica requerida')
        }, 400)
      }
    }, 330)
  }, [scanning, granted, total])

  return {
    granted,
    scanning,
    scanMsg,
    authorize,
    isMaxed: granted >= total,
  }
}
