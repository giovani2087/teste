let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let valor1 = lines.shift();
let valor2 = lines.shift();

let A = parseInt(valor1);
let B = parseInt(valor2);
let X = A + B;

console.log(`X = ${X}`)
