// TA005
// tests/check-cart-icon.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que l\'icône du panier est visible sur la page d\'accueil', async ({ page }) => {

    // Naviguer vers la page d'accueil
    await page.goto('https://www.amazon.fr'); 

    // Sélecteur de l'icône du panier
    const cartIcon = page.locator('#nav-cart'); 

    // Vérifie que l'icône du panier est visible
    await expect(cartIcon).toBeVisible(); 

    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
