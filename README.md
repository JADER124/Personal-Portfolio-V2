# Archivo Clasificado — Portafolio de Jhon Jader López

Portafolio personal interactivo con la temática de un **expediente alienígena clasificado**. El visitante llega a un archivo cifrado en blanco y negro y, al "autorizar el acceso", desbloquea progresivamente seis niveles de información mientras todo el sitio cobra color.

> **Concepto:** el "espécimen no identificado" es el propio desarrollador. Cada sección es un nivel del expediente — identificación, perfil, capacidades, formación, experiencia y contacto — que se revela con un efecto de descifrado.

**Demo en vivo:** _próximamente_ · **Autor:** Jhon Jader López Blandón — Desarrollador Full-Stack & Data Engineer

---

## Características

- **Mecánica de desbloqueo cromático** — el sitio arranca en escala de grises; al autorizar el acceso, toda la paleta transiciona a color en ~0.9s y la foto del espécimen pasa de un `?` a la imagen real.
- **6 niveles progresivos** que se revelan uno a uno, con efecto de descifrado (scramble de glifos) en cada texto.
- **Botón flotante tipo escáner** que desbloquea niveles sin volver al inicio, con anillo de progreso y estado de autorización.
- **Ambiente inmersivo** — campo de estrellas en canvas, nébulas, scanlines y viñeta.
- **100% responsive** y accesible (respeta `prefers-reduced-motion`).
- **Sin librerías de UI** — diseño y animaciones totalmente a medida con CSS.

---

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | React 18 + Vite 5 |
| Lenguaje | TypeScript |
| Estilos | CSS Modules + variables CSS (tema en `tokens.css`) |
| Animaciones | CSS puro (keyframes + transiciones) |
| Despliegue | Vercel |

---

## Estructura del proyecto

```
Portafolio-JADER124/
├── client/                      # Aplicación React (frontend)
│   ├── public/                  # Estáticos: favicon, foto, og-image
│   ├── scripts/                 # Fuente SVG de la imagen social
│   └── src/
│       ├── components/
│       │   ├── effects/         # StarField (canvas de estrellas)
│       │   ├── layout/          # StatusBar (navbar), Footer
│       │   ├── sections/        # Hero + los 6 niveles del expediente
│       │   └── ui/              # Logo, DecodeText, SkillBar, LockBar, ScannerFab
│       ├── data/                # dossier.ts y formacion.ts (contenido editable)
│       ├── hooks/               # useAuthorization, useHeroReveal, useScrollReveal
│       └── styles/              # tokens.css, animations.css, global.css
├── server/                      # Reservado para un backend futuro
└── README.md
```

### Dónde editar el contenido

Todo el contenido del portafolio vive en dos archivos, sin tocar componentes:

- **`client/src/data/dossier.ts`** — identidad, habilidades, experiencia laboral y canales de contacto.
- **`client/src/data/formacion.ts`** — formación académica, idiomas y certificados.

---

## Desarrollo local

Requisitos: **Node.js 18+**.

```bash
cd client
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
```

Otros comandos:

```bash
npm run build    # build de producción en client/dist
npm run preview  # previsualiza el build de producción
```

---

## Despliegue (Vercel)

1. Importar el repositorio en Vercel.
2. En la configuración del proyecto, establecer **Root Directory = `client`**
   (Vercel detecta Vite, el build y la carpeta de salida automáticamente).
3. Deploy.
4. Tras el primer despliegue, reemplazar `https://TU-DOMINIO` por la URL real en el
   bloque marcado de `client/index.html` (afecta `canonical` y las metaetiquetas
   Open Graph / Twitter) y volver a desplegar.

---

## Tema de diseño

Paleta "alien / espacio clasificado" definida en `client/src/styles/tokens.css`:

| Token | Color | Uso |
|-------|-------|-----|
| `--xeno` | `#4dffb0` | Verde bioluminiscente — acento principal |
| `--cyan` | `#36e6ff` | Cian de escáner |
| `--amber` | `#ffb000` | Advertencias / indicador REC |
| `--void` | `#070b0a` | Fondo base |

**Tipografías:** Space Grotesk (display), JetBrains Mono (UI/datos), Special Elite y Caveat (acentos del expediente).

---

## Licencia

Proyecto personal. El código puede servir de referencia; el contenido (textos, imágenes, identidad) es propiedad de su autor.

**Contacto:** jaderlopez186@gmail.com · [LinkedIn](https://www.linkedin.com/in/jhon-jader-lopez-blandon-5751a6236)
