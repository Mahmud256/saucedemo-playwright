import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Q1 Locked User Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        'locked_out_user',
        'secret_sauce'
    );

    const errorMessage =
        await loginPage.getErrorMessage();

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText(
        'Sorry, this user has been locked out.'
    );
});