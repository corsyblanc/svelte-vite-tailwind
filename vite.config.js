import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    assetsDir: '',
    outDir: './build',
    sourcemap: true,
    lib: {
      entry: 'src/main.js',
      formats: [ 'iife' ],
      name: 'test',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'test.js',
        assetFileNames: 'test.css',
      }
    }
  }
})
