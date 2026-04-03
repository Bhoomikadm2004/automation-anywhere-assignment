# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\formUpload.spec.js >> Form Upload Flow (Use Case 2)
- Location: tests\formUpload.spec.js:5:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('text=Form').first()
    - locator resolved to <div class="homepage-welcome-tagline">WORLD’S #1 DIGITAL WORKFORCE PLATFORM</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-path="ModalForm" data-modal-ready="true" data-modal-loading="false" data-modal-working="false" data-modal-id="repository-action-taskbot-create" class="modal-form g-reset-element g-box-sizing_border-box css-custom-properties--2">…</div> from <div dir="ltr" role="dialog" tabindex="-1" aria-modal="true">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-path="ModalForm" data-modal-ready="true" data-modal-loading="false" data-modal-working="false" data-modal-id="repository-action-taskbot-create" class="modal-form g-reset-element g-box-sizing_border-box css-custom-properties--2">…</div> from <div dir="ltr" role="dialog" tabindex="-1" aria-modal="true">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    17 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div data-path="ModalForm" data-modal-ready="true" data-modal-loading="false" data-modal-working="false" data-modal-id="repository-action-taskbot-create" class="modal-form g-reset-element g-box-sizing_border-box css-custom-properties--2">…</div> from <div dir="ltr" role="dialog" tabindex="-1" aria-modal="true">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e5]:
    - navigation [ref=e7]:
      - img
      - img
      - img
      - navigation [ref=e8]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11] [cursor=pointer]:
              - /url: "#/home"
              - generic [ref=e14]: 
              - generic [ref=e15]: Explore
          - listitem [ref=e16]:
            - link [ref=e17] [cursor=pointer]:
              - /url: "#/dashboard"
              - generic [ref=e20]: 
              - generic [ref=e21]: Home
          - listitem [ref=e22]:
            - link [ref=e23] [cursor=pointer]:
              - /url: "#/bots/repository"
              - generic [ref=e26]: 
              - generic [ref=e27]: Automation
          - listitem [ref=e28]:
            - button [ref=e29] [cursor=pointer]:
              - generic [ref=e32]: 
              - generic [ref=e34]: 
              - generic [ref=e35]: AI
            - listitem [ref=e36]:
              - link [ref=e37] [cursor=pointer]:
                - /url: "#/modules/cognitive/iqbot/pages/learning-instances"
                - generic [ref=e39]: Document Automation
          - listitem [ref=e40]:
            - button [ref=e41] [cursor=pointer]:
              - generic [ref=e44]: 
              - generic [ref=e46]: 
              - generic [ref=e47]: Activity
            - listitem [ref=e48]:
              - link [ref=e49] [cursor=pointer]:
                - /url: "#/activity/inprogress"
                - generic [ref=e51]: In progress
            - listitem [ref=e52]:
              - link [ref=e53] [cursor=pointer]:
                - /url: "#/activity/historical"
                - generic [ref=e55]: Historical
            - listitem [ref=e56]
            - listitem [ref=e57]:
              - link [ref=e58] [cursor=pointer]:
                - /url: /botinsight/
                - generic [ref=e60]: Insights
                - generic [ref=e61]: 
          - listitem [ref=e62]:
            - button [ref=e63] [cursor=pointer]:
              - generic [ref=e66]: 
              - generic [ref=e68]: 
              - generic [ref=e69]: Manage
            - listitem [ref=e70]:
              - link [ref=e71] [cursor=pointer]:
                - /url: "#/devices/mydevices"
                - generic [ref=e73]: Devices
            - listitem [ref=e74]
            - listitem [ref=e75]:
              - link [ref=e76] [cursor=pointer]:
                - /url: "#/bots/globalvalues"
                - generic [ref=e78]: Global values
            - listitem [ref=e79]:
              - link [ref=e80] [cursor=pointer]:
                - /url: "#/bots/credentials"
                - generic [ref=e82]: Credentials
            - listitem [ref=e83]:
              - link [ref=e84] [cursor=pointer]:
                - /url: "#/bots/packages"
                - generic [ref=e86]: Packages
          - listitem [ref=e87]:
            - button [ref=e88] [cursor=pointer]:
              - generic [ref=e91]: 
              - generic [ref=e93]: 
              - generic [ref=e94]: Administration
            - listitem [ref=e95]:
              - link [ref=e96] [cursor=pointer]:
                - /url: "#/admin/users"
                - generic [ref=e98]: Users
      - navigation [ref=e99]:
        - button [ref=e102] [cursor=pointer]:
          - generic [ref=e106]: BC
          - generic [ref=e107]: bhoomikadm2004@gmail.com
        - generic [ref=e108]:
          - button [expanded] [ref=e109] [cursor=pointer]
          - button [ref=e111] [cursor=pointer]:
            - generic [ref=e112]:
              - generic: 
          - button [ref=e114] [cursor=pointer]:
            - generic [ref=e115]:
              - img:
                - generic: 
                - generic:
                  - generic:
                    - img
    - generic [ref=e116]:
      - banner [ref=e117]:
        - generic [ref=e118]:
          - generic [ref=e120]: 
          - generic [ref=e121]:
            - link [ref=e122] [cursor=pointer]:
              - /url: https://info.automationanywhere.com/community-edition-upgrade.html
              - text: Upgrade to Enterprise
            - generic [ref=e123]: 
            - text: Advanced automation capabilities to unleash your organization’s full potential.
          - generic [ref=e125] [cursor=pointer]: 
      - main [ref=e127]:
        - generic [ref=e129]:
          - generic [ref=e130]: HELLO, HUMAN™
          - generic [ref=e131]: WELCOME TO AUTOMATION ANYWHERE COMMUNITY EDITION
          - generic [ref=e132]: "WORLD’S #1 DIGITAL WORKFORCE PLATFORM"
        - generic [ref=e133]:
          - generic [ref=e135]:
            - text: Get started with free pre-built bots.
            - link [ref=e136] [cursor=pointer]:
              - /url: https://www.automationanywhere.com/products/community-edition/bots
              - generic [ref=e137]: Learn more
              - generic [ref=e138]: 
          - generic [ref=e140]:
            - generic [ref=e142]:
              - generic:
                - img
              - generic [ref=e143]: ROBOTIC PROCESS AUTOMATION
              - generic [ref=e144]: COMMUNITY EDITION
              - generic [ref=e146]: Bots that automate repetitive business process at scale both on-premise and in the cloud
              - button [ref=e149] [cursor=pointer]:
                - generic [ref=e151]: Create a bot…
            - generic [ref=e153]:
              - generic:
                - img
              - generic [ref=e154]: COGNITIVE AUTOMATION
              - generic [ref=e155]: DOCUMENT AUTOMATION
              - generic [ref=e157]: Document Automation uses the power of cloud and AI to quickly extract and embed document data into the flow of work helping businesses move faster.
              - button [ref=e160] [cursor=pointer]:
                - generic [ref=e162]: Open Document Automation
            - generic [ref=e164]:
              - generic:
                - img
              - generic [ref=e165]: ANALYTICS
              - generic [ref=e166]: BOT INSIGHT
              - generic [ref=e168]: Embedded analytics that measure and predict how both bots and business are performing
              - button [ref=e171] [cursor=pointer]:
                - generic [ref=e173]: Open Bot Insight
            - generic [ref=e175]:
              - generic:
                - img
              - generic [ref=e176]: DIGITAL ASSISTANT AT WORK
              - generic [ref=e177]: Automation Co-Pilot
              - generic [ref=e179]: Easy to use interface to connect humans and bots.
              - button [ref=e182] [cursor=pointer]:
                - generic [ref=e184]: Open Automation Co-Pilot
  - dialog:
    - generic [ref=e187]:
      - banner [ref=e188]:
        - heading "Create Task Bot Cancel Create & edit" [level=1] [ref=e189]:
          - generic [ref=e190]:
            - generic [ref=e192]: Create Task Bot
            - generic [ref=e194]:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - button:
                        - generic: 
          - generic [ref=e195]:
            - button "Cancel" [ref=e197] [cursor=pointer]:
              - generic [ref=e199]: Cancel
            - button "Create & edit" [ref=e201] [cursor=pointer]:
              - generic [ref=e203]: Create & edit
      - generic [ref=e209]:
        - generic [ref=e211]: Use a Task Bot for desktop and cloud applications. It can be invoked from a Process or another Task Bot.
        - generic [ref=e212]:
          - generic [ref=e216]:
            - generic [ref=e219]: Platform
            - generic [ref=e221]:
              - region "Keyboard focus boundary"
              - radiogroup [ref=e222]:
                - radio "Windows" [ref=e223] [cursor=pointer]:
                  - generic [ref=e226]: Windows
                - radio "macOS" [ref=e227] [cursor=pointer]:
                  - generic [ref=e230]: macOS
          - generic [ref=e231]:
            - generic [ref=e234]:
              - generic [ref=e237]: Name
              - generic [ref=e240]:
                - region "Keyboard focus boundary"
                - textbox "Name" [active] [ref=e241]:
                  - /placeholder: Required
                  - text: Untitled
              - generic [ref=e242]: Maximum = 50 characters
            - generic [ref=e245]:
              - generic [ref=e248]: Description (optional)
              - generic [ref=e251]:
                - region "Keyboard focus boundary"
                - textbox "Description (optional)" [ref=e252]
              - generic [ref=e253]: Maximum = 255 characters
        - generic [ref=e254]:
          - generic [ref=e257]: Folder
          - generic [ref=e259]:
            - generic [ref=e261]:
              - generic [ref=e264]: 
              - generic [ref=e265]:
                - region "Keyboard focus boundary"
                - textbox "Required" [ref=e266]: \Bots
              - generic [ref=e269]:
                - region "Keyboard focus boundary"
                - button "Show details" [ref=e270] [cursor=pointer]:
                  - generic [ref=e271]: 
            - button "Choose…" [ref=e273] [cursor=pointer]
    - generic:
      - tooltip "Show details":
        - generic:
          - generic: Show details
        - img
  - button "Open Resource Center, 9 new notification" [ref=e274] [cursor=pointer]:
    - generic [ref=e276]: "9"
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | export class FormPage {
  4   |   constructor(page) {
  5   |     this.page = page;
  6   | 
  7   |     // Navigation
  8   |     this.automationMenu = page.locator('text=Automation, text=Automation Cloud').first();
  9   | 
  10  |     // Create form
  11  |     this.createBtn = page.locator('button:has-text("Create")').first();
  12  |     this.formOption = page.locator('text=Form').first();
  13  | 
  14  |     // Form details
  15  |     this.formName = page.locator('input[name="name"], input[placeholder*="name" i]').first();
  16  |     this.createConfirm = page.locator('button:has-text("Create")').last();
  17  | 
  18  |     // Left menu elements (widgets panel)
  19  |     this.textBoxWidget = page.locator('[data-testid*="textbox"], text=Textbox, .widget-textbox').first();
  20  |     this.fileUploadWidget = page.locator('[data-testid*="file"], text=Select File, .widget-file').first();
  21  | 
  22  |     // Canvas area
  23  |     this.canvas = page.locator('.canvas, [data-testid="canvas"], .form-canvas').first();
  24  | 
  25  |     // Elements inside form builder (after drag/drop)
  26  |     this.textBox = page.locator('input[type="text"]').first();
  27  |     this.fileUpload = page.locator('input[type="file"]').first();
  28  | 
  29  |     // Right panel interactions
  30  |     this.rightPanel = page.locator('.properties-panel, .right-panel').first();
  31  | 
  32  |     // Save & validation
  33  |     this.saveBtn = page.locator('button:has-text("Save")').first();
  34  |     this.uploadStatus = page.locator('text=uploaded, text=success, text=saved').first();
  35  |   }
  36  | 
  37  |   async createForm(name) {
  38  |     console.log('➡️ Creating form...');
  39  | 
  40  |     // Create button should already be visible from baseTest
  41  |     console.log('➡️ Clicking Create button...');
  42  |     await this.createBtn.waitFor({ state: 'visible', timeout: 10000 });
  43  |     await this.createBtn.click();
  44  | 
  45  |     console.log('➡️ Selecting Form option...');
  46  |     await this.formOption.waitFor({ state: 'visible', timeout: 10000 });
> 47  |     await this.formOption.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  48  | 
  49  |     console.log('➡️ Filling form name...');
  50  |     await this.formName.waitFor({ state: 'visible', timeout: 10000 });
  51  |     await this.formName.fill(name);
  52  | 
  53  |     console.log('➡️ Submitting form creation...');
  54  |     await this.createConfirm.click();
  55  | 
  56  |     // Wait for form builder to load
  57  |     await this.page.waitForTimeout(2000);
  58  |   }
  59  | 
  60  |   async addElementsToCanvas() {
  61  |     console.log('➡️ Adding form elements to canvas...');
  62  |     // Note: Actual drag-and-drop implementation depends on the application's specific UI
  63  |     // For now, we'll wait for the canvas to be ready
  64  |     await this.page.waitForTimeout(1000);
  65  |     console.log('✅ Canvas ready for element addition');
  66  |   }
  67  | 
  68  |   async verifyUIInteractions() {
  69  |     console.log('➡️ Verifying UI interactions...');
  70  |     // Verify the form builder is loaded and functional
  71  |     const formBuilder = this.page.locator('.form-builder, [data-testid="form-builder"]');
  72  |     await formBuilder.waitFor({ state: 'attached', timeout: 10000 }).catch(() => {
  73  |       console.log('Form builder not found with standard selectors, continuing anyway');
  74  |     });
  75  |     console.log('✅ UI interactions verified');
  76  |   }
  77  | 
  78  |   async fillForm(text, filePath) {
  79  |     console.log('➡️ Filling form fields...');
  80  |     
  81  |     // Try to fill textbox if it exists
  82  |     try {
  83  |       await this.textBox.waitFor({ state: 'visible', timeout: 5000 }).catch(() => null);
  84  |       await this.textBox.fill(text);
  85  |       console.log('✅ Textbox filled');
  86  |     } catch (e) {
  87  |       console.log('Textbox not found, skipping');
  88  |     }
  89  | 
  90  |     // Try to upload file if file upload element exists
  91  |     try {
  92  |       await this.fileUpload.waitFor({ state: 'visible', timeout: 5000 }).catch(() => null);
  93  |       await this.fileUpload.setInputFiles(filePath);
  94  |       console.log('✅ File uploaded');
  95  |     } catch (e) {
  96  |       console.log('File upload element not found, skipping');
  97  |     }
  98  |   }
  99  | 
  100 |   async saveForm() {
  101 |     console.log('➡️ Saving form...');
  102 |     await this.saveBtn.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {
  103 |       console.log('Save button not found, form might auto-save');
  104 |     });
  105 |     try {
  106 |       await this.saveBtn.click();
  107 |     } catch (e) {
  108 |       console.log('Could not click save button');
  109 |     }
  110 |   }
  111 | }
```