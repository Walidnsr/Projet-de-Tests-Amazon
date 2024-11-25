# TA011
Feature: Vérification de la barre de recherche

  Scenario: Vérifier que la barre de recherche est visible sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When je vérifie que la barre de recherche est visible
    Then la barre de recherche devrait être affichée
