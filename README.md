# Inicialização do projeto
Para inicializar o projeto utilizamos vite, com o comando:
  npm create vite@latest nome-do-projeto --template react-ts
  Selecionamos react + typescript

  depois instalamos as dependencias necessárias com o npm install
  as dependencias são Axios, react-router-dom 

  depois criamos um arquivo db.json para utilizar com o json-server
  
  e utilizamos o comando npm json-server --watch db.json --port 3001

  O próximo passo foi criar as API's que utilizariamos, para isso criamos uma pasta services
  dentro de src e nela criamos um arquivo api.ts e dentro desse arquivo
  importamos a biblioteca axios instalada previamente, e criamos as rotas
  e exportamos as rotas para podermos utiliza-las globalmente

# Configuração das rotas
  No arquivo app.tsx configuramos as rotas de navegação, passando o
  caminho que deve ser passado na url para acessar cada página

# Criação dos componentes
  Criamos uma pasta components para componentizar nossa aplicação
  e nos componentes criamos a lista de filmes e o formulário de inserção
  depois criamos uma pasta pages que será o destino das nossas rotas de navegação
  criadas no arquivo app.tsx

# Estilização
  Por fim estilizamos nosso conteúdo através do CSS