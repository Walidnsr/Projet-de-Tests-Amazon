// pages/CategoryPage.js
class CategoryPage {
    constructor(page) {
        this.page = page;
        this.categoryTitle = page.locator('h1'); // Sélecteur pour le titre de catégorie
    }

    async navigateToCategory(categoryUrl) {
        await this.page.goto(categoryUrl);
    }
}

module.exports = CategoryPage;
