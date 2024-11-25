# TA008
Feature: Vérification du logo Amazon

  Scenario: Vérifier que le logo Amazon est visible sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When je vérifie que le logo Amazon est visible
    Then le logo Amazon devrait être affiché
