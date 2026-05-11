import { Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) { }

    async checkout() {

        await this.page.locator('#checkout').click();
    }

    async getProductNames() {

        return await this.page
            .locator('.inventory_item_name')
            .allTextContents();
    }
}