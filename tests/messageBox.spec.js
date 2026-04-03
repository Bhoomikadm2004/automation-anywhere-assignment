import { test, expect } from '../fixtures/baseTest';
import { TaskBotPage } from '../pages/taskBotPage';

test('Create Message Box Task', async ({ page }) => {

  const taskBot = new TaskBotPage(page);

  // ✅ WAIT FOR POST-LOGIN
  await page.locator('text=Automation, text=Automation Cloud, button:has-text("Create")').first().waitFor({ timeout: 90000 });
  console.log('Login successful');

  // Navigate to automation & create task bot
  await taskBot.navigateToAutomation();

  await expect(page.locator('text=Automation')).toBeVisible();

  await taskBot.createTaskBot('Test Bot');

  await expect(page.locator('text=Actions')).toBeVisible();

  // Add Message Box action with configuration
  const testMessage = 'Hello from Automation Anywhere Test!';
  await taskBot.addMessageBoxAction(testMessage);

  // Verify the message box action was added to the canvas
  await expect(page.locator('text=Message Box')).toBeVisible();

  await taskBot.saveTask();

  await expect(taskBot.successMsg).toBeVisible();

  console.log('Message Box task created and configured successfully');
});