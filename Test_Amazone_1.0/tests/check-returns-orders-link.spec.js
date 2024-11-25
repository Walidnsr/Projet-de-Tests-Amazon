// tests/check-returns-orders-link.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le lien "Retours et Commandes" est visible sur la page d\'accueil', async ({ page }) => {
    await page.goto('https://www.amazon.fr'); // Naviguer vers la page d'accueil
    const returnsOrdersLink = page.locator('#nav-orders'); // Sélecteur du lien "Retours et Commandes"
    await expect(returnsOrdersLink).toBeVisible(); // Vérifie que le lien est visible
});
