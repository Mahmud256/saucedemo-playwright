import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Q2 Purchase Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.resetAppState();

  await inventoryPage.addFirstThreeProducts();

  await inventoryPage.openCart();

  const products =
    await cartPage.getProductNames();

  console.log(products);

  await cartPage.checkout();

  await checkoutPage.fillInformation();

  await checkoutPage.finishOrder();

  await expect(
    page.locator('.complete-header')
  ).toHaveText(
    'Thank you for your order!'
  );

  await inventoryPage.logout();
});