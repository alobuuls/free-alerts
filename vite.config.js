import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // 👇 Solo afecta al modo dev (demo)
  root: 'demo',

  // 👇 Alias para imports limpios
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // 👇 Build de la librería (npm / dist)
  build: {
    outDir: '../dist',
    emptyOutDir: true,

    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'FreeAlerts',
      fileName: 'free-alerts',
      formats: ['es', 'umd'],
    },

    // 👇 evita problemas con CSS en librerías UI
    cssCodeSplit: false,
  },
});
