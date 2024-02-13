# API

## Descrição

Este projeto é uma API desenvolvida em Node.js utilizando TypeScript e TypeORM. 

## Instalação

1. Clone o repositório: `git clone https://github.com/seuusuario/seuprojeto.git`
2. Navegue até o diretório do projeto: `cd seuprojeto`
3. Instale as dependências: `npm install`

## Configuração do Banco de Dados

1. Configure as credenciais do banco de dados no arquivo `ormconfig.json`.
2. Execute as migrações para criar as tabelas do banco de dados: `npm run typeorm migration:run`

## Uso

1. Execute a API: `npm start`
2. A API estará disponível em `http://localhost:3000`

## Endpoints

- `GET /api/recurso`: Retorna todos os recursos.
- `POST /api/recurso`: Cria um novo recurso.
- `GET /api/recurso/:id`: Retorna um recurso específico com o ID fornecido.
- `PUT /api/recurso/:id`: Atualiza um recurso específico com o ID fornecido.
- `DELETE /api/recurso/:id`: Exclui um recurso específico com o ID fornecido.

## Contribuição

1. Fork o projeto
2. Crie uma nova branch: `git checkout -b feature/nova-feature`
3. Faça suas alterações e adicione seus commits: `git commit -am 'Adicionando nova feature'`
4. Envie para a branch criada: `git push origin feature/nova-feature`
5. Envie um pull request

## Contato

Se tiver dúvidas, sugestões ou problemas, entre em contato pelo email: adriano.alyson@gmail.com