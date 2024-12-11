// Importation du module prompt-sync
const prompt = require('prompt-sync')();

// Classe Calculator respectant les principes SOLID
class Calculator {
    // Addition
    add(a, b) {
        return a + b;
    }

    // Soustraction
    subtract(a, b) {
        return a - b;
    }

    // Multiplication
    multiply(a, b) {
        return a * b;
    }

    // Division
    divide(a, b) {
        if (b === 0) {
            throw new Error("La division par zéro n'est pas autorisée.");
        }
        return a / b;
    }

    // Puissance
    power(a, b) {
        return Math.pow(a, b);
    }

    // Racine carrée
    sqrt(a) {
        if (a < 0) {
            throw new Error("La racine carrée d'un nombre négatif n'est pas définie.");
        }
        return Math.sqrt(a);
    }

    // Factorielle
    factorial(n) {
        if (n < 0) {
            throw new Error("La factorielle d'un nombre négatif n'est pas définie.");
        }
        if (n === 0 || n === 1) return 1;
        return n * this.factorial(n - 1);
    }
}
// Fonction pour valider les entrées utilisateur
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        throw new Error("Entrée invalide. Veuillez entrer un nombre valide.");
    }
    return number;
}
