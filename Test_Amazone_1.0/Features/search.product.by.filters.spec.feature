# TA018
Feature: Vérification des filtres et sous-catégories sur Amazon

  Scenario: Vérifier les filtres et sous-catégories d’une catégorie sur Amazon
    Given je navigue vers la page d'accueil d'Amazon France
    When j'accepte la bannière de cookies si elle est présente
    And je sélectionne la catégorie "Informatique" dans le menu déroulant des catégories
    And je remplis le champ de recherche avec "ordinateur portable"
    And je clique sur le bouton de recherche
    And j'applique un filtre de prix de "200 à 500 EUR"
    And j'applique un filtre de marque "HP"
    Then je devrais voir des résultats correspondant aux filtres appliqués
    And je visualise les titres et les prix des premiers résultats
