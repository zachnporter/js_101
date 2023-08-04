/*
- Ask the user for the amount of the loan
- Ask the user for the Annual Percentage Rate
- Ask the user for the loan duration

- Calculate the monthly interest rate
- Calculate the loan duration in months

- Calculate the monthly payment using the provided formula
*/

const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcome() {
  prompt(MESSAGES.welcome);
}

function getLoanAmount() {
  prompt(MESSAGES.loanAmount);
  let amount = readline.question();

  while (invalidNumber(amount)) {
    prompt(MESSAGES.invalidNumber);
    amount = readline.question();
  }

  return amount;
}

function getAnnualPercentageRate() {
  prompt(MESSAGES.annualPercentageRate);
  let rate = readline.question();

  while (invalidInterest(rate)) {
    prompt(MESSAGES.invalidRate);
    rate = readline.question();
  }

  return rate;
}

function getLoanDurationInYears() {
  prompt(MESSAGES.loanDuration);
  let duration = readline.question();

  while (invalidNumber(duration)) {
    prompt(MESSAGES.invalidDuration);
    duration = readline.question();
  }

  return duration;
}

function calculateMonthlyInterest(yearlyInterest) {
  return (Number(yearlyInterest) / 12) / 100;
}

function calculateLoanDurationInMonths(loanYears) {
  return Number(loanYears) * 12;
}

function calculateMonthlyPayment(loanAmount, monthlyInterest, loanMonths) {
  let payment;
  if (monthlyInterest === 0) {
    payment = loanAmount / loanMonths;
  } else {
    payment = Number(loanAmount) * (
      (monthlyInterest) /
      (1 - Math.pow((1 + monthlyInterest), (-loanMonths))));
  }

  return payment;
}

function invalidNumber(amount) {
  return amount.trim() === '' || Number.isNaN(Number(amount)) || Number(amount) <= 0;
}

function invalidInterest(rate) {
  return rate.trim() === '' || Number.isNaN(Number(rate)) || Number(rate) < 0;
}

function printResult(monthlyPayment) {
  prompt(MESSAGES.lineBreak);
  prompt(`${MESSAGES.result}${monthlyPayment.toFixed(2)}`);
  prompt(MESSAGES.lineBreak);
}

function newCalculation() {
  prompt(MESSAGES.newCalculation);
  let answer = readline.question();

  while (invalidAnswer(answer)) {
    prompt(MESSAGES.invalidChoice);
    answer = readline.question();
  }

  return answer[0].toLowerCase() === 'y';
}

function invalidAnswer(answer) {
  return !['n', 'no', 'y', 'yes'].includes(answer.toLowerCase());
}

while (true) {
  console.clear();
  welcome();

  let loanAmount = getLoanAmount();
  let yearlyInterest = getAnnualPercentageRate();
  let loanYears = getLoanDurationInYears();

  let monthlyInterest = calculateMonthlyInterest(yearlyInterest);
  let loanMonths = calculateLoanDurationInMonths(loanYears);

  let monthlyPayment =
  calculateMonthlyPayment(loanAmount, monthlyInterest, loanMonths);

  printResult(monthlyPayment);

  if (!newCalculation()) break;
}

prompt(MESSAGES.goodbye);