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
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]