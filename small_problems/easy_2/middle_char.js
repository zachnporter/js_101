/*
Write a function that takes a non-empty string argument and returns the
middle character(s) of the string. If the string has an odd length, you
should return exactly one character. If the string has an even length,
you should return exactly two characters.
*/

function centerOf(string) {
  let middleChars;

  if (string.length % 2 === 1) {
    let middleIdx = (string.length - 1) / 2;
    middleChars = string[middleIdx];
  } else if (string.length % 2 === 0) {
    let middleIdx = (string.length / 2) - 1;
    middleChars = string.slice(middleIdx, middleIdx + 2);
  }

  return middleChars;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"