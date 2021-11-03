let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

let DISTANCIA = lines.shift();
let COMBUSTIVEL = lines.shift();

let CONSUMO = DISTANCIA / COMBUSTIVEL;


console.log(`${CONSUMO.toFixed(3)} km/l`);