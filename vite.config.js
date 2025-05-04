import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/site_projet8/',

  root: '.', // or wherever your index.html is
});





