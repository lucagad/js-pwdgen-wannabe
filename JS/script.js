/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22

1. Dichiarazione Variabili
2. Richiesta input
3. Visualizzo a video il risultato

*/

const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");

const favColor = prompt("Inserisci il tuo colore preferito");

console.log( firstName, lastName, favColor);

document.getElementById("output-info").innerHTML += firstName +  lastName + favColor + "22"

