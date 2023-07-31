/*
Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of
all numbers between 1 and the entered integer, inclusive.

Examples:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

const readline = require('readline-sync');

function computeSum(integer) {
  let sum = 0;

  for (let number = 1; number <= integer; number += 1) {
    sum += number;
  }

  return sum;
}

function computeProduct(integer) {
  let product = 1;

  for (let number = 1; number <= integer; number += 1) {
    product *= number;
  }

  return product;
}

console.log('Please enter an integer greater than 0:');
let number = parseInt(readline.prompt(), 10);

while (Number.isNaN(number) || number < 1) {
  console.log('Invalid input. Please enter an integer greater than 0:');
  number = parseInt(readline.prompt(), 10);
}

console.log('Enter "s" to compute the sum, or "p" to compute the product:');
let operation = readline.prompt();

while (operation !== 's' && operation !== 'p') {
  console.log('Please make a valid selection. "s" for sum, or "p" for product:');
  operation = readline.prompt();
}

if (operation === 's') {
  console.log(`The sum of the integers between 1 and ${number} is ${computeSum(number)}`);
} else if (operation === 'p') {
  console.log(`The product of the integers between 1 and ${number} is ${computeProduct(number)}`);
}