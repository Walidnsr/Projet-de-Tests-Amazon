// pages/CheckoutPage.js
class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.cartButton = page.locator('#nav-cart'); // Accès au panier
        this.proceedToCheckoutButton = page.locator('input[name="proceedToRetailCheckout"]'); // Bouton de checkout dans le panier
        this.placeOrderButton = page.locator('input[name="placeYourOrder1"]'); // Bouton final de commande (dernier écran)
    }

    async goToCart() {
        await this.cartButton.click();
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }
}

module.exports = CheckoutPage;
