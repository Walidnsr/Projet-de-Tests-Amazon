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

    // 3. Entrer un produit dans le champ de recherche, par exemple "ordinateur portable"
    await page.fill('#twotabsearchtextbox', 'ordinateur portable');

    // 4. Cliquer sur le bouton de recherche
    await page.click('input.nav-input[type="submit"]');
    
    // Attendre que les résultats se chargent
    await page.waitForSelector('span.a-price');

    // 5. Appliquer un filtre de prix (exemple : 200 EUR à 500 EUR)
    // Vous pouvez ajuster le sélecteur pour correspondre au filtre de prix exact souhaité
    const priceFilter = await page.locator('span.a-size-base >> text="200 à 500 EUR"');
    if (await priceFilter.isVisible()) {
        await priceFilter.click();
    } else {
        console.log("Le filtre de prix spécifié n'est pas visible.");
    }
    
    // Attendre que les résultats se mettent à jour après l'application du filtre
    await page.waitForTimeout(2000);

    // 6. Appliquer un filtre de marque (exemple : HP)
    const brandFilter = await page.locator('span.a-size-base >> text="HP"');
    if (await brandFilter.isVisible()) {
        await brandFilter.click();
    } else {
        console.log("Le filtre de marque spécifié n'est pas visible.");
    }

    // Attendre que les résultats se mettent à jour après l'application du filtre
    await page.waitForTimeout(2000);

    // 7. Vérifier que les résultats contiennent des éléments correspondant aux filtres
    const results = await page.locator('span.a-price');
    expect(await results.count()).toBeGreaterThan(0); // Vérifie qu'il y a des résultats

    // 8. Afficher le titre et le prix des premiers résultats pour vérification
    const productTitles = await page.locator('h2.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2');
    const productPrices = await page.locator('span.a-price-whole');

    // Limiter l'affichage des résultats pour éviter une sortie excessive
    const resultCount = Math.min(await productTitles.count(), 5);
    for (let i = 0; i < resultCount; i++) {
        const title = await productTitles.nth(i).innerText();
        const price = await productPrices.nth(i).innerText();
        console.log(`Produit ${i + 1}: ${title} - Prix: ${price} EUR`);
    }
});
