import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/site_projet8/', // <- mets ici le nom de ton dépôt GitHub
});

