# Copilot Instructions — Portafolio JADER "Archivo Clasificado XENO-7"

## Qué es este proyecto

Portafolio personal de **Jader López** (desarrollador full-stack & data engineer). La temática es un **expediente alienígena clasificado**: el visitante desbloquea 5 niveles de autorización que revelan cada sección del portafolio. Cada unlock activa un efecto de scramble de glifos (efecto "decode") y un sweep de escaneo verde.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 18 + Vite 5 + TypeScript |
| Estilos | CSS Modules por componente + variables CSS globales en `styles/tokens.css` |
| Animaciones | CSS transitions/keyframes (Framer Motion instalado, usar solo si realmente se necesita) |
| Estado | React `useState` + hook `useAuthorization` (no Redux, no Zustand) |
| Routing | React Router v6 (instalado, no usado aún) |
| Fuentes | Google Fonts via `global.css` |
| Backend | `server/` — carpeta vacía, placeholder para Node.js/Express futuro |

---

## Estructura de carpetas

```
Portafolio-JADER124/
├── client/                          ← TODO el trabajo va aquí
│   └── src/
│       ├── components/
│       │   ├── effects/
│       │   │   └── StarField.tsx    ← canvas de estrellas animado (no tocar)
│       │   ├── layout/
│       │   │   ├── StatusBar.tsx    ← barra fija: REC + medidor + ticker
│       │   │   └── StatusBar.module.css
│       │   ├── sections/
│       │   │   ├── HeroAccess.tsx   ← hero + ficha censurada + botón unlock
│       │   │   ├── Level.tsx        ← wrapper genérico bloqueado/desbloqueado
│       │   │   ├── Level01.tsx      ← Identificación (grid 2×2)
│       │   │   ├── Level02.tsx      ← Capacidades / Skills (barras)
│       │   │   ├── Level03.tsx      ← Artefactos / Proyectos (cards)
│       │   │   ├── Level04.tsx      ← Avistamientos / Experiencia (timeline)
│       │   │   └── Level05.tsx      ← Protocolo de Contacto (links)
│       │   └── ui/
│       │       ├── DecodeText.tsx   ← efecto scramble de glifos carácter a carácter
│       │       ├── LockBar.tsx      ← overlay candado ámbar sobre niveles bloqueados
│       │       └── SkillBar.tsx     ← barra de intensidad con CSS scaleX animation
│       ├── data/
│       │   └── dossier.ts           ← FUENTE DE VERDAD de todos los datos del portafolio
│       ├── hooks/
│       │   └── useAuthorization.ts  ← máquina de estado del unlock (scanning → mensajes → granted++)
│       └── styles/
│           ├── tokens.css           ← todas las variables CSS (colores, tipografía, sombras)
│           ├── animations.css       ← keyframes globales
│           └── global.css           ← reset + @import fuentes + clases utilitarias (.wrap, .nebula, etc.)
├── server/                          ← placeholder backend (no tocar por ahora)
└── design_handoff_archivo_xeno/     ← HTMLs de referencia visual (no son código de producción)
```

---

## Tokens de diseño — NO inventar colores ni fuentes

Todos los valores viven en `src/styles/tokens.css`. Usar SIEMPRE las variables CSS:

```css
/* Fondos */
--void: #070b0a        /* fondo base */
--void2: #0b1311
--panel: rgba(12,22,20,.55)   /* fondo de cards/paneles con blur */

/* Acentos alien */
--xeno: #4dffb0        /* verde bioluminiscente — acento principal */
--xeno-dim: #2c9d75
--cyan: #36e6ff        /* cian de escáner / glifos decode */
--violet: #a472ff
--amber: #ffb000       /* ámbar — warnings, REC, lockbar */
--stamp: #c9381f       /* rojo sello */

/* Papel físico */
--paper: #e9e1cf
--ink: #241d12

/* Texto sobre fondo oscuro */
--txt: #cfe9df         /* texto principal */
--dim: #6f8a82         /* texto secundario */
--faint: #3f5650       /* texto muy apagado / labels */

/* Líneas */
--line: rgba(77,255,176,.16)
--line-2: rgba(77,255,176,.32)

/* Sombras */
--shadow-card: 0 26px 50px -16px rgba(0,0,0,.75)
--shadow-xeno: 0 0 60px -20px rgba(77,255,176,.3)

/* Tipografía */
--disp: 'Space Grotesk', sans-serif     /* títulos */
--mono: 'JetBrains Mono', monospace    /* UI, datos, cuerpo */
--major: 'Major Mono Display', monospace  /* códigos de archivo, usar poco */
--tw: 'Special Elite', monospace       /* máquina de escribir */
--hand: 'Caveat', cursive              /* manuscrita */
```

