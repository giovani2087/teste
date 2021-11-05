"use strict";
var Personagem = /** @class */ (function () {
    function Personagem() {
        this.nome = "";
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
    }
    return Personagem;
}());
var sansa;
sansa = new Personagem();
sansa.nome = 'Sansa Stark';
sansa.ataque = 10;
sansa.defesa = 20;
sansa.vida = 100;
//console.log("person :>>", sansa);
var jon = new Personagem();
jon.nome = "jon Snow";
jon.ataque = 80;
jon.defesa = 70;
jon.energia = 90;
jon.vida = 40;
//console.log("person :>>", jon);
console.log("person :>>", [jon, sansa]);
