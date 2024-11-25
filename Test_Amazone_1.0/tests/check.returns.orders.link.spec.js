// TA010 
// tests/check-returns-orders-link.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le lien "Retours et Commandes" est visible sur la page d\'accueil', async ({ page }) => {

    // Naviguer vers la page d'accueil
    await page.goto('https://www.amazon.fr'); 

    // Sélecteur du lien "Retours et Commandes"
    const returnsOrdersLink = page.locator('#nav-orders'); 

     // Vérifie que le lien est visible
    await expect(returnsOrdersLink).toBeVisible();

    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
