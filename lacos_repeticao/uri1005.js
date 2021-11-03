let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let valor1 = lines.shift();
let valor2 = lines.shift();

let A = parseFloat(valor1);
let B = parseFloat(valor2);
let X = parseFloat (A*3.5/11 + B*7.5/11).toFixed(5);


console.log(`MEDIA = ${X}`)
