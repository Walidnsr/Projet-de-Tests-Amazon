// TA016
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

// Test de déconnexion AmazonS
test.describe('Amazon Logout Test', () => {
    test('should login and then logout successfully', async ({ page }) => {
        // Initialisation des pages
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        // Étape 1 : Accédez à la page d'accueil
        await homePage.goTo();
        await expect(homePage.logo).toBeVisible();

        // Étape 2 : Cliquez sur "Se connecter" pour accéder à la page de connexion
        await page.locator('#nav-link-accountList').click();

        // Étape 3 : Remplissez le formulaire de connexion
        await loginPage.emailInput.fill('walidnassirelhak1@gmail.com');
        await page.getByRole('button', { name: /continuer/i }).click();
        await loginPage.passwordInput.fill('#4u%Y+!CahaGUF+');
        await page.getByRole('button', { name: /s'identifier/i }).click();

        // Étape 4 : Vérifiez que l'utilisateur est bien connecté
        await page.waitForSelector('#nav-link-accountList-nav-line-1', { timeout: 100000 });
        const accountName = await page.locator('#nav-link-accountList-nav-line-1').innerText();
        expect(accountName).not.toContain('Bonjour, Identifiez-vous');
        console.log('Connexion réussie :', accountName);

        // Étape 5 : Survolez le menu du compte utilisateur pour afficher les options
        await page.locator('#nav-link-accountList').hover();

        // Étape 6 : Cliquez sur le bouton "Se déconnecter"
        await page.waitForSelector('a#nav-item-signout', { timeout: 10000 });
        await page.locator('a#nav-item-signout').click();

        // Ajoute un délai de 2 secondes avant la fermeture du test
        await page.waitForTimeout(2000);



 
    
    });
});
