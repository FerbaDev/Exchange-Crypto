/*******************    **************************** */
/*   sección compra de criptomonedas     */

class Cripto {
    constructor(nombre, ticker, chain, precio) {
        this.nombre = nombre;
        this.ticker = ticker;
        this.chain = chain;
        this.precio = precio;
    }
}

/************* objetos - criptos */

const cripto1 = new Cripto("Bitcoin", "BTC", "bitcoin", 28000);
const cripto2 = new Cripto("Ether", "ETH", "ethereum", 1800);
const cripto3 = new Cripto("Tether", "USDT", "ethereum", 1);
const cripto4 = new Cripto("BNB", "BNB", "bsc", 330);
const cripto5 = new Cripto("Ripple", "XRP", "bsc", 0.44);
const cripto6 = new Cripto("Uniswap", "UNI", "ethereum", 6.3);
const cripto7 = new Cripto("PancakeSwap", "CAKE", "bsc", 3.8);
const cripto8 = new Cripto("Aave", "AAVE", "ethereum", 77);
const cripto9 = new Cripto("Dogecoin", "DOGE", "bsc", 0.07);
const cripto10 = new Cripto("Polkadot", "DOT", "bsc", 6.2);


/********* array  ************/

const criptomonedas = [cripto1, cripto2, cripto3, cripto4, cripto5, cripto6, cripto7, cripto8, cripto9, cripto10];

console.log(criptomonedas[0].nombre);


/****************** función comprar criptos *********/

alert("Bienvenido al exchange. Presione para continuar.")
let criptoSeleccionada = prompt("Seleccione criptomoneda a comprar");

console.log (criptomonedas.find((cripto) => cripto.nombre == criptoSeleccionada));



let montoEnDolares = Number.parseInt(prompt("Seleccione monto en dólares"))


/******************* funcion recibe criptos */

function recibeCripto(montoEnDolares, criptoPrecio) {
    let recibe = 0;
    recibe = montoEnDolares / criptoPrecio;
    return recibe;
}

console.log(recibeCripto());
