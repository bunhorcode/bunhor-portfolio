# Deb Bunhor | DevOps Engineer Portfolio

A small, static, dark-by-default portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. It exports to plain HTML/CSS/JS and is served by Nginx from a multi-stage Docker image. No backend, database, API routes, or auth.

## Features
- Sections: Home, About, Skills, Projects, Experience ("What I do"), Contact, Footer
- Dark theme by default with a light/dark toggle (saved in `localStorage`, no flash on load)
- All content lives in one file: `src/data/portfolio.ts`
- Responsive nav with mobile menu, scroll-to-top button, skip link, visible focus states
- Smooth scrolling (off for `prefers-reduced-motion`), SEO and Open Graph metadata, SVG favicon, custom 404
- Copy-email button appears only when an email is configured
- Docker (Node build, Nginx runtime), GitHub Actions CI, optional GitHub Pages deploy

## Technologies
Next.js 15, React 19, TypeScript, Tailwind CSS 4, Lucide React, ESLint, Docker, Nginx, GitHub Actions.

## Local development
Requires Node.js 20+ (22 recommended).

```bash
npm install        # also creates package-lock.json: commit it (CI and Docker use it)
npm run dev        # http://localhost:3000
```

## Customize
Edit **`src/data/portfolio.ts`**: name, title, intro, about text, skills, projects, availability badge, `email`, `githubUrl`, `linkedinUrl`.

- Replace every `your-username` placeholder.
- Leave `email` as `""` until you want to publish one. Setting it enables the mailto and copy buttons.
- Set a project's `repo` to `""` to hide its link; add `demo` for a live-demo link.
- Skills, projects, and services are examples, not verified claims. Edit or delete anything that doesn't apply.
- Change the favicon in `src/app/icon.svg`. Put images in `public/images/`.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real URL for correct SEO metadata.

## Production build
```bash
npm run lint
npm run typecheck
npm run build                 # static site is written to ./out
npx serve out                 # optional local preview
```

## Docker
```bash
docker build -t deb-bunhor-portfolio .
docker run -d -p 8080:80 --name portfolio deb-bunhor-portfolio
# open http://localhost:8080

docker stop portfolio && docker rm portfolio   # cleanup
```

- Nginx serves the export with gzip, long-lived caching for `/_next/static/`, security headers, and a `/healthz` endpoint.
- There is intentionally **no SPA fallback**: unknown URLs return a real `404` using the exported `404.html`.
- Nginx worker processes run as the unprivileged `nginx` user; the master process stays root so it can bind port 80.
- To bake in a public URL: `docker build --build-arg NEXT_PUBLIC_SITE_URL=https://example.com -t deb-bunhor-portfolio .`

## GitHub Actions
- `.github/workflows/ci.yml` runs on pushes and pull requests to `main`: `npm ci`, ESLint, `tsc --noEmit`, `next build`, Docker image build (GHA layer cache), then a container smoke test (home page loads, unknown path returns 404). Successful pushes to `main` also publish `docker.io/<username>/deb-bunhor-portfolio` with `latest` and commit-SHA tags; pull requests do not publish.
- To enable Docker Hub publishing, create the `deb-bunhor-portfolio` repository on Docker Hub and add `DOCKERHUB_USERNAME` and a Docker Hub access token as repository **Actions secrets** (`Settings > Secrets and variables > Actions`). The token needs write access to the repository.
- `.github/workflows/deploy-pages.yml` is an optional manual deploy to GitHub Pages. In your repo open **Settings > Pages > Source: GitHub Actions**, then run the workflow from the **Actions** tab. It sets the base path to `/<repo-name>` automatically. For a custom domain or a `<user>.github.io` repository, remove the `NEXT_PUBLIC_BASE_PATH` line.
- To run the published image, use `docker pull <username>/deb-bunhor-portfolio:latest` and run it on any host. Alternatively, upload `out/` to any static host.

## Screenshots
_Add screenshots here, for example `docs/screenshot-dark.png` and `docs/screenshot-light.png`._

## Structure
```
.
├── .github/workflows/{ci.yml,deploy-pages.yml}
├── public/images/
├── src/
│   ├── app/{layout.tsx,page.tsx,not-found.tsx,globals.css,icon.svg}
│   ├── components/{Navbar,Hero,About,Skills,Projects,Experience,Contact,Footer,Section,ThemeToggle,ScrollTop,CopyEmail,Icons}.tsx
│   └── data/portfolio.ts
├── Dockerfile  .dockerignore  nginx.conf  security-headers.inc
├── next.config.ts  eslint.config.mjs  postcss.config.mjs  tsconfig.json
├── package.json  .env.example  .gitignore
└── README.md
```
