let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');


let R = lines.shift();
let pi = 3.14159
let valor1 = 4/3
let R3 = parseFloat(Math.pow(R,3));

//let C = parseFloat(Math.pow(A,2));

let volume = valor1 * pi * R3

console.log(`VOLUME = ${volume.toFixed(3)}`);