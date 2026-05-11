import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Q3 Performance Glitch User Purchase Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  // Login

  await loginPage.goto();

  await loginPage.login(
    'performance_glitch_user',
    'secret_sauce'
  );

  // Reset App State

  await inventoryPage.resetAppState();

  // Sort Z to A

  await inventoryPage.sortZtoA();

  // Capture first product name

  const firstProductName =
    await inventoryPage.getFirstProductName();

  console.log('Selected Product:', firstProductName);

  // Add first product

  await inventoryPage.addFirstProductToCart();

  // Open cart

  await inventoryPage.openCart();

  // Verify cart product

  const cartProducts =
    await cartPage.getProductNames();

  expect(cartProducts).toContain(
    firstProductName
  );

  // Checkout

  await cartPage.checkout();

  // Fill checkout info

  await checkoutPage.fillInformation();

  // Verify overview product names

  const overviewProducts =
    await checkoutPage.getOverviewProductNames();

  expect(overviewProducts).toContain(
    firstProductName
  );

  // Verify total price

  const totalPrice =
    await checkoutPage.getTotalPrice();

  console.log('Total Price:', totalPrice);

  await expect(
    page.locator('.summary_total_label')
  ).toContainText('Total');

  // Finish order

  await checkoutPage.finishOrder();

  // Verify success message

  await expect(
    page.locator('.complete-header')
  ).toHaveText(
    'Thank you for your order!'
  );

  // Back to products page

  await page.locator('#back-to-products').click();

  // Reset App State again

  await inventoryPage.resetAppState();

  // Logout

  await inventoryPage.logout();
});