/*

13. Repetição

    - For: break: interrompe todo o for. continue: pula para o próximo item do for.
    - While: usado quando não sabemos o momento de parada.
    - For of: usado para strings e arrays. Imprime cada item
    - For in: usado para objetos e arrays. Imprime o índice do array e os nomes das chaves do objeto

*/

// For: continue

for (let i = 0; i < 5; i++) {
    if (i == 5) {
        continue;
    }

    console.log(i);
}

// For of

for (let item of trainingObject.name) {
    console.log(item);
}

for (let item of justSomeArray) {
    console.log(item);
}

// For in

for (let property in trainingObject) {
    console.log(property)
}

for (let index in justSomeArray) {
    console.log(index)
}