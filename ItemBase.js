export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoPublicacao) {
        if (new.target === ItemBase) {
            throw new Error("Não é permitido cadastrar um item genérico");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    get anoPublicacao() { return this.#anoPublicacao; }
    set anoPublicacao(ano) {
        if (ano < 1000 || ano > 2026) {
            console.log("Ano de publicação inválido");
            return;
        }
        this.#anoPublicacao = ano;
    }
    calcularMulta(diasDeAtraso) {
        throw new Error("A classe filha precisa implementar o cálculo de multa!");
    }
}