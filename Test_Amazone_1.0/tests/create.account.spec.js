// TA012

const { test, expect } = require('@playwright/test');
const CreateAccountPage = require('../pages/CreateAccountPage');

test('Créer un nouveau compte Amazon', async ({ page }) => {
    const createAccountPage = new CreateAccountPage(page);

    await createAccountPage.goTo();

    
    const name = 'Test User';
    const email = `testuser${Date.now()}@example.com`; 
    const password = 'Password123!';
    await createAccountPage.fillCreateAccountForm(name, email, password);

    // Soumettre le formulaire
    await createAccountPage.submitForm();

    // Vérifier que la création de compte a réussi en vérifiant une élément sur la page suivante
    await expect(page).toHaveURL(/.*register/);

    // Ajoute un délai de 2 secondes avant la fermeture du test
    await page.waitForTimeout(2000);
});
