import { Injectable, computed, signal } from '@angular/core';

export type Lang = 'es' | 'en';

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  summary?: string;
  bullets?: string[];
  current?: boolean;
  badge?: string;
}

interface Dictionary {
  nav: { about: string; projects: string; experience: string; contact: string };
  about: {
    heading: string;
    titleLine1: string;
    titleLine2: string;
    bio: string[];
    downloadCv: string;
  };
  projects: {
    heading: string;
    showMore: string;
    showLess: string;
    watchVideo: string;
    clickExpand: string;
    swipeHint: string;
    imageAlt: string;
  };
  experience: { heading: string; timeline: TimelineItem[] };
  contact: {
    heading: string;
    intro: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    ok: string;
    error: string;
    errorLinkedin: string;
  };
  footer: { location: string };
  a11y: { switchLang: string };
}

const TRANSLATIONS: Record<Lang, Dictionary> = {
  es: {
    nav: { about: 'Sobre mí', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    about: {
      heading: 'Sobre mi',
      titleLine1: 'Desarrollador',
      titleLine2: 'Backend Junior',
      bio: [
        'Desarrollador <span class="text-emerald-400 font-semibold">backend junior</span> con ' +
          '<span class="text-zinc-200 font-semibold">4 meses de experiencia profesional en NTT Data</span> ' +
          'manteniendo una aplicación <span class="text-emerald-400 font-semibold">Java 8 / Spring</span> en producción ' +
          '(SonarQube, JUnit, Scrum). Trabajo con <span class="text-emerald-400 font-semibold">Java</span>, ' +
          '<span class="text-emerald-400 font-semibold">Spring</span> y ' +
          '<span class="text-emerald-400 font-semibold">Node.js / Express</span>.',
        'Técnico Superior en <span class="text-zinc-200 font-semibold">DAM (Matrícula de Honor)</span> y ' +
          'graduado en <span class="text-zinc-200 font-semibold">Biología</span>. Cinco proyectos propios: ' +
          'cuatro aplicaciones full-stack con <span class="text-zinc-200">APIs REST</span>, ' +
          '<span class="text-emerald-400 font-semibold">JWT / OAuth</span> y ' +
          '<span class="text-emerald-400 font-semibold">PostgreSQL</span>, y una app Android nativa.',
        'Incorporación inmediata, con disponibilidad para trasladarme ' +
          '(<span class="text-zinc-300">Madrid, Barcelona o UE</span>). Ciudadano UE, elegible para contrato ' +
          'formativo en prácticas. Inglés <span class="text-zinc-300">B2</span>.',
      ],
      downloadCv: 'Descargar CV',
    },
    projects: {
      heading: 'Proyectos',
      showMore: '[ Ver mas + ]',
      showLess: '[ Ver menos - ]',
      watchVideo: 'Ver demo en video',
      clickExpand: 'Click para ampliar',
      swipeHint: 'swipe horizontal → cambiar proyecto',
      imageAlt: 'Imagen del proyecto',
    },
    experience: {
      heading: 'Experiencia',
      timeline: [
        {
          period: 'Feb 2026 - May 2026',
          title: 'Desarrollador Java en prácticas (Formación Práctica Dual) - NTT Data',
          place: 'Cáceres · Proyecto para un cliente del sector energético',
          bullets: [
            'Mantenimiento de una aplicación empresarial en producción con Java 8 y Spring (legacy), en un equipo Scrum de 8 personas.',
            'Corrección diaria de incidencias de SonarQube (code smells y malas prácticas) para mejorar la mantenibilidad del código.',
            'Desarrollo de eventos de calendario vinculados a la recepción de correos para convocar reuniones; corrección de bugs de interfaz.',
            'Tests unitarios con JUnit; acceso restringido durante una corrección de vulnerabilidades.',
          ],
        },
        {
          period: 'Abr 2025 - Jun 2025',
          title: 'Cursos avanzados en formación dual con NTT Data',
          place: 'Cáceres',
          bullets: [
            'Desarrollo front-end: Angular.',
            'Gestión de bases de datos: nivel intermedio-avanzado.',
            'Conocimiento avanzado de modelos de lenguaje (LLMs).',
            'Automatización con IA y prompt engineering.',
          ],
        },
        {
          period: '2024 - 2026',
          title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
          place: 'IES Ágora | Cáceres',
          badge: 'Matrícula de Honor',
          summary: 'Nota media: 9.8/10.',
        },
        {
          period: '2020 - 2025',
          title: 'Grado en Biología',
          place: 'Universidad de Extremadura | Badajoz',
          summary: 'Orientado a healthtech, biotech y bioinformática.',
        },
      ],
    },
    contact: {
      heading: 'Contacto',
      intro: 'Estoy abierto a nuevas oportunidades, con incorporación inmediata y disponibilidad para trasladarme (Madrid, Barcelona o UE). Dejame un mensaje y te respondere lo antes posible.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      messagePlaceholder: 'Tu mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      ok: '> Mensaje enviado. Gracias, te respondere lo antes posible.',
      error: '> Error al enviar. Intentalo de nuevo',
      errorLinkedin: ' o escribeme por LinkedIn',
    },
    footer: { location: 'Cáceres, Extremadura, España' },
    a11y: { switchLang: 'Cambiar idioma' },
  },

  en: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    about: {
      heading: 'About me',
      titleLine1: 'Junior Backend',
      titleLine2: 'Developer',
      bio: [
        '<span class="text-emerald-400 font-semibold">Junior backend</span> developer with ' +
          '<span class="text-zinc-200 font-semibold">4 months of professional experience at NTT Data</span> ' +
          'maintaining a production <span class="text-emerald-400 font-semibold">Java 8 / Spring</span> application ' +
          '(SonarQube, JUnit, Scrum). I work with <span class="text-emerald-400 font-semibold">Java</span>, ' +
          '<span class="text-emerald-400 font-semibold">Spring</span> and ' +
          '<span class="text-emerald-400 font-semibold">Node.js / Express</span>.',
        'Higher Technician in <span class="text-zinc-200 font-semibold">Multiplatform App Development (DAM, Top Honors)</span> ' +
          'and <span class="text-zinc-200 font-semibold">Biology</span> graduate. Five projects of my own: ' +
          'four full-stack applications with <span class="text-zinc-200">REST APIs</span>, ' +
          '<span class="text-emerald-400 font-semibold">JWT / OAuth</span> and ' +
          '<span class="text-emerald-400 font-semibold">PostgreSQL</span>, and a native Android app.',
        'Available to start immediately and open to relocating ' +
          '(<span class="text-zinc-300">Madrid, Barcelona or the EU</span>). EU citizen, eligible for a ' +
          'training internship contract. English <span class="text-zinc-300">B2</span>.',
      ],
      downloadCv: 'Download CV',
    },
    projects: {
      heading: 'Projects',
      showMore: '[ Show more + ]',
      showLess: '[ Show less - ]',
      watchVideo: 'Watch video demo',
      clickExpand: 'Click to expand',
      swipeHint: 'swipe → change project',
      imageAlt: 'Project image',
    },
    experience: {
      heading: 'Experience',
      timeline: [
        {
          period: 'Feb 2026 - May 2026',
          title: 'Java Developer Intern (Dual Practical Training) - NTT Data',
          place: 'Cáceres · Project for a client in the energy sector',
          bullets: [
            'Maintenance of a production enterprise application built with Java 8 and Spring (legacy), in an 8-person Scrum team.',
            'Daily fixing of SonarQube issues (code smells and bad practices) to improve code maintainability.',
            'Development of calendar events linked to incoming emails to schedule meetings; UI bug fixes.',
            'Unit testing with JUnit; restricted access during a vulnerability remediation.',
          ],
        },
        {
          period: 'Apr 2025 - Jun 2025',
          title: 'Advanced dual-training courses with NTT Data',
          place: 'Cáceres',
          bullets: [
            'Front-end development: Angular.',
            'Database management: intermediate-advanced level.',
            'Advanced knowledge of language models (LLMs).',
            'AI automation and prompt engineering.',
          ],
        },
        {
          period: '2024 - 2026',
          title: 'Higher Technician in Multiplatform App Development (DAM)',
          place: 'IES Ágora | Cáceres',
          badge: 'Top Honors',
          summary: 'GPA: 9.8/10.',
        },
        {
          period: '2020 - 2025',
          title: "Bachelor's Degree in Biology",
          place: 'University of Extremadura | Badajoz',
          summary: 'Focused on healthtech, biotech and bioinformatics.',
        },
      ],
    },
    contact: {
      heading: 'Contact',
      intro: "I'm open to new opportunities, available to start immediately and to relocate (Madrid, Barcelona or the EU). Drop me a message and I'll get back to you as soon as possible.",
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      send: 'Send message',
      sending: 'Sending...',
      ok: "> Message sent. Thank you, I'll reply as soon as possible.",
      error: '> Failed to send. Please try again',
      errorLinkedin: ' or reach me on LinkedIn',
    },
    footer: { location: 'Caceres, Extremadura, Spain' },
    a11y: { switchLang: 'Switch language' },
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.initialLang());

  /** Diccionario reactivo del idioma actual: usar en plantillas como i18n.t().nav.about */
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    this.applyDocumentLang(this.lang());
  }

  setLang(lang: Lang): void {
    if (lang === this.lang()) return;
    this.lang.set(lang);
    this.persist(lang);
    this.applyDocumentLang(lang);
  }

  toggle(): void {
    this.setLang(this.lang() === 'es' ? 'en' : 'es');
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'es' || saved === 'en') return saved;
      return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
    } catch {
      return 'es';
    }
  }

  private persist(lang: Lang): void {
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* almacenamiento no disponible */
    }
  }

  private applyDocumentLang(lang: Lang): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }
}
