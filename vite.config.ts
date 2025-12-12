import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Como seus arquivos estão na raiz, o alias @ aponta para o diretório atual
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Otimizações para produção
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
});