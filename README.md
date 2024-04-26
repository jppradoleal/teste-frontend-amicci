<img src="https://images.sympla.com.br/62f50b75e7404.png" alt="Amicci Logo"></img>

# Amicci - Teste prático para Frontend Javascript React Developer

## Acesse o site!

https://teste-frontend-amicci-bitter-resonance-508.fly.dev/

## Techs

- [x] React.js;
- [x] Typescript;
- [x] Zustand;
- [x] Material UI;
- [x] Vitest;
- [x] React Toastify.

## Executando

1. Copie o conteúdo de `.env.example` para `.env`;
2. Instale as dependências com `npm install`;
3. Execute o projeto com `npm run dev`;
4. Acesse `http://localhost:5173`.

## Publicação

1. Instale a CLI do [Fly.io](https://fly.io/docs/hands-on/install-flyctl/);
2. Copie o conteúdo de `.env.example` para `.env.production`;
3. Preencha as chaves de API;
4. Execute `fly deploy`.

## Descrição

Você irá construir uma aplicação para consultar e trazer dados sobre o clima. É uma
aplicação simples, onde terá um único campo de busca para o usuário digitar o
nome da cidade, um botão para confirmar a busca e outro botão para consultar o
clima do local do usuário.

Ao clicar no botão de buscar pelo local do usuário, a aplicação deve utilizar a api de
geolocalização padrão do navegador para pegar a localização do usuário, em
seguida deve utilizar a api do Google Maps para consultar qual é o nome da cidade
e por fim, deve utilizar a api OpenWeather para trazer as informações do clima e
exibir elas na tela (temperatura, clima, umidade do ar e velocidade dos ventos, pode
exibir outros dados a mais se quiser). Esse mesmo comportamento deve acontecer
automaticamente ao carregar a página.

No campo de busca o usuário deverá digitar o nome da cidade e ao clicar no botão
buscar, deverá consultar diretamente a api OpenWeather e exibir os dados que
encontrar ou, em caso de erro, exibir uma mensagem avisando de que não
encontrou a cidade.

## Contatos

- Autor - [João Prado](https://www.linkedin.com/in/jppradoleal/)
- Website - [https://jprado.dev/](https://jprado.dev/)
