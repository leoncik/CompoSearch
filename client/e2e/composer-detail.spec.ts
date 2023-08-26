import { test, expect } from '@playwright/test';
import {
    mockedJsonComposers,
    mockedJsonComposersDetails,
} from '__mocks__/composer.mocks';

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

test.describe('Composer page', () => {
    test("should show me a composer's details when visiting his page", async ({
        page,
    }) => {
        // Visit first composer's details page
        await page.getByText(mockedJsonComposers[0].first_name).click();

        // Format composer's birthday to check the page title
        const firstComposerBirthDate = new Date(
            mockedJsonComposersDetails[0].birthdate
        );
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedFirstComposerBirthDate = formatter.format(
            firstComposerBirthDate
        );
        const composerDetailsPageName = `${mockedJsonComposersDetails[0].first_name} ${mockedJsonComposersDetails[0].last_name} (${formattedFirstComposerBirthDate})`;

        // Check composer's detail page name and content.
        await expect(
            page.getByRole('heading', { name: composerDetailsPageName })
        ).toBeVisible();
        await expect(
            page.getByText(mockedJsonComposersDetails[0].biography)
        ).toBeVisible();
    });
});
