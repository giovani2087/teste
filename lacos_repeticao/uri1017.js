let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

let tempo = lines.shift();
let viagem_media = lines.shift();

let consumo = 12;

let litros_necessarios = viagem_media / consumo * tempo;

//X = Y * 2;

console.log(litros_necessarios.toFixed(3));


