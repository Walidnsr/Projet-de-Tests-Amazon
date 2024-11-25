// TA006
// tests/check-footer.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le footer est visible sur la page d\'accueil', async ({ page }) => {

    // Naviguer vers la page d'accueil
    await page.goto('https://www.amazon.fr'); 

    // Sélecteur pour le footer
    const footer = page.locator('div#navFooter'); 

    // Vérifie que le footer est visible
    await expect(footer).toBeVisible(); 
    
    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
