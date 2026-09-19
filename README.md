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
* Adição da logo em SVG no componete de Header e realizado tratamento de tamanho com SCSS.
* Ajuste no arquivo `app.component.html` para utilizar o componente `app-default-layout`.

# PR 03 - Cria pagina de Home 

## O que foi feito?

* Remoção do título padrão da aplicação Angular.
* Adição da page `Home` utilizando Standalone.
* Dentro componente de Home assim que usuario acessar a pagina inicial vai ser exibido uma mensagem de boas-vindas com o nome do candidato e data atual.
* Configuração da `Home` na rota raiz (`/`) dentro do arquivo `app.routes.ts`.
* Exportação do componente Home para carregamento lazy através do Router.

## Screenshots
<img width="1918" height="952" alt="image" src="https://github.com/user-attachments/assets/fbe730c9-45aa-4401-9f83-b83c45a5751c" />

# PR 04 - Cria pagina de Address e o componente AddressSearch

## O que foi feito?

* Adição de uma page chamada `Address`
* Adição do componente `AddressSearch` para busca de endereço por CEP.
* Adição validação do formulário de endereço.
* Adição a dependência `ngx-mask@17` pela necessidade de haver uma máscara para o input de CEP.
* Configuração da rota `/address`.
* Atualiza os estilos e variáveis globais da aplicação.
* Ajustado as cores dos botões e do background do menu.
* Alterado o tema do Angular Material para `deeppurple-amber`.
* Exporta os novos componentes da Page pelo `pages/index`.

## Dificuldades
* Tentei importar alguns componentes do Material, mas o autocomplete do import não funcionou corretamente. Por isso, precisei consultar a documentação na internet para verificar os caminhos exatos dos imports.
* A definição de tema do Angular Material deu um pouco de trabalho, porque as cores que o documento pede pro botão e pro menu não dá pra simplesmente colocar no mat.define-palette() ele pede uma paleta inteira, não uma cor só, e mesmo criando uma paleta na mão não ia bater certinho com o "escurecer 6% no hover" que o documento pede. Por isso acabei sobrescrevendo essas cores direto, sem depender do tema.

## Comandos utilizados

```bash
npm install ngx-mask@17
```

## Screenshots
<img width="1915" height="957" alt="image" src="https://github.com/user-attachments/assets/ce4fa1b1-01d4-4387-aa73-d027afa5c49a" />
<img width="1921" height="957" alt="image" src="https://github.com/user-attachments/assets/805a4750-534c-45e2-aa35-ec0202850e7e" />

# PR 05 - Adiciona serviço de busca de endereço por CEP

## O que foi feito?

* Adição do `SearchAddressService` para consultar dados de CEP através da API ViaCEP.
* Utilizado o `HttpClient` para realizar as requisições.
* Expõe os estados de endereço e carregamento através de `address$` e `loading$`.
* Adição do tratamento de erros durante a busca do endereço.
* Cria o `AddressModel` para representar os dados retornados pela API.
* Adição de exports dos novos modelos e serviços através dos barrels(`index.ts`).
* Renomeia `AddressSearchComponent` para `SearchAddressComponent`.
* Atualizaço do selector e o template do componente.
* Adição input para controlar o estado de carregamento.
* Atualiza os exports dos componentes.
* Refatora o `AddressComponent` para consumir o `SearchAddressService`.
* Adição exibição dos dados do endereço, estado de carregamento e mensagens de erro.
* Implementa a chamada de `getSearchAddress` para realizar a busca por CEP.
* Registra o `provideHttpClient` na configuração da aplicação.

## Screenshots
<img width="1917" height="950" alt="image" src="https://github.com/user-attachments/assets/d852da29-0fbf-482f-9a8f-20d7d0096e34" />
<img width="1919" height="955" alt="image" src="https://github.com/user-attachments/assets/454c2ad4-3ba8-4658-87e7-1e84d87fd067" />




