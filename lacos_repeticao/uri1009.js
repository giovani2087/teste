let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();

let A = parseFloat(valor1);
let B = parseFloat(valor2);
let C = parseFloat(valor3);
let X = parseFloat (B+C*15/100).toFixed(2);


console.log(`TOTAL = R$ ${X}`)