/*

10. Arrays: 

    - Join: unir itens array
    - Array com construtor: new Array, passando os itens ou o tamanho do Array
    - Array.from: cada caractere da string será um elemento do array

*/


// Verificar se palavra existe em uma frase

// Includes - case sensitive

let phrase = "Frase aleatória";
console.log(phrase.includes("frase"));
console.log(phrase.includes("Frase"));

// Unir itens array usando join

let separatePhrase = phrase.split(" ");
console.log(separatePhrase);

let allArrayItens = separatePhrase.join(" ");
console.log(allArrayItens);

// Array com construtor

let someArray = new Array(5);
console.log(someArray);

// Array com construtor e função

let anotherArray = new Array("Mônica", function (birthYear) { let currentYear = new Date().getFullYear(); return currentYear - birthYear; });
console.log(anotherArray[anotherArray.length - 1](1990));

// Cada letra da string será um elemento do array

let justSomeWord = "Débora";
console.log(Array.from(justSomeWord));

let justSomeArray = new Array("João", "José", "Débora", "Jaqueline");

// Adicionar no fim do array 

justSomeArray.push("Luiz");
console.log(justSomeArray);

// Remover no fim do array

justSomeArray.pop();
console.log(justSomeArray);

// Adicionar no início do array

justSomeArray.unshift("Claudio");
console.log(justSomeArray);

// Remover no começo

justSomeArray.shift();
console.log(justSomeArray);

// Pegar elementos array: slice: início, fim

// Não modifica o array

console.log(justSomeArray.slice(0, 1));

// Remover elementos array: splice: onde começa, quantos elementos

console.log(justSomeArray.splice(0, 1));
console.log(justSomeArray);

// Encontrar posição do elemento

console.log(justSomeArray.indexOf("José"));