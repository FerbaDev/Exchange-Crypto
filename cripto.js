
class Cripto {
    constructor(rank, nombre, ticker, chain, precio) {
        this.rank = rank;
        this.nombre = nombre;
        this.ticker = ticker;
        this.chain = chain;
        this.precio = precio;
    }
    comprar(monto) {
        let recibe = document.getElementById("recibe");
        recibe.innerHTML = `<p>vas a recibir ${monto / this.precio} ${this.nombre}</p>`;
        localStorage.setItem("compra", `se compra ${monto / this.precio} ${this.nombre} por ${monto} USD`);
    }
}

const bitcoin = new Cripto(1, "Bitcoin", "BTC", "bitcoin", 28000);
const ether = new Cripto(2, "Ether", "ETH", "ethereum", 1800);
const tether = new Cripto(3, "Tether", "USDT", "ethereum", 1);
const bnb = new Cripto(4, "BNB", "BNB", "bsc", 330);
const ripple = new Cripto(5, "Ripple", "XRP", "bsc", 0.44);
const uniswap = new Cripto(6, "Uniswap", "UNI", "ethereum", 6.3);
const pancakeSwap = new Cripto(7, "PancakeSwap", "CAKE", "bsc", 3.8);
const aave = new Cripto(8, "Aave", "AAVE", "ethereum", 77);
const dogecoin = new Cripto(9, "Dogecoin", "DOGE", "bsc", 0.07);
const polkadot = new Cripto(10, "Polkadot", "DOT", "bsc", 6.2);

const criptomonedas = [bitcoin, ether, tether, bnb, ripple, uniswap, pancakeSwap, aave, dogecoin, polkadot];


let todasLasCriptos = criptomonedas.map((cripto) => cripto.nombre + " está en " + "$" + cripto.precio);
let header = document.querySelector("header");
header.append(todasLasCriptos.join(" // "));


const listaCriptos = document.getElementById("mi-select");

for (cripto of criptomonedas) {
    listaCriptos.innerHTML += `<option class="criptoElegida" value="${cripto.nombre}">${cripto.nombre}</option>`
}


const botonComprar = document.querySelector(".botonComprar");

botonComprar.addEventListener('click', () => {
    const criptoElegida = criptomonedas.find((cripto) => cripto.nombre == listaCriptos.value);
    let ingreseMonto = document.getElementById("monto");
    let monto = parseInt(ingreseMonto.value);
    criptoElegida.comprar(monto);
});

const resetear = document.querySelector(".cero")
resetear.addEventListener("click", () => {
    recibe.innerHTML = `<p></p>`;
})


let botonCambioModo = document.querySelector(".cambioModo");
const body = document.body;

let modoOscuro = localStorage.getItem("modo-oscuro");

function cambioAModoOscuro() {
    body.classList.add("modo-oscuro");
    botonCambioModo.innerText = "Modo claro";
    localStorage.setItem("modo-oscuro", "activado");
}

function volverAModoClaro() {
    body.classList.remove("modo-oscuro");
    botonCambioModo.innerText = "Modo oscuro";
    localStorage.setItem("modo-oscuro", "desactivado");
}

if (modoOscuro === "activado") {
    cambioAModoOscuro();
} else {
    volverAModoClaro();
}

botonCambioModo.addEventListener("click", () => {
    modoOscuro = localStorage.getItem("modo-oscuro");
    if (modoOscuro === "activado") {
        volverAModoClaro();
    } else {
        cambioAModoOscuro();
    }
})


const tabla = document.querySelector("#tabla");
const botonesRanking = document.querySelectorAll(".botonRanking");

function cargarRanking(criptosFiltradas) {

    tabla.innerHTML = "";
    
    criptosFiltradas.forEach(criptomoneda => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${criptomoneda.rank}</td>
            <td>${criptomoneda.nombre}</td>
            <td>${criptomoneda.chain}</td>
            <td>${criptomoneda.precio}</td>
        `;

    tabla.append(fila);
    })
}

cargarRanking(criptomonedas);

botonesRanking.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesRanking.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todas") {
            const criptoFilter = criptomonedas.filter(criptomoneda => criptomoneda.chain === e.currentTarget.id);
            cargarRanking(criptoFilter);
        } else {
            cargarRanking(criptomonedas)
        }
    })
})