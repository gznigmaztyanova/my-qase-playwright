import { test, expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.beforeEach(async ({ }, testInfo) => {
    console.log("browserName", testInfo.project.name);
  qase.parameters({ Browser: testInfo.project.name });
});

test.describe("Home page", () => {
    test(qase(153, "Should have correct title"), async ({ page }) => {
        await page.goto('https://playwright.dev/');

        await expect(page).toHaveTitle(/Playwright/);
    });
});
