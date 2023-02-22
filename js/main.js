const nome=document.getElementById("nome");
const km=document.getElementById("km");
const eta=document.getElementById("eta");
const div=document.getElementById("biglietto");

const prezzo=0.21;
let sconto;
let biglietto;

const genera=document.getElementById("genera");
const annulla=document.getElementById("annulla");

genera.addEventListener("click", function(){
    sconto=1;
    biglietto="Standard";
    div.classList.add("show");
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

    document.getElementById("nome-passeggero").innerHTML= nome.value;
    document.getElementById("tipo-biglietto").innerHTML=biglietto;
    document.getElementById("prezzo").innerHTML=prezzoBiglietto.toFixed(2)+"€";
});

annulla.addEventListener("click", function(){
    div.classList.remove("show");
    nome.value="";
    km.value="";
});