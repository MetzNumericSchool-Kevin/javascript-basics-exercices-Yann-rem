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

// Exercice 3 : Affichage conditionnel avec switch

// Informtions
console.log(
  "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n" +
    "1. Le nom de la boutique\n" +
    "2. Le nom du Sorcier\n" +
    "3. Le prix d'une potion de soin\n" +
    "4. La quantité d'une potion de soin"
);

// Prompt
const choix = parseInt(prompt("Quel est ton choix ? 🤔"));

// Gestion du choix avec `switch`
switch (choix) {
  case 1:
    console.log("Le nom de la boutique");
    break;
  case 2:
    console.log("Le nom du Sorcier");
    break;
  case 3:
    console.log("Le prix d'un potion de soin");
    break;
  case 4:
    console.log("La quantité d'une potion de soin");
    break;
  default:
    console.log(
      "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
    );
}
