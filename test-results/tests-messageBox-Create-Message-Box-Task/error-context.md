# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\messageBox.spec.js >> Create Message Box Task
- Location: tests\messageBox.spec.js:4:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('text=Automation, text=Automation Cloud, button:has-text("Create")').first() to be visible

```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/baseTest';
  2  | import { TaskBotPage } from '../pages/taskBotPage';
  3  | 
  4  | test('Create Message Box Task', async ({ page }) => {
  5  | 
  6  |   const taskBot = new TaskBotPage(page);
  7  | 
  8  |   // ✅ WAIT FOR POST-LOGIN
> 9  |   await page.locator('text=Automation, text=Automation Cloud, button:has-text("Create")').first().waitFor({ timeout: 90000 });
     |                                                                                                   ^ Error: locator.waitFor: Target page, context or browser has been closed
  10 |   console.log('Login successful');
  11 | 
  12 |   // Navigate to automation & create task bot
  13 |   await taskBot.navigateToAutomation();
  14 | 
  15 |   console.log('Checking if Create button is visible...');
  16 |   await expect(page.locator('button:has-text("Create")')).toBeVisible({ timeout: 10000 });
  17 | 
  18 |   console.log('Clicking Create button...');
  19 |   await page.locator('button:has-text("Create")').click();
  20 | 
  21 |   console.log('Looking for Task Bot option...');
  22 |   await expect(page.locator('text=Task Bot')).toBeVisible({ timeout: 10000 });
  23 | 
  24 |   console.log('Selecting Task Bot...');
  25 |   await page.locator('text=Task Bot').click();
  26 | 
  27 |   console.log('Waiting for Task Bot creation form...');
  28 |   await expect(page.locator('input[name="name"]')).toBeVisible({ timeout: 10000 });
  29 | 
  30 |   console.log('Filling bot name...');
  31 |   await page.locator('input[name="name"]').fill('Test Bot');
  32 | 
  33 |   console.log('Clicking Create button...');
  34 |   await page.locator('button:has-text("Create")').last().click();
  35 | 
  36 |   console.log('Waiting for Actions panel...');
  37 |   await expect(page.locator('text=Actions')).toBeVisible({ timeout: 30000 });
  38 | 
  39 |   // Add Message Box action with configuration
  40 |   const testMessage = 'Hello from Automation Anywhere Test!';
  41 |   await taskBot.addMessageBoxAction(testMessage);
  42 | 
  43 |   // Verify the message box action was added to the canvas
  44 |   await expect(page.locator('text=Message Box')).toBeVisible();
  45 | 
  46 |   await taskBot.saveTask();
  47 | 
  48 |   await expect(taskBot.successMsg).toBeVisible();
  49 | 
  50 |   console.log('Message Box task created and configured successfully');
  51 | });
```