import { test, expect } from '@playwright/test';
import { mockedJsonComposers } from '__mocks__/composer.mocks';

test.beforeEach(async ({ page }) => {
    // Mock the api call before navigating
    await page.route(
        'http://localhost:3000/composers/?name=',
        async (route) => {
            const json = mockedJsonComposers;
            await route.fulfill({ json });
        }
    );
    await page.goto('http://localhost:4200/');
});

test.describe('Page layout', () => {
    test('should have a title', async ({ page }) => {
        await expect(page).toHaveTitle(/CompoSearch/);
    });

    test('should display the composers names from the API', async ({
        page,
    }) => {
        await expect(page.getByRole('table')).toBeVisible();
        mockedJsonComposers.map(async (composer) => {
            await expect(page.getByText(composer.first_name)).not.toBeVisible();
            await expect(page.getByText(composer.last_name)).toBeVisible();
        });
    });
});
