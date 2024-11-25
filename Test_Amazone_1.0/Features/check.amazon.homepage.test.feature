# TA003
Feature: Vérification du contenu de la page d'accueil

  Scenario: Vérification de la visibilité des éléments sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When j'accepte la bannière de cookies si présente
    Then le logo devrait être visible
    And la barre de recherche devrait être visible
    And le panier devrait être visible
