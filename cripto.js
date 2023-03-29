

const bienvenido = () => {
    let nombre = prompt("Ingrese su nombre")
    return alert(`hola ${nombre}`)
}

bienvenido();

class Cripto {
    constructor(nombre, ticker, chain, precio) {
        this.nombre = nombre;
        this.ticker = ticker;
        this.chain = chain;
        this.precio = precio;
        this.comprar = function (monto) {
            let total = monto / this.precio;
            return alert(`usted va a comprar ${total} ${this.nombre}`);
            
        }
    }
}

const bitcoin = new Cripto("Bitcoin", "BTC", "bitcoin", 28000);
const ether = new Cripto("Ether", "ETH", "ethereum", 1800);
const tether = new Cripto("Tether", "USDT", "ethereum", 1);
const bnb = new Cripto("BNB", "BNB", "bsc", 330);
const ripple = new Cripto("Ripple", "XRP", "bsc", 0.44);
const uniswap = new Cripto("Uniswap", "UNI", "ethereum", 6.3);
const pancakeSwap = new Cripto("PancakeSwap", "CAKE", "bsc", 3.8);
const aave = new Cripto("Aave", "AAVE", "ethereum", 77);
const dogecoin = new Cripto("Dogecoin", "DOGE", "bsc", 0.07);
const polkadot = new Cripto("Polkadot", "DOT", "bsc", 6.2);

const criptomonedas = [bitcoin, ether, tether, bnb, ripple, uniswap, pancakeSwap, aave, dogecoin, polkadot];


alert("Bienvenido al exchange. Presione para continuar.");


let todasLasCriptos = criptomonedas.map((cripto) => cripto.nombre + " está en " + "$" + cripto.precio);


alert(todasLasCriptos.join("//"));

let criptoElegida = prompt("que cripto quiere comprar?");

const criptoSeleccionada = criptomonedas.find((cripto) => cripto.nombre == criptoElegida)
console.log(criptoSeleccionada);

let monto = prompt("ingrese monto");

if (criptoElegida == "Bitcoin") {
    bitcoin.comprar(monto);
} else if (criptoElegida == "Ether") {
    ether.comprar(monto);
} else if (criptoElegida == "Tether") {
    tether.comprar(monto);
} else if (criptoElegida == "BNB") {
    bnb.comprar(monto);
} else if (criptoElegida == "Ripple") {
    ripple.comprar(monto);
} else if (criptoElegida == "Uniswap") {
    uniswap.comprar(monto);
} else if (criptoElegida == "PancakeSwap") {
    pancakeSwap.comprar(monto);
} else if (criptoElegida == "Aave") {
    aave.comprar(monto);
} else if (criptoElegida == "Dogecoin") {
    dogecoin.comprar(monto);
} else if (criptoElegida == "Polkadot") {
    polkadot.comprar(monto);
} else {
    alert("asegurese de escribir el nombre con mayuscula");
}

alert(`Muchas gracias por operar con nosotros`);
