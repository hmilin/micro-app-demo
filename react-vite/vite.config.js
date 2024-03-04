import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7002,
    host: true,
     fs: {
      strict: false
    },
  },
  build: {
    outDir: 'vite4',
  },
  clearScreen: false,
  base: `/micro-app/vite/`
})
