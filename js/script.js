// ESERCIZIO BICICLETTE
//stabilisco un Array di biciclette, specificandone nome e peso
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
// debug
console.table(bikesArray);
// calcolo quale, dall'Array, è la bicicletta col valore "peso" più basso
// stabilisco prima una variabile che comprende solo il valore del peso
/* let pesoBikesArray = bikesArray.peso;
let pesoMinimoArray = Math.min(pesoBikesArray);
console.log(pesoMinimoArray); */
let lightBike = bikesArray[0];
// console.log('light', lightBike);

bikesArray.forEach((element) =>{
    // console.log(element);
    if (element.peso < lightBike.peso)
    lightBike = element;
});

console.log(lightBike);


// e la stampo
document.getElementById("exercise1-results").innerHTML = `La bicicletta che pesa di meno, è la ${lightBike.nome} e pesa ${lightBike.peso} Kg`;

// ESERCIZIO SQUADRE DI CALCIO
// stabilisco un Array di squadre di calcio specificandone
// nome
// punti fatti
// falli subiti
// ma attribuirò 0 a questi ultimi due fattori
const footballSquads = [
    {
        squadName: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        squadName: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        squadName: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        squadName: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        squadName: "Salernitana",
        puntiFatti: 0,
        falliSubiti: 0,
    }, 
];
 // Genero numero dei punti fatti tra 1 e 12
 /* const punti = Math.floor(Math.random() * 12) + 1;

 const falli = Math.floor(Math.random() * 12) + 1; */
/* 
 for (let i = 0; i < footballSquads.length; i++) {
    
    footballSquads[i].falliSubiti = Math.floor(Math.random() * 12) + 1;
 } */

 footballSquads.forEach((team) => {
    team.puntiFatti = Math.floor(Math.random() * 12) + 1;
    team.falliSubiti = Math.floor(Math.random() * 12) + 1;
    // console.log(team);
});
console.table(footballSquads);


const footballSquadsStat = footballSquads.map (({squadName, falliSubiti}) => ({squadName, falliSubiti}));
console.table(footballSquadsStat);
 
/*  */

footballSquadsStat.forEach((teamStats) => {
    document.getElementById("exercise2-results").innerHTML += `<div>La squadra ${teamStats.squadName} ha subito ${teamStats.falliSubiti} falli</div>`;
});

// forEach 
// map [stesso n items ]
// filter [0 a n item]