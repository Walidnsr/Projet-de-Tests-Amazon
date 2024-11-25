// tests/check-footer.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le footer est visible sur la page d\'accueil', async ({ page }) => {
    await page.goto('https://www.amazon.fr'); // Naviguer vers la page d'accueil
    const footer = page.locator('div#navFooter'); // Sélecteur pour le footer
    await expect(footer).toBeVisible(); // Vérifie que le footer est visible
});
