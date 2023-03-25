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

alert("Bienvenido al exchange. Presione para continuar.")


let todasLasCriptos = criptomonedas.map((cripto) => cripto.nombre + " está en " + "$" + cripto.precio);


alert(todasLasCriptos.join("//"));


let criptoSeleccionada = prompt("Seleccione criptomoneda a comprar");
alert(`Usted seleccionó ${criptoSeleccionada}`);

let criptoPrecio = 0;

if (criptoSeleccionada === "Bitcoin") {
    criptoPrecio = 28000;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada === "Ether") {
    criptoPrecio = 1800;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada === "Tether") {
    criptoPrecio = 1;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada === "BNB") {
    criptoPrecio = 330;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada == "Ripple") {
    criptoPrecio = 0.44;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada == "Uniswap") {
    criptoPrecio = 6.3;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada == "PancakeSwap") {
    criptoPrecio = 3.8;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada == "Aave") {
    criptoPrecio = 77;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada == "Dogecoin") {
    criptoPrecio = 0.07;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else if (criptoSeleccionada == "Polkadot") {
    criptoPrecio = 6.2;
    alert(`El precio de esta cripto es ${criptoPrecio}`);
} else {
    alert("Esa opción no está disponible")
}




let montoEnDolares = Number.parseInt(prompt("Seleccione monto en dólares a comprar"))







let recibe = montoEnDolares / criptoPrecio;
alert(`Vas a recibir ${recibe} monedas`);

alert("Muchas gracias por operar con nosotros");




function filtrarBlockchain() {
    criptomonedas.forEach(cripto => {

        const criptoPorBlockchain = criptomonedas.filter(cripto => cripto.chain == prompt("filtre por blockchain:"));
        
        
    })
}
