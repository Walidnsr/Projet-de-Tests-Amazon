// tests/check-search-bar.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que la barre de recherche est visible sur la page d\'accueil', async ({ page }) => {
    await page.goto('https://www.amazon.fr'); // Naviguer vers la page d'accueil
    const searchBar = page.locator('#twotabsearchtextbox'); // Sélecteur de la barre de recherche
    await expect(searchBar).toBeVisible(); // Vérifie que la barre de recherche est visible
});
