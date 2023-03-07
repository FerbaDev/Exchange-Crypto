let peso, dolar, euro;
peso = "pesos";
dolar = "dolares";
euro = "euros";
let ars, usd, eur;
ars = 1;
usd = 365;
eur = 380;
alert("Bienvenido al exchange")

let select1, select2;
select1 = prompt("Seleccione moneda a vender: pesos, dolares o euros.");
select2 = prompt('Seleccione moneda a recibir: pesos, dolares o euros.');
let monto = Number.parseInt(prompt("Ingrese monto:"))
function venderPesos(moneda2, ref) {
    alert("Vas a recibir: " + monto / moneda2 + " " + ref);
}
function comprarPesos(moneda2, ref) {
    alert("Vas a recibir: " + monto * moneda2 + " " + ref);
}
if (select1 == peso && select2 == dolar) {
    venderPesos(usd, dolar);
} else if (select1 == peso && select2 == euro) {
    venderPesos(eur, euro);
} else if (select1 == dolar && select2 == peso){
    comprarPesos(usd, peso);
} else if (select1 == euro && select2 == peso) {
    comprarPesos(eur, peso);
} else {
    alert("Esa opción no está disponible")
};
