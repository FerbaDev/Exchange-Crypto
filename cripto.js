
class Cripto {
    constructor(nombre, ticker, chain, precio) {
        this.nombre = nombre;
        this.ticker = ticker;
        this.chain = chain;
        this.precio = precio;
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

// select
const listaCriptos = document.getElementById("mi-select");

for (cripto of criptomonedas) {
    listaCriptos.innerHTML += `<option class="criptoElegida" value="${cripto.nombre}">${cripto.nombre}</option>`
}

// inputs

const botonComprar = document.querySelector(".botonComprar");

botonComprar.addEventListener('click', comprarCripto);

function comprarCripto(e) {
    e.preventDefault();

    const criptoSeleccionada = document.querySelector("#mi-select");
    console.log(criptoSeleccionada.value);
    const criptoElegida = criptomonedas.find((cripto) => cripto.nombre == criptoSeleccionada.value);
    console.log(criptoElegida);

    let ingreseMonto = document.getElementById("monto");

    let recibe = document.getElementById("recibe");

    let total = ingreseMonto.value / criptoElegida.precio;
    
    recibe.innerHTML = `<p>vas a recibir ${total} ${criptoElegida.nombre}</p>`;
    localStorage.setItem("compra", `se compra ${total} ${criptoElegida.nombre} por ${ingreseMonto.value} USD`);
}

let botonCambioModo = document.querySelector(".cambioModo");