/*
Build a program that logs when the user will retire and how
many more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readline = require('readline-sync');

function getCurrentAge() {
  console.log('What is your age?');
  let currentAge = readline.question();

  while (invalidAge(currentAge)) {
    console.log('Please enter a valid age:');
    currentAge = readline.question();
  }

  return Number(currentAge);
}

function getRetirementAge() {
  console.log('At what age would you like to retire?');
  let retirementAge = readline.question();

  while (invalidAge(retirementAge)) {
    console.log('Please enter a valid age:');
    retirementAge = readline.question();
  }

  return Number(retirementAge);
}

function invalidAge(age) {
  return age.trim() === '' || isNaN(Number(age)) || Number(age) < 1;
}

function printRetirementAge(currentYear, retirementYear, workingYears) {
  console.log(`It's ${currentYear}. You will retire in ${retirementYear}.
You have only ${workingYears} years of work to go!`);
}

let today = new Date();
let currentYear = today.getFullYear();

let currentAge = getCurrentAge();
let retirementAge = getRetirementAge();

let workingYears = retirementAge - currentAge;
let retirementYear = currentYear + workingYears;

printRetirementAge(currentYear, retirementYear, workingYears);