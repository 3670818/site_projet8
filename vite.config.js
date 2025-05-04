import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/site_projet8/',  // Assure-toi que ce chemin est correct pour ton dépôt GitHub
  // root: '.',               // Si index.html est à la racine
});





