/*

12. Condicionais

    - Se o if tiver uma linha de comando, não precisa ter {}
    - Switch: break é opcional
    - Throw: dispara exception e pára a execução. pode ser usado sem try/catch
    - Try/catch: catch captura o erro e continua. mais recomendado

*/

// Switch

let anyNumber = 5;
let someExpression = ((anyNumber + 5) / 2) % 2 == 0;

switch (someExpression) {
    case 0:
        console.log("Número par");
        break;
    default:
        console.log("Número ímpar");
        break;
}

let someVariable;

// Try/catch

try {
    console.log(someVariable);
} catch(e) {
    console.log(e);
}

// Throw

if (someVariable == '' || someVariable == null) {
    // throw new Error("Variável deve ser preenchida");
}