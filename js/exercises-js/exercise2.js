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

    for (let values of finances.revenues) {
        sumRevenues += values;
    }

    for(let values of finances.outgoing) {
        sumOutGoing += values;
    }

    result = sumRevenues - sumOutGoing;

    if (result >= 0.0) {
        return "O saldo é positivo e tem o valor de R$ " + result;
    } else {
        return "O saldo é negativo e tem o valor de R$ " + result;
    }

}

console.log(financialResult(finances));