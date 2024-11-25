# TA016
Feature: Déconnexion de l'utilisateur d'Amazon

  Scenario: Se connecter et se déconnecter avec succès
    Given je navigue vers la page d'accueil d'Amazon
    When je clique sur "Se connecter"
    And je remplis le formulaire de connexion avec l'adresse e-mail "walidnassirelhak1@gmail.com" et le mot de passe "L*!xH#dDgdY-4Te"
    Then je devrais voir que l'utilisateur est connecté
    And je survole le menu du compte utilisateur
    When je clique sur "Se déconnecter"
    Then je devrais être déconnecté avec succès
