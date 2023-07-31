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

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['language']);
let chooseLanguage = readline.question();

while (!['1', '2'].includes(chooseLanguage)) {
  prompt(MESSAGES['invalidLanguage']);
  chooseLanguage = readline.question();
}

let language = chooseLanguage === '1' ? 'en' : 'es';

prompt(messages('welcome', language));

let performCalculation = true;
while (performCalculation) {
  prompt(messages('firstNumber', language));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalidNumber', language));
    number1 = readline.question();
  }

  prompt(messages('secondNumber', language));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invalidNumber', language));
    number2 = readline.question();
  }

  prompt(messages('operation', language));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalidOperation', language));
    operation  = readline.question();
  }

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

  prompt(`${messages('result', language)} ${output}`);

  prompt(messages('newCalculation', language));
  let answer = readline.question();

  while ((answer[0].toLowerCase() !== 'y') && (answer[0].toLowerCase() !== 'n')) {
    prompt(messages('invalidChoice', language));
    answer = readline.question();
  }

  if (answer[0].toLowerCase() === 'n') performCalculation = false;
}

prompt(messages('goodbye', language));