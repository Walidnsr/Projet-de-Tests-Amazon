// tests/checkout.spec.js
const { test, expect } = require('@playwright/test');
const CheckoutPage = require('../pages/CheckoutPage');

test('Procéder au checkout', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    
    // Aller au panier
    await checkoutPage.goToCart();
    await expect(page).toHaveURL(/cart/); // Vérifie que l'on est bien sur la page du panier

    // Procéder au checkout
    await checkoutPage.proceedToCheckout();
    await expect(page).toHaveURL(/signin|checkout/); // Vérifie que l'on est sur la page de connexion ou du checkout

    // Place order if needed (attention : cela effectue l'achat !)
    // await checkoutPage.placeOrder();
});
