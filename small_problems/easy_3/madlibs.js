/*
Madlibs is a simple game where you create a story template with "blanks" for
words. You, or another player, then construct a list of words and place them
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create.
*/

const readline = require('readline-sync');

function madlib(noun, verb, adverb, adjective) {
  console.clear();
  console.log(`Once upon a time, in a ${adjective} kingdom, there lived a curious ${noun}.`);
  console.log(`This ${noun} loved to ${verb} ${adverb} around the kingdom, exploring every nook and cranny.`);
  console.log(`The ${adjective} scenery and ${adverb} exciting adventures made every day truly ${adjective}.`);
}


let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adverb = readline.question('Enter an adverb: ');
let adjective = readline.question('Enter an adjective: ');

madlib(noun, verb, adverb, adjective);