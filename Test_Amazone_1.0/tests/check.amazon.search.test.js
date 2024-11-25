// TA004
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Rechercher un produit avec la barre de recherche', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
    //Vérifiez et acceptez la bannière de cookies si présente
    const acceptCookiesButton = page.locator('input[name="accept"]'); 
    if (await acceptCookiesButton.isVisible()) {
        await acceptCookiesButton.click();
    }    
    await homePage.searchForProduct('ordinateur portable');
    
    const searchResults = page.locator('.s-search-results');
    await expect(searchResults).toBeVisible();
    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
