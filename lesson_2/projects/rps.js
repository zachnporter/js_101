const readline = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors'
};
const WINNING_MOVES = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function printWelcome() {
  prompt("Welcome to Rock, Paper, Scissors!");
}

function userTurn() {
  prompt(`Choose one: ${Object.values(VALID_CHOICES).join(', ')}:`);
  let choice = readline.question().toLowerCase();

  while (invalidChoice(choice)) {
    prompt("Please make a valid selection:");
    choice = readline.question().toLowerCase();
  }

  return VALID_CHOICES[choice[0]];
}

function invalidChoice(choice) {
  return !Object.keys(VALID_CHOICES).includes(choice) &&
         !Object.values(VALID_CHOICES).includes(choice);
}

function computerTurn() {
  let randomIndex = Math.floor(
    Math.random() * Object.keys(VALID_CHOICES).length
  );

  return Object.values(VALID_CHOICES)[randomIndex];
}

function determineWinner(userMove, computerMove) {
  if (WINNING_MOVES[userMove] === computerMove) {
    return 'user';
  } else if (WINNING_MOVES[computerMove] === userMove) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function printWinner(winner) {
  if (winner === 'user') {
    prompt("You win!");
  } else if (winner === 'computer') {
    prompt("Computer wins!");
  } else if (winner === 'tie') {
    prompt("It's a tie!");
  }
}

function playAgain() {
  prompt("Would you like to play again? (y/n)");
  let answer = readline.question();

  while (notYesOrNo(answer)) {
    prompt("Please make a valid selction: (y/n)");
    answer = readline.question();
  }

  return answer[0].toLowerCase();
}

function notYesOrNo(answer) {
  return !['y', 'yes', 'n', 'no'].includes(answer.toLowerCase());
}

while (true) {
  console.clear();
  printWelcome();

  let userMove = userTurn();
  let computerMove = computerTurn();

  prompt(`Your choice: ${userMove}. Computer choice: ${computerMove}`);

  let winner = determineWinner(userMove, computerMove);

  console.log("-----------------");
  printWinner(winner);
  console.log("-----------------");

  if (playAgain() === 'n') break;
}