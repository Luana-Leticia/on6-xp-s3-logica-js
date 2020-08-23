const query = require("synchronous-user-input");

function metrosParaMilimetros(distanciaEmMetros){
    return distanciaEmMetros*1000;
}

console.log("CONVERSÃO DE MEDIDAS ESPACIAIS (m -> mm)");

let distanciaMetros;
do {
    distanciaMetros = Number(query("Por favor, digite o valor da distância em metros (não digite um valor negativo): "));
}
while(distanciaMetros < 0)

const distanciaMilimetros = metrosParaMilimetros(distanciaMetros);
console.log(`Distância em milímetros: ${distanciaMetros} m equivale a ${distanciaMilimetros} mm.`);
