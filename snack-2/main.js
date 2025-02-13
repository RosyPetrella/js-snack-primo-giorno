// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Type the first word");
const secondWord = prompt("Type the second word");

console.log(firstWord, secondWord);

if (firstWord.length < secondWord.length) {
  console.log(firstWord + ", " + secondWord);
} else {
  console.log(secondWord + ", " + firstWord);
}
