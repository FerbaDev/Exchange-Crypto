
class Cripto {
    constructor(nombre, ticker, chain, precio) {
        this.nombre = nombre;
        this.ticker = ticker;
        this.chain = chain;
        this.precio = precio;
    }
    comprar(monto) {
        let total = monto / this.precio;
        return alert(`usted va a comprar ${total} ${this.nombre}`);
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

//header
let todasLasCriptos = criptomonedas.map((cripto) => cripto.nombre + " está en " + "$" + cripto.precio);
let header = document.querySelector("header");
header.append(todasLasCriptos.join(" // "));

//seleccion
const listaCriptos = document.createElement("select");
listaCriptos.classList.add("listaCriptos");

for (cripto of criptomonedas) {
    listaCriptos.innerHTML += `<option class="criptoElegida" value="${cripto.nombre}">${cripto.nombre}</option>`
}

const topBox = document.querySelector(".top-box");

topBox.append(listaCriptos);

//empiezo con inputs

const criptoElegida = document.querySelectorAll(".criptoElegida");

listaCriptos.addEventListener("change", recuperarCriptoNombre);


function recuperarCriptoNombre() {
    let criptoSeleccionada = listaCriptos.value;
    return criptoSeleccionada;
}

let monto = document.getElementById("monto");
let montoForm = document.querySelector(".ingresoMonto")

montoForm.addEventListener("submit", (capturarMonto) => {
    capturarMonto.preventDefault();
    alert(monto.value);
})



// let criptoElegida = prompt("que cripto quiere comprar?");

// const criptoSeleccionada = criptomonedas.find((cripto) => cripto.nombre == criptoElegida);
// console.log(criptoSeleccionada);

// let monto = prompt("ingrese monto");

// criptoSeleccionada.comprar(monto);



// alert(`Muchas gracias por operar con nosotros`);
