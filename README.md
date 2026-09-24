# Sailesh Kumar Portfolio

Self-contained React + TypeScript + Vite single-page portfolio for Sailesh Kumar. It presents verified resume experience across full stack development, cloud platforms, enterprise integrations and practical AI workflows.

## Setup

```bash
cd portfolio
npm install
npm run dev
```

Validate with `npm run typecheck` and build with `npm run build`. `npm run lint` currently aliases the strict TypeScript check so the site has no separate lint dependency.

## Configuration

Portfolio content is centralized in the typed `src/config.ts` file. GitHub and LinkedIn links are configured there. The Knowledge Base RAG Assistant is explicitly labeled a demo concept and is not presented as employment work.

Asset URLs use Vite's `import.meta.env.BASE_URL` and `%BASE_URL%` replacement, so the app is safe on a repository Pages subpath. Set `VITE_BASE_PATH` when deploying under a different subpath (the default is `/portfolio/`).

The navigation tracks the visible section, the mobile menu supports Escape/focus return, and case studies are keyboard-focusable dialogs with Escape dismissal. Reduced-motion users receive non-animated scrolling/transitions.

## Deployment

The Vite output is `dist/`. A repository workflow in `.github/workflows/portfolio-pages.yml` installs dependencies, runs typecheck/build, and deploys `portfolio/dist` to GitHub Pages. In repository settings, set Pages source to **GitHub Actions**.
