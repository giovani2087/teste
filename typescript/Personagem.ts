
import prompt from "prompt-sync";
class Personagem {
    constructor(public nome: string = "",
        public energia: number = 0,
        public vida: number = 0,
        public ataque: number = 0,
        public defesa: number = 0) {

    }

}

let teclado = prompt();
let sansa: Personagem = new Personagem('Sansa Stark', 40, 50, 30, 90);
let Jon: Personagem = new Personagem('Jon', 70, 60, 50, 30);
let option: number = 0;

while (option != 9) {
    console.log(`|********Personagem********|`);
    console.log(`|1.Escolher Personagem     |`);
    console.log(`|2.Treinar Ataque          |`);
    console.log(`|3 Treinar Defesa          |`);
    console.log(`|4. Imprimir atribuições   |`);
    console.log(`|9. Sair                   |`);
    console.log(`|**************************|`);

    option = +teclado(`Escolha uma Ação: `);

    switch (option) {
        case 1:
            option +teclado(sansa.nome);

            break;
        case 2:
            sansa.ataque += 10;
            break;
        case 3:
            sansa.defesa += 10;
            break;
        case 4:
            console.log(`Personagem >>`, sansa);
            break;
        case 9:
            console.log(`Encerrando Treinamento`);
            break;
        default:
            break;





    }


}






