const readline = require("readline-sync");

function avaliaParametros(parametro1, parametro2, parametro3){
    if(parametro1 && parametro2 && parametro3){
        return (parametro1 + parametro2) / parametro3;
    } else if(!(parametro1 || parametro2 || parametro3)){
        return "Não recebeu parâmetro.";
    } else {
        return parametro1 + parametro2 + parametro3;
    }
}

console.log("RETORNO DE ACORDO COM NÚMERO DE PARÂMETROS");
const param1 = Number(readline.question("Digite o primeiro parametro: "));
const param2 = Number(readline.question("Digite o segundo parametro: "));
const param3 = Number(readline.question("Digite o terceiro parametro: "));

const resultado = avaliaParametros(param1, param2, param3);
console.log(`Retorno da função: ${resultado}`);