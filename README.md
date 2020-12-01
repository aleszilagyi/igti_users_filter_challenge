<p align="right">
  <a align="right" href="#pt-BR-Readme">pt-BR</a>&nbsp;|&nbsp;
  <a href="#en-US-Readme">en-US</a>
 </p>
<h6 align="right">#pt-BR Readme</h6>
<h1 align="center">
  <br>#Interface de Filtro de Usuários - IGTI<br/>
  #HTML|#Materialize|#Javascript
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/aleszilagyi/igti_users_filter_challenge?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/aleszilagyi/igti_users_filter_challenge?style=flat-square">
</p>

<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#speech_balloon-detalhes">Detalhes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;
</p>

## :bookmark: Sobre

Projeto de applicativo simples, o qual tem como objetivo servir como forma de aprendizado e aperfeiçoamento do uso do Javascript e manipulação do DOM, desenvolvido como trabalho prático ao longo do Bootcamp Online - Desenvolvedor Full Stack da [IGTI](https://www.igti.com.br/).

O applicativo traz uma interface simples a qual busca usuários fakes da API [RandomUser](https://randomuser.me/), filtra e disponibiliza visualmente as informações de cada usuário mostrando nome, sobrenome, idade e foto de seu perfil, em uma lista ordenada em ordem alfabética, além de dados estatisticos dos usuários. Para filtrar os usuários, basta apenas inserir nome ou sequência de caracteres dentro do campo de busca. Para mostrar todos usuários, basta apenas clicar no botão "MOSTRAR TODOS", e caso seja necessário remover o filtro, clicar no botão "LIMPAR".

## :speech_balloon: Detalhes

Buscando melhor organizar a aplicação, foram separados três arquivos de scripts: script.js, debounce.js, autoresults.js.

O script.js contém toda a estrutura de inicialização, validação de dados e operação da aplicação. Nele também estão contidos os templates para fazer as modificações do DOM.

O arquivo autoresults.js é responsável por controlar todos os eventos, é também o responsável pela função de atualização do DOM através do render e mudanças de estado pela função newState.

Para evitar requests excessivas à API, foi utilizado um debouncer no debounce.js para fazer o fetch de dados. O debouncer serve como um filtro para as requests realizadas por eventos de inputs. O debouncer obtém os callbacks passados pelo EventListener de um dado input, e, se não for realizado nenhum novo input por 500 ms, o último callback é executado. Para o debounce, foi passado como parâmetro a função onInput juntamente com o event que é passado posteriormente ao onInput como parâmetro de sua execução, em forma de arg.

A área de estatísticas e informações de usuários é atualizada automaticamente a cada input na área de busca, assim, não é necessário outra ação para realizar o filtro.

A repetição do fetch de dados para a API é realizada a cada input ou click nos botões visando manter a consistência dos dados com a API, o cenário considera a exibição dos dados o mais próximo de tempo real possível, sem a necessidade de atualizar a página. Mas o aplicativo pode ser adaptado para realizar apenas um fetch após o carregamento da página, e então tratar destes dados. Também foi preferido fazer as chamadas recorrentes para a API para que fosse aprimorado a aprendizado do uso do debounce.

## :rocket: Tecnologias

- [HTML básico](https://www.w3schools.com/html/)
- [CSS Materialize](https://materializecss.com/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<hr></hr>
<h6 align="right">#en-US Readme</h6>

<h1 align="center">
  <br>#Users Filter Interface - IGTI<br/>
  #HTML|#Materialize|#Javascript
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/aleszilagyi/igti_users_filter_challenge?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/aleszilagyi/igti_users_filter_challenge?style=flat-square">
</p>

<p align="center">
  <a href="#bookmark-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="speech_balloon-details">Details</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-stack">Stack</a>&nbsp;&nbsp;&nbsp;
</p>

## :bookmark: About

Simple application project, which aims to serve as a way of learning and improving the use of Javascript and DOM manipulation, developed as practical work throughout Bootcamp Online - Full Stack Developer at [IGTI](https://www.igti.com.br/).

The application brings a simple interface which searches for fake users of the API [RandomUser](https://randomuser.me/), it filters and visually makes available the information of each user, showing name, surname, age, and profile picture, in an alphabetically ordered list, as well as statistics from users. To filter users, just enter a name or a string of characters into the search field. To show all users, click on the "MOSTRAR TODOS" button, and if you need to remove the filter, click on the "LIMPAR" button.

## :speech_balloon: Details

To better arrange the application, three script files were separated: script.js, debounce.js, autoresults.js.

The script.js contains all the initialization structure, data validation, and application operations. It also contains templates for making DOM modifications.

The autoresults.js file is responsible for controlling all events, it is also responsible for the DOM update function through render and state changes by the newState function.

To avoid excessive requests to the API, a debouncer in debounce.js was used to fetch data. The debouncer serves as a filter for requests made by input events. The debouncer get the callbacks passed by the EventListener for a given input, and, if no new input is made within 500 ms, the last callback is executed. For the debounce, the onInput function was passed as a parameter together with the event that is passed later to onInput as a parameter of its execution, in the form of arg.

The statistics and user information area are automatically updated for each input in the search area, so there is no need for further action to perform the filter.

The repetition of data fetching for the API is performed at each input or click on the buttons, to maintain the consistency of the data from the API, the scenario considers the closest to real-time display of the data, without the need to update the page. But the application can be adapted to only perform a single fetch after the window load, and then handle this data. It was also preferred to make recurring calls to the API to improve the understanding of using debounce.

## :rocket: Stack

- [HTML](https://www.w3schools.com/html/)
- [CSS Materialize](https://materializecss.com/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
