import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set correctly for production.
  build: {
    outDir: 'dist', // Specify the output directory.
  },
})