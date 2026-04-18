Design System Tokens (colors)

This folder contains global design tokens for the project. Tokens are intentionally minimal and brutalist:
- Core palette: pure black (`#000000`) and pure white (`#FFFFFF`).
- Accent colors: two high-saturation accents for calls-to-action and focus states.
- All values exposed as CSS variables on `:root` for easy theming.

Files:
- tokens.css — color variables and semantic aliases.

How to apply:
- Import the tokens at the top of your global CSS entry (e.g., `src/index.css`):

  @import './styles/tokens.css';

- Or import from JS/TS when using CSS modules or styled systems.

Design notes:
- Use `--border-width-thick` and `--border-color` for visible, architectural borders.
- Avoid shadows, gradients, and subtle low-contrast hues — prefer flat color and strong contrast.
- Move any hardcoded color into these variables for consistency.
