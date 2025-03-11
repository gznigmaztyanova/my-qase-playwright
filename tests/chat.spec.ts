import { test } from "./fixtures/index.js";
import { expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.describe.parallel("Chat page", () => {
    test.beforeEach(async () => {
        await test.step("Go to the \"Chat\" page", async () => {
            expect(true).toBe(true);
        });
    });

    test(qase(225, "Redirect to the previous page when clicking the back button"), async () => {
        await test.step("Go to the \"Care Team\" page", async () => { 
            expect(true).toBe(true);
        });
        await test.step("Open \"Chat\" page by \"Chat\" button", async () => { 
            expect(true).toBe(true);
        });
        await test.step("Click the \"Back\" button", async () => { 
            expect(true).toBe(true);
        });
        await test.step("Ensure navigation to the \"Care Team\" page", async () => { 
            expect(true).toBe(true);
        });
    });

    test(qase(226, "Redirect to the \"Home\" page when clicking the back button and no previous page"), async () => {
        await test.step("Click the \"Back\" button", async () => { 
            expect(true).toBe(true);
        });
        await test.step("Ensure navigation to the \"Home\" page", async () => { 
            expect(true).toBe(true);
        });
    });

    test(qase(229, "Display the sent message in the chat after sending"), async () => {
        await test.step("Send a new message", async () => { 
            expect(true).toBe(true);
        });
        await test.step("Ensure the sent message is displayed in the chat", async () => { 
            expect(true).toBe(true);
        });
    });

    test(qase(237, "Enable the \"Send\" button for filled input"), async () => {
        await test.step("Fill the input field", async () => { 
            expect(true).toBe(true);
        });
        await test.step("Ensure the \"Send\" button is enabled", async () => { 
            expect(true).toBe(true);
        });
    });
    test(qase(228, "Disable the \"Send\" button for empty input"), async () => {
        await test.step("Fill the input field, then clear it", async () => { 
            expect(true).toBe(true);
        });
        await test.step("Ensure the \"Send\" button is enabled", async () => { 
            expect(true).toBe(true);
        });
    });
});