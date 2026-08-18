import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set base to '/<repo>/'. For a root domain or Netlify/Vercel, leave as '/'.
export default defineConfig({
  base: '/mao-chenda-portfolio/',
  plugins: [vue()],
})
