// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcome(language) {
  prompt(messages('welcome', language));
}

function chooseLanguage() {
  prompt(MESSAGES['language']);
  let language = readline.question();

  while (invalidLanguage(language)) {
    prompt(MESSAGES['invalidLanguage']);
    language = readline.question();
  }

  return language;
}

function invalidLanguage(language) {
  return !['en', 'es'].includes(language);
}

function getNumber(messageKey, language) {
  prompt(messages(messageKey, language));
  let number = readline.question();

  while (invalidNumber(number)) {
    prompt(messages('invalidNumber', language));
    number = readline.question();
  }

  return number;
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getOperation(language) {
  prompt(messages('operation', language));
  let operation = readline.question();

  while (invalidOperator(operation)) {
    prompt(messages('invalidOperator', language));
    operation  = readline.question();
  }

  return operation;
}

function invalidOperator(operation) {
  return !['1', '2', '3', '4'].includes(operation);
}

function performOperation(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  return output;
}

function printResult(language, result) {
  prompt(`${messages('result', language)} ${result}`);
}

function validateOperation(number, operation, language) {
  while (invalidOperation(number, operation)) {
    number = getNumber('invalidOperation', language);
  }

  return number;
}

function invalidOperation(number, operation) {
  return (Number(number) === 0) && (operation === '4');
}

function newCalculation(language) {
  prompt(messages('newCalculation', language));
  let answer = readline.question();

  while (invalidChoice(answer)) {
    prompt(messages('invalidChoice', language));
    answer = readline.question();
  }

  return answer;
}

function invalidChoice(answer) {
  return !['yes', 'y', 'no', 'n'].includes(answer.toLowerCase());
}

function goodbye(language) {
  prompt(messages('goodbye', language));
}

console.clear();

let language = chooseLanguage();
welcome(language);

while (true) {
  let number1 = getNumber('firstNumber', language);
  let number2 = getNumber('secondNumber', language);
  let operation = getOperation(language);

  number2 = validateOperation(number2, operation, language);

  let result = performOperation(number1, number2, operation);

  printResult(language, result);

  let restart = newCalculation(language);

  if (restart[0].toLowerCase() === 'n') {
    goodbye(language);
    break;
  }

  console.clear();
}