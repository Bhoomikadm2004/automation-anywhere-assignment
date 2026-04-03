import { test, expect } from '../fixtures/baseTest';
import { TaskBotPage } from '../pages/taskBotPage';

import { test, expect } from '../fixtures/baseTest';
import { TaskBotPage } from '../pages/taskBotPage';

test('Create Message Box Task', async ({ page }) => {

  const taskBot = new TaskBotPage(page);

  // At this point baseTest.js has already logged in and navigated to Automation
  console.log('✅ Login and Automation navigation complete');

  // Create task bot
  await taskBot.createTaskBot('Test Bot');

  await expect(page.locator('text=Actions')).toBeVisible();

  // Add Message Box action with configuration
  const testMessage = 'Hello from Automation Anywhere Test!';
  await taskBot.addMessageBoxAction(testMessage);

  // Verify the message box action was added to the canvas
  await expect(page.locator('text=Message Box')).toBeVisible();

  await taskBot.saveTask();

  await expect(taskBot.successMsg).toBeVisible();

  console.log('✅ Message Box task created and configured successfully');
});