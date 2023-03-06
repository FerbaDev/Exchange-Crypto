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
select1 = prompt("Seleccione moneda a : peso, dolar o euro.");
select2 = prompt('Seleccione moneda a recibir: peso, dolar o euro.');
let monto = Number.parseInt(prompt("Ingrese monto:"))

if (select1 == peso && select2 == dolar) {
    alert("Vas a recibir: " + monto / usd);
} else if (select1 == peso && select2 == euro) {
    alert("Vas a recibir: " + monto / eur);
} else {
    alert("Por el momento esa opción no está disponible")
}