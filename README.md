# Projet de Tests Amazon

Ce projet de tests est conçu pour automatiser la validation des différentes fonctionnalités du site Amazon. L'utilisation de Playwright garantit une exécution fluide et une vérification détaillée de chaque composant du site. Les fonctionnalités clés testées incluent la navigation sur le site, les recherches, la création de comptes, et la gestion du panier, afin d'assurer une expérience utilisateur optimale.



### Objectifs

- **Assurer le bon fonctionnement des fonctionnalités essentielles** du site Amazon, comme la recherche, l'authentification, et la gestion des commandes.
- **Fournir une couverture de test** complète pour les principaux parcours utilisateurs.
- **Automatiser les tests** afin d'augmenter la rapidité de la vérification et réduire les erreurs humaines.

## Prérequis

Avant de pouvoir exécuter ce projet, vous devez installer certains outils indispensables :

1. **Node.js (version 14 ou supérieure)** :
   - Téléchargez Node.js depuis [nodejs.org](https://nodejs.org/).
   - Pour vérifier l'installation, exécutez la commande suivante dans votre terminal :
     ```bash
     node -v
     ```

2. **npm (généralement installé avec Node.js)** :
   - Vérifiez l'installation avec la commande suivante :
     ```bash
     npm -v
     ```

3. **Playwright** :
   - Installez Playwright en exécutant la commande suivante dans le répertoire du projet :
     ```bash
     npm install playwright
     ```

4. **Autres Dépendances** :
   - Assurez-vous de bien installer toutes les autres dépendances en utilisant la commande :
     ```bash
     npm install
     ```

## Structure du Projet

Le projet est organisé en différents dossiers pour une meilleure clarté et maintenabilité.

### Détails des Dossiers :

- **fixtures/** : Contient le fichier `playwright-setup.js`, utilisé pour configurer l'environnement avant le lancement des tests. Il peut inclure des configurations globales, des paramètres de test, et des hooks.

- **features/** : Contient les fichiers `.feature` écrits en langage Gherkin. Ces fichiers décrivent les scénarios de test de manière lisible par les humains, ce qui facilite la compréhension des exigences et de la couverture de test.

- **pages/** : Regroupe les **Page Object Models (POM)** du projet. Chaque page ou fonctionnalité du site Amazon est représentée par un fichier `.js`, encapsulant la logique d'interaction avec les éléments de la page. Cela permet de séparer la logique de test de la logique d'interaction.

- **tests/** : Contient les fichiers de test Playwright en JavaScript ou TypeScript. Chaque fichier correspond à une fonctionnalité ou un ensemble de fonctionnalités spécifiques du site Amazon.

- **playwright.config.js** : Fichier de configuration pour Playwright. On y définit des paramètres comme les navigateurs utilisés, les options de test, les temps d'attente, ainsi que les chemins vers les dossiers de test et de sortie.

- **results.json** : Fichier généré automatiquement après l'exécution des tests. Il contient les résultats détaillés, permettant d'analyser les succès et les échecs de chaque cas de test.

## Exécution des Tests

Pour lancer l'ensemble des tests, utilisez la commande suivante dans le terminal, à partir du répertoire principal du projet :

```bash
npx playwright test
```

### Exécution de Tests Spécifiques

Pour exécuter un test spécifique, vous pouvez préciser le fichier à tester. Par exemple, pour tester le processus de paiement :

```bash
npx playwright test tests/amazon_checkout.test.js
```

### Utilisation de Playwright UI

Pour avoir une interface visuelle permettant de voir l'état des tests en direct et de naviguer entre les résultats, utilisez :

```bash
npx playwright test --ui
```

Cette interface est particulièrement utile pour visualiser les échecs et pour analyser les "traces" de chaque test.

## Arborescence du Projet

Voici une vue d'ensemble de l'arborescence du projet, montrant la structure des différents dossiers et fichiers :

```
Projet de Tests Amazon
├─ README.md
├─ Screenshots
│  └─ Amazon Playwright Test.png
└─ Test_Amazone_1.0
   ├─ .venv
   │  ├─ Include
   │  ├─ Lib
   │  │  └─ site-packages
   │  ├─ pyvenv.cfg
   │  └─ Scripts
   │     ├─ python.exe
   │     └─ pythonw.exe
   ├─ alltests.spec.ts
   ├─ Features
   │  ├─ add.product.cart.spec.feature
   │  ├─ check.account.link.spec.feature
   │  ├─ check.amazon.homepage.test.feature
   │  ├─ check.amazon.search.test.feature
   │  ├─ check.cart.icon.spec.feature
   │  ├─ check.footer.spec.feature
   │  ├─ check.help.link.spec.feature
   │  ├─ check.logo.spec.feature
   │  ├─ Check.product.quantity.cart.spec.feature
   │  ├─ check.returns.orders.link.spec.feature
   │  ├─ check.search.bar.spec.feature
   │  ├─ create.account.spec.feature
   │  ├─ delete.product.cart.spec.feature
   │  ├─ login.email.existant.spec.feature
   │  ├─ login.email.inexistant.spec.feature
   │  ├─ logout.spec.feature
   │  ├─ search.product.by.category.spec.feature
   │  └─ search.product.by.filters.spec.feature
   ├─ Fixture
   │  └─ playwright-setup.js
   ├─ npx playwright test testssearch.pro.txt
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  ├─ CartPage.js
   │  ├─ CategoryPage.js
   │  ├─ CheckoutPage.js
   │  ├─ CreateAccountPage.js
   │  ├─ HomePage.js
   │  ├─ LoginPage.js
   │  └─ ProductPage.js
   ├─ playwright.config.js
   ├─ results.json
   ├─ test-results
   │  ├─ tests-add.product.cart-Ama-1cda9--product-and-add-it-to-cart
   │  │  └─ trace.zip
   │  ├─ tests-amazon_checkout-Procéder-au-checkout
   │  │  └─ trace.zip
   │  ├─ tests-amazon_home_page-Vér-cf436-ontenu-de-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-amazon_search-Recher-b0a9c--avec-la-barre-de-recherche
   │  │  └─ trace.zip
   │  ├─ tests-check-account-link-V-8cdf0-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check-cart-icon-Véri-e7e62-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check-footer-Vérifie-1b525-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check-help-link-Véri-8514e-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check-logo-Vérifier--767a5-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check-returns-orders-f0e33-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check-search-bar-Vér-c2003-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check.account.link-V-11873-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check.amazon.homepag-b1f31-ontenu-de-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check.amazon.search--ef2ec--avec-la-barre-de-recherche
   │  │  └─ trace.zip
   │  ├─ tests-check.cart.icon-Véri-d9ce4-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check.footer-Vérifie-709d9-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check.help.link-Véri-28871-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check.logo-Vérifier--a9dd7-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-Check.product.quanti-36db1-number-of-items-in-the-cart
   │  │  └─ trace.zip
   │  ├─ tests-Check.product.quanti-47aa0--product-and-add-it-to-cart
   │  │  └─ trace.zip
   │  ├─ tests-check.returns.orders-46449-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-check.search.bar-Vér-f2a72-sible-sur-la-page-d-accueil
   │  │  └─ trace.zip
   │  ├─ tests-create.account-Créer-un-nouveau-compte-Amazon
   │  │  └─ trace.zip
   │  ├─ tests-createAccount-Créer-un-nouveau-compte-Amazon
   │  │  └─ trace.zip
   │  ├─ tests-delete.product.cart--25a5e--to-cart-and-then-remove-it
   │  │  └─ trace.zip
   │  ├─ tests-login.email.existant-cd484-ully-with-valid-credentials
   │  │  └─ trace.zip
   │  ├─ tests-login.email.inexista-d6d9c-ge-with-invalid-credentials
   │  │  └─ trace.zip
   │  ├─ tests-logout-Amazon-Logout-7f143-nd-then-logout-successfully
   │  │  └─ trace.zip
   │  ├─ tests-product-Amazon-Produ-78bd9--product-and-add-it-to-cart
   │  │  └─ trace.zip
   │  ├─ tests-search.product.by.ca-a2bdb--d’une-catégorie-sur-Amazon
   │  │  └─ trace.zip
   │  ├─ tests-search.product.by.fi-dce9e--d’une-catégorie-sur-Amazon
   │  │  └─ trace.zip
   │  ├─ tests-searchbycat-Vérifier-1e541--d’une-catégorie-sur-Amazon
   │  │  └─ trace.zip
   │  ├─ tests-supp.product-Amazon--07ec3--to-cart-and-then-remove-it
   │  │  └─ trace.zip
   │  ├─ tests-testAmazonFilters-Vé-772c3--d’une-catégorie-sur-Amazon
   │  │  └─ trace.zip
   │  ├─ tests-verif.produit-Amazon-11b65-number-of-items-in-the-cart
   │  │  └─ trace.zip
   │  └─ tests-verif.produit-Amazon-69b6a--product-and-add-it-to-cart
   │     └─ trace.zip
   └─ tests
      ├─ add.product.cart.spec.js
      ├─ alltests.spec.ts
      ├─ amazon_checkout.test.js
      ├─ amazon_home_page.test.js
      ├─ amazon_search.test.js
      ├─ check-account-link.spec.js
      ├─ check-cart-icon.spec.js
      ├─ check-footer.spec.js
      ├─ check-help-link.spec.js
      ├─ check-logo.spec.js
      ├─ check-returns-orders-link.spec.js
      ├─ check-search-bar.spec.js
      ├─ check.account.link.spec.js
      ├─ check.amazon.homepage.test.js
      ├─ check.amazon.search.test.js
      ├─ check.cart.icon.spec.js
      ├─ check.footer.spec.js
      ├─ check.help.link.spec.js
      ├─ check.logo.spec.js
      ├─ Check.product.quantity.cart.spec.js
      ├─ check.returns.orders.link.spec.js
      ├─ check.search.bar.spec.js
      ├─ create.account.spec.js
      ├─ createAccount.spec.js
      ├─ delete.product.cart.spec.js
      ├─ login.email.existant.spec.js
      ├─ login.email.inexistant.spec.js
      ├─ logout.spec.js
      ├─ product.spec.js
      ├─ search.product.by.category.spec.js
      ├─ search.product.by.filters.spec.js
      ├─ searchbycat.spec.js
      ├─ supp.product.spec.js
      ├─ testAmazonFilters.spec.js
      └─ verif.produit.spec.js

```

## Fonctionnalités Testées

Les tests couvrent un éventail de fonctionnalités clés du site Amazon, y compris :

- **Recherche de Produits** : Validation de la fonctionnalité de recherche, incluant l'utilisation de filtres, la recherche par catégorie, etc.
- **Création de Compte** : Vérification du processus de création d'un compte Amazon, incluant la validation des emails existants et inexistants.
- **Gestion du Panier** : Tests pour ajouter, supprimer et modifier la quantité des produits dans le panier.
- **Page d'Accueil** : Vérification de la présence d'éléments essentiels comme le logo, la barre de recherche, et les liens importants tels que les retours, les commandes, et l'aide.

## Scénarios de Test

Les scénarios sont écrits de manière à simuler les actions typiques d'un utilisateur sur Amazon, en se concentrant sur :

- **L'expérience utilisateur** : Vérifier que toutes les interactions sont intuitives et fonctionnent comme prévu.
- **La robustesse des fonctionnalités** : Tester les scénarios positifs (cas où tout se passe bien) ainsi que les scénarios négatifs (mauvais mot de passe, produit non disponible, etc.).

