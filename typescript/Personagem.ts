

class Personagem {
    nome: string = "";
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;
}



let sansa: Personagem;
sansa = new Personagem();
sansa.nome = 'Sansa Stark';
sansa.ataque = 10;
sansa.defesa = 20;
sansa.vida = 100;

//console.log("person :>>", sansa);

let jon: Personagem = new Personagem();
jon.nome = "jon Snow";
jon.ataque = 80;
jon.defesa = 70;
jon.energia = 90;
jon.vida = 40;

//console.log("person :>>", jon);

console.log("person :>>", [jon, sansa]);


