import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { LivroFisico, Ebook } from './TiposDeItens.js';
import { Leitor } from './Leitor.js';

const rl = readline.createInterface({ input, output });

async function inicarSistema() {

    console.log("=== SISTEMA DA BIBLIOTECA MUNICIPAL ===");

    const Idade = await rl.question("Digite sua idade: ");
    const Nome = await rl.question("Digite seu nome: ");

    const idadeConvertida = parseInt(Idade);
    const leitor = new Leitor(Nome, idadeConvertida);

    console.log("\nSelecione qual item você deseja cadastrar: ");
    console.log("1 - Livro Fisico");
    console.log("2 - Ebook ");

    const opcao = await rl.question("Digite a opção desejada: ");

    const titulo = await rl.question("Digite o titulo do livro desejado: ");
    const autor = await rl.question("Digite o nome do autor desejado: ");
    const anoPublicacao = parseInt(await rl.question("Digite o ano da publicação: "), 10);

    let item;

    switch (opcao) {
        case "1":
          
            item = new LivroFisico(titulo, autor, anoPublicacao);
            break;
        case "2":
            item = new Ebook(titulo, autor, anoPublicacao);
            break;
        default:
            console.log("Opção inválida. Encerrando o programa.");
            rl.close();
            process.exit();
    }

    if (item.titulo === undefined || item.autor === undefined || item.anoPublicacao === undefined) {
        console.log("\n[ERROR]: Dados vitais não passaram na validação de segurança.");
        console.log("O reservamento não pode ser finalizada com dados inválidos. ");
        rl.close();
        return;
    }
    else {
        console.log("\n === INFORMAÇÕES DO RESERVAMENTO ===");
        console.log(`Titulo: ${item.titulo}`);
        console.log(`Autor: ${item.autor}`);
        console.log(`De: ${item.anoPublicacao}`);
    }

        const diasDeAtraso = parseInt(await rl.question("\nQuantos dias de atraso na devolução? "));

    const valorMulta = item.calcularMulta(diasDeAtraso);
    console.log(`\nValor total da multa: R$ ${valorMulta.toFixed(2)}`);

    leitor.validarIdadeLeitor(idade)

    rl.close();
}

inicarSistema();   
