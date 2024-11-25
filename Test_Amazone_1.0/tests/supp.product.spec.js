const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Amazon Cart Test', () => {
    test('should add a product to cart and then remove it', async ({ page }) => {
        // Initialisation des pages
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Étape 1 : Accédez à la page d'accueil
        await homePage.goTo();
        await expect(homePage.logo).toBeVisible();

        // Étape 2 : Vérifiez et acceptez la bannière de cookies si présente
        const acceptCookiesButton = page.locator('input[name="accept"]'); // Changez ce sélecteur selon le site
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }

        // Étape 3 : Recherchez un produit
        await homePage.searchForProduct('laptop');
        
        // Étape 4 : Sélectionner le premier produit dans la liste des résultats
        const firstProductLink = page.locator('.s-main-slot .s-result-item h2 a').first();
        await firstProductLink.click();

        // Étape 5 : Ajoutez le produit au panier
        await productPage.addToCart();

        // Vérifiez que le produit est bien ajouté au panier
        const cartCount = await productPage.getCartCount();
        expect(cartCount).toBe('1');  // Assurez-vous que le panier contient 1 article

        // Étape 6 : Aller au panier
        await checkoutPage.goToCart();

        // Étape 7 : Supprimer l'article du panier
        const deleteButton = page.locator('input[value="Supprimer"]'); // Sélecteur pour le bouton de suppression
        await deleteButton.click();

       
    });
});