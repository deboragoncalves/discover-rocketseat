/*

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

*/


// Funções sendo declaradas dentro de variáveis (função anônima)

// Sendo var, let ou const, uma variável criada dentro da função é de escopo local.

const sum = function (a, b) {
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
    return (sum + 5) / 10;
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

// Função autoexecutável: não precisa ser chamada

(function() {
    console.log("Função autoexecutável");
})()