import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) { }

    async fillInformation() {

        await this.page.locator('#first-name')
            .fill('Mahmud');

        await this.page.locator('#last-name')
            .fill('Hasan');

        await this.page.locator('#postal-code')
            .fill('1207');

        await this.page.locator('#continue')
            .click();
    }

    async getOverviewProductNames() {

        return await this.page
            .locator('.inventory_item_name')
            .allTextContents();
    }

    async getTotalPrice() {

        return await this.page
            .locator('.summary_total_label')
            .textContent();
    }

    async finishOrder() {

        await this.page.locator('#finish').click();
    }

    async getSuccessMessage() {

        return await this.page
            .locator('.complete-header')
            .textContent();
    }
}