let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

let valores = lines.shift();

let A = +(valores.split(" ")[0]);
let B = +(valores.split(" ")[1]);
let C = +(valores.split(" ")[2]);

//Para encontrar a área de um triângulo retângulo, basta dividir por 2 o resultado da multiplicação da base A pela altura C.
let triangulo = A * C / 2
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);

//PI * r², na qual PI equivale a 3,14 e r(C) é a medida do raio do círculo
let PI = (3.14159)
let C2 = Math.pow(C,2);
let circulo = PI * C2;
console.log(`CIRCULO: ${circulo.toFixed(3)}`);

//Para calcular a área de um trapézio basta somar a base maior(B) e base menor(A), multiplicar pela altura(C) e depois, basta dividir o resultado por dois.
let dois = +(2);
let trapezio = (B + A) * (C) / 2;
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);

// basta pegar a medida de um dos lados e elevar ao quadrado
let quadrado = Math.pow(B,2);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);

//A área de um retângulo pode ser calculada por meio da fórmula A = A * B

let retangulo = A * B;
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);


