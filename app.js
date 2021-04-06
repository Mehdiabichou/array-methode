const array = ["pomme", "orange", "banane", "kiwi"];

console.log(array.join("-"));

const tableau = [{
        id: 22,
        nom: "abichou",
        prenom: "mehdi",
        age: "40 ans",
    },
    {
        id: 45,
        nom: "kalbous",
        prenom: "haifa",
        age: "30 ans",
    },
    {
        id: 5,
        nom: "couscous",
        prenom: "mehdi",
        age: "50 ans",
    },

    {
        id: 5,
        nom: "abdessalem",
        prenom: "houda",
        age: "41 ans",
    },
];
// -----------------methode Sort--------------------------
const calendar = [10, 5, 60, 1, 100];
calendar.sort(function (a, b) {
    return a - b;
});
console.log(calendar);

// --------------------methode slice--------------------
const primeur = [
    "orange",
    "bannane",
    "piment",
    "citrouille",
    "fraise",
    "citron",
    "kiwi",
];
const legume = primeur.slice(2, 4);
console.log(legume);

// ------------methode find-----------

// const found = tableau.filter((element) => {
//   return element.id === 5;
// });
// console.log(found);
// =%£

// for (let i = 0; i < found.length; i++) {
//   console.log(found[i]);
// }
// console.log(tableau[1].nom);

// -------------boucle foreach--------

// const {
//     nom,
//     id,
//     prenom,
//     age
// } = tableau[0];

// console.log(prenom);

// tableau.forEach(function ({
//     nom,
//     prenom,
//     age
// }) {
//     return console.log(nom + " " + age + " " + prenom)
// })

// for (user of tableau) {
//     console.log(user)
// };
// for (let i = 0; i < tableau.length; i++) {
//     console.log(tableau[i])
// }

// ----------------methode filter----------------

// const tableau2 = tableau.filter((user) => {
//     return user.prenom == "mehdi"
// }).map(function (data) {
//     console.log(data);
// })
// const tableau3 = tableau
//   .filter((user) => {
//     return user.prenom != "mehdi";
//   })
//   .map(function (data) {
//     console.log(data);
//   });

// const str = "bonjour la famille";

// const word = str.split(" ");
// console.log(word[0]);
// console.log(str.join("-"));