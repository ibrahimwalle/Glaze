/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vue({
      // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
      // For example <img src="/images/logo.png"> will not work without the code below
      template: {
          transformAssetUrls: {
              includeAbsolute: false,
          },
      },
    }),
  ],
  test:{
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.js',
    css: true,
    coverage: {
      reporter: ["text"]
    }
  },
  build:{
    outDir: './public'
  }
})
