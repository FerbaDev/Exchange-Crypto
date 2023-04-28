

let todasLasCriptos = criptomonedas.map((cripto) => cripto.nombre + " está en " + "$" + cripto.precio);
let header = document.querySelector("header");
header.append(todasLasCriptos.join(" // "));


const listaCriptos = document.getElementById("mi-select");

for (let cripto of criptomonedas) {
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