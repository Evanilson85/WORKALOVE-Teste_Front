import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/courses': {
        target: 'http://dados.recife.pe.gov.br/is/api/3/action/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/courses/, ''),
      },
    },
  },
});
