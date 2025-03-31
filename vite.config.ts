import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/courses': {
        target:
          'http://dados.recife.pe.gov.br/is/api/3/action/datastore_search?resource_id=738b884e-e846-4396-8cb3-f3390e00e598&limit=1000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/courses/, ''),
      },
    },
  },
});
