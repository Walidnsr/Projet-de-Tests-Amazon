// tests/check-account-link.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le lien "Votre Compte" est visible sur la page d\'accueil', async ({ page }) => {
    await page.goto('https://www.amazon.fr'); // Naviguer vers la page d'accueil
    const accountLink = page.locator('#nav-link-accountList'); // Sélecteur du lien "Votre Compte"
    await expect(accountLink).toBeVisible(); // Vérifie que le lien est visible
});
