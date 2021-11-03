let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let infoitem1 = lines.shift();
let infoitem2 = lines.shift();
//let infoitem2 = lines.shift().split(" ");

//let codigopeca1 = +(infoitem1.split(" ")[0]);
let qtdpeca1 = +(infoitem1.split(" ")[1]);
let valorpeca1 = +(infoitem1.split(" ")[2]);

//let codigopeca2 = +(infoitem2.split(" ")[0]);
let qtdpeca2 = +(infoitem2.split(" ")[1]);
let valorpeca2 = +(infoitem2.split(" ")[2]);

let venda1 = qtdpeca1 * valorpeca1;
let venda2 = qtdpeca2 * valorpeca2;

let total = venda1 + venda2;
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
//console.log(valorpeca2);

