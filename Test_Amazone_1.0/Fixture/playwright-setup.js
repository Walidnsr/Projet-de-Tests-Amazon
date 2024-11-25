// fixtures.js
const { chromium } = require('playwright');

let browser;
let context;
let page;

beforeAll(async () => {
    // Passer `{ headless: false }` pour afficher la fenêtre du navigateur
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
});

afterAll(async () => {
    await browser.close();
});

module.exports = { browser, context, page };