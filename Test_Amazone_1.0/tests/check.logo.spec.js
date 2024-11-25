// TA008
// tests/check-logo.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le logo Amazon est visible sur la page d\'accueil', async ({ page }) => {

    // Naviguer vers la page d'accueil d'Amazon.fr
    await page.goto('https://www.amazon.fr'); 

    // Sélecteur du logo
    const logo = page.locator('#nav-logo-sprites'); 

    // Vérifie que le logo est visible
    await expect(logo).toBeVisible(); 

    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
