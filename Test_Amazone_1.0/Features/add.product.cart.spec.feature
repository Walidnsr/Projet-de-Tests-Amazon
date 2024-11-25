# TA001
Feature: Test produit Amazon

  Scenario: Rechercher un produit et l'ajouter au panier
    Given je suis sur la page d'accueil d'Amazon
    When j'accepte la bannière de cookies si présente
    And je recherche "laptop"
    And je sélectionne le premier produit
    Then je devrais voir le titre et le prix du produit
    And j'ajoute le produit au panier
    Then le panier devrait contenir "1" article
