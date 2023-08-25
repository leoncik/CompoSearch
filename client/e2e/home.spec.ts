import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
});

test.describe('Page layout', () => {
    test('should have a title', async ({ page }) => {
        await expect(page).toHaveTitle(/CompoSearch/);
    });
});
