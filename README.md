# Calculatrice Interactive

Ce projet est une calculatrice interactive en ligne de commande, implémentée en JavaScript, respectant les principes SOLID.
Elle permet d'effectuer des opérations mathématiques de base et avancées tout en gérant les cas d'erreurs communs.

## Fonctionnalités

- **Opérations de base** :
  - Addition
  - Soustraction
  - Multiplication
  - Division (avec gestion de la division par zéro)

- **Opérations avancées** :
  - Puissance
  - Racine carrée (avec gestion des nombres négatifs)
  - Factorielle (avec gestion des nombres négatifs)

- **Validation des entrées utilisateur** :
  - Vérifie que les entrées sont des nombres valides.
  - Gestion des cas invalides.

- **Interface utilisateur** :
  - Menu interactif permettant de choisir les opérations.
  - Option pour quitter l'application.

## Prérequis

- Node.js installé sur votre machine.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone <URL_DU_DEPOT>
   cd <NOM_DU_DEPOT>
   ```

2. Installez le module `prompt-sync` :
   ```bash
   npm install prompt-sync
   ```

## Utilisation

1. Lancez l'application :
   ```bash
   node index.js
   ```

2. Suivez les instructions affichées pour choisir une opération et entrer des nombres.

## Exemple d'exécution

```
Choisissez une opération :
1. Addition (+)
2. Soustraction (-)
3. Multiplication (*)
4. Division (/)
5. Puissance (^)
6. Racine carrée (\u221a)
7. Factorielle (!)
8. Quitter
Votre choix : 1
Entrez le premier nombre : 5
Entrez le deuxième nombre : 3
Le résultat est : 8
```

