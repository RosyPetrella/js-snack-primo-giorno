// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

for (let i = 1; i <= 10; i++) {
  const number = parseFloat(prompt("Type a number"));
  console.log(number);
  somma += number;
}

console.log(somma);
