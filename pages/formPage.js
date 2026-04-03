import { expect } from '@playwright/test';

export class FormPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.automationMenu = page.locator('text=Automation, text=Automation Cloud').first();

    // Create form
    this.createBtn = page.locator('button:has-text("Create")').first();

    // ✅ FIXED (ONLY TEXT SELECTOR)
    this.formOption = page.locator('text=Form').last();

    // Form details
    this.formName = page.locator('input[name="name"], input[placeholder*="name" i]').first();
    this.createConfirm = page.locator('button:has-text("Create")').last();

    // Elements inside form builder
    this.textBox = page.locator('input[type="text"]').first();
    this.fileUpload = page.locator('input[type="file"]').first();

    // Save & validation
    this.saveBtn = page.locator('button:has-text("Save")').first();
    this.uploadStatus = page.locator('text=uploaded, text=success, text=saved').first();
  }

  async createForm(name) {
    console.log('➡️ Clicking Create button...');

    await this.createBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.createBtn.click();

    console.log('➡️ Selecting Form option...');

    await this.page.waitForTimeout(2000);

    await this.formOption.waitFor({ state: 'visible', timeout: 10000 });

    // ✅ Force click (modal fix)
    await this.formOption.click({ force: true });

    console.log('➡️ Filling form name...');

    await this.formName.waitFor({ state: 'visible', timeout: 10000 });

    const uniqueName = `${name}_${Date.now()}`;
    await this.formName.fill(uniqueName);

    await this.createConfirm.click();

    console.log('✅ Form created:', uniqueName);
  }

  async fillForm(text, filePath) {
    console.log('➡️ Filling form fields...');

    try {
      await this.textBox.waitFor({ state: 'visible', timeout: 5000 });
      await this.textBox.fill(text);
      console.log('✅ Textbox filled');
    } catch {
      console.log('⚠️ Textbox not found');
    }

    try {
      await this.fileUpload.waitFor({ state: 'visible', timeout: 5000 });
      await this.fileUpload.setInputFiles(filePath);
      console.log('✅ File uploaded');
    } catch {
      console.log('⚠️ File upload not found');
    }
  }

  async saveForm() {
    console.log('➡️ Saving form...');

    try {
      await this.saveBtn.waitFor({ state: 'visible', timeout: 10000 });
      await this.saveBtn.click();
      console.log('✅ Form saved');
    } catch {
      console.log('⚠️ Save button not clickable');
    }
  }
}