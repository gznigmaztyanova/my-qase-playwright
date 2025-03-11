# Qase.io Params Issue Reproduction Project

This project is structured to reproduce a bug in Qase.io where test results are incorrectly recorded.
It is based on our actual project structure but **all logic and sensitive data have been removed**.

## 🔎 Issue Description
- **Issue**: When running > 60 tests across 3 different browsers (defined as `projects` in Playwright), test results in Qase.io are incorrectly grouped.
- **Expected Behavior**:  
  - Each test result should be logged as a separate test case with its corresponding browser parameter.
- **Actual Behavior**:  
  - Instead of treating them as **separate test cases with parameters**, Qase.io registers them as **retries of a test case without parameters**.
  - This results in incorrect reporting where different browser executions appear as retries instead of distinct runs.

- **How to reproduce**:  
Running tests only with 1 project (ex., Desktop Chrome)
  1. Run tests only for from 1 file (ex., emailForm.spec.ts):
    `npx playwright test tests/signin/emailForm.spec.ts`
      - I expect to see test run with 4 results, all results have the "Desktop Chrome" param
      - I will see [Test Run](https://app.qase.io/public/report/1ce5e1afa6abe3e415eee39d6abfb87072782ef0) with 4 results (ids: 100, 101, 102, 103), all results have the "Desktop Chrome" param 
  2. Run tests only for the whole suite:  
    `npx playwright test`
      - I expect to see test run with 30 results, 30 results have the "Desktop Chrome" param
      - I will see [Test Run](https://app.qase.io/public/report/de0d3defeda1d8f00493b84aa1ce4cb1997aaa0d) with 30 results, but not all of them have the "Desktop Chrome" param, the same test cases (ids: 100, 101, 102, 103) that previously had the parameter are now displayed without it.

## 📌 Project Overview
- **Stack**: TypeScript + Playwright
- **Purpose**: Provide a minimal setup to reproduce the reported issue.
- **Note**: This project does not contain actual business logic or confidential data.

## 🚀 Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/gznigmaztyanova/my-qase-playwright.git
cd my-qase-playwright
```

### 2. Install Dependencies
`npm install`

### 3. Configure Environment Variables
Add QASE_TOKEN="token" to .env

### 4. Run Playwright Tests
`npx playwright test`

