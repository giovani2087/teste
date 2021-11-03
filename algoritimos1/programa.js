// Importações do projeto
let teclado = require('prompt-sync')();


//Entrada de Dados

let valor1 = teclado('Digite o primeiro valor: ');
let valor2 = teclado('Digite o segundo valor: ');



//Processamento
let v1 = parseFloat(valor1);
let v2 = parseFloat(valor2);
let soma = v1 + v2;


// SAIDA
// Você digigou o valor
console.log(`Resultado: ${soma}`)
//console.log('Você digitou o valor', valor2);
//console.log(`Você Digitou o valor ${valor1}`)