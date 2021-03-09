/*
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

*/

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