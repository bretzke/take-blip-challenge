Projeto consiste na criação de uma API para retornar as informações do repositório do GitHub de um determinado usuário.

Para consumir a API é necessário usar a seguinte url: https://take-blip-restapi.azurewebsites.net.

Método de requisição: POST.

### Cabeçalho da requisição:

| Chave        | Valor            |
| ---          | ---              |
| Content-Type | application/json |

### Corpo da requisição (json):

| Chave    | Valor                              | Obrigatório |
| ---      | ---                                |         --- |
| user     | Usuário do GitHub                  | Sim         |
| language | Linguagem principal do repositório | Não         |
| limit    | Limite de repositórios             | Não         |

### Retornos:

| Chave      | Valor                            |
| ---        | ---                              |
| statusCode | 404 ou 200                       |
| message    | Mensagem de erro                 |
| avatar     | Url da foto de perfil do usuário |
| repos      | Array com os repositórios        |

##### Observação: Além da API, é possível acessar o fluxo conversacional do chatbot na pasta Flow.