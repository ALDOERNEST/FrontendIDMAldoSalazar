import {
    Given,
    When,
    Then
  } from "@cucumber/cucumber";

  import { Page, Browser, chromium, expect } from "@playwright/test";

  let browser: Browser;
  let page: Page;

  Given('que un navegador web está en la página de inicio de sesión de saucelabs', async function () {
    // Add this to the launch options to run the tests in headless mode: {headless: false}
    browser = await chromium.launch({headless: false ,slowMo: 500 });
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
  });
  When('un usuario ingresa el nombre de usuario {string}, la contraseña {string} y hace clic en el botón de inicio de sesión', async function (username: string, password: string) {
    await page.fill('input[data-test="username"]', username);
    await page.fill('input[data-test="password"]', password);
    await page.click('input[data-test="login-button"]');
  }); 

  Then('la URL contendrá el subdirectory', async function () {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');});
    
  Then('agrego al carrito', async function () {
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  // ✅ NUEVO
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  
// ✅ click en carrito (icono arriba a la derecha)
  await page.click('.shopping_cart_link');
  
  // ✅ click en Checkout
  await page.click('button[data-test="checkout"]');




  });


  Then('lleno Formulario', async function () {
  
  // ✅ llenar formulario
  await page.fill('input[data-test="firstName"]', 'Aldo');
  await page.fill('input[data-test="lastName"]', 'QA');
  await page.fill('input[data-test="postalCode"]', '12345');

  // ✅ click en Continue
  await page.click('input[data-test="continue"]');

  // ✅ click en Finish
  await page.click('button[data-test="finish"]');

  // ✅ validación final (compra completada)
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
 
  await browser.close();
  });

  
   
 