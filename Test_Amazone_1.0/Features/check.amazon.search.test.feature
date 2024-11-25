# TA004
Feature: Recherche d'un produit avec la barre de recherche

  Scenario: Rechercher un produit et vérifier les résultats
    Given je navigue vers la page d'accueil d'Amazon
    When j'accepte la bannière de cookies si présente
    And je recherche un produit "ordinateur portable"
    Then les résultats de la recherche devraient être visibles
