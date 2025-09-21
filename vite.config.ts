import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      outDir: 'dist/renderer',
      emptyOutDir: false
    },
    server: {
      port: 5173,
      strictPort: true
    },
    clearScreen: false
  };
});
