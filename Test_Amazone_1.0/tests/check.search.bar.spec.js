// TA011
// tests/check-search-bar.spec.js
const { test, expect } = require('@playwright/test');

test('Vérifier que la barre de recherche est visible sur la page d\'accueil', async ({ page }) => {

    // Naviguer vers la page d'accueil
    await page.goto('https://www.amazon.fr'); 

    // Sélecteur de la barre de recherche
    const searchBar = page.locator('#twotabsearchtextbox'); 

    // Vérifie que la barre de recherche est visible
    await expect(searchBar).toBeVisible(); 

    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
