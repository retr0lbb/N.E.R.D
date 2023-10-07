# Equipe 06 - N.E.R.D


esse é um projeto de conclusao de curso. o tema de nosso projeto é um e-comerce de jogos digitais como a steam e outros.



#

### documentação da api e do projeto

#### disclaimer! 

ao instalar esse projeto devera se criar uma pasta com o nome de uploads dentro da pasta server `mkdir uploads`.
tambem deve se criar um arquivo de configuração de *dotenv*

| Nome    | Métodos |     Url                | Parametros |     body                            |
|---------|---------|------------------------|------------|-------------------------------------|
|*Cadastrar*|  ![POST](https://img.shields.io/badge/POST-yellow.svg) |``localhost:3000/users/`` | Nenhum|name, email, pass, type, imgName, src|
|*Listar*| ![GET](https://img.shields.io/badge/GET-green.svg) | `localhost:3000/users/`| Nenhum | Nenhum |
|*Deletar*| ![DELETE](https://img.shields.io/badge/DELETE-red.svg) | `localhost:3000/users/:id` | ID | Nenhum |
|*Alterar*| ![PATCH](https://img.shields.io/badge/PATCH-purple.svg) | `localhost:3000/users/:id` | ID | name, email, pass, type, imgName, src|
|*Logar*| ![POST](https://img.shields.io/badge/POST-yellow.svg) | `localhost:3000/users/login/:id` | ID | email, pass|


## Retornos das api's:

Essa api como já foi citada antes é uma api restful para insersão e consulta no banco de dados
ultilizando o mongodb como base de dados não relacional, E ultilizando o mongoose como "Framework"
de banco de dados o retorno da api se da por um arquivo json e dentro de um objeto data, igual quase
qualquer api seguimos alguns exemplos de retorno da api:

```json



```