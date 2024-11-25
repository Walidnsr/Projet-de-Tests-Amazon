# TA012
Feature: Création d'un nouveau compte Amazon

  Scenario: Créer un nouveau compte Amazon avec des informations valides
    Given je navigue vers la page de création de compte Amazon
    When je remplis le formulaire de création de compte avec un nom, un email et un mot de passe
    Then la création de compte devrait être réussie
