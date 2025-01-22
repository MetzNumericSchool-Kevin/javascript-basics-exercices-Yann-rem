//Exercice 1 : Définition de variables

// Déclaration des constantes
const nomBoutique = "Vesuve";
const prixPotion = 10;

// Déclaration des variables
let nbPotions = 10;
let estOuverte = false;

// Exercice 2 : Affichage conditionnel

// Gestion du message via un conditionnement
const msg = estOuverte
  ? `Bienvenue dans la boutique ${nomBoutique} Aventurier ! 🎉`
  : `La boutique ${nomBoutique} est fermée, revenez plus tard Aventurier ! 😴`;

// Impression du message dans la console
console.log(msg);
