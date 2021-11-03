let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();

let A = parseInt(valor1);
let B = parseInt(valor2);
let C = parseInt(valor3);
let D = parseInt(valor4);

let X = parseInt (A * B - C * D);


console.log(`DIFERENCA = ${X}`)