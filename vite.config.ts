import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'framework': ['react', 'react-dom'],
          'animations': ['framer-motion'],
          'components': [
            './src/components/About.tsx',
            './src/components/Projects.tsx',
            './src/components/Skills.tsx',
            './src/components/Contact.tsx'
          ]
        },
      },
    },
  },
  optimizeDeps: {
    include: ['framer-motion']
  },
});
