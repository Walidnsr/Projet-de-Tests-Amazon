module.exports = {
    timeout: 60000,  // Augmenter le délai d'attente global à 60 secondes
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        baseURL: 'https://www.amazon.fr',
        actionTimeout: 30000,  // Augmenter le délai d'attente pour les actions
    },
    reporter: [['list'], ['json', { outputFile: 'results.json' }]],
};
