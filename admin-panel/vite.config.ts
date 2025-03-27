import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic'
    }),
    nodePolyfills({
      include: ['crypto', 'stream', 'util', 'buffer']
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
        '.tsx': 'tsx'
      }
    }
  }
})
