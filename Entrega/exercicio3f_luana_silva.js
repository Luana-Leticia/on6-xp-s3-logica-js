function imprimeTabela(){
    for(let contador = 1; contador <= 50; contador++){
        console.log(`${contador} - R$ ${(contador * 1.99).toFixed(2)}`)
    }
}

console.log("Lojas Quase Dois - Tabela de Preços");
imprimeTabela();