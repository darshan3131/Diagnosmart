import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  define: {
    'process.env.VITE_APP_NAME': JSON.stringify('Diagnosmart'),
    'process.env.VITE_APP_DESCRIPTION': JSON.stringify('AI-Powered Healthcare Diagnostics')
  }
})
