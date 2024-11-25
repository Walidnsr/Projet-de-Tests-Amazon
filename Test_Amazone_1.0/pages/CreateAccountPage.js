// pages/CreateAccountPage.js

class CreateAccountPage {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#ap_customer_name'); // Champ "Nom"
        this.emailInput = page.locator('#ap_email'); // Champ "Email"
        this.passwordInput = page.locator('#ap_password'); // Champ "Mot de passe"
        this.passwordCheckInput = page.locator('#ap_password_check'); // Champ "Retaper le mot de passe"
        this.createAccountButton = page.locator('#continue'); // Bouton "Créer votre compte Amazon"
    }

    // Ouvrir la page de création de compte
    async goTo() {
        await this.page.goto('https://www.amazon.fr/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&language=en&pageId=frflex&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fcart%2Fview.html%3Fref_%3Dnav_signin&prevRID=E05Z6EJTY9T3HAXKKGDW&openid.assoc_handle=frflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    }

    // Remplir le formulaire de création de compte
    async fillCreateAccountForm(name, email, password) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.passwordCheckInput.fill(password);
    }

    // Soumettre le formulaire de création de compte
    async submitForm() {
        await this.createAccountButton.click();
    }
}

module.exports = CreateAccountPage;
