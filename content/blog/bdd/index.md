---
title: BDD, o que é? Como implementar em C#? Qual o propósito?
date: "2017-06-03T00:20:00.000Z"
description: "Já pensou em escrever o comportamento esperado de uma funcionalidade de software e desenvolve-la com base nisso? Isso já se tornou possível nos dias de hoje e eu vou te explicar como podemos utilizar o BDD para fazer isso."
categories: [Desenvolvimento, Qualidade de Código]
comments: true
references: [https://dannorth.net/introducing-bdd/, https://docs.specflow.org/projects/getting-started/en/latest/index.html]
tecnologias: [C#, SpecFlow ]
---


### Após o término da leitura você saberá:
- 🚀 O que é BDD e como surgiu;

- 🚀 O que é SpecFlow;

- 🚀 Realizar a implementação do BDD na prática.

  

Espero que goste do conteúdo, tenha uma ótima leitura! 🤓



------



### Contextualizando
Eu não tenho dúvidas que garantir o funcionamento de um sistema é um dos principais objetivos de um desenvolvedor de software, estou certo? Independentemente da linguagem em que o código é escrito, medir a qualidade, o desempenho e o bom funcionamento do nosso software pode não ser uma tarefa simples. Por hora, os testes unitários podem nos auxiliar a realizar isto de uma maneira mais organizada.

### Mas qual é o objetivo de um teste unitário? 🤔

O objetivo é assegurar que cada unidade desenvolvida esteja de acordo com sua especificação funcional. Isto é, garantir que as funcionalidades que estão sendo entregues estejam de acordo com as especificações e, também garantir que o software continue funcionando conforme esperado enquanto é alimentado de novas funcionalidades.

### Funcionamento
Aqui podemos descrever como funciona.

### Motivos para uso, importância 
Destacar importância ou benefícios

### Mitos
Destacar mentiras, mitos, etc

### Casos de uso
Explicar casos de uso 

### Hello World ou Mão na Massa
Explicando ou exemplificando tecnicamente como fazer.

### Finalizando






### Antes de avançarmos, precisamos entender o conceito de TDD! 💡

TDD é a sigla para *Test Driven Development* (Desenvolvimento Orientado á Testes). Cujo o objetivo é realizar o desenvolvimento de um software orientado à testes, ou seja, primeiro escrevemos o código e depois desenvolvemos. 

O TDD funciona em um ciclo, neste ciclo antes da criação de uma nova funcionalidade um teste é criado antes

### E esse tal de BDD, o que é? qual o seu propósito? 😏

O BDD surgiu em 2003, através de um problema enfrentado por [Dan North]([https://link](https://dannorth.net/about/)) que, sempre que utilizava ou lecionava práticas ágeis presenciava mal entendidos. Os desenvolvedores questionavam por onde começar, o que testar, quando testar de uma só vez, o que chamar de testes e como entender a falha desses testes. Olhando para este cenário, Dan decidiu que poderia apresentar o TDD de maneira direta às boas coisas e evitar as armadilhas.

Surge então o desenvolvimento orientado à comportamento, mais conhecido como BDD (Behavior Driven Development). Ele evoluiu os testes unitários a partir de práticas ágeis estabelecidas e é projetado para torná-los mais acessíveis e eficazes à novas equipes ou integrantes das mesmas. Ao longo do tempo, o BDD cresceu para abranger a imagem mais ampla de análise ágil e testes de aceitação automatizada.

No BDD, desenvolvedores utilizam sua língua nativa em combinação com a linguagem ubíqua. Isso lhes permite concentrar nas razões pelas quais o código deve ser criado, e não em detalhes técnicos, além de minimizar traduções entre a linguagem técnica na qual o código é escrito e outras linguagens de domínio, usuários, clientes, gerência do projeto, etc... em outras palavras, colar a documentação no código. Dessa forma fica muito claro a todos quais são os objetivos que uma funcionalidade deve atingir e é de fácil entendimento à todos envolvidos no projeto.

Exemplificação

Para exemplificar a utilização do BDD neste artigo, utilizaremos a linguagem ASP.NET, através de uma extensão para o Visual Studio chamada SpecFlow que será responsável por gerenciar e executar testes de aceitação automatizados à partir de especificações. Os testes de aceitação do SpecFlow seguem o paradigma BDD.

Primeiro passo

Vamos criar um novo projeto. Este, pode ser um Unit Test Project ou até mesmo uma Class Library, como mostra a figura abaixo: