const { chromium } = require('@playwright/test');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  let output = '';

  try {
    console.log('🔍 Navigating to login page...');
    output += '🔍 Navigating to login page...\n';
    await page.goto('https://community.cloud.automationanywhere.digital/', { waitUntil: 'domcontentloaded' });
    
    await page.waitForLoadState('networkidle');
    
    // Wait a bit more for potential dynamic content
    await page.waitForTimeout(3000);

    // Get all input fields
    const inputFields = await page.locator('input').all();
    output += `\n📝 Found ${inputFields.length} input fields:\n`;

    for (let i = 0; i < inputFields.length; i++) {
      const type = await inputFields[i].getAttribute('type');
      const name = await inputFields[i].getAttribute('name');
      const id = await inputFields[i].getAttribute('id');
      const placeholder = await inputFields[i].getAttribute('placeholder');
      output += `  [${i}] type="${type}" | name="${name}" | id="${id}" | placeholder="${placeholder}"\n`;
    }

    // Get all buttons
    const buttons = await page.locator('button').all();
    output += `\n🔘 Found ${buttons.length} buttons:\n`;
    for (let i = 0; i < Math.min(buttons.length, 10); i++) {
      const text = await buttons[i].textContent();
      const type = await buttons[i].getAttribute('type');
      output += `  [${i}] type="${type}" | text="${text?.trim()}"\n`;
    }

    // Take screenshot
    await page.screenshot({ path: 'debug-login-page.png' });
    output += '\n📸 Screenshot saved to debug-login-page.png\n';

    // Write output to file
    fs.writeFileSync('debug-output.txt', output);
    console.log('Output written to debug-output.txt');

  } catch (error) {
    console.error('❌ Error:', error.message);
    fs.writeFileSync('debug-error.txt', `Error: ${error.message}\n${error.stack}`);
  } finally {
    await browser.close();
  }
})();
