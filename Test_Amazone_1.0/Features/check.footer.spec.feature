# TA006
Feature: Vérification du footer

  Scenario: Vérifier que le footer est visible sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When je vérifie que le footer est visible
    Then le footer devrait être affiché
