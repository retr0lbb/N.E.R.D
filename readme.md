# Equipe 06 - N.E.R.D


esse é um projeto de conclusao de curso. o tema de nosso projeto é um e-comerce de jogos digitais como a steam e outros.





#

### documentação da api e do projeto

#### disclaimer! 

ao instalar esse projeto devera se criar uma pasta com o nome de uploads dentro da pasta server `mkdir uploads`.
tambem deve se criar um arquivo de configuração de *dotenv*

| Nome    | Métodos |     Url                | Parametros |     body                            |
|---------|---------|------------------------|------------|-------------------------------------|
|Cadastrar|  ![Static Badge](https://img.shields.io/badge/POST) |`localhost:3000/users/` | Nenhum|name, email, pass, type, imgName, src|
|Listar| GET | `localhost:3000/users/`| Nenhum | Nenhum |
|Deletar| DELET | `localhost:3000/users/:id` | ID | Nenhum |
|Alterar| PACH | `localhost:3000/users/:id` | ID | name, email, pass, type, imgName, src|
|Logar| POST | `localhost:3000/users/login/:id` | ID | email, pass|
