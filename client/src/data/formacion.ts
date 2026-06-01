export type AcademicItem = {
  title: string
  years: string
  place: string
  status: string
  color: 'xeno' | 'cyan' | 'violet'
}

export type Language = {
  name: string
  level: string
  pct: number
  meta: string
}

export type Cert = {
  name: string
  org: string
  year: string
  placeholder?: boolean
}

export const academicTimeline: AcademicItem[] = [
  {
    title: 'Ingeniería en Desarrollo de Software',
    years: '2024 — 2026',
    place: 'Tecnológico de Antioquia',
    status: 'mutación completada · grado máximo',
    color: 'xeno',
  },
  {
    title: 'Tecnología en Sistemas',
    years: '2021 — 2023',
    place: 'Tecnológico de Antioquia',
    status: 'adaptación completada',
    color: 'cyan',
  },
  {
    title: 'Técnica Profesional en Sistemas',
    years: '2021 — 2022',
    place: 'Tecnológico de Antioquia',
    status: 'primer contacto registrado',
    color: 'violet',
  },
]

export const languages: Language[] = [
  { name: 'Español', level: 'nativo',      pct: 100, meta: 'canal primario · fluidez total'        },
  { name: 'Inglés',  level: 'A2 · básico', pct: 40,  meta: 'canal secundario · en calibración ↑'   },
]

export const certs: Cert[] = [
  { name: 'AWS Cloud Practitioner',      org: 'entrenaAQ · powered by AWS', year: '2025' },
  { name: 'Terraform · IaC en AWS',      org: 'Udemy',                      year: '2025' },
  { name: 'Bases de Datos · SQL Server', org: 'Udemy',                      year: '2025' },
  { name: 'Automatización con IA · n8n', org: 'Udemy',                      year: '2026' },
]
