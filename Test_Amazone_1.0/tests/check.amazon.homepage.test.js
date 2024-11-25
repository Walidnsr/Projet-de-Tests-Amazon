// TA003
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Vérification du contenu de la page d\'accueil', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();

    // Vérifiez et acceptez la bannière de cookies si présente
    const acceptCookiesButton = page.locator('input[name="accept"]'); // Changez ce sélecteur si nécessaire
    if (await acceptCookiesButton.isVisible()) {
        await acceptCookiesButton.click();
    }   
    
    
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.searchBar).toBeVisible();
    await expect(homePage.cart).toBeVisible();
});
