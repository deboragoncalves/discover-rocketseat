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

        - undefined: declarada mas não inicializado
        - null: declarada e não tem valor

    2.4 Objetos:

        - Possuem chaves (propriedades) e valores (funções, tipos primitivos...)
        - JSON

    2.5 Array:

        - Lista. []. Aceita diversos tipos de dados

3. Variáveis

    - Tipo existe só quando é inicializada e é dinâmico

    3.1 Palavras reservadas:

        - Const
        - Let: semelhante ao var
        - Var: menos usada, porque tem escopo global, pode alterar muitas vezes.

    3.2 Escopo

        - Var: tem escopo global e local. Pode ser acessado fora do bloco se for iniciado/modificado dentro.
        Se tentar acessar antes de inicializar dentro de um bloco, será undefined, fazendo elevação
        - Let: somente escopo local, não podendo ser acessada fora do bloco de criação.
        - Const: somente escopo local. Se foi criada no global, não pode ser alterada. No local pode ser criada e alterada com o mesmo nome.

4. Nomes variáveis

    - Case sensitive
    - Posso colocar acentos e aspas
    - Pode iniciar com caracteres especiais (&, $, _...)
    - Não pode iniciar com números e nem colocar espaços vazios
    - Boa prática: camelCase, snake_case

*/

// Template literals ($) 
var test = 'Hello World';

console.log(`${test}`);

console.log(`${1 != 0}`);

console.log(`${1 + 10}`);

// Crase  
console.log(`
    Hello 
    World
`);

// NaN - Not a number
var trainingNaN = 1 / "A";
console.log(trainingNaN);

// Undefined 
var trainingUndefined;
console.log(`${trainingUndefined}`);

// JSON 
var trainingObject = {
    "name": "Débora",
    "city": "Joinville-SC",
    "age": function(birthYear) {
        var currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}

console.log(trainingObject.age(1990));

// Array
var trainingArray = ["Débora", 21];
console.log(trainingArray);
console.log(trainingArray.length);
console.log(trainingArray[trainingArray.length - 1]);

// Const 
const name = "Débora";
console.log(typeof name);

// Escopo - Var 

console.log(someName);

if (someName == undefined) {
    var someName = "Débora";
}

console.log(someName);

// Escopo - Let

// Criada no escopo global e no local

let anotherName;

if (anotherName == undefined) {
    anotherName = "Ana";
    let lastName = "Gonçalves";
    console.log("Sobrenome: " + lastName);
}

console.log(anotherName);
// console.log("Sobrenome: " + lastName);

// Escopo - Const

// Criada no global e local

const number = 1;

console.log(number);

if (number) {
    const number = 2;
    console.log(number);
}
