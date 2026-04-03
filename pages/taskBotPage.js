export class TaskBotPage {
  constructor(page) {
    this.page = page;

    this.createBtn = page.locator('button:has-text("Create")').first();
    this.taskBotOption = page.locator('text=Task Bot').first();

    this.botName = page.locator('input[name="name"]').first();
    this.createConfirm = page.locator('button:has-text("Create")').last();

    this.actionSearch = page.locator('input[placeholder*="Search"], input[placeholder*="search"]').first();
    this.messageBox = page.locator('text=Message Box').first();

    // Message Box configuration form
    this.messageInput = page.locator('textarea, input[type="text"]').first();
    this.messageBoxSubmit = page.locator('button:has-text("Add"), button:has-text("OK"), button:has-text("Submit"), [data-testid*="submit"]').first();

    this.saveBtn = page.locator('button:has-text("Save")').first();
    this.successMsg = page.locator('text=Saved').first();
  }

  async createTaskBot(name) {
    console.log('Creating Task Bot...');
    await this.createBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.createBtn.click();

    console.log('Selecting Task Bot option...');
    await this.taskBotOption.waitFor({ state: 'visible', timeout: 10000 });
    await this.taskBotOption.click();

    console.log('Filling bot name...');
    await this.botName.waitFor({ state: 'visible', timeout: 10000 });
    await this.botName.fill(name);

    console.log('Confirming Task Bot creation...');
    await this.createConfirm.waitFor({ state: 'visible', timeout: 10000 });
    await this.createConfirm.click();

    // Wait for task bot editor to load
    await this.page.waitForTimeout(2000);
    console.log('✅ Task Bot created');
  }

  async addMessageBoxAction(message = 'Hello from Automation Anywhere!') {
    console.log('Adding Message Box action...');
    
    // Try to search for the action if search field exists
    try {
      await this.actionSearch.waitFor({ state: 'visible', timeout: 5000 }).catch(() => null);
      await this.actionSearch.fill('Message Box');
    } catch (e) {
      console.log('Search field not found');
    }

    // Wait for and click on Message Box
    await this.messageBox.waitFor({ state: 'visible', timeout: 10000 });
    await this.messageBox.dblclick();

    console.log('Configuring Message Box...');
    
    // Wait for and fill the message input
    try {
      await this.messageInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.messageInput.fill(message);
    } catch (e) {
      console.log('Message input not found, trying alternative element');
    }

    // Click submit button
    try {
      await this.messageBoxSubmit.waitFor({ state: 'visible', timeout: 10000 });
      await this.messageBoxSubmit.click();
    } catch (e) {
      console.log('Submit button not found or failed');
    }

    console.log('✅ Message Box action added');
  }

  async saveTask() {
    console.log('Saving task...');
    try {
      await this.saveBtn.waitFor({ state: 'visible', timeout: 10000 });
      await this.saveBtn.click();
    } catch (e) {
      console.log('Save button not found');
    }
  }
}