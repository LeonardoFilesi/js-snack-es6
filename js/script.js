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
console.log(bikesArray);
// calcolo quale, dall'Array, è la bicicletta col valore "peso" più basso
// stabilisco prima una variabile che comprende solo il valore del peso
let pesoBikesArray = bikesArray.peso;
let pesoMinimoArray = Math.min(pesoBikesArray);
console.log(pesoMinimoArray);
// e la stampo
document.getElementsByClassName("exercise1-results").innerHTML = `${pesoMinimoArray}`;

// ESERCIZIO SQUADRE DI CALCIO
// stabilisco un Array di squadre di calcio specificandone
// nome
// punti fatti
// falli subiti
// ma attribuirò 0 a questi ultimi due fattori
const footballSquads = [
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        nome: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },    {
        nome: "Salernitana",
        puntiFatti: 0,
        falliSubiti: 0,
    }, 
];
 // Genero numero dei punti fatti tra 1 e 12
 /* const punti = Math.floor(Math.random() * 12) + 1;

 const falli = Math.floor(Math.random() * 12) + 1; */

 for (let i = 0; i < footballSquads.length; i++) {
    footballSquads[i].puntiFatti = Math.floor(Math.random() * 12) + 1;
    footballSquads[i].falliSubiti = Math.floor(Math.random() * 12) + 1;
 }

 const footballSquadsStat = footballSquads.map (({nome, falliSubiti}) => ({nome, falliSubiti}));
 console.log(footballSquadsStat);

 
 document.getElementsByClassName("exercise2-results").innerHTML = `${footballSquadsStat}`;