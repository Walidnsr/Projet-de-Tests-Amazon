// pages/LoginPage.js
class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#ap_email'); // Sélecteur pour le champ d'email
        this.passwordInput = page.locator('#ap_password'); // Sélecteur pour le champ de mot de passe
        this.signInButton = page.locator('#signInSubmit'); // Sélecteur pour le bouton de connexion
    }

    async goTo() {
        await this.page.goto('https://www.amazon.fr/-/en/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2F-%2Fen%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'); // Naviguer vers la page de connexion
    }

    async login(email, password) {
        await this.emailInput.fill(email); // Remplit le champ d'email
        await this.passwordInput.fill(password); // Remplit le champ de mot de passe
        await this.signInButton.click(); // Clique sur le bouton de connexion
    }
}

module.exports = LoginPage;
