let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

let valores = lines.shift();

let A = parseInt(valores.split(" ")[0]);
let B = +(valores.split(" ")[1]);
let C = +(valores.split(" ")[2]);

if ( A > B) {
    if (A > C)
    maior = A;
    else
    maior = C;
}
else  
    {
   
    if (B > C)
    maior = B;
    else
    maior = C;
    {
    }
 
}

console.log(`${maior} eh o maior`);