// tests/check-cart-icon.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que l\'icône du panier est visible sur la page d\'accueil', async ({ page }) => {
    await page.goto('https://www.amazon.fr'); // Naviguer vers la page d'accueil
    const cartIcon = page.locator('#nav-cart'); // Sélecteur de l'icône du panier
    await expect(cartIcon).toBeVisible(); // Vérifie que l'icône du panier est visible
});
