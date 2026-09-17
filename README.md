# SCCON Busca CEP

Esse projeto faz parte de uma etapa do processo seletivo da empresa SCCON para desenvolvedores Front-end, com o objetivo de testar conhecimentos e habilidades na utilização de Angular, CSS/HTML5 e TypeScript.

## Sobre o projeto

O projeto consiste em uma aplicação SPA, utilizando dados mockados, para realizar a busca de CEPs.

## Decisões

Decidi desenvolver o projeto em partes para mostrar a evolução da aplicação durante o desenvolvimento.

A cada parte desenvolvida, vou documentar o que foi feito e o motivo pelo qual tomei determinadas decisões técnicas.

Para facilitar a visualização dessa evolução, vou criar uma **branch para cada etapa/push** que contenha novas alterações. Dessa forma, também será possível acompanhar de maneira mais clara como o projeto foi evoluindo.

O arquivo `README.md` será atualizado ao longo do desenvolvimento, contendo as informações e decisões tomadas em cada etapa.

---

# PR 01 - Cria a estrutura inicial do projeto Angular

## O que foi feito?

* Criação dos arquivos iniciais do projeto Angular.
* Escolha da versão Angular 17, por já utilizar essa versão diariamente e por ela já possuir suporte ao conceito de Standalone.
* Escolha do SCSS como pré-processador de estilos, por já possuir maior familiaridade e conhecimento sobre sua utilização.
* Adição do Bootstrap.
* Adição do Angular Material para utilização de alguns componentes prontos, evitando a necessidade de desenvolver determinadas funcionalidades e validações do zero.
* Adição ESLint para checar erros e más práticas no TypeScript.
* Adição Prettier para formatação automática e consistente do código.
* Adição Stylelint para checar más práticas no SCSS, utilizando a regra padrão da comunidade: stylelint-config-standard-scss

## Comandos utilizados

```bash
npm init

npm i

ng new sccon-busca-cep

npm install bootstrap

ng add @angular/material

ng add @angular-eslint/schematics@17

npm install --save-dev prettier eslint-config-prettier

npm install --save-dev stylelint stylelint-config-standard-scss stylelint-config-prettier-scss

```

# PR 02 - Cria componente Default e Header

## O que foi feito?

* Criação de um arquivo chamado `_variables.scss`. O arquivo foi criado para otimizar o desenvolvimento e gerar uma padronização de cores para a aplicação.
* Criação do componente Default para padronizar o layout que vai ser exibido. Dentro dele são renderizados o Header e também o conteúdo das demais páginas.
* Criação do componente Header. Nesse componente utilizei uma mescla de Bootstrap com Material.
* Adicionada a logo em SVG no componete de Header e realizado tratamento de tamanho com SCSS.
* Ajuste no arquivo `app.component.html` para utilizar o componente `app-default-layout`.
