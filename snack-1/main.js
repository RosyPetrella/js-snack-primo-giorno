// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstNumber = prompt("Insert first number");
const secondNumber = prompt("Insert second number");

if (firstNumber > secondNumber) {
  console.log("Il numero maggiore è " + firstNumber);
} else {
  console.log("Il numero maggiore è " + secondNumber);
}
