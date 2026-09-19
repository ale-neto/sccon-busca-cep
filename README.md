# SCCON Busca CEP

Esse projeto faz parte de uma etapa do processo seletivo da empresa SCCON para desenvolvedores Front-end, com o objetivo de testar conhecimentos e habilidades na utilização de Angular, CSS/HTML5 e TypeScript.

## Sobre o projeto

O projeto consiste em uma aplicação SPA, utilizando dados mockados, para realizar a busca de CEPs.

## Decisões

Decidi desenvolver o projeto em partes para mostrar a evolução da aplicação durante o desenvolvimento.

A cada parte desenvolvida, vou documentar o que foi feito e o motivo pelo qual tomei determinadas decisões técnicas.

Para facilitar a visualização dessa evolução, vou criar uma **branch para cada etapa/push** que contenha novas alterações. Dessa forma, também será possível acompanhar de maneira mais clara como o projeto foi evoluindo.

O arquivo `README.md` será atualizado ao longo do desenvolvimento, contendo as informações e decisões tomadas em cada etapa.

## Check-list

# Requisitos do Teste

* [x] Angular 16+
* [x] TypeScript
* [x] HTML5 semântico
* [x] Sass ou Less
* [x] Bootstrap 5 ou Angular Material
* [x] Layout responsivo
* [x] Integração com ViaCEP
* [x] Reactive Forms
* [x] Observables / RxJS
* [x] EventEmitters
* [x] Máscara de CEP
* [x] Validação com Regex
* [x] Tratamento de erros
* [x] Componentização
* [x] POO
* [x] Lazy Loading
* [x] Header separado
* [x] Componente de busca separado
* [x] Componente de lista separado
* [x] Tabela de resultados

# Requisitos Visuais

* [x] Logo SCCON em SVG
* [ ] Menu `#132745`
* [x] Botões `#D7DBDD`
* [x] Hover dos botões
* [x] Botões com cantos arredondados

# Desafios / Diferenciais

* [x] Angular Material
* [x] Variáveis e pseudoelementos Sass/Less
* [ ] CSS Animations
* [ ] Transitions
* [ ] Loader
* [x] Excluir buscas
* [x] Persistência dos dados

  * [ ] REST / Mock Server
  * [x] LocalStorage
  * [ ] IndexedDB

# Entrega

* [x] GitHub / Bitbucket
* [x] README.md
* [x] Instruções de instalação
* [x] Instruções de deploy
* [x] Principais recursos
* [x] Principais desafios

