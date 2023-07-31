/*
Build a program that asks the user to enter the length and width
of a room in meters, and then logs the area of the room to the
console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the readlineSync.prompt method to collect user input.

Example:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Further Exploration
Modify the program so that it asks the user for the input type (meters or feet).
Compute for the area accordingly, and log it and its conversion in parentheses.
*/

const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log('Would you like to calculate in (m)eters or (f)eet?');
let answer = readline.prompt();

while (answer !== 'm' && answer !== 'f') {
  console.log('Invalid selection. Please enter either meters or feet.');
  answer = readline.prompt();
}

let primaryUnit = answer === 'm' ? 'meters' : 'feet';
let secondaryUnit = answer === 'm' ? 'feet' : 'meters';

console.log(`Enter the length of the room in ${primaryUnit}:`);
let length = readline.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in ${primaryUnit}:`);
let width = readline.prompt();
width = parseInt(width, 10);

let area = length * width;
let conversion = primaryUnit === 'meters' ? area * SQMETERS_TO_SQFEET : area / SQMETERS_TO_SQFEET;

console.log(
  `The area of the room is ${area.toFixed(2)} square ${primaryUnit} (${conversion.toFixed(2)} square ${secondaryUnit}).`
);