---

## Convenciones de código

### CSS
- Cada componente tiene su propio `.module.css` al lado del `.tsx`
- Los estilos globales/utilitarios van SOLO en `styles/global.css`
- Nunca usar `style={{}}` inline para diseño permanente — solo para valores dinámicos (delays, widths calculados)
- Animaciones: primero intentar con CSS transitions/keyframes antes de usar Framer Motion

### TypeScript
- Sin comentarios de código salvo cuando el WHY no es obvio
- Props siempre tipadas con `type Props = { ... }` encima del componente
- Importar tipos con `import type` cuando sea solo un tipo
- No usar `any`

### Componentes
- Functional components, sin clases
- Un archivo = un componente principal exportado como `default`
- Datos del portafolio: importar SIEMPRE desde `../../data/dossier.ts`, nunca hardcodear en componentes

### Estructura de imports (orden)
```tsx
import { ... } from 'react'              // 1. React
import type { ... } from '...'           // 2. Types
import ComponenteX from '../...'         // 3. Componentes
import { datosX } from '../../data/...' // 4. Datos
import styles from './X.module.css'      // 5. CSS Module (siempre último)
```

---

## Patrones establecidos — seguir exactamente

### Patrón: sección de nivel

```tsx
// En App.tsx — cómo se declara un nivel
<Level
  number="0X" title="Nombre Sección" tag="ETIQUETA · CORTA"
  description="Descripción en tono de expediente alienígena."
  isLocked={granted < X} required={X} total={TOTAL} onUnlock={authorize}
>
  <LevelXX trigger={granted >= X} />
</Level>
```

```tsx
// Plantilla de componente de nivel (LevelXX.tsx)
import { datosRelevantes } from '../../data/dossier'
import DecodeText from '../ui/DecodeText'
import styles from './LevelXX.module.css'

type Props = { trigger: boolean }

export default function LevelXX({ trigger }: Props) {
  return (
    <div className={styles.container}>
      {/* contenido con DecodeText para textos importantes */}
      <DecodeText text="texto" trigger={trigger} delay={0} />
    </div>
  )
}
```

### Patrón: DecodeText
```tsx
// trigger = true cuando el nivel está desbloqueado
// delay en ms para escalonar múltiples textos (i * 90)
<DecodeText text={valor} trigger={trigger} delay={i * 90} />
```

### Patrón: SkillBar
```tsx
// delay escalonado global para animar en secuencia
<SkillBar label="React" intensity={90} trigger={trigger} delay={200} />
```

### Patrón: CSS Module card con tema dark
```css
.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 22px 20px;
  backdrop-filter: blur(6px);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card), var(--shadow-xeno);
  border-color: var(--line-2);
}
```

---

## Datos disponibles en `dossier.ts`

```ts
identity   // { codename, designation, fullName, role, origin, status, archiveCode, division }
skills[]   // { label, intensity: 0-100, category: 'frontend'|'backend'|'data'|'tools' }
projects[] // { id, title, classification, description, tags[], link?, repo? }
experience[] // { id, period, role, company, description, tags[] }
education[]  // { id, degree, institution, period }
contact[]  // { id, channel, label, href, icon: 'email'|'github'|'linkedin' }
levels[]   // metadatos de los 5 niveles (number, title, tag)
```

Para agregar proyectos/experiencia reales: editar SOLO `dossier.ts`.

---

## Estado de autorización — cómo funciona

