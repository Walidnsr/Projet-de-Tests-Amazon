// tests/check-help-link.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que le lien "Aide" est visible sur la page d\'accueil', async ({ page }) => {
    await page.goto('https://www.amazon.fr'); // Naviguer vers la page d'accueil
    const helpLink = page.locator('text=Aide'); // Sélecteur pour le texte "Aide"
    await expect(helpLink).toBeVisible(); // Vérifie que le lien "Aide" est visible
});
