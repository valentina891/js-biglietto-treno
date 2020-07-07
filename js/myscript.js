var trattaUtente = prompt("Km da percorrere");
var etaUtente = parseInt(prompt("Inserisci la tua età"));


var prezzoBiglietto = 0.21 * trattaUtente;
console.log(prezzoBiglietto);
document.getElementById('biglietto-prezzo-pieno').innerHTML = prezzoBiglietto;
