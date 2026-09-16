export class Leitor {
    #Idade;
    constructor(Nome, Idade){
        this.Idade = Idade;
        this.Nome = Nome;
    }
    get Idade(){ return this.#Idade; }
    set Idade(idadeLeitor){
        if(idadeLeitor < 12){
            console.log("Leitor menor de 12 anos precisa do responsável para o cadastro");
            throw new Error("Cadastro não permitido: leitor menor de 12 anos.");
            return;
        }
        this.#Idade = idadeLeitor;
    }
}