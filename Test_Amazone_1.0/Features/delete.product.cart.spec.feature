# TA013
Feature: Gestion du panier Amazon

  Scenario: Ajouter un produit au panier et le supprimer
    Given je navigue vers la page d'accueil d'Amazon
    When j'accepte la bannière de cookies si elle est présente
    And je recherche un produit "laptop"
    And je sélectionne le premier produit dans la liste des résultats
    And j'ajoute le produit au panier
    Then le panier devrait contenir 1 article
    When je vais au panier
    And je supprime l'article du panier
