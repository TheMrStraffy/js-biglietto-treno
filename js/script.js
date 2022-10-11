let etaUtente = parseInt(prompt("Quanti anni ha?"));
let kmRichiesti = parseInt(prompt("Quanti chilometri vuole percorrere?"));
const euroAlKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;

let calcoloBiglietto = kmRichiesti * euroAlKm;
let prezzoFinale;
let applicaSconto;

if( (isNaN(etaUtente)) || (isNaN(kmRichiesti)) || ((etaUtente && kmRichiesti) === 0)){
  alert("Inserire un numero valido");
  document.getElementById('what').innerHTML = `
  <div class="card mb-2 py-3">
    whatchu doin bruv? <br>
  </div>
  `;
}

if(etaUtente < 18){
  applicaSconto = calcoloBiglietto *scontoMinorenni;
  calcoloBiglietto -= applicaSconto;
  document.getElementById('output').innerHTML = `
  <div class="card mb-2 py-3">
    Eta Utente: ${etaUtente} <br>
  </div>
  <div class="card mb-2 py-3">
    Km Richiesti: ${kmRichiesti} <br>
  </div>
  <div class="card mb-2 py-3">
    Euro al Km: ${euroAlKm} <br>
  </div>
  <div class="card mb-2 py-3">
    Sconto Minorenni: ${scontoMinorenni * 100}% <br>
  </div>
  <div class="card mb-2 py-3">
    Calcolo Sconto:  ${applicaSconto.toFixed(2)} &euro; <br>
  </div>
  <div class="card mb-2 py-3">
    Prezzo Finale: ${calcoloBiglietto.toFixed(2)} &euro; <br>
  </div>
`;
} else if (etaUtente > 65){
  applicaSconto = calcoloBiglietto * scontoOver65;
  calcoloBiglietto -= applicaSconto;
  document.getElementById('output').innerHTML = `
  <div class="card mb-2 py-3">
    Eta Utente: ${etaUtente} <br>
  </div>
  <div class="card mb-2 py-3">
    Km Richiesti: ${kmRichiesti} <br>
  </div>
  <div class="card mb-2 py-3">
    Euro al Km: ${euroAlKm} <br>
  </div>
  <div class="card mb-2 py-3">
    Sconto Over 65: ${scontoOver65 * 100}% <br>
  </div>
  <div class="card mb-2 py-3">
    Calcolo Sconto:  ${applicaSconto.toFixed(2)} &euro; <br>
  </div>
  <div class="card mb-2 py-3">
    Prezzo Finale: ${calcoloBiglietto.toFixed(2)} &euro; <br>
  </div>
`;
} else {
  document.getElementById('output').innerHTML = `
  <div class="card mb-2 py-3">
    Eta Utente: ${etaUtente} <br>
  </div>
  <div class="card mb-2 py-3">
    Km Richiesti: ${kmRichiesti} <br>
  </div>
  <div class="card mb-2 py-3">
    Euro al Km: ${euroAlKm} <br>
  </div>
  <div class="card mb-2 py-3">
    Prezzo Finale: ${calcoloBiglietto.toFixed(2)} &euro; <br>
  </div>
`;
}