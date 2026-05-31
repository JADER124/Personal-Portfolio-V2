// Archivo de datos central del portafolio — edita aquí para actualizar todo el sitio

export const identity = {
  codename: 'ESPÉCIMEN / NO IDENTIFICADO',
  designation: 'JADER',
  fullName: 'Jhon Jader López Blandón',
  role: 'Desarrollador Full-Stack & Data Engineer',
  origin: 'Medellín, Colombia',
  status: 'ACTIVO · DISPONIBLE',
  archiveCode: 'EXPEDIENTE-DEV // SECTOR TIERRA',
  division: 'DIV. ULTRA SECRETA',
} as const

export type Skill = {
  label: string
  intensity: number // 0–100
  category: 'frontend' | 'backend' | 'data' | 'tools'
}

export const skills: Skill[] = [
  // Frontend
  { label: 'React', intensity: 90, category: 'frontend' },
  { label: 'TypeScript', intensity: 82, category: 'frontend' },
  { label: 'JavaScript', intensity: 88, category: 'frontend' },
  { label: 'HTML5 / CSS3', intensity: 85, category: 'frontend' },
  { label: 'Tailwind CSS', intensity: 80, category: 'frontend' },
  // Backend
  { label: 'Node.js / Express', intensity: 78, category: 'backend' },
  { label: 'Python', intensity: 75, category: 'backend' },
  { label: 'SQL / MySQL', intensity: 80, category: 'backend' },
  { label: 'MongoDB', intensity: 70, category: 'backend' },
  // Data
  { label: 'AWS Glue', intensity: 85, category: 'data' },
  { label: 'AWS S3 / Athena', intensity: 83, category: 'data' },
  { label: 'ETL Pipelines', intensity: 80, category: 'data' },
  { label: 'CloudFormation (IaC)', intensity: 75, category: 'data' },
  // Tools
  { label: 'Git / GitHub', intensity: 88, category: 'tools' },
  { label: 'Docker', intensity: 65, category: 'tools' },
  { label: 'Postman', intensity: 80, category: 'tools' },
]

export type Project = {
  id: string
  title: string
  classification: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    id: 'proj-01',
    title: 'ARTEFACTO 01',
    classification: 'SITIO WEB · CLIENTE',
    description: 'Sitio web para cliente — diseño a medida, SEO optimizado y alto rendimiento. Agrega tu proyecto real aquí.',
    tags: ['React', 'CSS', 'Vite'],
  },
  {
    id: 'proj-02',
    title: 'ARTEFACTO 02',
    classification: 'APP FULL-STACK',
    description: 'Aplicación full-stack propia con autenticación, base de datos y API REST. Agrega tu proyecto real aquí.',
    tags: ['Node.js', 'React', 'MongoDB'],
  },
  {
    id: 'proj-03',
    title: 'ARTEFACTO 03',
    classification: 'PIPELINE DE DATOS · AWS',
    description: 'Pipeline ETL en AWS: S3 → Glue → Athena con infraestructura como código. Agrega tu proyecto real aquí.',
    tags: ['AWS Glue', 'Python', 'CloudFormation'],
  },
]

export type Experience = {
  id: string
  period: string
  role: string
  company: string
  description: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    id: 'exp-01',
    period: 'Nov 2025 – Actualidad',
    role: 'Data Engineer Analyst',
    company: 'Iris Neofinanciera',
    description:
      'Diseño y operación de pipelines de datos en la nube. Jobs en AWS Glue, arquitecturas S3/Glue/Athena, IaC con CloudFormation y automatización ETL a escala.',
    tags: ['AWS Glue', 'S3', 'Athena', 'CloudFormation', 'ETL'],
  },
  {
    id: 'exp-02',
    period: 'Feb 2025 – Nov 2025',
    role: 'Auxiliar Mesa de Servicios TI',
    company: 'Iris Neofinanciera',
    description:
      'Soporte técnico N1/N2, gestión de tickets en plataforma ITSM, documentación de incidencias y escalamiento de casos críticos.',
    tags: ['ITSM', 'Soporte N1/N2', 'Documentación'],
  },
  {
    id: 'exp-03',
    period: 'Jun 2023 – Dic 2023',
    role: 'Aprendiz Soporte Técnico',
    company: 'Alcaldía de Medellín',
    description:
      'Soporte de equipos de cómputo, gestión documental electrónica y mantenimiento preventivo/correctivo de infraestructura TI.',
    tags: ['Soporte TI', 'Gestión documental'],
  },
]

export type Education = {
  id: string
  degree: string
  institution: string
  period: string
}

export const education: Education[] = [
  {
    id: 'edu-01',
    degree: 'Ingeniería en Desarrollo de Software',
    institution: 'Tecnológico de Antioquia',
    period: '2024 – En curso',
  },
  {
    id: 'edu-02',
    degree: 'Tecnología en Sistemas',
    institution: 'Tecnológico de Antioquia',
    period: '2021 – 2023',
  },
  {
    id: 'edu-03',
    degree: 'Técnica Profesional en Sistemas',
    institution: 'Tecnológico de Antioquia',
    period: '2021 – 2022',
  },
  {
    id: 'edu-04',
    degree: 'React Advanced Patterns',
    institution: 'Frontend Masters',
    period: '2024',
  },
]

export type Contact = {
  id: string
  channel: string
  label: string
  href: string
  icon: 'email' | 'github' | 'linkedin'
}

export const contact: Contact[] = [
  {
    id: 'contact-email',
    channel: 'TRANSMISIÓN DIRECTA',
    label: 'jaderlopez186@gmail.com',
    href: 'mailto:jaderlopez186@gmail.com',
    icon: 'email',
  },
  {
    id: 'contact-github',
    channel: 'REPOSITORIO PÚBLICO',
    label: 'github.com/JADER124',
    href: 'https://github.com/JADER124',
    icon: 'github',
  },
  {
    id: 'contact-linkedin',
    channel: 'RED DE CONTACTOS',
    label: 'linkedin.com/in/jader-lopez',
    href: 'https://linkedin.com/in/jader-lopez',
    icon: 'linkedin',
  },
]

export const levels = [
  { id: 'level-01', number: '01', title: 'Identificación',        tag: 'ID · CLASIFICADO' },
  { id: 'level-02', number: '02', title: 'Capacidades Anómalas',  tag: 'SKILLS · NIVEL Ω'  },
  { id: 'level-03', number: '03', title: 'Artefactos Recuperados', tag: 'PROYECTOS'          },
  { id: 'level-04', number: '04', title: 'Registro de Avistamientos', tag: 'EXPERIENCIA'    },
  { id: 'level-05', number: '05', title: 'Protocolo de Contacto', tag: 'CONTACTO'           },
] as const
