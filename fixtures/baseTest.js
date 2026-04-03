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
  
  try {
    const isVisible = await createButton.isVisible({ timeout: 5000 }).catch(() => false);
    
    if (!isVisible) {
      console.log('Create button not visible, navigating to Automation...');

      // Click on Automation menu
      const automationMenu = page.locator('text=Automation').first();
      await automationMenu.waitFor({ state: 'visible', timeout: 10000 });
      await automationMenu.click();

      // Wait for Create button to appear
      await createButton.waitFor({ state: 'visible', timeout: 15000 });
    }
    
    console.log('✅ Automation page ready, Create button visible');
  } catch (error) {
    console.error('Error navigating to Automation page:', error.message);
    throw error;
  }
});

export { expect };