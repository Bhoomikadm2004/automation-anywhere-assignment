import { test, expect } from '../fixtures/baseTest';
import { FormPage } from '../pages/formPage';
import path from 'path';

test('Form Upload Flow (Use Case 2)', async ({ page }) => {

  const formPage = new FormPage(page);

  // At this point, baseTest.js has already logged in and navigated to Automation page
  console.log('✅ Login and Automation navigation complete, URL:', await page.url());
  const formName = `TestForm_${Date.now()}`;
  // Create form
  await formPage.createForm('Test Form');

  // Add elements to canvas by drag and drop
  await formPage.createForm(formName);

  await formPage.fillForm('Hello Automation', filePath);

  await formPage.saveForm();
  // Fill form fields and upload file
  const filePath = path.join(__dirname, '../test-data/sample.pdf');
  await formPage.fillForm('Hello Automation', filePath);

  // Save and verify final state
  await formPage.saveForm();

  await expect(page.locator('text=Saved')).toBeVisible();

});