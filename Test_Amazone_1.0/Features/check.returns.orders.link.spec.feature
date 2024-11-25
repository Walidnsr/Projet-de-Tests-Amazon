# TA010


  Scenario: Vérifier que le lien "Retours et Commandes" est visible sur la page d'accueil
    Given je navigue vers la page d'accueil d'Amazon
    When je vérifie que le lien "Retours et Commandes" est visible
    Then le lien "Retours et Commandes" devrait être affiché
