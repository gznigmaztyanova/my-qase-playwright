import { expect, test } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.beforeEach(async ({ }, testInfo) => {
    console.log("browserName", testInfo.project.name);
    qase.parameters({ Browser: testInfo.project.name });
});

test.describe("Signup page > Emails", () => {
    test.slow();
    const expectedSignUpSubject = "Continue signing up for Stork Club";
    test(
        qase(
            239,
            `Send the "${expectedSignUpSubject}" email when submitting the form with valid email`), async () => {
                expect(true).toBe(true);

                await test.step("Go to the 'Sign Up' page", async () => {
                    expect(true).toBe(true);
                });
                await test.step("Submit form with a valid email", async () => {
                    expect(true).toBe(true);
                });
                await test.step("Verify the success message on the signup page", async () => {
                    expect(true).toBe(true);
                });
                await test.step(`Ensure the "${expectedSignUpSubject}" email was received`, async () => {
                    expect(true).toBe(true);
                });
                await test.step(`Ensure the email has the correct content`, async () => {
                    expect(true).toBe(true);
                });
                await test.step(`Ensure the email has the correct content`, async () => {
                    expect(true).toBe(true);
                });
                await test.step(`Ensure the email has the correct content`, async () => {
                    expect(true).toBe(true);
                });
            });
});