let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

let infoitem1 = lines.shift();
let infoitem2 = lines.shift();
//let infoitem2 = lines.shift().split(" ");

//let codigopeca1 = +(infoitem1.split(" ")[0]);
let X1 = +(infoitem1.split(" ")[0]);
let Y1 = +(infoitem1.split(" ")[1]);

let X2 = +(infoitem2.split(" ")[0]);
let Y2 = +(infoitem2.split(" ")[1]);
//let valorpeca1 = +(infoitem1.split(" ")[2]);
let XX= Math.pow((X2 - X1),2);
let YY= Math.pow((Y2 - Y1),2);
let XY = XX + YY;

let raiz = Math.sqrt(XY)

console.log(raiz.toFixed(4));