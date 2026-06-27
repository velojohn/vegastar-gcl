import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2,
      },
      mangle: {
        toplevel: true,
        properties: { regex: /^_/ },
      },
      format: {
        comments: false,
      },
    },
  },
})
