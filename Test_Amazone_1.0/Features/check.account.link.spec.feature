# TA002
  Scenario: Vérifier que le lien "Votre Compte" est visible sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When je vérifie que le lien "Votre Compte" est visible
    Then le lien "Votre Compte" devrait être affiché
