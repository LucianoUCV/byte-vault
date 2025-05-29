import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/pingauth': {
        target: 'https://localhost:7035',
        changeOrigin: true,
        secure: false,
      },
      '/register': {
        target: 'https://localhost:7035',
        changeOrigin: true,
        secure: false,
      },
      '/login': {
        target: 'https://localhost:7035',
        changeOrigin: true,
        secure: false,
      },
      '/logout': {
        target: 'https://localhost:7035',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
