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

    2.3 Undefined e null:

        - undefined: existe mas não foi inicializado
        - null: existe e não tem valor

    2.4 Objetos:

        - Possuem chaves (propriedades) e valores (funções, tipos primitivos...)
        - JSON

    2.5 Array:

        - Lista. []. Aceita diversos tipos de dados

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

var testingUndefined;
console.log(`${testingUndefined}`);

var object = {
    "name": "Débora",
    "city": "Joinville-SC",
    "age": function(birthYear) {
        var currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}

console.log(object.age(1990));

var array = ["Débora", 21];
console.log(array);
console.log(array.length);
console.log(array[array.length - 1]);