```
useAuthorization(5) retorna:
  granted: number     // 0–5, cuántos niveles desbloqueados
  scanning: boolean   // true durante la animación de acceso (~1.5s)
  scanMsg: string     // "leyendo huella…" → "verificando ADN…" → "acceso concedido ✓"
  authorize()         // función que inicia el unlock (no llamar si scanning || isMaxed)
  isMaxed: boolean    // true cuando granted === 5
```

Flujo: `authorize()` → scanning = true → mensajes cada 330ms → granted++ → scanning = false → Level wrapper hace scrollIntoView al nuevo nivel.

---

## Mecánica de niveles

- `Level.tsx` aplica `filter: blur(9px) brightness(0.5); opacity: 0.5` cuando `isLocked`
- `LockBar.tsx` aparece encima del contenido bloqueado (position: absolute, inset: 0)
- Al hacer click en LockBar → llama `onUnlock` → `authorize()`
- `Level.tsx` detecta el cambio `isLocked: true → false` y hace `scrollIntoView` con `smooth`
- Los componentes `LevelXX` reciben `trigger={granted >= X}` y lo pasan a `DecodeText` / `SkillBar`

---

## Clases utilitarias globales (ya definidas en global.css)

```
.wrap           → max-width: 1080px, centrado, padding lateral responsive
.wrap-wide      → max-width: 1160px
.site-main      → position:relative; z-index:2; padding-top:80px (compensa StatusBar fijo)
.nebula         → fondo de nebulosas fijo (position: fixed)
.scanlines      → overlay de scanlines fijo (position: fixed, z-index: 60)
.vignette       → viñeta de bordes oscuros (position: fixed, z-index: 59)
.redact         → texto censurado (fondo negro, color transparent, revela al click)
.vredact        → bloque censurado verde (versión "Niveles")
.reveal-item    → elemento que aparece con fade+slideUp cuando el padre tiene .reveal-ready
.reveal-ready   → activa las animaciones de todos los .reveal-item hijos (escalonado por nth-child)
.anim-glowpulse → text-shadow pulsante en verde xeno (usado en el H1 del hero)
```

---

## Componentes de layout disponibles

- `StatusBar` — barra fija superior: REC · sysid · medidor de autorización · ticker ámbar
- `Footer` — pie de página: código de archivo · hint easter egg "abducir"

## Hooks disponibles

- `useAuthorization(total)` — máquina de estado: `{ granted, scanning, scanMsg, authorize, isMaxed }`
- `useHeroReveal(delayMs?)` — devuelve `boolean` que se activa tras `delayMs` ms, para activar `.reveal-ready`

## Foto del espécimen

`HeroAccess` acepta prop opcional `photoSrc?: string`. Para mostrar tu foto:
1. Copiar imagen a `client/public/foto.jpg`
2. En `App.tsx`, pasar `photoSrc="/foto.jpg"` al componente `<HeroAccess>`
Sin `photoSrc`, muestra un placeholder con icono de silueta.

---

## Lo que falta por construir / posibles mejoras

- [ ] Agregar proyectos reales en `dossier.ts` → `projects[]` (título, descripción, tags, link, repo)
- [ ] Personalizar links reales en `dossier.ts` → `contact[]` (GitHub, LinkedIn)
- [ ] Foto real del espécimen → `client/public/foto.jpg` + prop `photoSrc` en App.tsx
- [ ] og:image para redes sociales → crear `client/public/og-image.png` (1200×630px)
- [ ] Deploy (Vercel: conectar repo, root = `client/`, build = `npm run build`, out = `dist`)
- [ ] Dominio personalizado (actualizar `canonical` y URLs og/twitter en `index.html`)

---

## Qué NO hacer

- No instalar librerías de UI (MUI, Chakra, shadcn, etc.) — el diseño es 100% custom
- No usar Tailwind — los estilos son CSS Modules + variables CSS
- No hardcodear colores hexadecimales en JSX/CSS — usar siempre las variables `--xeno`, `--void`, etc.
- No modificar `StarField.tsx`, `global.css`, `tokens.css`, `animations.css` salvo si Jader lo pide explícitamente
- No tocar la carpeta `server/` hasta que se decida implementar el backend
- No crear archivos de documentación ni README adicionales salvo que se pida
- No agregar `console.log` de debug al código final
