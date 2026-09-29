export class Leitor {
    #idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.validarIdadeLeitor(idade);   
    }

    get idade() { return this.#idade; }

    validarIdadeLeitor(idadeLeitor) {
        if (typeof idadeLeitor !== 'number' || isNaN(idadeLeitor)) {
            throw new Error("ERR_TIPO_IDADE_INVALIDO");
        }
        this.#idade = idadeLeitor;
    }
}