/*
Log all even numbers from 1 to 99, inclusive,
to the console, with each number on a separate line.
*/

// Solution 1
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// Solution 2
let number = 1;

while (number < 100) {
  if (number % 2 === 0) {
    console.log(number);
  }

  number += 1;
}