Projeto consiste na criação de uma API para retornar as informações do repositório do GitHub de um determinado usuário.

Para consumir a API é necessário usar a seguinte url: https://take-blip-restapi.azurewebsites.net.

Método de requisição: POST.

Cabeçalho da requisição:

| Chave | Valor |
| --- | --- |
| Content-Type | application/json |

Corpo da requisição (json):

| Chave | Valor | Coluna |
| --- | --- | --- | --- | --- |
| user | Usuário do GitHub | Obrigatório |
| language | Linguagem principal do repositório | Opcional |
| limit | Limite de repositórios | Opcional |