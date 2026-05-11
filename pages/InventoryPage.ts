import { Page } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) { }

    async resetAppState() {

        await this.page.locator('#react-burger-menu-btn').click();

        await this.page.locator('#reset_sidebar_link').click();
    }

    async addFirstThreeProducts() {

        const addButtons =
            this.page.locator('.btn_inventory');

        await addButtons.nth(0).click();
        await addButtons.nth(1).click();
        await addButtons.nth(2).click();
    }

    async openCart() {

        await this.page.locator('.shopping_cart_link').click();
    }

    async logout() {

        await this.page.locator('#react-burger-menu-btn').click();

        await this.page.locator('#logout_sidebar_link').click();
    }
}