import { test, expect } from '../fixtures/baseTest';
import { TaskBotPage } from '../pages/taskBotPage';

test('Create Message Box Task', async ({ page }) => {

  const taskBot = new TaskBotPage(page);

  console.log('✅ Login and Automation navigation complete');

  const botName = `TestBot_${Date.now()}`;

  await taskBot.createTaskBot(botName);

  // ✅ FIXED WAIT
  await page.waitForTimeout(5000);

  const testMessage = 'Hello from Automation Anywhere Test!';
  await taskBot.addMessageBoxAction(testMessage);

  await taskBot.saveTask();

  await expect(page.locator('button:has-text("Save")')).toBeVisible();

  console.log('✅ Message Box task created and configured successfully');
});