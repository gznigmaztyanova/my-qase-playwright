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

## 📌 Project Overview
- **Stack**: TypeScript + Playwright
- **Purpose**: Provide a minimal setup to reproduce the reported issue.
- **Note**: This project does not contain actual business logic or confidential data.

## 🚀 Getting Started

### **1. Clone the Repository**
```sh
git clone https://github.com/gznigmaztyanova/my-qase-playwright.git
cd my-qase-playwright
```

### **2. Install Dependencies**
`npm install`

### **3. Configure Environment Variables**
Add QASE_TOKEN="token" to .env

### **4. Run Playwright Tests
`npx playwright test`

