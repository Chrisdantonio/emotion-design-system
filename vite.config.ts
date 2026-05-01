import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    // Set `base` to your repository name so assets load correctly on gh-pages.
    // Change '/emotion-design-system/' if your repo name differs.
    base: '/emotion-design-system/',
})
