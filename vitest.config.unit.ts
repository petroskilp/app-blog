// vitest.config.unit.ts

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ["/setupTests.ts"],
    include: ['__tests__/**.test.tsx']
  },
  resolve: {
    alias: {
      post: '/src/app/create',
      signup: '/src/app/signup',
      api: '/src/pages/api'
    }
  }
})