const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Rechercher un produit avec la barre de recherche', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
    // Étape 2 : Vérifiez et acceptez la bannière de cookies si présente
    const acceptCookiesButton = page.locator('input[name="accept"]'); // Changez ce sélecteur si nécessaire
    if (await acceptCookiesButton.isVisible()) {
        await acceptCookiesButton.click();
    }    
    await homePage.searchForProduct('ordinateur portable');
    
    const searchResults = page.locator('.s-search-results');
    await expect(searchResults).toBeVisible();
});
