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
        if (typeof ano !== 'number' || isNaN(ano)) {
            throw new Error("ERR_TIPO_ANO_INVALIDO");
        }
        if (ano < 1000 || ano > 2026) {
            throw new Error("ERR_ANO_FORA_DO_LIMITE"); 
        }
        this.#anoPublicacao = ano;
    }
    calcularMulta(diasDeAtraso) {
        throw new Error("A classe filha precisa implementar o cálculo de multa!");
    }
}