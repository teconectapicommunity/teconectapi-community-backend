# Teconectapi Community - Backend

Este repositório contém o backend da aplicação **Teconectapi Community**, desenvolvido utilizando **Node.js** e **Express**. O objetivo deste projeto é fornecer uma API para gerenciar os membros da comunidade, permitindo operações de cadastro, visualização, atualização e exclusão.

## Índice

- Pré-requisitos:

```sh
- Node Js
- Express
- Prisma ORM ?
- Mysql
- Postman
```


Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org) (v20.17.0 ou superior)
- [MySQL](https://www.mysql.com/) (para gerenciar o banco de dados)
- [Git](https://git-scm.com/) (para controle de versão)
- [Postman](https://www.postman.com/) (opcional, para testar a API)

## **Instalação**

1. Faça um Fork do repositório para a sua máquina local:

2. em seguida faça um clone 

   ```bash
   git clone https://github.com/teconectapicommunity/teconectapi-community-backend.git
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd teconectapi-community-backend
   ```

4. Instale as dependências necessárias:

   ```bash
   npm install
   ```

## Configuração

1. Configurar o Banco de Dados MySQL:

   - Certifique-se de que o MySQL está rodando.
   - Crie o banco de dados `comunidade`:

     ```sql
     CREATE DATABASE comunidade;
     ```

2. Configurar as Variáveis de Ambiente:

   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

     ```env
     DB_HOST=127.0.0.1
     DB_USER=root
     DB_PASSWORD=
     DB_NAME=comunidade
     DB_PORT=3306
     PORT=3001
     ```

   - Ajuste `DB_USER` e `DB_PASSWORD` conforme a configuração do seu MySQL.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento utilizando `nodemon`.

## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

```
backend/
├── node_modules/         # Módulos do Node.js
├── routes/               # Rotas da API
│   └── members.js        # Rotas para gerenciamento de membros
├── database/
    models/members.model.js
    db.js                 # Configuração do banco de dados
├── index.js              # Ponto de entrada da aplicação
├── package.json          # Configurações do projeto e dependências
├── .env                  # Arquivo de variáveis de ambiente (não incluído no repositório)
└── README.md             # Documentação do projeto
```

## **Contribuindo**

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua feature ou correção de bug: 

   ```bash
   git checkout -b minha-feature
   ```

3. Commit suas alterações:

   ```bash
   git commit -m 'Adiciona minha nova feature'
   ```
4. Faça o push para a branch:

   ```bash
   git push origin minha-feature
   ```

5. Abra um Pull Request e descreva as mudanças propostas.

## **Licença**

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

## xplicação de Cada Seção

- Pré-requisitos: Lista o software necessário para rodar o projeto.
- Instalação: Explica como clonar o repositório e instalar as dependências.
- Configuração: Orienta sobre como configurar o banco de dados e as variáveis de ambiente.
- Scripts Disponíveis: Lista os scripts npm que podem ser executados.
- Estrutura de Pastas: Dá uma visão geral da estrutura do projeto.
- Contribuindo: Fornece um guia passo a passo para contribuir com o projeto.
- Licença: Informa sobre a licença do projeto.


