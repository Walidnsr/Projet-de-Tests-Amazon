# TA014
Feature: Connexion à Amazon

  Scenario: Se connecter avec des identifiants valides
    Given je navigue vers la page d'accueil d'Amazon
    When je clique sur "Se connecter"
    And je remplis l'adresse e-mail avec "walidnassirelhak1@gmail.com"
    And je clique sur le bouton "Continuer"
    And je remplis le mot de passe avec "L*!xH#dDgdY-4Te"
    And je clique sur le bouton "S'identifier"
    Then je devrais être connecté avec succès
    And le nom de mon compte ne devrait pas contenir "Bonjour, Identifiez-vous"
