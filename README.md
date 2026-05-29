# Manish Kumar Portfolio

A premium, responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Router. It showcases backend-focused full-stack projects, resume details, contact options, and a dark/light theme experience.

## Highlights

- Full-width responsive header with profile identity, centered navigation, and top-right theme toggle
- Dark and light mode support across portfolio pages
- Route-level lazy loading for faster initial page load
- Project showcase with screenshot gallery, image viewer, live links, GitHub links, and source downloads
- Rich resume preview with skills, strengths, and project highlights
- Contact page with direct channels, map embed, and FormSubmit integration
- Mobile-first layout using Tailwind CSS utilities

## Tech Stack

- React 19
- Vite / Rolldown Vite
- Tailwind CSS 4
- React Router
- Framer Motion
- Lucide React
- React Icons

## Pages

- `/` — Hero, profile summary, quick actions, stats, and philosophy
- `/about-us` — Premium headline, journey, experience, skills, and personal interests
- `/projects` — Featured projects with galleries and links
- `/contact-us` — Contact form, direct links, and location map
- `/resume` — Resume preview with full resume actions near the footer
- Any unknown route redirects to `/projects`

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/    Shared UI such as NavBar, Footer, Motto
  pages/         Route pages for Home, About, Projects, Contact, Resume
  utils/         Portfolio data, project data, and resume link
public/images/  Portfolio and project screenshots
```

## Author

**Manish Kumar**  
Software Development Engineer Aspirant focused on Java, Spring Boot, microservices, React, databases, and production-minded full-stack systems.
