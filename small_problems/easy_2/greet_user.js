/*
Write a program that will ask for user's name.
The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/

const readline = require('readline-sync');

let name = readline.question("What is your name? ");

// Solution 1
if (name.endsWith('!')) {
  name = name.slice(0, -1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${name}`);
}