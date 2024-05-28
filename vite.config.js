// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // This helps with relative paths for build
  server: {
    open: true // Opens the browser when server starts
  }
});
