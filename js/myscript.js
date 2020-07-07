var trattaUtente = parseInt(prompt("Km da percorrere"));
var etaUtente = parseInt(prompt("Inserisci la tua età"));

var etaOver = 65;
var etaMinorenni = 18;
var scontoMinorenni = (100*20)/100;
var scontoOver = (100*40)/100;
var prezzoBiglietto = 0.21 * trattaUtente;
document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto;

if (etaUtente < etaMinorenni) {
    prezzoBiglietto = prezzoBiglietto * (100 - scontoMinorenni);
    document.getElementById('biglietto-over').innerHTML = prezzoBiglietto;
}
else if (etaUtente > etaOver) {
    prezzoBiglietto = prezzoBiglietto * (100 - scontoOver);
    document.getElementById('biglietto-teen').innerHTML = prezzoBiglietto;
}

// console.log(prezzoBiglietto);
