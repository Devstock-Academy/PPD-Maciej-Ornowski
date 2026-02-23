import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import vitePluginRequire from 'vite-plugin-require'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), vitePluginRequire()] as any,
  test: {
    environment: 'jsdom',
    setupFiles: ['./__tests__/setup.ts'],
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './') },
      {
        find: 'react-loading-skeleton/dist/skeleton.css',
        replacement: resolve(__dirname, '__tests__/mocks/empty.css'),
      },
      {
        find: 'react-loading-skeleton',
        replacement: resolve(
          __dirname,
          '__tests__/mocks/react-loading-skeleton.tsx'
        ),
      },
    ],
  },
})
