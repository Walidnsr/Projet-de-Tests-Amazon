// TA014
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test.describe('Amazon Login Test', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        // Initialisation des pages
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        // Étape 1 : Accédez à la page d'accueil
        await homePage.goTo();
        await expect(homePage.logo).toBeVisible();

        // Étape 2 : Cliquez sur "Se connecter" pour accéder à la page de connexion
        await page.locator('#nav-link-accountList').click();

        // Étape 3 : Remplissez l'adresse e-mail et cliquez sur "Continuer"
        await loginPage.emailInput.fill('walidnassirelhak1@gmail.com');

        // Utilisez getByRole pour cliquer sur le bouton "Continuer"
        await page.getByRole('button', { name: /continuer/i }).click();

        // Étape 4 : Remplissez le mot de passe et cliquez sur "S'identifier"
        await loginPage.passwordInput.fill('L*!xH#dDgdY-4Te');
        await page.getByRole('button', { name: /s'identifier/i }).click();

        // Étape 5 : Vérifiez si la connexion est réussie
        await page.waitForSelector('#nav-link-accountList-nav-line-1', { timeout: 100000 });
        const accountName = await page.locator('#nav-link-accountList-nav-line-1').innerText();
        expect(accountName).not.toContain('Bonjour, Identifiez-vous');

        // Ajoute un délai de 2 secondes avant la fermeture du test
        await page.waitForTimeout(2000);
    });

    

     
    });
