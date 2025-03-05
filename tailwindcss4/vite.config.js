import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "tailwindcss4", 
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        keahlian: path.resolve(__dirname, 'keahlian.html'),
        biodata: path.resolve(__dirname, 'biodata.html'),
        hubungi: path.resolve(__dirname, 'hubungi.html'),
        pendidikan: path.resolve(__dirname, 'pendidikan.html'),
      },
    },
    outDir: 'dist', 
    emptyOutDir: true, 
  },
});