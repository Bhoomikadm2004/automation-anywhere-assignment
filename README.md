# Automation Anywhere - UI & API Testing

## Project Overview
This project contains automated tests for Automation Anywhere Community Edition using Playwright and the Page Object Model (POM) design pattern.

## Framework & Tools
- **Framework**: Playwright
- **Language**: JavaScript (Node.js)
- **Design Pattern**: Page Object Model (POM)
- **Test Runner**: Playwright Test

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
npx playwright install
```

### Configuration
- **Base URL**: https://community.cloud.automationanywhere.digital/
- **Credentials**: 
  - Email: bhoomikadm2004@gmail.com
  - Password: Bhoomikadm@2004

Update credentials in `fixtures/baseTest.js` if needed.

## Project Structure
```
automation-anywhere-assignment/
├── fixtures/
│   └── baseTest.js          # Base test setup with auto-login
├── pages/
│   ├── loginPage.js         # Login page object
│   ├── formPage.js          # Form creation page object
│   └── taskBotPage.js       # Task Bot page object
├── tests/
│   ├── api.spec.js          # API authentication test
│   ├── messageBox.spec.js   # Message Box task UI test
│   └── formUpload.spec.js   # Form upload UI test
├── test-data/
│   └── sample.pdf           # Sample file for upload tests
├── playwright.config.js     # Playwright configuration
└── README.md                # This file
```

## Test Cases

### 1. Authentication API Validation (api.spec.js)
**Purpose**: Validate authentication via API endpoint
- **Steps**:
  1. Send POST request to authentication endpoint
  2. Validate response status (200-499)
  3. Parse and log authentication response
  4. Verify response contains token and user data

**Expected Results**:
- ✅ API returns valid authentication token
- ✅ User data is present in response
- ✅ Permissions array is populated

### 2. Create Message Box Task (messageBox.spec.js)
**Purpose**: Automate creation of a Message Box task
- **Steps**:
  1. Login to application (via beforeEach fixture)
  2. Navigate to Automation section
  3. Create a new Task Bot
  4. Add Message Box action
  5. Save the task
  6. Verify success message

**Expected Results**:
- ✅ Task Bot created successfully
- ✅ Message Box action added
- ✅ Success confirmation message displayed
- ✅ Page remains open throughout test

### 3. Form Upload Flow (formUpload.spec.js)
**Purpose**: Automate form creation and file upload
- **Steps**:
  1. Login to application (via beforeEach fixture)
  2. Navigate to Automation section
  3. Create a new Form
  4. Fill form with text
  5. Upload a PDF file
  6. Save the form
  7. Verify upload status

**Expected Results**:
- ✅ Form created successfully
- ✅ Text input accepted
- ✅ File uploaded successfully
- ✅ Upload status visible

## Running Tests

### Run All Tests
```bash
npm test
# or
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/messageBox.spec.js
npx playwright test tests/formUpload.spec.js
npx playwright test tests/api.spec.js
```

### Run in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Run Single Test with Grep
```bash
npx playwright test --grep "Create Message Box Task"
```

### Run with Debug Mode
```bash
npx playwright test --debug
```

### Generate HTML Report
```bash
npx playwright show-report
```

### Run with Custom Configuration
```bash
npx playwright test --timeout=90000 --workers=1
```

## Configuration Details

### Playwright Config (playwright.config.js)
```javascript
{
  baseURL: https://community.cloud.automationanywhere.digital
  headless: false                    // Show browser
  screenshot: 'only-on-failure'      // Capture screenshots on errors
  video: 'retain-on-failure'         // Record videos on test failure
  timeout: 120000                    // 120 second timeout per test
}
```

### Base Test Fixture (fixtures/baseTest.js)
- Implements `beforeEach` hook
- Automatically logs in before each test
- Handles login errors gracefully
- Ensures page stays open during test execution

## How It Works

### Login Fixture Flow
1. **beforeEach Hook**: Runs before every test
2. **Navigate**: Goes to login page
3. **Fill Credentials**: Enters email and password
4. **Submit**: Clicks login button
5. **Wait**: Allows page to load
6. **Test Execution**: Test runs with authenticated session

### Page Object Model
Each page has:
- **Locators**: Element selectors (stored as properties)
- **Methods**: Actions performed on page (click, fill, wait, etc.)
- **Example**: `FormPage` has `createForm()`, `fillForm()`, `saveForm()` methods

## Known Issues & Solutions

### ✅ Issue 1: Tab Closing After Login
**Status**: FIXED
**Solution**: Moved login to `beforeEach` hook instead of page fixture extension
**Code**: [fixtures/baseTest.js](fixtures/baseTest.js#L6-L20)

### ✅ Issue 2: Element Not Found Errors
**Status**: FIXED
**Solution**: Used robust selectors with `.nth()` method and added timeouts
**Code**: [pages/loginPage.js](pages/loginPage.js#L13-L24)

### ✅ Issue 3: Page Showing about:blank
**Status**: FIXED
**Solution**: Ensured login completes before test starts
**Code**: [fixtures/baseTest.js](fixtures/baseTest.js)

## Best Practices Implemented

✅ **Page Object Model**: All UI elements encapsulated in page classes  
✅ **Separation of Concerns**: Test logic separated from page interaction  
✅ **Reusable Fixtures**: Base test fixture handles common setup  
✅ **Explicit Waits**: Proper wait strategies to avoid flaky tests  
✅ **Error Logging**: Console logs for debugging test execution  
✅ **Clean Code**: Well-commented, maintainable code structure  
✅ **Error Handling**: Try-catch blocks for graceful error reporting  
✅ **Test Isolation**: Each test is independent and can run standalone  

## Troubleshooting

### Tests Timing Out
```bash
# Increase timeout to 180 seconds
npx playwright test --timeout=180000
```

### Can't Find Elements
```bash
# Run in debug mode to inspect elements
npx playwright test --debug
```

### Login Fails
1. Verify credentials are correct
2. Check internet connectivity
3. Run with `--headed` to see what's happening:
   ```bash
   npx playwright test --headed
   ```

### Test Results Location
- Screenshots: `test-results/tests-[testname]/test-failed-*.png`
- Videos: `test-results/tests-[testname]/video.webm`
- Error Context: `test-results/tests-[testname]/error-context.md`

## Environment Notes

### Platform: Windows
- Commands use PowerShell syntax
- Chrome browser is used by default
- Test results stored in `test-results/` directory

### Performance Considerations
- Tests run sequentially by default for login consistency
- API test runs independently (no login needed)
- UI tests share login session via beforeEach hook

## Future Enhancements

- [ ] Move credentials to .env file
- [ ] Add parallel test execution optimization
- [ ] Create custom reporters for better reporting
- [ ] Add visual regression testing
- [ ] Implement data-driven tests
- [ ] Add performance benchmarking
- [ ] Create CI/CD pipeline integration
- [ ] Add screenshot comparison
- [ ] Implement test retry logic

## Support & Resources

- [Playwright Documentation](https://playwright.dev)
- [Automation Anywhere Docs](https://docs.automationanywhere.com)
- Test artifacts in `test-results/` on failure
- Console logs printed during test execution

---

**Last Updated**: April 2, 2026  
**Test Status**: All tests implemented with proper fixtures and page objects