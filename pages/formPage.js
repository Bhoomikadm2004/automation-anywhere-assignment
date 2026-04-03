import { expect } from '@playwright/test';

export class FormPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.automationMenu = page.locator('text=Automation, text=Automation Cloud').first();

    // Create form
    this.createBtn = page.locator('button:has-text("Create")').first();
    this.formOption = page.locator('text=Form').first();

    // Form details
    this.formName = page.locator('input[name="name"], input[placeholder*="name" i]').first();
    this.createConfirm = page.locator('button:has-text("Create")').last();

    // Left menu elements (widgets panel)
    this.textBoxWidget = page.locator('[data-testid*="textbox"], text=Textbox, .widget-textbox').first();
    this.fileUploadWidget = page.locator('[data-testid*="file"], text=Select File, .widget-file').first();

    // Canvas area
    this.canvas = page.locator('.canvas, [data-testid="canvas"], .form-canvas').first();

    // Elements inside form builder (after drag/drop)
    this.textBox = page.locator('input[type="text"]').first();
    this.fileUpload = page.locator('input[type="file"]').first();

    // Right panel interactions
    this.rightPanel = page.locator('.properties-panel, .right-panel').first();

    // Save & validation
    this.saveBtn = page.locator('button:has-text("Save")').first();
    this.uploadStatus = page.locator('text=uploaded, text=success, text=saved').first();
  }

  async createForm(name) {
    console.log('➡️ Navigating to Automation page...');

    // ✅ STEP 1: Go to Automation (only if not already there)
    if (!(await this.createBtn.isVisible())) {
      await this.automationMenu.waitFor({ state: 'visible', timeout: 60000 });
      await this.automationMenu.click();
      await this.page.waitForLoadState('networkidle');
    } else {
      console.log('Already on Automation page, skipping navigation');
    }

    console.log('➡️ Clicking Create button...');

    // ✅ STEP 2: Click Create
    await this.createBtn.waitFor({ state: 'visible', timeout: 60000 });
    await this.createBtn.click();

    console.log('➡️ Selecting Form option...');

    // ✅ STEP 3: Select Form
    await this.formOption.waitFor({ state: 'visible', timeout: 30000 });
    await this.formOption.click();

    console.log('➡️ Filling form name...');

    // ✅ STEP 4: Fill form details
    await this.formName.waitFor({ state: 'visible', timeout: 30000 });
    await this.formName.fill(name);

    console.log('➡️ Creating form...');

    await this.createConfirm.click();

    await this.page.waitForLoadState('networkidle');
  }

  async addElementsToCanvas() {
    console.log('➡️ Adding Textbox to canvas...');

    // Wait for widgets to be visible
    await this.textBoxWidget.waitFor({ state: 'visible', timeout: 30000 });

    // Drag and drop Textbox to canvas
    await this.textBoxWidget.dragTo(this.canvas);

    console.log('➡️ Adding File Upload to canvas...');

    // Wait for file upload widget
    await this.fileUploadWidget.waitFor({ state: 'visible', timeout: 30000 });

    // Drag and drop File Upload to canvas
    await this.fileUploadWidget.dragTo(this.canvas);

    console.log('➡️ Elements added to canvas');
  }

  async verifyUIInteractions() {
    console.log('➡️ Verifying Textbox interactions...');

    // Click on textbox element
    await this.textBox.waitFor({ state: 'visible', timeout: 30000 });
    await this.textBox.click();

    // Verify right panel shows textbox properties
    await expect(this.rightPanel).toBeVisible();
    await expect(this.page.locator('.properties-panel input[type="text"], .right-panel input[type="text"]')).toBeVisible();

    console.log('➡️ Verifying File Upload interactions...');

    // Click on file upload element
    await this.fileUpload.waitFor({ state: 'visible', timeout: 30000 });
    await this.fileUpload.click();

    // Verify right panel shows file upload properties
    await expect(this.rightPanel).toBeVisible();
    await expect(this.page.locator('.properties-panel input[type="file"], .right-panel input[type="file"]')).toBeVisible();

    console.log('➡️ UI interactions verified');
  }

  async fillForm(text, filePath) {
    console.log('➡️ Filling textbox...');
    await this.textBox.waitFor({ state: 'visible', timeout: 30000 });
    await this.textBox.fill(text);

    console.log('➡️ Uploading file...');
    await this.fileUpload.setInputFiles(filePath);
  }

  async saveForm() {
    console.log('➡️ Saving form...');
    await this.saveBtn.waitFor({ state: 'visible', timeout: 30000 });
    await this.saveBtn.click();

    console.log('➡️ Verifying upload...');
    await this.uploadStatus.waitFor({ state: 'visible', timeout: 60000 });
  }
}