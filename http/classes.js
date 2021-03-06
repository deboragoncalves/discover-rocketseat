/*

HTTP

1. Permite troca de informações
2. A cada entrada em um site, faço um pedido e recebo informações
3. Brownser (cliente) faz o pedido e o servidor (site) envia uma resposta.
4. Quando faço um pedido, preciso dizer qual é o tipo de pedido, o método: get (pegar), post (criar)... e informar a URL
5. Todo pedido tem header (cabeçalho) e body (corpo).
6. Resposta: status do pedido 

    6.1. 200 - OK
    6.2. 301 - redirecionamento
    6.3. 404 - página não encontrada
    6.4. 500 - erro servidor interno

    6.5 Quando faz um GET, não precisa enviar o body mas recebe como resposta.

7. Header: informações, usadas para pedido ou resposta. propriedade e valor.

    - content type: tipo de conteúdo: application/json
    - user agent: cliente (chrome)
    - URL

8. Body: conteúdo para enviar ou receber. HTML, JSON, Arquivo JPEG...

9. DevTools: F12. Aba Network

    - Preserve log: deixa os logs mesmo ao mudar de página

10. Curl

    - git bash: curl http://google.com 
    - visualizar a resposta do servidor
    - headers e body de resposta: curl -i http://google.com
    - headers do pedido e de resposta e outras infos: curl -v http://google.com

11. Sem relação entre conexões/pedidos.

12. Guardar sessões/informações para que na próxima conexão essa informações (login/senha) sejam guardadas:

    1. Cookies
    2. Local/session storage

13: Cliente: pode ser o browser ou o cURL

14. Servidor: um ou vários computadores que ouvem e enviam respostas através dos header, status, body.

15. Proxies: auxiliam no transporte de dados entre cliente e servidor.

    - Filtro a alguns sites
    - Load balanced: distribuição da carga (caso o envio do pedido seja pesado, a resposta é mais rapidamente porque a carga é dividida)
    - Autenticação
    - Autorização

16. URI

    - Identificador único
    - Identificar pelo nome ou localização
*/