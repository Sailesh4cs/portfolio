# Engineering Intelligence Portfolio

Self-contained React + TypeScript + Vite single-page portfolio. The app lives in `portfolio/` so the existing .NET Azure Functions service is unchanged.

## Setup

```bash
cd portfolio
npm install
npm run dev
```

Validate with `npm run typecheck` and build with `npm run build`. `npm run lint` currently aliases the strict TypeScript check so the site has no separate lint dependency.

## Configuration

Edit `src/config.ts` to replace the clearly marked identity, contact, social links, and bracketed project case-study placeholders. All twelve requested project names are included. The project types are deliberately limited to `Production`, `POC`, `Internal Tool`, and `Experiment`; AI/automation entries are explicitly labeled POC, Experiment, or Exploration. Do not add metrics or outcomes without evidence. Skills are grouped as Backend/APIs, Frontend, Cloud/DevOps, CMS/content, Data/integrations, and AI/automation.

Asset URLs use Vite's `import.meta.env.BASE_URL` and `%BASE_URL%` replacement, so the app is safe on a repository Pages subpath. Set `VITE_BASE_PATH` when deploying under a different subpath (the default is `/portfolio/`).

The navigation tracks the visible section, the mobile menu supports Escape/focus return, and case studies are keyboard-focusable dialogs with Escape dismissal. Reduced-motion users receive non-animated scrolling/transitions.

## Deployment

The Vite output is `dist/`. A repository workflow in `.github/workflows/portfolio-pages.yml` installs dependencies, runs typecheck/build, and deploys `portfolio/dist` to GitHub Pages. In repository settings, set Pages source to **GitHub Actions**.
