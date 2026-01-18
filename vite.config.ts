import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/typing_ai/',
  server: {
    proxy: {
      '/api/gas': {
        target: 'https://script.google.com/macros/s/AKfycbwtx4Z7Avptb4WDM2RVMkGuQ9WynqyNoJsWHZFbqbMQv8CMMfeae2BOnVqhuKlzi4NT7g/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/gas/, ''),
        secure: false, // Sometimes helpful for self-signed or redirects
      }
    }
  }
})
