/*
Log all odd numbers from 1 to 99, inclusive,
to the console, with each number on a separate line.
*/

// Solution 1
let number = 1;

while (number < 100) {
  console.log(number);
  number += 2;
}

// Solution 2
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

/*
Further Exploration
Repeat this exercise with a technique different from the one that you used,
and different from the one provided. Also consider adding a way for the user
to specify the limits of the odd numbers logged to the console.
*/

function logOddNumbers(maxNumber) {
  for (let number = 1; number <= maxNumber; number += 2) {
    console.log(number);
  }
}

logOddNumbers(21);