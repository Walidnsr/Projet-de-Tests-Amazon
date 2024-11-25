// TA007
// tests/check-help-link.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le lien "Aide" est visible sur la page d\'accueil', async ({ page }) => {

    // Naviguer vers la page d'accueil
    await page.goto('https://www.amazon.fr'); 

    // Sélecteur pour le texte "Aide"
    const helpLink = page.locator('text=Aide'); 

    // Vérifie que le lien "Aide" est visible
    await expect(helpLink).toBeVisible(); 

    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