## Como executar o projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) 18+
* [Angular CLI](https://angular.dev/tools/cli) 17+ (`npm install -g @angular/cli`)

### Instalação

```bash
git clone https://github.com/ale-neto/sccon-busca-cep.git
cd sccon-busca-cep
npm install
npm start
```

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

# PR 06 - Adiciona lista de buscas de CEP

## O que foi feito?

* Atualiza as rotas no `header` para ser possível fazer o redirecionamento de acordo com a opção escolhida no menu.
* Move o model `Address` para dentro da feature de `Address`.
* Adição do `HistoryAddressService` para gerenciar o histórico de buscas.
* Adição de operações para adicionar e remover endereços do histórico.
* Atualiza o fluxo de busca de CEP para evitar buscas duplicadas.
* Persiste buscas realizadas com sucesso no histórico.
* Adiciona tratamento e exibição de erros durante a busca.
* Implementa a tabela de histórico de endereços na interface.
* Adiciona na table um botão para remover endereços do histórico diretamente na tela.

## Decisões Técnicas

> *OBS: O foco dessa feature foi entregar quase todos os requisitos solicitados no teste.*

* Para o componente de listagem, decidi utilizar o Angular Material, por já ter todo o tratamento visual e de manipulação de uma tabela prontos. Ou seja, para otimizar melhor o tempo, achei que a melhor saída seria usar o `mat-table`.
* Ainda sobre o componente de listagem: decidi usar uma abordagem não muito comum no meu dia a dia, que é o `trackBy`. Estudando sobre isso, vi que é uma ótima opção quando estamos lidando com listas, porque ele evita que o Angular re-renderize linhas que não mudaram quando o array é atualizada, só o que realmente mudou é atualizado no DOM.
* Nos serviços `search-address` e `history-address`, decidi utilizar variáveis `Observable` porque, caso ocorra alguma alteração, o Angular, por meio do Change Detection, identifica automaticamente que houve mudança e atualiza essa variável em todos os componentes que a estão consumindo.
* Usei o `BehaviorSubject` do RxJS nos dois serviços pelo mesmo motivo: além de já ter um valor inicial disponível (diferente de um `Observable` comum, que só emite algo após uma ação), ele permite que qualquer componente que se inscreva depois já receba o último valor emitido, sem precisar esperar uma nova mudança acontecer.

## Destaque

* > Gosto muito da abordagem de utilizar um Observable `loading$`, que aprendi na empresa Monkey. Vou utilizá-lo para gerenciar o estado de carregamento do serviço: enquanto a API não retorna nada, mantenho o loading = true, assim é possível mostrar algo visual para que o user tenha ciência do que está acontecendo e, claro, evitar ações desnecessárias que o user pode tomar, como clicar várias vezes no mesmo botão para a mesma ação.

```bash
private readonly loadingSubject = new BehaviorSubject<boolean>(false);
readonly loading$ = this.loadingSubject.asObservable();
```

* > Outra decisão adotada foi a utilização do `:host {}` nos arquivos SCSS dos componentes. Essa abordagem permite estilizar o elemento host do próprio componente, mantendo os estilos encapsulados e evitando a necessidade de utilizar seletores globais ou aplicar estilos diretamente no componente pai.

* > Sobre o tratamento de erros que podem acontecer, deixei essa responsabilidade para a camada de services, e o módulo de Address só exibe qual erro ocorreu. Gosto dessa abordagem porque traz clareza para o usuário e também faz com que o componente apenas consuma o dado de erro, sem precisar saber como ele foi gerado.

## Screenshots
<img width="1920" height="952" alt="image" src="https://github.com/user-attachments/assets/7dbb7ecd-feb4-4796-a09f-4b8c520ede24" />
<img width="1919" height="957" alt="image" src="https://github.com/user-attachments/assets/badccb26-a021-4a5f-866d-f8171f96dd39" />
<img width="1920" height="950" alt="image" src="https://github.com/user-attachments/assets/01d07a85-3775-4035-980b-cff35faa9387" />
<img width="1918" height="954" alt="image" src="https://github.com/user-attachments/assets/b61854a6-a488-4f79-ab36-520a89f9b1f5" />

# PR 07 - Adiciona Localstorage e ajusta a responsividade dos componentes 

## O que foi feito?

* Adição do Bootstrap JS à configuração do `angular.json`.
* Atualização do componente `header` para utilizar os componentes Bootstrap Collapse e Dropdown na criação do submenu Buscar endereço.
* Adição do `MatIcon` ao componente `header`.
* Atualização do SCSS do `header` para suportar diferentes tamanhos de tela.
* Adição de rolagem horizontal à tabela de `history` para adaptação a telas menores.
* Atualização do `HistoryAddressService` para persistir o `history` no `localStorage`.
* Restauração dos objetos `Date` ao carregar o `history` armazenado.
* Centralização da atualização do estado do `history` no serviço.
* Implementação de geração de IDs únicos para os registros do `history`.
* Correção do `SearchAddressService` para não iniciar o estado de carregamento ao identificar um CEP duplicado, evitando que ele ficasse preso em `true`.
* Mudança no nome da pasta `pages` para `modules`.

## Desafios

* Tentei fazer o ajuste para o `header` ficar responsivo, porém as animações não estavam carregando. Investigando, descobri que faltava o `node_modules/bootstrap/dist/js/bootstrap.bundle.min.js` no `angular.json`. Após a adição, a animação do submenu funcionou corretamente.

## Decisões Técnicas

* Para salvar os endereços, decidi utilizar o `localStorage` por ter mais domínio e saber como utilizá-lo, mesmo sabendo da limitação de armazenamento de 5MB. Caso o volume de dados fosse maior, eu iria optar pelo `IndexedDB`, porém, por não ter domínio de como utilizá-lo, optei pelo `localStorage`.

## Screenshots
<img width="1917" height="958" alt="image" src="https://github.com/user-attachments/assets/27927a6b-f650-4e99-a182-5d40e980bed5" />
<img width="1487" height="957" alt="image" src="https://github.com/user-attachments/assets/b0c3b4c1-f61c-48e6-be8d-9af40b9c5cd6" />
<img width="1480" height="956" alt="image" src="https://github.com/user-attachments/assets/075bd6ca-a9a3-4a7b-b667-edc5c6d22c20" />
<img width="1918" height="956" alt="image" src="https://github.com/user-attachments/assets/6fa33a80-ba42-4458-bb3e-4baeb4819142" />
<img width="1917" height="961" alt="image" src="https://github.com/user-attachments/assets/8e5a44b0-edca-4ac5-904e-1474fb27a4aa" />










