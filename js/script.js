const bikesArray = [
    {
        nome: "Bianchi",
        peso: 4,
    },   {
        nome: "Franchi",
        peso: 3,
    },   {
        nome: "Mountain Bike",
        peso: 8,
    },   {
        nome: "Bianchi Usata",
        peso: 5,
    },
];

console.log(bikesArray);

let pesoMinimoArray = Math.min(...bikesArray.peso);
console.log(pesoMinimoArray);

const