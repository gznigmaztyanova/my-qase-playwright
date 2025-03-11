import { test } from "./fixtures/index.js";
import { expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.describe("Home page", () => {
    test(qase(153, "Should have correct title"), async ({ page }) => {
        await page.goto('https://playwright.dev/');

        await expect(page).toHaveTitle(/Playwright/);
    });
});
