import { test, expect } from '../fixtures/baseTest';
import { FormPage } from '../pages/formPage';
import path from 'path';

test('Form Upload Flow (Use Case 2)', async ({ page }) => {

  const formPage = new FormPage(page);

  // ✅ WAIT FOR POST-LOGIN SCREEN OR CREATE BUTTON
  await page.locator('text=Automation, text=Automation Cloud, button:has-text("Create")').first().waitFor({ timeout: 90000 });

  console.log('Login successful, page loaded:', await page.url());

  // Create form (this method navigates to Automation too)
  await formPage.createForm('Test Form');

  // Add elements to canvas by drag and drop
  await formPage.addElementsToCanvas();

  // Verify UI interactions in right panel
  await formPage.verifyUIInteractions();

  // Fill form fields and upload file
  const filePath = path.join(__dirname, '../test-data/sample.pdf');
  await formPage.fillForm('Hello Automation', filePath);

  // Save and verify final state
  await formPage.saveForm();

  await expect(page.locator('text=Saved')).toBeVisible();

});