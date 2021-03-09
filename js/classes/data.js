/*
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

        - Lista. []. Aceita diversos tipos de dados, mas não é boa prática
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

// JSON String

// Último elemento pode ou não ter vírgula

var trainingObject = {
    "name": "Débora",
    "city": "Joinville-SC",
    "age": function (birthYear) {
        var currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}

// Método

console.log(trainingObject.age(1990));

// Valor de uma chave

console.log(trainingObject.name);

// JSON Object

var course = {
    name: "Rockeseat",
    level: "Basic",
}

console.log(course.name);

// Array com objeto como elemento

var trainingArray = ["Débora", 21, { "graduation": "Business" }];
console.log(trainingArray);
console.log(trainingArray.length);
console.log(trainingArray[trainingArray.length - 2]);
console.log(trainingArray[2].graduation);

// Arredondar números e trocar ponto por vírgula

let someFloat = 34.5678;
console.log(someFloat.toFixed(2).replace(".", ","));
console.log(typeof someFloat.toFixed(2).replace(".", ","));

// Letras maiúsculas e minúsculas

let word = "ABC";
console.log(word.toLowerCase());

let anotherWord = "aBC";
console.log(anotherWord.toUpperCase());