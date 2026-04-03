import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export const test = base;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  console.log('🔐 Logging in...');

  await loginPage.navigate();
  console.log('✅ Navigated to login page');

  await loginPage.login('bhoomikadm2004@gmail.com', 'Bhoomikadm@2004');
  console.log('✅ Login finished');

  // Navigate to Automation page if not already there
  const createButton = page.locator('button:has-text("Create")').first();
  if (!(await createButton.isVisible({ timeout: 5000 }))) {
    console.log('Create button not visible, navigating to Automation...');

    // Click on Automation menu
    const automationMenu = page.locator('text=Automation, text=Automation Cloud').first();
    await automationMenu.waitFor({ state: 'visible', timeout: 10000 });
    await automationMenu.click();

    // Wait for navigation and Create button
    await page.waitForURL('**/bots/repository', { timeout: 10000 });
    await createButton.waitFor({ state: 'visible', timeout: 10000 });
  }

  console.log('✅ Automation page ready, Create button visible');
});

export { expect };