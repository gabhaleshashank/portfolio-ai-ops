# Shashank Gabhale Portfolio

A dark AI operations dashboard portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Edit content

Most portfolio content is data-driven. Edit these files first:

- `src/data/profile.ts` - name, contact info, status, about text, resume path.
- `src/data/projects.ts` - featured system, architecture flow, project cards, filters.
- `src/data/skills.ts` - grouped skill cards.
- `src/data/experience.ts` - internship timeline.
- `src/data/buildLogs.ts` - engineering notes.
- `src/data/socials.ts` - GitHub, LinkedIn placeholder, email.

The featured system image lives at `public/assets/seed-ai-system.png`.

## Resume

The resume button points to `/resume.pdf`. Replace `public/resume.pdf` with your real resume PDF when ready.

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`

No environment variables are required.
