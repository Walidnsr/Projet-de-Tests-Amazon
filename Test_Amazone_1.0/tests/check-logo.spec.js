// tests/check-logo.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le logo Amazon est visible sur la page d\'accueil', async ({ page }) => {
    await page.goto('https://www.amazon.fr'); // Naviguer vers la page d'accueil d'Amazon.fr
    const logo = page.locator('#nav-logo-sprites'); // Sélecteur du logo
    await expect(logo).toBeVisible(); // Vérifie que le logo est visible
});
