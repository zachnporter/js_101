const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
const WINNING_SCORE = 3;
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function printWelcome() {
  console.clear();
  prompt(MESSAGES.welcome);
}

function enterToContinue() {
  prompt(MESSAGES.continue);
  readline.question();
}

function askToReadRules() {
  prompt(MESSAGES.readRules);
  let answer = readline.question();

  while (notYesOrNo(answer)) {
    prompt(MESSAGES.invalidAnswer);
    answer = readline.question();
  }

  if (answer[0].toLowerCase() === 'y') {
    console.clear();
    prompt(MESSAGES.rules);
    console.log(`- First to ${WINNING_SCORE} wins!\n`);
  }
}

function displayCurrentScore(userScore, computerScore) {
  prompt(`User Score: ${userScore}; Computer Score: ${computerScore}`);
  console.log(MESSAGES.scoreSeperator);
}

function userTurn() {
  prompt(MESSAGES.chooseOne);
  let choice = readline.question().toLowerCase();

  while (invalidChoice(choice)) {
    prompt(MESSAGES.invalidChoice);
    choice = readline.question().toLowerCase();
  }

  choice = choice.slice(0, 2);
  if (choice === 'sc' || choice === 'sp') {
    return VALID_CHOICES[choice];
  } else {
    return VALID_CHOICES[choice[0]];
  }
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
  if (WINNING_MOVES[userMove].includes(computerMove)) {
    return 'user';
  } else if (WINNING_MOVES[computerMove].includes(userMove)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function printWinner(userMove, computerMove, winner) {
  console.clear();
  prompt(`Your choice: ${userMove}. Computer choice: ${computerMove}\n`);

  if (winner === 'user') {
    prompt(MESSAGES.youWin);
  } else if (winner === 'computer') {
    prompt(MESSAGES.computerWins);
  } else if (winner === 'tie') {
    prompt(MESSAGES.tie);
  }
}

function printChampion(userScore, computerScore) {
  if (userScore === WINNING_SCORE) {
    prompt(MESSAGES.userChamp);
  } else if (computerScore === WINNING_SCORE) {
    prompt(MESSAGES.computerChamp);
  }
}

function updateScore(winner, player) {
  return winner === player ? 1 : 0;
}

function playAgain() {
  prompt(MESSAGES.playAgain);
  let answer = readline.question();

  while (notYesOrNo(answer)) {
    prompt(MESSAGES.invalidAnswer);
    answer = readline.question();
  }

  return answer[0].toLowerCase() === 'y';
}

function notYesOrNo(answer) {
  return !['y', 'yes', 'n', 'no'].includes(answer.toLowerCase());
}

function printGoodbye() {
  prompt(MESSAGES.goodbye);
}

printWelcome();
let continueGame = true;

while (continueGame) {
  askToReadRules();

  let userScore = 0;
  let computerScore = 0;

  while (userScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    enterToContinue();
    console.clear();
    displayCurrentScore(userScore, computerScore);

    let userMove = userTurn();
    let computerMove = computerTurn();

    let winner = determineWinner(userMove, computerMove);
    printWinner(userMove, computerMove, winner);

    userScore += updateScore(winner, 'user');
    computerScore += updateScore(winner, 'computer');

    displayCurrentScore(userScore, computerScore);
  }

  printChampion(userScore, computerScore);

  continueGame = playAgain();
  console.clear();
}

printGoodbye();