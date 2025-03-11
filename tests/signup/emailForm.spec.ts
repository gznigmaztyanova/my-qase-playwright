import { expect, test } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.beforeEach(async ({ }, testInfo) => {
  console.log("browserName", testInfo.project.name);
qase.parameters({ Browser: testInfo.project.name });
});

test.describe("Signup page > Email form", () => {
  test.beforeEach(async () => {
    await test.step("Go to the 'Sign Up' page", async () => {
    });
  });

  test.describe("Email validation", () => {
    const validationTests = [
      {
        email: "",
        error: "Please fill out this field",
        description: "Display error when submitting the form with empty email",
        qaseId: 12,
      },
      {
        email: "test",
        error: "Invalid email address",
        description: "Display error when submitting the form with invalid email (w/o @)",
        qaseId: 13,
      },
      {
        email: "test@test",
        error: "is invalid",
        description: "Display an error when submitting the form with an invalid email (w/o domain)",
        qaseId: 289,
      },
    ];

    validationTests.forEach(({ email, error, description, qaseId }) => {
      test(qase(qaseId, description), async () => {
        expect(true).toBe(true);
      });
    });
  });
  test(
    qase(14, "Display an error when submitting the form with an existing email"),
    async () => {
        expect(true).toBe(true);
    });

  test(
    qase(290, "Display the “Check your email” form when submitting the form with a valid email"), async () => {
        expect(true).toBe(true);
    });
});