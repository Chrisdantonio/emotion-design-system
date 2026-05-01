# Emotion Design System

A small, component-driven design system implemented with React + TypeScript + Vite. This repository contains:

- Design tokens and global styles: [src/styles/tokens.css](src/styles/tokens.css)
- Atomic component structure: [src/components/atoms](src/components/atoms)
- Composed UI molecules & organisms: [src/components/molecules](src/components/molecules), [src/components/organisms](src/components/organisms)

Goals:
- Provide a minimal, well-documented set of reusable UI primitives.
- Keep CSS scoped and explicit: component-local CSS files live next to components.
- Expose semantic design tokens via CSS custom properties for easy theming.

## Repository layout

- [src/](src)
  - [components/](src/components) — grouped into `atoms`, `molecules`, `organisms`
    - `DownloadButton/DownloadButton.tsx` + `DownloadButton.css`
    - `FeatureCard/FeatureCard.tsx` + `FeatureCard.css`
  - [styles/](src/styles) — global tokens and helper utilities
    - `tokens.css` — canonical source of design tokens (colors, spacing, type scale)

File conventions
- Each component exports a default React component and keeps its presentation in a companion `.css` file.
- Components accept props for their public API and minimize internal side effects.

## Design tokens

Tokens are defined in [src/styles/tokens.css](src/styles/tokens.css) as CSS custom properties. Example tokens (actual file contains the canonical set):

```css
:root {
  --color-bg: #ffffff;
  --color-text: #0f172a;
  --color-primary: #0ea5ff;
  --color-primary-700: #0369a1;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;

  --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  --font-size-base: 16px;
}
```

Usage from CSS (component `.css` files):

```css
.btn {
  background: var(--color-primary);
  color: var(--color-bg);
  padding: var(--space-2) var(--space-3);
}
```

Usage from JS/TS (inline styles or computed values):

```ts
const root = getComputedStyle(document.documentElement);
const primary = root.getPropertyValue('--color-primary');
```

The token file is the single source of truth for color, spacing, type scale, and breakpoints. To add a theme, create a CSS class that overrides the relevant variables and toggle that class on `document.documentElement` or the app container.

## Component API examples

FeatureCard (from [src/components/molecules/FeatureCard/FeatureCard.tsx](src/components/molecules/FeatureCard/FeatureCard.tsx)) — example props:

```tsx
type FeatureCardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  onClick?: () => void;
}

// Usage
<FeatureCard title="Performance" description="Fast build times" />
```

DownloadButton (from [src/components/atoms/DownloadButton/DownloadButton.tsx](src/components/atoms/DownloadButton/DownloadButton.tsx)) — example props:

```tsx
type DownloadButtonProps = {
  href: string;
  label?: string;
}

<DownloadButton href="/assets/spec.pdf" label="Download PDF" />
```

Components should:
- Be typed with explicit prop interfaces.
- Avoid side effects; when necessary, expose callbacks via props.
- Use token variables for colors, spacing and type sizes.

## Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

The app entry is `src/main.tsx`. Vite is configured for React fast refresh.

## Build

Build produces a `dist/` folder ready for static hosting:

```bash
npm run build
```

Notes:
- `build` runs TypeScript project references (`tsc -b`) then `vite build` (see `package.json` scripts).

## GitHub Pages deployment

This repo is prepared for deployment to GitHub Pages.

- `vite.config.ts` sets `base` to the repository path so static assets resolve correctly when served from `https://<org-or-user>.github.io/emotion-design-system/`.
- The repository includes `gh-pages` and npm scripts added to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

To publish to GitHub Pages:

```bash
npm run predeploy
npm run deploy
```

If your GitHub repository name is different than `emotion-design-system`, update the `base` in [vite.config.ts](vite.config.ts) to `/<your-repo-name>/` before building.

## Testing & linting

- Lint the codebase: `npm run lint`.
- Add unit tests with your preferred framework (Jest, Vitest); tests are not included by default.

## Contributing

- Keep components small and focused — prefer composition over large, featureful components.
- Add token updates to [src/styles/tokens.css](src/styles/tokens.css).
- Document public component props in JSDoc or TypeScript types.

## Where to look

- Component sources: [src/components](src/components)
- Tokens and global styles: [src/styles/tokens.css](src/styles/tokens.css)
- Vite configuration: [vite.config.ts](vite.config.ts)
- Publish scripts: [package.json](package.json)

If you'd like, I can also:
- Add a changelog or component catalog page.
- Run the deploy commands now and report the output.

---
Updated README: technical overview and publish steps for this design system.
