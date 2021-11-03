let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');


let contador = 0;
for (let i = 0; i <= 6; i++) {
    let numero = +lines[i];
    
    if(numero>0){contador++; }

 
         
    }
console.log(`${contador} valores positivos`);
console.log(`[${numero}]`);
   