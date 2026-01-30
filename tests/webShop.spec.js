const { test, expect } = require('@playwright/test');

test.describe('Demo Web Shop Tests', () => {

  // Runs before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
  });

  test('Demo Shop Site', async ({ page }) => {
 await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Register' }).dblclick();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('test');
  await page.getByRole('textbox', { name: 'Last name:' }).fill('user');
  await page.getByRole('textbox', { name: 'Email:' }).fill('testuser_215@gmail.com');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('test@123');
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('test@123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // await page.getByRole('link', { name: 'Log in' }).click();
  // await page.getByRole('textbox', { name: 'Email:' }).click();
  // await page.getByRole('textbox', { name: 'Email:' }).fill('testuser_206@gmail.com');
  // await page.getByRole('textbox', { name: 'Password:' }).fill('test@123');
  // await page.getByRole('button', { name: 'Log in' }).click();

  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('computer');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('computer');
  await page.locator('input.button-1.search-box-button').click();
  await page.getByRole('link', { name: 'Picture of Build your own computer' }).dblclick();
  await page.locator('#product_attribute_16_6_5').selectOption('17');
  await page.getByText('Processor * 2.2 GHz Intel').click();
  await page.getByRole('radio', { name: 'GB [+100.00]' }).check();
  await page.getByRole('radio', { name: 'Windows 10 [+60.00]' }).check();
  await page.getByRole('checkbox', { name: 'Total Commander [+5.00]' }).check();
  await page.locator('#add-to-cart-button-16').dblclick();
  await page.getByRole('radio', { name: '320 GB' }).check();
  await page.locator('#add-to-cart-button-16').dblclick();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
  await page.locator('input[name="removefromcart"]').check();
  await page.getByLabel('Country:').selectOption('41');
  await page.getByRole('textbox', { name: 'Zip / postal code:' }).fill('123456');
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.waitForTimeout(2000);

  await page.getByLabel('Country:').selectOption('41');
  await page.getByRole('textbox', { name: 'City:' }).fill('Ahmedabad');
  await page.getByRole('textbox', { name: 'Address 1:' }).fill('123, abc');
  await page.getByRole('textbox', { name: 'Zip / postal code:' }).fill('123456');
  await page.getByRole('textbox', { name: 'Phone number:' }).fill('7894561230');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('checkbox', { name: 'In-Store Pickup' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.locator('input.button-1.payment-method-next-step-button').click();
  await page.locator('input.button-1.payment-info-next-step-button').click();
  await page.locator('input.button-1.confirm-order-next-step-button').click();
  await page.locator('input.button-2.order-completed-continue-button').click();
  await page.waitForTimeout(2000);
  });
});
