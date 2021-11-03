let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();

let A = parseFloat(valor1);
let B = parseFloat(valor2);
let C = parseFloat(valor3);
let X = parseFloat (A*2/10 + B*3/10 + C*5/10).toFixed(1);


console.log(`MEDIA = ${X}`)
