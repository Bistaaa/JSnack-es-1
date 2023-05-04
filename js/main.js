//Chiediamo all'utente per 5 volte di inserire un numero. 

let numberOne = parseInt (prompt("Inserisci il primo numero"));
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
 console.log("total: " + total);