/*

1. JS no HTML: arquivo externo (script com o path ao final de body) ou no head com a tag script

2. Tipos de dados

    2.1 String: 

        - aspas simples
        - aspas duplas
        - template literals: $. variáveis e expressões lógicas
        - crase: múltiplas linhas 

    2.2 Numbers:

        - NaN: not a number. Outro dado (string, booleano...) que não seja number
        - Infinity: case sensitive, I maiúsculo

*/

var test = 'Hello World';

console.log(`${test}`);

console.log(`${1 != 0}`);

console.log(`${1 + 10}`);

console.log(`
    Hello 
    World
`);

var a = 1 / "A";
console.log(a);