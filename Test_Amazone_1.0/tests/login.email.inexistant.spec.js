// TA015
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test.describe('Amazon Login Test', () => {

    test('should show error message with invalid credentials', async ({ page }) => {
        // Initialisation des pages
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        // Étape 1 : Accédez à la page d'accueil
        await homePage.goTo();
        await expect(homePage.logo).toBeVisible();

        // Étape 2 : Cliquez sur "Se connecter" pour accéder à la page de connexion
        await page.locator('#nav-link-accountList').click();

        // Étape 3 : Remplissez l'adresse e-mail et cliquez sur "Continuer"
        await loginPage.emailInput.fill('email_incorrect@exemple.com');
        await page.getByRole('button', { name: /continuer/i }).click();

        // Étape 4 : Vérifiez si un message d'erreur est affiché
        const errorMessage = await page.locator('#auth-error-message-box').isVisible();
        expect(errorMessage).toBe(true);
      
        // Ajoute un délai de 2 secondes avant la fermeture du test
        await page.waitForTimeout(2000);
     
    });
});