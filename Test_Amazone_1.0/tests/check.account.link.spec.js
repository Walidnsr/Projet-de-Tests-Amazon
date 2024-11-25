// TA002
// tests/check-account-link.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le lien "Votre Compte" est visible sur la page d\'accueil', async ({ page }) => {

    // Naviguer vers la page d'accueil
    await page.goto('https://www.amazon.fr'); 

    // Sélecteur du lien "Votre Compte"
    const accountLink = page.locator('#nav-link-accountList'); 

    // Vérifie que le lien est visible
    await expect(accountLink).toBeVisible();
    
    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
