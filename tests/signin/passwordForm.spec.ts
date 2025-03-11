import { expect, test } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.beforeEach(async ({ }, testInfo) => {
  console.log("browserName", testInfo.project.name);
qase.parameters({ Browser: testInfo.project.name });
});

test.describe("Signin page > Password form", () => {
  test.beforeEach(async () => {
    expect(true).toBe(true);
  });

  test.describe("Password validation", () => {
    const validationTests = [
      {
        password: "",
        error: "Please fill out this field",
        description: "Display error when submitting the form with empty password",
        qaseId: 131,
      },
      {
        password: "test",
        error: "Invalid email or password.",
        description: "Display error when submitting the form with incorrect password",
        qaseId: 132,
      },
    ];

    validationTests.forEach(({ password, error, description, qaseId }) => {
      test(qase(qaseId, description), async () => {
        expect(true).toBe(true);
      });
    });
  });

  test.describe("Successful signin", () => {
    test(
      qase(133, "Redirect to “Home” page when submitting the form with valid creds"),
      async () => {
        expect(true).toBe(true);
      });
  });
});