# TA017
Feature: Vérification des filtres et sous-catégories sur Amazon

  Scenario: Vérifier les filtres et sous-catégories d’une catégorie sur Amazon
    Given je navigue vers la page d'accueil d'Amazon France
    When j'accepte la bannière de cookies si elle est présente
    And je sélectionne la catégorie "Informatique" dans le menu déroulant des catégories
    Then je devrais voir les produits de la catégorie "Informatique"
