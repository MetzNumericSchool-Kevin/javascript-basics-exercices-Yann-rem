// //Exercice 1 : Définition de variables

// // Déclaration des constantes
// const nomBoutique = "Vesuve";
// const prixPotion = 10;

// // Déclaration des variables
// let nbPotions = 10;
// let estOuverte = true;

// // Exercice 2 : Affichage conditionnel

// // Gestion du message via un conditionnement
// const msg = estOuverte
//   ? `Bienvenue dans la boutique ${nomBoutique} Aventurier ! 🎉`
//   : `La boutique ${nomBoutique} est fermée, revenez plus tard Aventurier ! 😴`;

// // Impression du message dans la console
// console.log(msg);

// // Exercice 3 : Affichage conditionnel avec switch

// // Informtions
// console.log(
//   "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n" +
//     "1. Le nom de la boutique\n" +
//     "2. Le nom du Sorcier\n" +
//     "3. Le prix d'une potion de soin\n" +
//     "4. La quantité d'une potion de soin"
// );

// // Prompt
// const choix = parseInt(prompt("Quel est ton choix ? 🤔"));

// // Gestion du choix avec `switch`
// switch (choix) {
//   case 1:
//     console.log("Le nom de la boutique");
//     break;
//   case 2:
//     console.log("Le nom du Sorcier");
//     break;
//   case 3:
//     console.log("Le prix d'un potion de soin");
//     break;
//   case 4:
//     console.log("La quantité d'une potion de soin");
//     break;
//   default:
//     console.log(
//       "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
//     );
// }

// // Exercice 4 : Calcul du prix total d'une commande de potion 🪙

// // Prompt
// const quantiteDemande = parseInt(
//   prompt("Quelle quantité de potion de soin souhaites tu ?")
// );

// // Prix totale
// const prixTotale = quantiteDemande * prixPotion;

// // Affichage du résultat dans la console
// console.log(
//   `Prix de ${quantiteDemande} potions de soins : ${prixTotale} 🪙 mon cher Aventurier. 💸.`
// );

// // Exercice 5 : Bourse de l'Aventurier 💰

// // Argent initial
// let bourseAventurier = 50;

// // Vérification
// if (quantiteDemande > nbPotions) {
//   console.log("Désolé, il n'y a pas assez de potions en stock !");
// } else if (quantiteDemande * prixPotion > bourseAventurier) {
//   console.log(
//     "Désolé, vous n'avez pas assez d'argent pour acheter cette quantité de potions !"
//   );
// } else {
//   // Calculs : mise à jour du stock et de la bourse
//   nbPotions -= quantiteDemande;
//   bourseAventurier -= quantiteDemande * prixPotion;

//   // Message de confirmation
//   console.log(
//     `Merci pour votre achat ! Vous avez acheté ${quantiteDemande} potion(s).`
//   );
//   console.log(`Il reste ${nbPotions} potion(s) en stock.`);
//   console.log(
//     `Il vous reste ${bourseAventurier} pièces d'or dans votre bourse.`
//   );
// }

// Exercice 6 : Liste des potions

// Déclaration d'un tableau
const nomsPotions = ["Spiruline", "Vitamine C", "Vitamine D"];

// Affichage du tableau dans la console
console.log(nomsPotions);

// Exercice 7 : Affichage des potions

// Affichage de la première et de la dernière potion
console.log(`Première potion : ${nomsPotions[0]}`);
console.log(`Dernière potion : ${nomsPotions.at(-1)}`);

// Affichage de toutes les potions
console.log("Liste des potions :");
for (const nomPotion of nomsPotions) {
  console.log(nomPotion);
}

// Exerice 8 : Ajout d'une nouvelle potion

// Ajout d'une nouvelle potion
nomsPotions.push("Magnésium");

// Affichage de la liste mise à jour
console.log(nomsPotions);

// Exercice 9 : Finally, nope

// Suppression d'un élément
nomsPotions.pop("Magnésium");

// Affichage de la liste mise à jour
console.log(nomsPotions);

// Exercice 10 : Rangeons les informations de la potion de soin dans un objet 🧹

// Création d'un objet
const informationsPotion = {
  nom: "Spiruline",
  prix: 10,
  stock: 20,
};

// Affichage de l'objet dans la console
console.log(informationsPotion);

// Exercice 11 : Affichons les informations de la potion

// Affiche le nom de la potion en utilisant la notation pointée .
console.log(informationsPotion.nom);

// Affiche le prix de la potion en utilisant la notation crochet []
console.log(informationsPotion["prix"]);

// Execice 12 : C'est l'heure de faire l'inventaire...

const inventaire = [
  {
    nom: "Spiruline",
    prix: 10,
    stock: 15,
  },
  {
    nom: "Vitamine C",
    prix: 15,
    stock: 20,
  },
  {
    nom: "Vitamine D",
    prix: 20,
    stock: 40,
  },
];
