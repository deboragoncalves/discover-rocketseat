/*

Exercício 3

Criar uma função que recebe uma string em Celsius ou Fahreneint e transforme-a para a outra unidade.

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/

let temperature = "30C";

function identifyTemperature(temperature) {

    let index;

    if (temperature.toUpperCase().endsWith("F")) {
        index = temperature.toUpperCase().indexOf("F");

        temperature = temperature.substring(0, index);
        temperature = new Number(temperature);

        console.log("Temperatura em Celsius: " + convertFahrenheitToCelsius(temperature) + " C.");

    } else if (temperature.toUpperCase().endsWith("C")) {
        index = temperature.toUpperCase().indexOf("C");

        temperature = temperature.substring(0, index);
        temperature = new Number(temperature);

        console.log("Temperatura em Fahreneint: " + convertCelsiusToFahrenheit(temperature) + " F.");
    } else {
        throw new Error("A temperatura é inválida. Deve terminar com C ou F.");
    }
}

identifyTemperature(temperature);

function convertFahrenheitToCelsius(temperature) {
    let result = ((temperature - 32) * 5/9).toFixed(2);
    return result;
}

function convertCelsiusToFahrenheit(temperature) {
    let result = (temperature * 9/5 + 32).toFixed(2);
    return result;
}

// Arrow functions
// Substring ou replace
// Ends/Starts With ou includes