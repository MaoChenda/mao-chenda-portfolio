# Portfolio

Vue 3 + Vite + TypeScript portfolio, styled around a banking/CI-pipeline visual language.

## Develop

    npm install
    npm run dev

## Build

    npm run build

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which type-checks,
   builds, and deploys automatically — no manual steps after that.
4. If deploying to `https://<user>.github.io/<repo>/`, update `base` in
   `vite.config.ts` to `'/<repo>/'`. If using a custom domain or a root
   `<user>.github.io` repo, leave it as `'/'`.

## Structure

    src/
      components/   one component per section (Hero, About, Work, Experience, Skills, Footer)
      data/          typed content (projects, experience, skills) — edit these, not the components
      App.vue        composes the page
      style.css      shared tokens (colors, fonts) and base styles

Edit the files in `src/data/` to swap in your real name, roles, and projects.
