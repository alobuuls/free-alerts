import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'demo/dev',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,

    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'FreeAlerts',
      fileName: 'free-alerts',
      formats: ['es', 'umd'],
    },

    cssCodeSplit: false,
  },
});
