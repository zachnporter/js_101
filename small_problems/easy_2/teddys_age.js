/*
Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).

Example:
Teddy is 69 years old!
*/

function randomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function randomAge(min, max) {
  return min < max ? randomNumber(min, max) : randomNumber(max, min);
}

function printTeddysAge(age) {
  console.log(`Teddy is ${age} years old!`);
}

printTeddysAge(randomAge(20, 120));