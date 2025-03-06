import { expect, test } from "@playwright/test";
import { qase } from "playwright-qase-reporter";

test.beforeEach(async ({ }, testInfo) => {
    console.log("browserName", testInfo.project.name);
  qase.parameters({ Browser: testInfo.project.name });
});

test.describe("Select a Category Page", () => {
    test.beforeEach(async () => { 
        expect(true).toBe(true);
    });

    test(qase(243, "Display header with main heading and description"), async () => { 
        expect(true).toBe(true);
    });

    test(qase(241, "Display all available categories"), async () => { 
        expect(true).toBe(true);
    });

    test(qase(244, "Redirect to the Select Subject page when clicking category"), async () => { 
        expect(true).toBe(true);
    });
});

test.describe("Select a Subject Page", () => {
    test.beforeAll(async () => { 
        expect(true).toBe(true);
    });

    test(qase(245, "Display header with main heading and description"), async () => { 
        expect(true).toBe(true);
    });

    test(qase(246, "Display all available subjects"), async () => { 
        expect(true).toBe(true);
    });

    test(qase(247, "Redirect to the Select Call Expert page when clicking subject"), async () => { 
        expect(true).toBe(true);
    });

    test(qase(248, `Redirect to the Chat when clicking link`), async () => { 
        expect(true).toBe(true);
    });
});