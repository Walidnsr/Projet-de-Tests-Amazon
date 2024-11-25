// testAmazonFilters.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier les filtres et sous-catégories d’une catégorie sur Amazon', async ({ page }) => {
    // 1. Aller sur la page d'accueil d'Amazon France
    await page.goto('https://www.amazon.fr');


            // Étape 2 : Vérifiez et acceptez la bannière de cookies si présente
            const acceptCookiesButton = page.locator('input[name="accept"]'); // Changez ce sélecteur selon le site
            if (await acceptCookiesButton.isVisible()) {
                await acceptCookiesButton.click();
            }
            
    // 2. Sélectionner la catégorie "Informatique" dans le menu déroulant des catégories
    await page.selectOption('#searchDropdownBox', { label: 'Informatique' });
});