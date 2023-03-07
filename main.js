let peso, dolar, euro;
peso = "peso";
dolar = "dolar";
euro = "euro";
let ars, usd, eur;
ars = 1;
usd = 365;
eur = 380;
alert("Bienvenido al exchange")

let select1, select2;
select1 = prompt("Seleccione moneda a vender: peso, dolar o euro.");
select2 = prompt('Seleccione moneda a recibir: peso, dolar o euro.');
let monto = Number.parseInt(prompt("Ingrese monto:"))
function venderPesos(moneda2) {
    alert("Vas a recibir: " + monto / moneda2);
}
function comprarPesos(moneda2) {
    alert("Vas a recibir: " + monto * moneda2);
}
if (select1 == peso && select2 == dolar) {
    venderPesos(usd);
} else if (select1 == peso && select2 == euro) {
    venderPesos(eur);
} else if (select1 == dolar && select2 == peso){
    comprarPesos(usd);
} else if (select1 == euro && select2 == peso) {
    comprarPesos(eur);
} else {
    alert("Esa opción no está disponible")
};
