// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,           // Enables Jest-like global functions like describe, it, etc.
    environment: 'jsdom',    // For testing in a browser-like environment
    setupFiles: './src/setupTests.ts', // Path to your test setup file
  },
});
