import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://community.cloud.automationanywhere.digital',
    headless: false,
    slowMo: 100, // Reduced from 500ms to 100ms
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  workers: 1,
  timeout: 60000, // Test timeout
});