import { test as base } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

export const test = base.extend({});

test.beforeEach(async ({ }, testInfo) => {
    console.log("browserName", testInfo.project.name);
    qase.parameters({ Browser: testInfo.project.name });
});
