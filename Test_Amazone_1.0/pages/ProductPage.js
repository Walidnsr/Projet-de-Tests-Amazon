
class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async goTo(url) {
        await this.page.goto(url);
    }

    async getProductTitle() {
        await this.page.waitForSelector('#productTitle', { timeout: 5000 });
        return await this.page.innerText('#productTitle');
    }

    async getProductPrice() {
        await this.page.waitForSelector('.a-price', { timeout: 5000 });
        return await this.page.innerText('.a-price');
    }

    async addToCart() {
        await this.page.waitForSelector('#add-to-cart-button', { state: 'visible' });
        await this.page.click('#add-to-cart-button');
        await this.page.waitForTimeout(2000); 
    }

    async getCartCount() {
       
        await this.page.waitForSelector('#nav-cart-count', { timeout: 10000 });
        const countText = await this.page.innerText('#nav-cart-count');
        
        
        const cartCount = countText.match(/\d+/) ? countText.match(/\d+/)[0] : '0';
        return cartCount;
    }
}

module.exports = ProductPage;
