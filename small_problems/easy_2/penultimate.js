/*
Write a function that returns the next to last
word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/

function penultimate(string) {
  string = string.split(' ');
  return string[string.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
Further Exploration:
Our solution ignored a couple of edge cases because we explicitly
stated that you didn't have to handle them: strings that contain
just one word, and strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence.
What edge cases need to be considered? How would you handle those edge cases
without ignoring them? Write a function that returns the middle word of a
phrase or sentence. It should handle all of the edge cases you thought of.
*/

function middleWord(string) {
  if (typeof string !== 'string') return 'Argument is not a string';

  let wordArray = string.trim().split(' ');

  if (wordArray.length < 3) {
    return 'String is too short.';
  } else if (wordArray.length % 2 === 0) {
    let middleIdx = (wordArray.length / 2) - 1;
    return wordArray.slice(middleIdx, middleIdx + 2).join(' ');
  } else {
    let middleIdx = Math.floor(wordArray.length / 2);
    return wordArray[middleIdx];
  }
}

console.log(middleWord(21) === 'Argument is not a string');
console.log(middleWord('') === 'String is too short.');
console.log(middleWord('    ') === 'String is too short.');
console.log(middleWord('last word') === 'String is too short.');
console.log(middleWord('hello') === 'String is too short.');
console.log(middleWord('Launch School is great') === 'School is');
console.log(middleWord('Hello my name is Zach') === 'name');