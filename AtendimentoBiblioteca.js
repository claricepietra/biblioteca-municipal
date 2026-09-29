import { Leitor } from './Leitor.js';

export class AtendimentoBiblioteca {
    CadastrarLeitor(nome, idade) {
        try {
            console.log(`\n[BIBLIOTECA ONLINE] iniciando comunicação com o sistema. . .`);

            const leitor = new Leitor(nome, idade);  

            if (leitor.idade < 12) {
                throw new Error("ERR_LEITOR_MENOR_IDADE");
            }

            console.log("✅ Carteirinha do leitor foi gerada com sucesso!");
            return leitor;

        } catch (error) {
            console.log(`[ERRO INTERCEPTADO] A operação não pôde ser concluída.`);
            this.traduzirCodigoDeErro(error.message);

        } finally {
            console.log("🔒 Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.");
        }
    }

    traduzirCodigoDeErro(codigoErro) {
        switch (codigoErro) {

            case "ERR_TIPO_ANO_INVALIDO":
                console.log("❌ AVISO DO SISTEMA: Atenção: Os campos de ano de publicação e idade do leitor aceitam apenas caracteres numéricos.");
                break;

            case "ERR_TIPO_IDADE_INVALIDO":
                console.log("❌ AVISO DO SISTEMA: Atenção: Os campos de ano de publicação e idade do leitor aceitam apenas caracteres numéricos.");
                break;

            case "ERR_ANO_FORA_DO_LIMITE":
                console.log("❌ AVISO DO SISTEMA: O ano de publicação do catálogo deve estar situado entre 1000 e 2026.");
                break;

            case "ERR_LEITOR_MENOR_IDADE":
                console.log("❌ AVISO DO SISTEMA: Leitores menores de 12 anos necessitam da presença física de um responsável para efetivação do cadastro.");
                break;

            default:
                console.log("❌ AVISO DO SISTEMA: Serviço indisponível. Tente novamente mais tarde.");
        }
    }
}