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
    - Autenticação/Autorização

16. URI

    - Identificador único
    - Identificar pelo nome ou localização 
    - Localização: URL - uniform resource locator. Toda URL é uma URI (identificador). Nem toda URI é URL (pode ser pelo nome)
        
        - Componentes obrigatórios:

            - protocolo: https ou http, mailto
            - domínio: pode ser identificado pelo nome (sirleisil.com.br) ou pelo IP (127.0.0.0)
        
        - Componentes opcionais:

            - subdomínio: antes do domínio (Exemplo: www.sirleisil.com.br. Subdomínio: www. Domínio: sirleisil.com.br)
            - path: /about: www.sirleisil.com.br/about

                - quando não coloco nada específico, o path é a barra /. https://www.google.com.br

            - parâmetros: ?chave=valor. https://github.com/deboragoncalves?tab=packages . Exemplo: ?tab=packages
            - porta: depois do IP ou do nome. https://127.9.9.9:9000/ . porta pode estar aberta (disponível) ou fechada
                
                - http: porta 80
                - https: porta 443

            - âncora: https://www.sirleisil.com.br/index.html#sobre . Local dentro do documento. Direciona para uma parte da página

                - sem o / direciona para o documento nomeado como index (.html, .php, etc)
    - Nome:

        - URN: uniform resource name
        - Exemplo: urn:isbn:1482304892 (nome livro)

17. Mensagens

    - Comunicação entre cliente e servidor: mensagens no envio e na resposta
    - Estrutura binária: 0 e 1
    - Request: 

        - Itens para fazer o pedido:

            - método (get, post, delete, put)
            - URI
            - versão do protocolo
            - body - opcional
            - headers - sempre enviar

        - Quando se coloca a URI, o browser preenche todo o resto
        - No curl, quando não coloca um método, o default é GET: curl -v http://google.com . User Agent: client

    - Resposta: html, json
    
        - Protocolo
        - Status code
        - Mensagem/corpo
        - Headers: 

            - Data
            - Tipo de conteúdo (html, json)
            - Versão http
            - Status code

18. Métodos

    - Método: ação, função
    - Método seguro: cliente não solicita alterações, somente leitura (get, head)
    - Método idempotente: cliente sempre obtém a mesma resposta. 
    
        - O pedido (método get) https://google.com, sempre obterá a mesma página/resposta
        - Mesma operação é feita várias vezes e a resposta é a mesma 
        
    - Todos os métodos seguros são idempotentes. Put e delete também são, mas não são seguros, pois se faz alterações, porém o servidor responde da mesma forma (status 200, etc)
    - Método idempotente: status code pode ser diferente
    - Post e patch não são idempotentes: respostas diferentes (item x foi criado com sucesso), e não são seguros: alteram o servidor

19. JSON Server

    - Servidor, respostas em JSON
    - Instalar: npm install -g json-server
    - Criar arquivo db.json
    - Iniciar servidor: json-server --watch db.json
    - Cada chave do arquivo db.json é um caminho (localhost:3000/...), podendo usar os verbos GET, PUT, DELETE
    - Curl: curl http://localhost:3000/posts . Requisição get
    - curl -i http://... - somente headers

20. Options

    - Disponibilidade dos métodos
    - curl -X: -X define o verbo que vou usar
    - Options é um verbo/método http
    - curl -X OPTIONS http://localhost:3000/posts
    - Não tem body no pedido e na resposta
    - curl -X OPTIONS http://localhost:3000/posts -i , com cabeçalho. 

        - Recebe status e os métodos permitidos

    - Options é seguro: não altera o servidor, só recebe informações
    - Não tem cache, não guarda dados em memória, tenho que fazer a chamada pra saber 

21. GET

    - Só recebe dados. É seguro, não altera o servidor
    - Imdepotente: recebo sempre as mesmas informações
    - Quando eu faço o pedido, não posso enviar nada no body
    - Recebo um body como resposta (http, etc)
    - Cache: pode guardar algo em memória. Acesso à resposta rapidamente
    - Utilizado em formulários HTML (busca, filtros, etcs)
    - curl http://localhost:3000/posts
    - com detalhes curl -v http://localhost:3000/posts

        - header: método (GET), path do pedido (/posts), host (localhost:3000), accept (qualquer dado)

    - cabeçalho de resposta: curl -I http://localhost:3000/posts
    - parâmetros: 

        - curl -v http://localhost:3000/posts\?q\=oracle
        - retorno vazio
        - curl -v http://localhost:3000/posts\?q\=json

22. HEAD

    - Semelhante ao GET, porém só tem o cabeçalho como retorno
    - Seguro: nenhuma alteração no servidor
    - Idempotente: sempre a mesma resposta
    - Sem body no envio e no retorno
    - Sem utilização em formulários
    - Posso fazer o cache, tendo uma rápida resposta
    - cabeçalho de resposta: curl -I http://localhost:3000/posts ou curl --head http://localhost:3000/posts
    - Respostas: tamanho conteúdo

23. POST

    - Não é seguro: altera o servidor.
    - Não é idempotente: sempre respostas diferentes
    - Body enviado no pedido (item a ser incluído) e na resposta (status, etc). Posso receber ou não body na resposta
    - Utilizado em formulários HTML (cadastro de usuários, login, etc)
    - Pode ou não fazer o cache, dependendo do header
    - curl -d '{ "login": "debora.goncalves", "password": "1234" }' -H "Content-type: application/json" -X POST http://localhost:3000/posts

        - -d: data
        - -H: cabeçalho. "Content-type: application/json". Enviando dados json
        - -X: método POST
        - resposta: objeto criado

24. PUT

    - Atualizar: status 204 ou 200
    - Pode ser usado para criar. Status 201.
    - Idempotente: resposta sempre é a mesma
    - Não é seguro: atualização no servidor
    - Sem body na resposta e com body no pedido
    - Não é usado em formulários
    - Não faz cache
    - curl -d '{ "login": "debora.goncalves", "password": "1234" }' -H "Content-type: application/json" -X PUT http://localhost:3000/posts

    - -d, header, método put
    - com resposta (body): pode ter ou não

25. PATCH

    - modificação parcial no recurso
    - PUT: muda o recurso inteiro
    - não é seguro: muda um recurso
    - não é idempotente: resultado diferente
    - envio e resposta com body
    - não uso em formulários
    - não faz cache
    - no body de envio, coloco somente os valores que quero alterar
    - curl -d '{ "password": "1234" }' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1
    - alguns sistemas usam o PUT para somente um ou alguns itens

26. DELETE

    - Status:

        - 202: aceito, mas não processado
        - 204: deletado, sem conteúdo de body como resposta
        - 200: deletado, com body como resposta

    - Não é seguro, faz alteração no servidor
    - Idempotente: resposta sempre a mesma
    - Body: pode ser enviado tanto na resposta quanto no pedido
    - Não é usado em formulário
    - Não se faz cache
    - curl -X DELETE http://localhost:3000/posts/1
        - método X delete

    - fazer get para ver se retorna: curl -X GET http://localhost:3000/posts/1
    - headers: curl http://localhost:3000/posts/1 -i

        - status 404, não encontrado OK

*/