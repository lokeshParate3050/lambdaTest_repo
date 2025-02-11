// 

import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1280, height: 720 },
        baseURL: 'https://www.google.com',
        screenshot: 'on',
        video: 'on',
        trace: 'on',
        // Set up LambdaTest HyperExecute credentials
        launchOptions: {
          args: [
            '--disable-dev-shm-usage',
            '--no-sandbox'
          ],
          headless: true
        }
      }
    }
  ]
});
