<h1 align="center">Bem vido ao mycontacts 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

# API de Gerenciamento de Contatos

Esta API permite o gerenciamento de contatos, incluindo a criação, edição, remoção e a opção de inserir a categoria do contato.

## Endpoints

- **GET** http://suaurl:3000/contacts
  - Retorna todos os usuários cadastrados no banco de dados.

- **GET** http://suaurl:3000/contacts/:id
  - Retorna um usuário específico cadastrado no banco de dados, com base no ID fornecido.

- **DELETE** http://suaurl:3000/contacts/:id
  - Apaga um usuário específico cadastrado no banco de dados, com base no ID fornecido.

- **POST** http://suaurl:3000/contacts
  - Cadastra um novo usuário no banco de dados.

- **POST** http://suaurl:3000/contacts/:id
  - Altera um usuário específico cadastrado no banco de dados, com base no ID fornecido.


## Install

```sh
yarn install

comando docker docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

## Usage

```sh
yarn dev
```

## Author

👤 **Jhonathan Amaral**

* Github: [@jhonathan-amaral](https://github.com/jhonathan-amaral)
* LinkedIn: [@jhonathan-amaral](https://linkedin.com/in/jhonathan-amaral)


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
