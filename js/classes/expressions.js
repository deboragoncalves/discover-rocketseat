/*

11. Expressões e operadores:

    - Ponto e vírgula é opcional ao final da expressão.
    - Função autoexecutável
    - Operador binário: dois valores;
    - Operador unário: um único valor. Exemplo: typeof, delete
    - Operador ternário: três valores. if ternário
    - Expressão new: criar objeto
    - Operadores de atribuição: módulo e expoencial
    - 0, string vazia, null, NaN, undefined: considerado falso em condicionais e loops
    - Objeto vazio {}, array vazio [], double, -1, infinity: considerado verdadeiro

*/

// Operador binário

let numberOne = 1;
let numberTwo = 5;
console.log(numberOne + numberTwo);

// Operador unário: decremento antes e depois

console.log(numberTwo--);
console.log(--numberTwo);

// Unário - delete

// Propriedade age 

delete trainingObject.age;
console.log(trainingObject);

// Operador ternário

let expression = (numberOne + numberTwo) / 2;

let evenOrOdd = expression % 2 == 0 ? "Número par" : "Número ímpar";
console.log(evenOrOdd);

// New - novo objeto

let lastYear = new Date().getFullYear() - 1;
console.log(lastYear);

// Expoencial sem função pow

console.log(2 ** 3);

// Operadores de atribuição

    // Módulo

    console.log(lastYear %= 2);

    // Expoencial

    console.log(numberTwo **= 2);

// Falsy

let lastName;
let conditional = lastName ? lastName : "String vazia";
console.log(conditional);

// Truthy

console.log([] ? "Verdadeiro" : "Falso");
console.log(true == 1);
console.log(true === 1);

