# 📚 Sistema da Biblioteca Municipal

Sistema de linha de comando (CLI), feito em **JavaScript (Node.js)**, para cadastro de itens de uma biblioteca — livros físicos e ebooks — e cálculo automático de multas por atraso na devolução.

O projeto foi desenvolvido como exercício de **Programação Orientada a Objetos (POO)**, aplicando conceitos como herança, encapsulamento, getters/setters e classes abstratas.

## 🎯 Objetivo

Simular o cadastro de itens em uma biblioteca, validando os dados informados pelo leitor e calculando a multa devida de acordo com o tipo de item e os dias de atraso na devolução.

## 🧠 Conceitos de POO aplicados

- **Herança**: `LivroFisico` e `Ebook` herdam de `ItemBase`.
- **Classe abstrata**: `ItemBase` impede sua própria instanciação direta (via `new.target`), funcionando apenas como base para as subclasses.
- **Encapsulamento**: uso de campos privados (`#anoPublicacao`, `#Idade`) acessados apenas por getters e setters, com validação de dados.
- **Polimorfismo**: cada subclasse implementa sua própria versão de `calcularMulta()`.
- **Método abstrato**: `ItemBase.calcularMulta()` lança um erro caso não seja sobrescrito pela classe filha.

## 🗂️ Estrutura do projeto

```
biblioteca-municipal/
├── index.js          # Ponto de entrada: interação com o usuário via terminal
├── ItemBase.js        # Classe abstrata base para os itens da biblioteca
├── TiposDeItens.js    # Classes LivroFisico e Ebook (herdam de ItemBase)
├── Leitor.js          # Classe Leitor, com validação de idade mínima
└── README.md
```

## 🏛️ Classes

### `ItemBase` (abstrata)
Define os dados e comportamentos comuns a qualquer item da biblioteca: título, autor e ano de publicação (validado entre 1000 e 2026). Não pode ser instanciada diretamente.

### `LivroFisico`
Representa um livro físico. Calcula multa de **R$ 2,50 por dia de atraso**.

### `Ebook`
Representa um livro digital. Não gera multa em reais (**R$ 0,00**) — em vez disso, bloqueia o acesso ao arquivo no dispositivo do leitor.

### `Leitor`
Representa a pessoa que está realizando o cadastro. Valida a idade mínima: leitores com **12 anos ou menos** não podem se cadastrar sem um responsável.

## ▶️ Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/claricepietra/biblioteca-municipal.git
cd biblioteca-municipal
node index.js
```

O sistema vai pedir, em sequência:
1. Nome e idade do leitor
2. Tipo de item a cadastrar (Livro Físico ou Ebook)
3. Título, autor e ano de publicação
4. Dias de atraso na devolução (para cálculo da multa)

## 🛠️ Tecnologias

- JavaScript (ES Modules)
- Node.js (`readline/promises` para entrada de dados via terminal)
