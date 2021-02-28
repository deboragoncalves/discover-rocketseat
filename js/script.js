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

        - Lista. []. Aceita diversos tipos de dados, mas não é boa prática

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
        - No JS, é possível criar variáveis sem determinar o tipo: var, let ou const.

4. Nomes variáveis

    - Case sensitive
    - Posso colocar acentos e aspas
    - Pode iniciar com caracteres especiais (&, $, _...)
    - Não pode iniciar com números e nem colocar espaços vazios
    - Boa prática: camelCase, snake_case

5. Tipo de dado: typeof nomeVariavel

6.Template string ou template literals: com crase e $.

7. JS aceita com e sem ponto e vírgula

8. Funções:

    - agrupam o código e evitam repetição (reutilização). 
    - Podem ou não ser declaradas dentro de variáveis, assim como o return
    - parâmetros só funcionam dentro da função.

        - argumentos: quando chamo a função
        - parâmetros: quando a função é criada/declarada

    - quando não tem return, retorna no console como undefined
    - se a função é chamada antes da sua declaração, o JS interpreta como se fosse declarada e chamada depois, executando normalmente (elevação)

        - funciona se não for função anônima, se a função não for atribuida a uma variável. Se for feito isso, a variável é undefined e ele tenta executar uma função com esse valor, dando erro
    
    - arrow function: 

        - sem a palavra chave function
        - geralmente a função é atribuida a uma const

    - callback function:

        - o parâmetro de uma função é outra função, podendo ser arrow ou uma função normal

    - função construtora:

        - cria um novo objeto, similar ao construtor no Java
        - expressão new
        - molde do objeto (atributos e função em uma classe - java)
        - pode ser feito como json string ou json object
        - funções padrões JS: Date, String, Number, etc.

9. Casting: conversão explícita

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
    "age": function(birthYear) {
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

// Const 
const name = "Débora";

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

// Tipo de dado

console.log(typeof number);
console.log(typeof trainingObject);

// Agrupar declarações

var myName, age;

myName = "Débora";
age = 21;

console.log("Nome: " + myName + ", Idade: " + age + " anos.");

// Argumentos separados por vírgulas

console.log(myName, age);

// Interpolação

console.log(`Nome: ${myName}, Idade: ${age} anos.`);

// Funções sendo declaradas dentro de variáveis (função anônima)

// Sendo var, let ou const, uma variável criada dentro da função é de escopo local.

const sum = function(a, b) {
    var total = a + b;
    return total;
}

let number1 = 3;
let number2 = 4;

// Armazenar resultado em uma variável

const result = sum(3, 4);

console.log(`A soma de ${number1} e ${number2} é ${result}`);
// console.log(total);

// Chamar antes de declarar

console.log(multiply(2, 5));

function multiply(a, b) {
    return a * b;
}

// Arrow function

const data = (name, age) => {
    return `Meu nome é ${name} e tenho ${age} anos.`;
}

console.log(data("Luiz", 21));

// Callback

function mathExpression(sum) {
    return (sum + 5)/10;
}

console.log(mathExpression(sum(7, 8)));

// Função construtora

function Company(name, area, city) {
    this.name = name;
    this.area = area;
    this.city = city;
}

const someCompany = new Company("Example", "Services", "Joinville");

console.log(someCompany.name);
console.log(someCompany.area);

// Funções construtoras padrões JS

const date = new Date();
console.log(date);

// Casting

let a = '10';
let b = 5;

// Number - número em string

console.log(Number(a) / b);

// String - string em número

console.log(a + String(b));

// Tamanho string

console.log(a.length);

let someNumber = 1005;

// Tamanho número (transformar em String)

console.log(String(someNumber).length);

// Arredondar números e trocar ponto por vírgula

let someFloat = 34.5678;
console.log(someFloat.toFixed(2).replace(".", ","));
console.log(typeof someFloat.toFixed(2).replace(".", ","));

// Letras maiúsculas e minúsculas

let word = "ABC";
console.log(word.toLowerCase());

let anotherWord = "aBC";
console.log(anotherWord.toUpperCase())
