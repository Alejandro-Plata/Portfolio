export interface Project {
  title: string;
  description: string;
  descriptionEn: string;
  tech: string[];
  images: string[];
  demoUrl?: string;
  videoUrl?: string;
  githubUrl: string;
}

const REPO = 'https://github.com/Alejandro-Plata/proyectos';
const KAIRO_REPO = 'https://github.com/Alejandro-Plata/Anime-Tracker';
const RESERVAS_REPO = 'https://github.com/Alejandro-Plata/App-de-Reservas';

export const PROJECTS: Project[] = [
  {
    title: 'Reservas Station',
    description:
      'Aplicación full-stack para reservar recursos (salas, pistas y equipos) sin dobles reservas y con ' +
      'autenticación por roles. API REST con Java 21, Spring Boot 3 y Spring Security + JWT sobre PostgreSQL ' +
      'con migraciones Flyway: PostgreSQL impide que dos reservas del mismo recurso se solapen mediante una ' +
      'restricción EXCLUDE USING gist. Tests de integración con Testcontainers, CI con GitHub Actions y ' +
      'despliegue con Docker. Cliente Angular 20 con diseño inspirado en Nintendo.com (2001).',
    descriptionEn:
      'Full-stack app to book resources (rooms, courts and equipment) with no double bookings and ' +
      'role-based authentication. REST API with Java 21, Spring Boot 3 and Spring Security + JWT on ' +
      'PostgreSQL with Flyway migrations: PostgreSQL prevents two bookings of the same resource from ' +
      'overlapping through an EXCLUDE USING gist constraint. Integration tests with Testcontainers, CI ' +
      'with GitHub Actions and Docker deployment. Angular 20 client styled after Nintendo.com (2001).',
    tech: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'Flyway', 'Testcontainers', 'Docker', 'Angular 20', 'TypeScript'],
    images: [
      'assets/projects/reservas/reservas_1.jpg',
      'assets/projects/reservas/reservas_2.jpg',
      'assets/projects/reservas/reservas_3.jpg',
      'assets/projects/reservas/reservas_4.jpg',
      'assets/projects/reservas/reservas_5.jpg',
    ],
    demoUrl: 'https://app-reservas-ten.vercel.app/',
    githubUrl: RESERVAS_REPO,
  },
  {
    title: 'Academia Valhalla',
    description:
      'Plataforma full-stack para aprender a programar (Proyecto Fin de Ciclo): editor de código ' +
      'integrado con Monaco, contenido 3D interactivo, tiempo real con Socket.IO, autenticación con JWT y OAuth ' +
      '(Google y GitHub) y asistente con IA. API REST documentada con Swagger y base de datos PostgreSQL.',
    descriptionEn:
      'Full-stack platform for learning to code (final-year project): built-in Monaco code editor, ' +
      'interactive 3D content, real time with Socket.IO, JWT and OAuth authentication (Google and GitHub) ' +
      'and an AI assistant. REST API documented with Swagger and a PostgreSQL database.',
    tech: ['React 19', 'TypeScript', 'Vite', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Three.js', 'Swagger', 'Docker'],
    images: [
      'assets/projects/academia.png',
      'https://placehold.co/800x500/18181b/e4e4e7?text=Academia+Valhalla+2',
      'https://placehold.co/800x500/18181b/e4e4e7?text=Academia+Valhalla+3',
    ],
    demoUrl: 'https://academia-valhalla-puce.vercel.app/',
    githubUrl: REPO,
  },
  {
    title: 'PlayFutBet',
    description:
      'Aplicación web de predicciones de fútbol con una liga simulada automáticamente. Interfaz responsive con Ionic + Angular y API REST propia en Node/Express con PostgreSQL, ' +
      'documentada con Swagger y autenticación JWT.',
    descriptionEn:
      'Football prediction web app with an automatically simulated league. Responsive interface ' +
      'with Ionic + Angular and a custom REST API in Node/Express with PostgreSQL, documented ' +
      'with Swagger and JWT authentication.',
    tech: ['Ionic 8', 'Angular 20', 'Capacitor', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    images: [
      'assets/projects/playfutbet/playfutbet_landing_1.jpg',
      'assets/projects/playfutbet/playfutbet_landing_2.jpg',
      'assets/projects/playfutbet/playfutbet_1.png',
      'assets/projects/playfutbet/playfutbet_2.png',
      'assets/projects/playfutbet/playfutbet_3.png',
      'assets/projects/playfutbet/playfutbet_4.png',
      'assets/projects/playfutbet/playfutbet_5.png',
      'assets/projects/playfutbet/playfutbet_6.png',
      'assets/projects/playfutbet/playfutbet_7.png',
      'assets/projects/playfutbet/playfutbet_8.png',
      'assets/projects/playfutbet/playfutbet_9.png'
    ],
    demoUrl: 'https://playfutbet.vercel.app/',
    githubUrl: REPO,
  },
  {
    title: 'AnimeWatch Tracker (Kairo)',
    description:
      'Aplicación web para buscar anime y llevar el seguimiento personal: lista con estado y nota, ' +
      'descubrimiento aleatorio con tarjetas deslizables, ficha con episodios y reseñas y gestión de perfil. ' +
      'Cliente Angular 20 y API REST propia en Node/Express con PostgreSQL, autenticación JWT y recuperación ' +
      'de contraseña por correo. Datos del catálogo de MyAnimeList a través de la API Jikan.',
    descriptionEn:
      'Web app to search anime and keep a personal watchlist: list with status and score, random ' +
      'discovery with swipeable cards, detail page with episodes and reviews, and profile management. ' +
      'Angular 20 client and a custom REST API in Node/Express with PostgreSQL, JWT authentication and ' +
      'password recovery by email. Catalog data from MyAnimeList through the Jikan API.',
    tech: ['Angular 20', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    images: [
      'assets/projects/kairo/kairo_1.jpg',
      'assets/projects/kairo/kairo_2.jpg',
      'assets/projects/kairo/kairo_3.jpg',
      'assets/projects/kairo/kairo_4.jpg',
      'assets/projects/kairo/kairo_5.jpg',
    ],
    demoUrl: 'https://anime-watchtracker.vercel.app/',
    githubUrl: KAIRO_REPO,
  },
  {
    title: 'CineXplora',
    description:
      'Aplicación Android nativa para explorar y descubrir contenido de cine (API de TMDB), con ' +
      'interfaz adaptada a orientación vertical y horizontal. Autenticación con Firebase (Google y ' +
      'email), datos en Firestore y almacenamiento en Supabase.',
    descriptionEn:
      'Native Android app to explore and discover movie content (TMDB API), with an interface ' +
      'adapted to both portrait and landscape orientation. Firebase authentication (Google and ' +
      'email), data in Firestore and storage in Supabase.',
    tech: ['Java', 'Android SDK', 'Gradle', 'Firebase'],
    images: [
      'assets/projects/android.png'
    ],
    videoUrl: 'assets/projects/cinexplora_review.mp4',
    githubUrl: REPO,
  },
];
