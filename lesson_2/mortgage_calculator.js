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

const MONTHS = 12;

function prompt(message) {
  console.log(`=> ${message}`);
}

function sayHello() {
  prompt(MESSAGES.welcome);
}

function sayGoodbye() {
  prompt(MESSAGES.goodbye);
}

function getLoanAmount() {
  prompt(MESSAGES.loanAmount);
  let amount = readline.question();

  while (numberLessThanOne(amount)) {
    prompt(MESSAGES.invalidNumber);
    amount = readline.question();
  }

  return amount;
}

function numberLessThanOne(amount) {
  return amount.trim() === '' || Number.isNaN(Number(amount)) || Number(amount) <= 0;
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

function invalidInterest(rate) {
  return rate.trim() === '' || Number.isNaN(Number(rate)) || Number(rate) < 0;
}

function getLoanDurationMeasurement() {
  prompt(MESSAGES.loanPeriod);
  let answer = readline.question();

  while (invalidLoanPeriod(answer)) {
    prompt(MESSAGES.invalidLoanPeriod);
    answer = readline.question();
  }

  return answer[0].toLowerCase();
}

function invalidLoanPeriod(period) {
  return !['m', 'months', 'y', 'years'].includes(period.toLowerCase());
}

function getLoanDuration() {
  let measurement = getLoanDurationMeasurement();

  prompt(MESSAGES.loanDuration);
  let duration = readline.question();

  while (numberLessThanOne(duration)) {
    prompt(MESSAGES.invalidDuration);
    duration = readline.question();
  }

  return calculateLoanDurationInMonths(duration, measurement);
}

function calculateMonthlyInterest(yearlyInterest) {
  return (Number(yearlyInterest) / 12) / 100;
}

function calculateLoanDurationInMonths(loanDuration, loanMeasurement) {
  return loanMeasurement === 'y' ? Number(loanDuration) * MONTHS : loanDuration;
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

function printResult(monthlyPayment) {
  prompt(MESSAGES.lineBreak);
  prompt(`${MESSAGES.result}${monthlyPayment.toFixed(2)}`);
  prompt(MESSAGES.lineBreak);
}

function newCalculation() {
  prompt(MESSAGES.newCalculation);
  let answer = readline.question();

  while (notYesOrNo(answer)) {
    prompt(MESSAGES.invalidChoice);
    answer = readline.question();
  }

  return answer[0].toLowerCase() === 'y';
}

function notYesOrNo(answer) {
  return !['n', 'no', 'y', 'yes'].includes(answer.toLowerCase());
}

while (true) {
  console.clear();
  sayHello();

  let loanAmount = getLoanAmount();
  let yearlyInterest = getAnnualPercentageRate();
  let loanMonths = getLoanDuration();
  let monthlyInterest = calculateMonthlyInterest(yearlyInterest);

  let monthlyPayment =
  calculateMonthlyPayment(loanAmount, monthlyInterest, loanMonths);

  printResult(monthlyPayment);

  if (!newCalculation()) break;
}

sayGoodbye();