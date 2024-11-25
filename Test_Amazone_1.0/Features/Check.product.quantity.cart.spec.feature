# TA009
Feature: Test des produits sur Amazon

  Scenario: Rechercher un produit et l'ajouter au panier
    Given je navigue vers la page d'accueil d'Amazon
    When j'accepte la bannière de cookies si présente
    And je recherche un produit "laptop"
    And je sélectionne le premier produit
    Then je devrais voir le titre et le prix du produit
    And j'ajoute le produit au panier
    And le nombre d'articles dans le panier devrait être "1"

  Scenario: Vérifier le nombre d'articles dans le panier
    Given je navigue vers la page d'accueil d'Amazon
    When j'accepte la bannière de cookies si présente
    And je recherche un produit "laptop"
    And je sélectionne le premier produit
    And j'ajoute le produit au panier
    And je vais au panier
    Then le nombre d'articles dans le panier devrait être "1"
