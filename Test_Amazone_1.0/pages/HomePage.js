class HomePage {
    constructor(page) {
        this.page = page;
        this.logo = page.locator('#nav-logo-sprites');
        this.searchBar = page.locator('#twotabsearchtextbox');
        this.cart = page.locator('#nav-cart');
    }

    async goTo() {
        await this.page.goto('https://www.amazon.fr');
    }

    async searchForProduct(product) {
        await this.searchBar.fill(product);
        await this.page.locator('#nav-search-submit-button').click();
    }
}
module.exports = HomePage;
