//dichiariamo variabili
let somma = 0;

//Chiediamo all'utente per 5 volte di inserire un numero. 

for (let i = 1; i <= 5; i++) {
    const numero = parseInt (prompt("Inserisci un numero"));
    console.log(numero);
    somma = somma + numero;
}

console.log(somma);


/*let numberOne = parseInt (prompt("Inserisci il primo numero"));
let numberTwo = parseInt (prompt("Inserisci il secondo numero"));
let numberThree = parseInt (prompt("Inserisci il terzo numero"));
let numberFour = parseInt (prompt("Inserisci il quarto numero"));
let numberFive = parseInt (prompt("Inserisci il quinto numero"));

console.log("1: " + numberOne);
console.log("2: " + numberTwo);
console.log("3: " + numberThree);
console.log("4: " + numberFour);
console.log("5: " + numberFive);

 //Il programma stampa la somma di tutti i numeri inseriti.

 let total = numberOne + numberTwo + numberThree + numberFour + numberFive;
 console.log("total: " + total); */