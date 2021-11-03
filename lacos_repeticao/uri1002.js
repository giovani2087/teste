let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();

let A = parseFloat(valor1);
let B = parseFloat(3.14159);
let C = parseFloat(Math.pow(A,2));
let X = parseFloat (B * C).toFixed(4);


console.log(`A=${X}`)

