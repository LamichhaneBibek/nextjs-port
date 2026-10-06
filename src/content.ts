export const BIO =
  "I'm a backend developer from Nepal who has spent the last four years freelancing — designing production APIs in Go and Python, tuning PostgreSQL, shipping web and mobile apps, and building small tools that make everyday work faster. Currently sharpening my security skills in cybersecurity and ethical hacking.";

export const LINKS = {
  github: 'https://github.com/LamichhaneBibek',
  linkedin: 'https://www.linkedin.com/in/lamichhanebibek',
  website: 'https://lamichhanebibek.com.np',
  email: 'bibek.lamichhane.np@gmail.com',
  // Formspree (or similar) endpoint for the contact form. Leave empty to fall back to a mailto: link.
  contactEndpoint: '',
};

export interface Experience { role: string; company: string; period: string; notes: string }

export const EXPERIENCE: Experience[] = [
  {
    role: 'Freelance Software Developer',
    company: 'Self-employed',
    period: '2022 — present',
    notes: 'Solo developer delivering end-to-end products for clients and my own ventures: REST and GraphQL APIs in Go (Gin, Echo, Fiber) and Python (FastAPI, Flask), web apps in Next.js, mobile apps, and developer tools; PostgreSQL schema design and query tuning, JWT/OAuth auth, Dockerized deployments on self-managed VPS infrastructure.',
  },
  {
    role: 'Backend Developer',
    company: 'Treeleaf Technologies',
    period: 'Jul 2024 — Oct 2024',
    notes: 'Maintained production systems and troubleshot API issues to keep downtime minimal; managed MinIO object-storage integration, resolving connectivity, performance, and configuration issues; ran data backups and documented procedures and issue resolutions for the team.',
  },
  {
    role: 'Backend Developer (Intern)',
    company: 'Rara Labs',
    period: 'Nov 2022 — May 2023',
    notes: 'Designed and optimized PostgreSQL schemas with regular maintenance and query tuning; debugged APIs with Postman and Swagger; kept documentation current and collaborated through Git/GitHub workflows.',
  },
];

export interface Project {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  when?: string;
  source?: string;
  live?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'FamilyTree',
    tag: 'full-stack',
    description: 'Family tree app with an interactive D3 visualization. Backend with JWT authentication, email validation, Swagger API docs, and structured error handling; 95% test coverage and logging designed for easy troubleshooting.',
    stack: ['go', 'd3.js', 'swagger'],
    live: 'https://family.lamichhanebibek.com.np',
  },
  {
    title: 'Real-Time Chat',
    tag: 'full-stack',
    description: 'Real-time messaging app with a Go WebSocket backend and a Next.js frontend, built to scale across concurrent connections and stay reliable under load.',
    stack: ['go', 'websockets', 'next.js'],
    live: 'https://chat.lamichhanebibek.com.np',
  },
  {
    title: 'RestAPI Boilerplate',
    tag: 'backend',
    description: 'Modular REST API starter with JWT authentication, role-based access control, and PostgreSQL persistence — a scalable foundation for reliable endpoints and clean database operations.',
    stack: ['go', 'postgresql', 'jwt'],
    source: 'https://github.com/LamichhaneBibek',
  },
  {
    title: 'Google OAuth Service',
    tag: 'backend',
    description: 'Standalone authentication service that handles the Google OAuth 2.0 sign-in flow as a reusable building block for other apps.',
    stack: ['oauth 2.0'],
    live: 'https://oauth.lamichhanebibek.com.np',
  },
  {
    title: 'lami/tools',
    tag: 'tool',
    description: 'Free, no-login developer and security tools that run entirely in the browser — starting with validated QR code generation, with more on the way.',
    stack: ['next.js'],
    live: 'https://pages.lamichhanebibek.com.np',
  },
  {
    title: 'Git Wrapped',
    tag: 'tool',
    description: 'A Spotify Wrapped-style recap of your year on GitHub, turning your GitHub stats into a shareable story.',
    stack: ['next.js', 'github api'],
    live: 'https://git-summary.lamichhanebibek.com.np',
  },
  {
    title: 'Share & Paste',
    tag: 'tool',
    description: 'Quick content sharing with short, shareable URLs — create a session and start sharing links and text instantly.',
    stack: ['next.js'],
    live: 'https://share.lamichhanebibek.com.np',
  },
  {
    title: 'Nepal Trek Guide',
    tag: 'web app',
    description: 'Guide to breathtaking mountain trails, ancient cultural routes, and hidden gems across Nepal.',
    stack: ['next.js'],
    live: 'https://nepaltrek.lamichhanebibek.com.np',
  },
  {
    title: 'Typing Test',
    tag: 'web app',
    description: 'Monkeytype-inspired typing speed test for practicing speed and accuracy.',
    stack: ['react', 'vite'],
    live: 'https://typing.lamichhanebibek.com.np',
  },
  {
    title: 'Mini Games',
    tag: 'game',
    description: 'A collection of small browser games, plus a standalone Sudoku web game.',
    stack: ['next.js'],
    live: 'https://mini-games.lamichhanebibek.com.np',
  },
];

export interface SkillGroup { category: string; items: string[] }

export const SKILLS: SkillGroup[] = [
  { category: 'languages', items: ['Go', 'Python', 'JavaScript', 'SQL'] },
  { category: 'frameworks', items: ['Gin', 'Echo', 'Fiber', 'FastAPI', 'Flask', 'Next.js'] },
  { category: 'apis', items: ['REST', 'GraphQL', 'WebSockets', 'JWT', 'OAuth 2.0', 'Swagger/OpenAPI'] },
  { category: 'databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MinIO', 'S3'] },
  { category: 'devops_tools', items: ['Docker', 'Git', 'GitHub', 'Linux', 'Postman', 'pgAdmin', 'DBeaver'] },
];

export interface Education { degree: string; school: string; detail: string }

export const EDUCATION: Education[] = [
  { degree: 'Cert.', school: 'Saarathi Academy Pvt. Ltd.', detail: 'Cybersecurity and Ethical Hacking Course · Kathmandu · 2026' },
  { degree: 'B.E.', school: 'Nepal College of Information Technology', detail: 'Bachelor of Computer Engineering · Lalitpur · 2017 — 2023' },
  { degree: 'Diploma', school: 'Pokhara Engineering College', detail: 'Diploma in Computer Engineering · Pokhara · 2014 — 2017' },
];
