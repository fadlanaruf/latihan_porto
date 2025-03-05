import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    container: {
      center: true,
    padding: '16px',
      }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/latihan_porto",
})