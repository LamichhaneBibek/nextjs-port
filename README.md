# Portfolio — Bibek Lamichhane

A single-page personal portfolio styled as a database schema. The hero is an
entity-relationship diagram that draws itself on load; below it are Experience,
Projects, Skills, Education, and Contact. Live at
[lamichhanebibek.com.np](https://lamichhanebibek.com.np/).

## Design

"Industry" — a blueprint/wireframe aesthetic: light technical ground, a single
accent hue, square corners everywhere, and hairline-bordered "blueprint objects"
with `+` registration marks at the corners. Headings are Barlow Condensed, body
is Barlow, schema text is the system monospace stack. Dark mode follows the OS.

### Per-visit randomization

Every page load rolls once (`roll()` in `src/schema.ts`) and renders consistently:

- **Engine dialect** — PostgreSQL, MongoDB, or DynamoDB. Changes entity titles,
  field types, row-count badges, header treatment, connector line style, and the
  nav brand line (`BIBEK_LAMICHHANE.SCHEMA · rev a.b.c`).
- **Layout** — one of four six-slot arrangements on a 1120×680 stage.
- **PERSON placement** — a random slot; the five satellites shuffle into the rest.
- **Accent hue** — one of six OKLCH hues (steel, teal, green, olive, rust, violet).
  The whole ramp derives from `--accent-h`, so contrast is identical for every hue.

## Structure

```
src/
├── index.css                   design tokens + shared component classes (.blueprint, .card, .btn, .tag, .table)
├── App.css                     page layout and section styles
├── App.tsx                     nav, hero, sections, contact modal wiring
├── content.ts                  all copy: bio, experience, projects, skills, education, links
├── schema.ts                   roll + diagram model (dialect rows, layouts, connector routing) — pure functions
└── components/
    ├── Corners.tsx             the four + registration marks used by every blueprint card
    ├── SchemaDiagram.tsx       scaled ER diagram (ResizeObserver → transform: scale)
    └── Modals.tsx              Formspree contact form
public/
├── index.html                  document shell, meta tags, JSON-LD
├── og-image.png                social share card
└── sitemap.xml, robots.txt, manifest.json
```

Edit copy in `src/content.ts`; retune the look in `src/index.css`.

## Adding a project

Add an entry to `PROJECTS` in `src/content.ts`. Set `live` for a deployed URL
(renders a "Visit live site" button) and/or `source` for a repository link.

## Contact

If `LINKS.contactEndpoint` in `src/content.ts` is set to a Formspree (or
compatible) endpoint, the primary button opens a contact form that posts there.
If it is empty, the button falls back to a `mailto:` link to `LINKS.email`.

## Development

```bash
npm install
npm start
npm run build
npm run deploy
```

React 19 + TypeScript on Create React App; deployed to GitHub Pages by the
workflow in `.github/workflows/deploy.yml` on push to `master`.
