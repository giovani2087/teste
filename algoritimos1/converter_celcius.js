// Importações do projeto
let teclado = require('prompt-sync')();



// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = teclado("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);



