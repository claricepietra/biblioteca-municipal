import { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
    constructor(titulo, autor, anoPublicacao, corredor){
        super(titulo, autor, anoPublicacao, corredor);
    }
    calcularMulta(diasDeAtraso) {
        this.valorMulta = (diasDeAtraso * 2.50);
        console.log(`Foi registrada uma multa referente a um livro físico não devolvido dentro do prazo no valor de R$: ${this.valorMulta}`);
        return this.valorMulta;
    }
}
export class Ebook extends ItemBase {
    constructor(titulo, autor, anoPublicacao, formatoArquivo){
        super(titulo, autor, anoPublicacao, formatoArquivo);
    }
    calcularMulta(diasDeAtraso) {
        console.log(`"[SISTEMA] Arquivo bloqueado. Acesso revogado no dispositivo do leitor`);
        this.valorMulta = 0;
        return this.valorMulta;
    }
}