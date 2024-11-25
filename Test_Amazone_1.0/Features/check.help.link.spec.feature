# TA007
Feature: Vérification du lien "Aide"

  Scenario: Vérifier que le lien "Aide" est visible sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When je vérifie que le lien "Aide" est visible
    Then le lien "Aide" devrait être affiché
