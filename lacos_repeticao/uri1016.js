let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

let Y = lines.shift();

X = Y * 2;

console.log(`${X} minutos`);