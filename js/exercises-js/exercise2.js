/*

Exercício 2

Criar objeto com duas propriedades, receitas e despesas (array). Criar função para calcular total de receitas 
e despesas. Informe o valor do saldo e se é positivo ou negativo.

*/

let finances = {
    "revenues": [1500.00, 1000, 2000.00, 5000.50],
    "outgoing": [1000.00, 500.00, 900.00, 10000.00]
}

function financialResult(finances) {
    
    let sumRevenues = 0.0;
    let sumOutGoing = 0.0;
    let result = 0.0;

    for (let value of finances.revenues) {
        sumRevenues += value;
    }

    for(let value of finances.outgoing) {
        sumOutGoing += value;
    }

    result = sumRevenues - sumOutGoing;

    let message;

    if (result >= 0.0) {
        message = `O saldo é positivo e tem o valor de R$ ${result.toFixed(2)}`;
    } else {
        message = `O saldo é negativo e tem o valor de R$ ${result.toFixed(2)}`
    }

    return message;

}

/*

Função para fazer a soma

function sum(array) {
    let total = 0.0;

    for(let value of array) {
        total += value;
    }

    return total;
}

*/

console.log(financialResult(finances));