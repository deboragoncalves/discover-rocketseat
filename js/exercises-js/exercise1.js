/*

Exercício 1

Crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas (A, B e C)

    - Menor que 60: F
    - Entre 60 e 69: D
    - Entre 70 e 79: C
    - Entre 80 e 89: B
    - Maior que 90: A

*/

let note = "A";

let noteF = note < 60;
let noteD = note >= 60 && note <= 69;
let noteC = note >= 70 && note <= 79;
let noteB = note >= 80 && note <= 89;
let noteA = note >= 90;

function noteClassification(note) {
    if (noteA) {
        note = 'A';
        return note;
    } else if (noteB) {
        note = 'B';
        return note;
    } else if (noteC) {
        note = 'C';
        return note;
    } else if (noteD) {
        note = 'D';
        return note;
    } else if (noteF) {
        note = 'F';
        return note;
    } else {
        return "Informe um valor numérico para a nota.";
    }
}

console.log("Classificação Nota: " + noteClassification(note));



