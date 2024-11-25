# TA005
Feature: Vérification de l'icône du panier

  Scenario: Vérifier que l'icône du panier est visible sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When je vérifie que l'icône du panier est visible
    Then l'icône du panier devrait être affichée
