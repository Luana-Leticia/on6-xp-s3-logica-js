const query = require("synchronous-user-input");

function somaProgressiva(numero){
    let soma = 0;
    for(let contador = 1; contador <= numero; contador++){
        soma += contador;
    }
    return soma;
}

console.log("SOMA PROGRESSIVA (N): 1 + 2 + ... + N")
let num;
do {
    num = Number(query("Por favor, digite um número não negativo N: "));
} while(num < 0)
const valorSomaProgressiva = somaProgressiva(num);
console.log(`A soma progressiva de ${num} é ${valorSomaProgressiva}.`);