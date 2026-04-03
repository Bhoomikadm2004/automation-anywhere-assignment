export class TaskBotPage {
  constructor(page) {
    this.page = page;

   this.automationMenu = page.locator('text=Automation, text=Automation Cloud').first();
    this.createBtn = page.locator('button:has-text("Create")');
    this.taskBotOption = page.locator('text=Task Bot');

    this.botName = page.locator('input[name="name"]');
    this.createConfirm = page.locator('button:has-text("Create")');

    this.actionSearch = page.locator('input[placeholder="Search actions"]');
    this.messageBox = page.locator('text=Message Box');

    // Message Box configuration form
    this.messageInput = page.locator('textarea[name="message"], input[name="message"], [placeholder*="message" i]').first();
    this.messageBoxSubmit = page.locator('button:has-text("Add"), button:has-text("OK"), button:has-text("Submit")').first();

    this.saveBtn = page.locator('text=Save');
    this.successMsg = page.locator('text=Saved');
  }

  async navigateToAutomation() {
  // Check if already on Automation page (Create button visible)
  if (await this.createBtn.isVisible()) {
    console.log('Already on Automation page');
    return;
  }

  await this.page.waitForSelector('text=/Automation/', { timeout: 60000 });
  await this.page.click('text=/Automation/');

  // ✅ wait for page load
  await this.page.waitForLoadState('networkidle');
}

  async createTaskBot(name) {
    await this.createBtn.click();
    await this.taskBotOption.click();
    await this.botName.fill(name);
    await this.createConfirm.click();
  }

  async addMessageBoxAction(message = 'Hello from Automation Anywhere!') {
    console.log('Searching for Message Box action...');
    await this.actionSearch.fill('Message Box');
    await this.messageBox.waitFor({ state: 'visible', timeout: 10000 });
    await this.messageBox.dblclick();

    console.log('Waiting for Message Box configuration form...');
    await this.messageInput.waitFor({ state: 'visible', timeout: 10000 });

    console.log('Filling message...');
    await this.messageInput.fill(message);

    console.log('Submitting Message Box configuration...');
    await this.messageBoxSubmit.waitFor({ state: 'visible', timeout: 10000 });
    await this.messageBoxSubmit.click();

    console.log('Message Box action configured successfully');
  }

  async saveTask() {
    await this.saveBtn.click();
  }
}