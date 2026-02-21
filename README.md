# Joe Halloum — Portfolio

Welcome to my personal portfolio project.

I built this with **Next.js (App Router)** as a modern, performance-focused single-page experience where I can present my work, skills, and background in a clean and memorable way.

## About this project

This portfolio currently includes:
- A dark, modern visual style (aurora background + glassmorphism)
- Interactive sections for my work, skills, and contact details
- A projects area with teaser previews and modal demos
- Resume download and direct contact actions

## Important note (Work in Progress)

This portfolio is **still in progress**.

- The design and interactions will continue to be improved
- Some information about me is still being refined and may not be fully accurate yet
- Project details are still being updated and expanded
- More sections, polish, and content are coming soon

If you are a recruiter or hiring manager reviewing this repository, thank you for your time—this is an actively evolving project and I’m continuously improving it.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Run locally

### Requirements
- Node.js **>= 20.9**
- pnpm (recommended) or npm/yarn

### Setup
```bash
pnpm install
pnpm dev
```

## Project content updates

- Main content source: `src/content/content.ts`
- Resume file: `public/resume.pdf`
- Project videos: set `video.playbackId` in `src/content/content.ts`

If `playbackId` is missing or set to `REPLACE_ME`, the UI falls back to poster-only mode.

## Deployment

This project is ready to deploy on platforms like **Vercel**.

---

Thanks for visiting my portfolio repository.
