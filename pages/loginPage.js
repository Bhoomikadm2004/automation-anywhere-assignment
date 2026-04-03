export class LoginPage {
  constructor(page) {
    this.page = page;

    // Updated selectors based on actual DOM structure
    this.usernameLocator = page.locator('input[name="username"]').first();
    this.passwordLocator = page.locator('input[name="password"]').first();
    this.nextButton = page.locator('button:has-text("Next"), button:has-text("Continue"), button:has-text("Submit")').first();
    this.loginBtn = page.locator('input[type="submit"], button[type="submit"], button:has-text("Log in")').first();
    this.postLoginIndicator = page.locator('text=Automation, text=Automation Cloud, button:has-text("Create")').first();
  }

  async navigate() {
    await this.page.goto('https://community.cloud.automationanywhere.digital/', { waitUntil: 'networkidle' });
    await this.page.waitForTimeout(1500);
  }

  async updateLocators() {
    this.usernameLocator = this.page.locator('input[name="username"]').first();
    this.passwordLocator = this.page.locator('input[name="password"]').first();
    this.nextButton = this.page.locator('button:has-text("Next"), button:has-text("Continue"), button:has-text("Submit")').first();
    this.loginBtn = this.page.locator('input[type="submit"], button[type="submit"], button:has-text("Log in")').first();
    this.postLoginIndicator = this.page.locator('text=Automation, text=Automation Cloud, button:has-text("Create")').first();
  }

  async login(username, password) {
    console.log('Filling username...');
    await this.usernameLocator.waitFor({ state: 'visible', timeout: 10000 });
    await this.usernameLocator.fill(username);

    console.log('Filling password...');
    await this.passwordLocator.waitFor({ state: 'visible', timeout: 10000 });
    await this.passwordLocator.fill(password);

    console.log('Clicking login button...');
    await this.loginBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.loginBtn.click();

    console.log('Waiting for login completion...');
    try {
      await Promise.race([
        this.postLoginIndicator.waitFor({ timeout: 30000 }),
        this.page.waitForURL('**/home', { timeout: 30000 }),
        this.page.waitForURL('**/dashboard', { timeout: 30000 })
      ]);
      console.log('Login successful, current URL:', this.page.url());
    } catch (error) {
      await this.page.screenshot({ path: 'debug-login-fail.png', fullPage: true });
      console.error('Login failed:', error.message);
      throw new Error('Login did not complete within timeout');
    }
  }
}