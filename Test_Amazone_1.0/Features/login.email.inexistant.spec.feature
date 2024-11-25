# TA015
Feature: Connexion à Amazon

  Scenario: Afficher un message d'erreur avec des identifiants invalides
    Given je navigue vers la page d'accueil d'Amazon
    When je clique sur "Se connecter"
    And je remplis l'adresse e-mail avec "email_incorrect@exemple.com"
    And je clique sur le bouton "Continuer"
    Then je devrais voir un message d'erreur affiché
