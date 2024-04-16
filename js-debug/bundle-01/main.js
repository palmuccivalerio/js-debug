/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
/*******************************************************************************
// ESERCIZIO 1

    1- e un tenteativo di scorrere dentro un array con un ciclo for 
    2-no
    3- si la i non scorrera mai perche non e mai maggiore di 5 cosi



*******************************************************************************/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}


/*******************************************************************************
// ESERCIZIO 2

    1- dovrebbe ritornare il numero sommato a  5 se pari
    2-si servono tre uguali ===
    3- c'e un return che non si attiva



*******************************************************************************/



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
/*******************************************************************************
// ESERCIZIO 1

    1- e un tenteativo di scorrere dentro un array con un ciclo for  e di farlo bloccare a 5
    2-si punti e virgola nelle parentesi non solo virgole
    3- no



*******************************************************************************/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { // era presenta un punto e virgola in più (dopo l'incremento) ed un altro dopo la condizione dell'if che impediva di entrare nel caso in cui la condizione fosse vera ed era nuovamente sbagliato la condizione dato che bisogna inserire 3 uguali e non 1 , in più non bisognava nella condzione del ciclo for mettere array.length -1 perchè non avrebbe preso l'ultimo numero. Era sbagliato anche la condizione nell'if in quanto non era numbers % 2 === 0, ma numbers[i] % 2 === 0;
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers ());