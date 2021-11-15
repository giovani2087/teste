
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
let menu: number = 0;

while (option != 9) {
    console.log(`|********Personagem********|`);
    console.log(`|1.Escolher Sansa          |`);
    console.log(`|2.Escolher Jon            |`);
    console.log(`|                          |`);
    console.log(`|                          |`);
    console.log(`|9. Sair                   |`);
    console.log(`|**************************|`);

    option = +teclado(`Escolha uma Ação: `);

    switch (option) {
        case 1:
            while (menu != 9) {
                console.log(`|********Personagem********|`);
                console.log(`|1.Listar Personagem       |`);
                console.log(`|2.Treinar Ataque          |`);
                console.log(`|3 Treinar Defesa          |`);
                console.log(`|4. Imprimir atribuições   |`);
                console.log(`|9. Sair                   |`);
                console.log(`|**************************|`);

                menu = +teclado(`Escolha uma Ação: `);

                switch (menu) {
                    case 1:
                        menu + teclado(sansa.nome);

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

        case 2:
            while (menu != 9) {
                console.log(`|********Personagem********|`);
                console.log(`|1.Listar Personagem       |`);
                console.log(`|2.Treinar Ataque          |`);
                console.log(`|3 Treinar Defesa          |`);
                console.log(`|4. Imprimir atribuições   |`);
                console.log(`|9. Sair                   |`);
                console.log(`|**************************|`);

                menu = +teclado(`Escolha uma Ação: `);

                switch (menu) {
                    case 1:
                        menu + teclado(Jon.nome);

                        break;
                    case 2:
                        Jon.ataque += 10;
                        break;
                    case 3:
                        Jon.defesa += 10;
                        break;
                    case 4:
                        console.log(`Personagem >>`, Jon);
                        break;
                    case 9:
                        console.log(`Encerrando Treinamento`);
                        break;
                    default:
                        break;








                }


            }
    }






}