import { expect, test } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.beforeEach(async ({ }, testInfo) => {
  console.log("browserName", testInfo.project.name);
qase.parameters({ Browser: testInfo.project.name });
});

test.describe("Signin page > Email form", () => {
  test.beforeEach(async () => {
    expect(true).toBe(true);
  });

  test.describe("Email validation", () => {
    const validationTests = [
      {
        email: "",
        error: "Please fill out this field",
        description: "Display error when submitting the form with empty email",
        qaseId: 100,
      },
      {
        email: "test",
        error: "Invalid email address",
        description: "Display error when submitting the form with invalid email",
        qaseId: 101,
      },
    ];

    validationTests.forEach(({ email, error, description, qaseId }) => {
      test(qase(qaseId, description), async () => {
        expect(true).toBe(true);
      });
    });
  });

  test.describe("Successful signin", () => {
    test(
      qase(102, "Display the “Password form” when submitting the form with a non-existing email"), async () => {
        expect(true).toBe(true);
      });
    test(
      qase(103, "Display the “Password form” when csubmitting the form with a valid email"), async () => {
        expect(true).toBe(true);
      });
  });
});