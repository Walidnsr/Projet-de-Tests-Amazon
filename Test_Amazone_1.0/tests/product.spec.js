const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Amazon Product Test', () => {
    test('should search for a product and add it to cart', async ({ page }) => {
        // Initialisation des pages
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Étape 1 : Accédez à la page d'accueil
        await homePage.goTo();
        await expect(homePage.logo).toBeVisible();

        // Étape 2 : Vérifiez et acceptez la bannière de cookies si présente
        const acceptCookiesButton = page.locator('input[name="accept"]'); // Changez ce sélecteur si nécessaire
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }

        // Étape 2 : Recherchez un produit
        await homePage.searchForProduct('laptop');
        
        // Étape 3 : Sélectionner le premier produit (utilisez un sélecteur approprié)
        const firstProductLink = page.locator('.s-main-slot .s-result-item h2 a').first();
        await firstProductLink.click();

        // Étape 4 : Obtenez le titre et le prix du produit
        const title = await productPage.getProductTitle();
        const price = await productPage.getProductPrice();
        console.log(`Title: ${title}`);
        console.log(`Price: ${price}`);

        // Étape 5 : Ajoutez le produit au panier
        await productPage.addToCart();

        // Vérifiez le nombre d'articles dans le panier
        const cartCount = await productPage.getCartCount();
        expect(cartCount).toBe('1');  // S'assurer que le produit est ajouté au panier
    });
});
