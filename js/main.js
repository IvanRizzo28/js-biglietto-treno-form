const nome=document.getElementById("nome");
const km=document.getElementById("km");
const eta=document.getElementById("eta");

const prezzo=0.21;
let sconto;
let biglietto="Standard";

const genera=document.getElementById("genera");
const annulla=document.getElementById("annulla");

genera.addEventListener("click", function(){
    sconto=1;
    let prezzoBiglietto=km.value * prezzo;
    if (eta.value==="minorenne") {
        sconto=0.8;
        biglietto="Sconto minorenni";
    }
    else if (eta.value==="over65") {
        sconto=0.6;
        biglietto="Sconto Over 65";
    }

    prezzoBiglietto=prezzoBiglietto * sconto;

    console.log("Il prezzo del biglietto è di: "+prezzoBiglietto.toFixed(2)+"€");
});