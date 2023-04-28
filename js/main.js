
let criptomonedas = [];

fetch("./js/criptos.json")
    .then(response => response.json())
    .then(data => {
        criptomonedas = data;
        cargarCriptos(criptomonedas);
        cargarRanking(criptomonedas);
    })


const listaCriptos = document.getElementById("select1");
const listaCriptos2 = document.getElementById("select2");
function cargarCriptos(criptos) {

    criptos.forEach(cripto => {
        listaCriptos.innerHTML += `<option class="criptoElegida" value="${cripto.nombre}">${cripto.nombre}</option>`;
        listaCriptos2.innerHTML += `<option class="criptoElegida" value="${cripto.nombre}">${cripto.nombre}</option>`;
    })
}

function comprar() {
    const criptoElegida = criptomonedas.find((cripto) => cripto.nombre == listaCriptos.value);
    const criptoElegida2 = criptomonedas.find((cripto) => cripto.nombre == listaCriptos2.value);
    let ingreseMonto = document.getElementById("monto");
    let monto = parseInt(ingreseMonto.value);
    let spancripto = document.getElementById("spancripto");
    spancripto.innerText = criptoElegida.nombre;
    let recibe = document.getElementById("recibe");
    if (criptoElegida != criptoElegida2 && monto > 0) {
        let totalCripto1 = (monto * criptoElegida.precio);
        let totalComprado = totalCripto1 / criptoElegida2.precio;
        recibe.innerHTML = `<p>vas a recibir ${totalComprado} ${criptoElegida2.nombre}</p>`;
        localStorage.setItem("compra", `se compra ${totalComprado} ${criptoElegida2.nombre} por un ${monto} de ${criptoElegida.nombre}`);
        console.log(`se compra ${totalComprado} ${criptoElegida2.nombre} por ${monto} ${criptoElegida.nombre}`);
        
    } else {
        recibe.innerHTML = `<p>ERROR</p>`;
    }
}

const botonComprar = document.querySelector(".botonComprar");

botonComprar.addEventListener("click", comprar);

const resetear = document.querySelector(".cero")
resetear.addEventListener("click", () => {
    recibe.innerHTML = ``;
    let inputMonto = document.getElementById("monto");
    inputMonto.value = "";
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
            <td>$ ${criptomoneda.precio} usd</td>
        `;

    tabla.append(fila);
    })
}

botonesRanking.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesRanking.forEach(boton => boton.classList.remove("active1"));
        e.currentTarget.classList.add("active1");

        if (e.currentTarget.id === "ethereum") {
            let criptoChainFilter = criptomonedas.filter(criptomoneda => criptomoneda.chain === e.currentTarget.id);
            cargarRanking(criptoChainFilter);
        } else if (e.currentTarget.id === "bsc") {
            let criptoChainFilter = criptomonedas.filter(criptomoneda => criptomoneda.chain === e.currentTarget.id);
            cargarRanking(criptoChainFilter);
        } else if (e.currentTarget.id === "defi") {
            let criptoUtility = criptomonedas.filter(criptomoneda => criptomoneda.utilidad === e.currentTarget.id);
            cargarRanking(criptoUtility);
        } else if (e.currentTarget.id === "precio") {
            let criptoRank = criptomonedas.sort(function(a, b){return b.precio - a.precio});
            cargarRanking(criptoRank);
        } else {
            let criptoRanking = criptomonedas.sort(function(a, b){return a.rank - b.rank});
            cargarRanking(criptoRanking);
        }
    })
})