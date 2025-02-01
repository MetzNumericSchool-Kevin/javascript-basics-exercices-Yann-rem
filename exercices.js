//Exercice 1 : Définition de variables

// Constantes
const nomBoutique = "Boutique d'Archibald 🧙‍♂️";
const prix = 10;

// Variables
let stock = 10;
let estOuverte = true;

// Exercice 2 : Affichage conditionnel
console.log(
  estOuverte
    ? `Bienvenue dans la boutique '${nomBoutique}' aventurier ! 🎉`
    : `La boutique ${nomBoutique} est fermée, revenez plus tard aventurier ! 😴`
);

// Exercice 3 : Affichage conditionnel avec `switch`
console.log(
  "Bienvenue dans mon humble boutique aventurier. Que veux-tu savoir ? 🤔\n" +
    "1. Le nom de la boutique\n" +
    "2. Le nom du Sorcier\n" +
    "3. Le prix d'une potion de soin\n" +
    "4. La quantité d'une potion de soin"
);

// Prompt
const choix = parseInt(prompt("Quel est ton choix aventurier ? 🤔"));

// Affiche l'information demandée
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
    console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
}

// Exercice 4 : Calcul du prix total d'une commande de potion 🪙

// Prompt
const quantite = parseInt(prompt("Quelle quantité de potion de soin 🧪 souhaites-tu acheter aventurier ? 🤔"));

// Prix total
const prixTotal = quantite * prix;

// Affichage du résultat dans la console
console.log(`Prix de ${quantite} potions de soins : ${prixTotal} 🪙 mon cher aventurier. 💸.`);

// Exercice 5 : Bourse de l'aventurier 💰

// Argent initial
let bourse = 50;

// Vérifie si l'aventurier a assez d'argent
if (bourse < prixTotal) {
  console.log("Désolé, vous n'avez pas assez d'argent pour acheter cette quantité de potions de soins 🧪 !");
} else if (quantite > stock) {
  // Vérifie la disponibilité de potions
  console.log("Désolé aventurier, il n'y a pas assez de potions de soins 🧪 en stock !");
} else {
  // Calculs : mise à jour du stock d'Archibald 🧙‍♂️ et de la bourse de l'aventurier
  stock -= quantite;
  bourse -= prixTotal;

  // Message de confirmation
  console.log(`Merci pour votre achat ! Vous avez acheté ${quantite} potion(s).`);
  console.log(`Il reste ${stock} potion(s) de soins en stock.`);
  console.log(`Il vous reste ${bourse} pièces d'or dans votre bourse.`);
}

// Exercice 6 : Liste des potions

// Tableau
const potions = ["potion de force", "potion de mana", "potion d'endurance"];

// Affichage du tableau dans la console
console.log(potions);

// Exercice 7 : Affichage des potions

// Affichage de la première et de la dernière potion dans la console
console.log(`Première potion : ${potions[0]}`);
console.log(`Dernière potion : ${potions.at(-1)}`);

// Affichage de toutes les potions avec boucle `for`
console.log("Liste des potions :");
for (const potion of potions) {
  console.log(`Nous avons de la ${potion} 🧪 !`);
}

// Exerice 8 : Ajout d'une nouvelle potion

// Ajout d'une nouvelle potion dans le tableau avec `push`
potions.push("potion de vitesse");

// Affichage de la liste des potions mise à jour
console.log(potions);

// Exercice 9 : Finally, nope

// Suppression de la nouvelle potion avec `pop`
potions.pop("potion de vitesse");

// Affichage de la liste des potions mise à jour
console.log(potions);

// Exercice 10 : Rangeons les informations de la potion de soin dans un objet 🧹

// Création d'un objet pour stocker les informations d'une potion de soins
const potion = {
  nom: "potion de soin",
  prix: 10,
  stock: 20,
};

// Affichage de l'objet dans la console
console.log(potion);

// Exercice 11 : Affichons les informations de la potion

// Affichage du nom de la potion en utilisant la notation pointée `.`
console.log(potion.nom);

// Affiche du prix de la potion en utilisant la notation crochet `[]`
console.log(potion["prix"]);

// Exercice 12 : C'est l'heure de faire l'inventaire...
const inventaire = [
  {
    nom: "potion de force",
    prix: 10,
    stock: 15,
  },
  {
    nom: "potion de mana",
    prix: 15,
    stock: 20,
  },
  {
    nom: "potion d'endurance",
    prix: 20,
    stock: 40,
  },
  {
    nom: "potion de vitesse",
    prix: 15,
    stock: 10,
  },
];

// Exercice 13 : Aventurier, regarde tout ce que je vends !

// Affichage de l'inventaire à l'aventurier avec une boucle `for`
console.log("Aventurier, regarde tout ce que je vends ! 🧪");
for (let i = 0; i < inventaire.length; i++) {
  console.log(`Nom: ${inventaire[i].nom}`);
  console.log(`Prix: ${inventaire[i].prix}`);
  console.log(`Stock: ${inventaire[i].stock}`);
}

// Affichage de l'inventaire à l'aventurier avec `for` sur `Object.keys`
console.log("Aventurier, regarde tout ce que je vends ! 🧪");
inventaire.forEach((potion) => {
  for (const cle of Object.keys(potion)) {
    console.log(`${cle.charAt(0).toUpperCase() + cle.slice(1)}: ${potion[cle]}`);
  }
});

// Affichage de l'inventaire à l'aventurier avec `for ... in`
console.log("Aventurier, regarde tout ce que je vends ! 🧪");
for (const potion of inventaire) {
  for (const cle in potion) {
    console.log(`${cle.charAt(0).toUpperCase() + cle.slice(1)}: ${potion[cle]}`);
  }
}

// Affichage de l'inventaire à l'aventurier avec `for ... of`
console.log("Aventurier, regarde tout ce que je vends ! 🧪");
for (const potion of inventaire) {
  console.log("Nom : ", potion.nom);
  console.log("Prix : ", potion.prix);
  console.log("Stock : ", potion.stock);
}
