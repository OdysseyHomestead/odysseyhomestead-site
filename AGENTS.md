# Repository Guidelines

## Project Structure & Module Organization
- React + TypeScript app bootstrapped with Create React App. Source lives in `src/`; entry point `src/index.tsx`, root layout `src/App.tsx`, and page-level UI in `src/pages/` (e.g., `WelcomePage.tsx`).
- Shared assets: `src/images/` for bundled UI assets, `public/` for static files served as-is (favicons, manifest, robots).
- Styling: global tokens in `src/index.css`; page-specific styles colocated (e.g., `src/pages/WelcomePage.css`).
- Tests: colocated alongside source (e.g., `src/App.test.tsx`); Jest setup in `src/setupTests.ts`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm start` — run the dev server at http://localhost:3000 with hot reload.
- `npm run build` — create a production build in `build/`.
- `npm test` — launch Jest + React Testing Library in watch mode; use `CI=true npm test` for a single run in CI.

## Coding Style & Naming Conventions
- Language: TypeScript with React functional components.
- Formatting: follow the defaults from `react-scripts`/ESLint config; prefer 2-space indentation and single quotes as seen in existing files.
- Components: PascalCase for React components/files (`WelcomePage.tsx`), camelCase for functions/variables, SCSS-like naming for CSS classes scoped per file.
- Accessibility: ensure meaningful `aria-label`/alt text for interactive elements and images, mirroring the social link implementation in `WelcomePage.tsx`.

## Testing Guidelines
- Frameworks: Jest with React Testing Library; custom matchers from `@testing-library/jest-dom` via `src/setupTests.ts`.
- Add tests next to the component under test with the `.test.tsx` suffix; prefer user-facing queries (`getByRole`, `getByText`) and coverage for accessibility.
- For new UI sections, validate headings, alt text, and link targets similar to `src/App.test.tsx`.

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject lines (`Add hero CTA`, `Fix banner contrast`). If scopes help, use Conventional Commits (`feat:`, `fix:`, `chore:`) to keep history scannable.
- Pull Requests: include a short summary, screenshots for UI changes, and link to related issues. Note any test coverage additions or gaps, and list manual verification steps (`npm test`, `npm start` smoke check).

## Deployment & Secrets
- Production build artifacts from `npm run build` deploy via GitHub Actions to the VPS. Keep `.github/workflows/deploy.yml` secrets (`VPS_SSH_KEY`, `VPS_USER`, `VPS_HOST`, `VPS_DEPLOY_PATH`) out of commits and validate they are configured before triggering a manual deploy.
