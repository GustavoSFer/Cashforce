# Bem vindo!

## Tecnologias utilizadas
- React
- React-router-dom
- Dotenv
- Axios
- Node.js
- Express
- MySQL

## Objetivo do projeto:
  * criar uma API em Node e express.
  * Consultar a API criada e exibir os dados que estão retornando dessa API.
   
<br><br><br>

# Instruções para iniciar o projeto
  1 - Clone o repositório
  * Chave SSH
    * git git@github.com:GustavoSFer/Cashforce.git
    
  * Entre na pasta do repositório que você acabou de clonar:
    * cd Cashforce

2 - Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install
  * Para instalar as dependências individual: (opcional)
    * npm run start:back (back-end)
    * npm run start:front (front-end)
  
  * Inicialize o projeto: `obs: antes de inicializar faça as configurações do banco`
    * npm start - `Caso não abrir a pagina no nagevar, inicie separado`
      * cd banck-end 
      ``` npm start```
      * cd front-end 
      ``` npm start```

## Conexão com o Banco: (pasta back-end)
Na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente.

```sh
DB_URI=bancoDeDados
PORT=3001
```